# PubSub base class
#
class PubSub

  # Construct a new PubSub instance.
  #
  # @param [Object] subscriptions container - exposed for testing
  #
  constructor: (@_subscriptions = {}) ->

  # Subscribe to a message/event
  #
  # @example Subscribe to an event
  #   yaks.subscribe 'message_name', -> alert('boom')
  #
  # @param [String] message key/name
  # @param [Function] callback to be fired
  #
  subscribe: (key, cb)->
    (cbs = (@_subscriptions[key] || [])).push(cb)
    @_subscriptions[key] = cbs
    this

  # Check to see if there are subscriptions 
  #
  # @param [String] message key/name
  #
  isSubscribed: (key)->
    return Boolean(@_getMatches(key)[0].length)

  # Unsubscribe to a message/event
  #
  # @example Unsubscribe to an event
  #   yaks.unsubscribe 'message_name'
  #
  # @param [String] message key/name
  #
  unsubscribe: (key)->
    @_removeFromObject(found_key) for found_key in @_getMatches(key)[0]

  # Publsh a message/event
  #
  # @example Publish an event and data
  #   yaks.publish 'message_name', [ 101, 'boom' ]
  # 
  # @param [String] message key/name
  # @param [Array] list of data
  #
  publish: (key, args = [])->
    matches = @_getMatches(key)
    return false unless matches[0].length
    args = if args.constructor is Array then args else [args]
    for subs in matches[1]
      sub.apply(sub, args) for sub in subs
    this

  # Get matches 
  #
  # @param [String] message key/name
  # @return [Array] Lists of keys and callbacks
  # 
  _getMatches: (key)->
    keys = []
    matches = []
    for subKey, cb of @_subscriptions when @_isMatch(key, subKey)
      keys.push subKey
      matches.push cb
    [keys, matches]

  # Match search key with saved key (allows for wildcard search)
  #
  # @param [String] message key/name
  #
  _isMatch: (subKey, _subKey) ->
    sub1Array = _subKey.split('.')
    sub2Array = subKey.split('.')
    sub1Bitmask = ''
    sub2Bitmask = ''
    longerMessageLength = if sub1Array.length >= sub2Array.length then sub1Array.length else sub2Array.length

    return true if _subKey is subKey
    return false if sub1Array.length != sub2Array.length

    i = 0
    while i < longerMessageLength
      return false if sub1Array[i] != '*' and sub2Array[i] != '*' and sub1Array[i] != sub2Array[i]
      sub1Bitmask += if sub1Array[i] == '*' then '0' else '1'
      sub2Bitmask += if sub2Array[i] == '*' then '0' else '1'
      i++

    sub1Bitmask >= sub2Bitmask

  # Safely remove item from subscriptions object 
  #
  # @param [String] message key/name
  # 
  _removeFromObject: (key)->
    try
      delete @_subscriptions[key]
    catch error
      @_subscriptions[key] = undefined

module.exports = new PubSub()