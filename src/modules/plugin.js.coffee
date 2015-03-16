isFunction = require('../utils/isType.js.coffee').Function

# Base class for all plugins
#
class Plugin

  LIFECYCLE_METHODS:  ['init', 'events', 'action']
  # Constructor for all plugins
  #
  # @param [Element] el Element on page to bind plugin to
  #
  constructor: (@el)->
    @__autobind()
    for method in @LIFECYCLE_METHODS
      @[method]?()

    @

  # Auto bind plugin methods to @
  #
  __autobind: ->
    that = @
    isBindable = (method) -> (method isnt '__autobind' and that.LIFECYCLE_METHODS.indexOf(method) is -1 and isFunction(that[method]) is true)
    bind = (method)->
      bound = -> arguments.callee._inherited.apply that, arguments
      bound._inherited = that[method]
      that[method] = bound
    bind(method) for method of @ when isBindable(method)



# Plugin Factory
#
class YaksPlugin

  # Create method
  #
  # @param [Object] methods new prototype methods for new class
  # @option methods [Function] init   Function to initalise plugin
  # @option methods [Function] events Function for UI event setup
  # @option methods [Function] action Function for UI actions
  # @return [Function] initalise the plugin with the element
  #
  create: (methods)->
    plugin = 
    (el)->  
      klass = _createNewClass(methods)
      new klass(el)

  # Create class by mixing new methods with defined plugin
  #
  # @private
  #
  # @param [Object] methods passed from create method
  #
  _createNewClass = (methods)->
    hasProp = {}.hasOwnProperty
    yaksPlugin = ()->  @constructor.apply(this, arguments)
    yaksPlugin.prototype = Plugin.prototype
    for key, fn of methods
      yaksPlugin.prototype[key] = fn unless hasProp.call(yaksPlugin.prototype, key)
    yaksPlugin

module.exports = new YaksPlugin()