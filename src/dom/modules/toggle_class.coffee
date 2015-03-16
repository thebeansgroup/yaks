# Module Dependencies
hasClass        = require './has_class.js'
addClass        = require './add_class.js'
removeClass     = require './remove_class.js'

#
# Toggles a call on an element
#
# @example
#   toggleClassClass(document.body, 'class-name');
#
# @param [Element]  el the element to add class
# @param [String]   className name of the class
#
module.exports = toggleClass = (el, className) ->
  if hasClass(el, className) then removeClass(el, className) else addClass(el, className)