pubsub = require('../utils/pubsub.js')
isFunction = require('../utils/isType.js').Function
plugin = require('./plugin.js')
canUseDOM = require('../utils/canUseDOM.js')

ACTIVE_ELEMENT = 'data-yaks-action-active'
TYPE = 'data-yaks-action-type'

# Set namespace to allow for MULTI-YAKS
#
do ->
  namespace = if window.yaks?.nsp? then window.yaks.nsp else "yaks"
  ACTIVE_ELEMENT = "data-#{namespace}-action-active"
  TYPE = "data-#{namespace}-action-type"

# Actions module for DOM function binding
#
class Actions

  _actions = {}

  # Constructor
  #
  constructor: () ->
    @findActions = @findActions.bind(@)
    pubsub.subscribe 'load', @findActions
    pubsub.subscribe 'new_content', @findActions

  # Register Action
  #
  # @param [String] name Action name (or type)
  # @param [Function] action Action function
  #
  registerAction: (name, action) ->
    _actions[name] = action if isFunction(action)
    @findActions()

  # Find action in DOM
  #
  findActions: ->
    @_fireAction(action) for action in document.querySelectorAll("[#{ACTIVE_ELEMENT}]") if canUseDOM

  # Subscribe actions to PubSub
  #
  # @param [Element] el Action element
  #
  _fireAction: (el) ->
    types = el.getAttribute(TYPE)
    return false unless types?
    for type in types.split('|') when _actions[type]?
      _actions[type](el)
      @_removeActionTrigger(el, type, types.split('|'))

  _removeActionTrigger: (el, type, types) ->
    index = types.indexOf(type)
    types.splice(index, 1)
    if types.length
      el.setAttribute(TYPE, types.join('|'))
    else
      el.removeAttribute ACTIVE_ELEMENT

  # Expose a clone of the actions for testing
  #
  _getActions: ()-> Object.create(_actions)

  # Expose active element for testing
  #
  _getActiveElement: () -> ACTIVE_ELEMENT


module.exports = a = new Actions()
