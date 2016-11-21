pubsub    = require('./pubsub.js')
canUseDOM = require('./canUseDOM.js')

bruteTimeoutCount = 0

# Normalising Global events and passing them
# To PubSub
#
class GlobalEvents
  constructor: ->
    if canUseDOM
      @ready = @ready.bind(@)
      @ready()
      @resize()
      @scroll()

  # Window/Document ready
  #
  ready: ->
    if document.readyState is 'complete'
      @_ready_completed()
    else
      # Brute force - https://goo.gl/SsAhv
      bruteTimeoutCount++
      setTimeout(@ready, 1000) if bruteTimeoutCount < 25

  # Remove event and publish load event once fired
  #
  _ready_completed: ->
    pubsub.publish 'load'

  # Listen to browser resize and pass to pubsub
  #
  resize: ->
    @resizeTimer = null
    window.addEventListener 'onresize', @_resize_handler.bind(@)
    window.addEventListener 'resize', @_resize_handler.bind(@)

  # Do not fire all the resize events as will slow down plugins
  #
  _resize_handler: ->
    if @resizeTimer then clearTimeout @resizeTimer
    @resizeTimer = setTimeout @_resize_fire.bind(@), 400

  # Publish resize event
  #
  _resize_fire: ->
    pubsub.publish 'resize', @_resize_get_breakpoint_name()

  # Get CSS breakpoint name for resize
  #
  _resize_get_breakpoint_name: ->
    if not window.getComputedStyle? then return ''
    window.getComputedStyle(document.body,':after').getPropertyValue('content').replace('-','') || ''

  # Scroll event to pubsub
  #
  scroll: ->
    @scrollTimer = null
    window.addEventListener 'onscroll', @_scroll_handler.bind(@)
    window.addEventListener 'scroll', @_scroll_handler.bind(@)

  # Do not fire all the scroll events as will slow down plugins
  #
  _scroll_handler: ->
    if @scrollTimer then clearTimeout @scrollTimer
    @scrollTimer = setTimeout @_scroll_fire.bind(@), 200

  # Publish scroll event
  #
  _scroll_fire: ->
    pubsub.publish 'scroll'


module.exports = new GlobalEvents()
