hasClass = require './has_class.js.coffee'

#
# Adds a new class to an element
#
# @example
#   addClass(document.body, 'class-name');
#
# @param [Element]  el the element to add class
# @param [String]   className name of the class

module.exports = addClass = (el, className) ->
  el.className += " #{className}" unless hasClass(el, className)