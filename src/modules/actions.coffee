pubsub = require('../utils/pubsub.js')
isFunction = require('../utils/isType.js').Function
plugin = require('./plugin.js')

# Actions module for DOM function binding
#
class Actions

  ACTIVE_ELEMENT: 'data-yaks-action-active'
  TYPE: 'data-yaks-action-type'

  _actions = {}

  # Constructor 
  #
  constructor: () ->
    pubsub.subscribe 'load', @findActions.bind(@)
    pubsub.subscribe 'new_content', @findActions.bind(@)

  # Register Action
  #
  # @param [String] name Action name (or type)
  # @param [Function] action Action function
  #
  registerAction: (name, action) -> 
    _actions[name] = action if isFunction(action)

  # Find action in DOM
  #
  findActions: ->
    @_fireAction(action) for action in document.querySelectorAll("[#{@ACTIVE_ELEMENT}]")

  # Subscribe actions to PubSub
  #
  # @param [Element] el Action element
  #
  _fireAction: (el) ->
    types = el.getAttribute(@TYPE)
    return false unless types?
    _actions[type](el) for type in types.split('|') when _actions[type]?
    el.removeAttribute @ACTIVE_ELEMENT

  # Expose a clone of the actions for testing
  #
  _getActions: ()-> 

module.exports = a = new Actions()
