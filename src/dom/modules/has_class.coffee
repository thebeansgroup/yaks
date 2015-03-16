#
# Checks if element has class
#
# @example
#   hasClass(document.body, 'class-name');
#
# @param [Element]    el the element to add class
# @param [String]     className name of the class
# @return [Boolean]
#
module.exports = hasClass = (el, className) ->
  new RegExp(" #{className} ").test(" #{el.className} ")