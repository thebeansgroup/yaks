# Module Dependencies
hasClass        = require './has_class.js'

#
# Remove a class from an element
#
# @example
#   removeClass(document.body, 'class-name');
#
# @param [Element]  el the element to add class
# @param [String]   className name of the class
#
module.exports = removeClass = (el, className) ->
  return false unless hasClass(el, className)

  classes = " #{el.className.replace(/[\t\r\n]/g, " ")} "
  while classes.indexOf(" #{className} ") >= 0
    classes = classes.replace(" #{className} ", " ")
  el.className = classes.replace(/^\s+|\s+$/g, "")
  