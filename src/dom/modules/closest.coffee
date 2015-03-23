#
# Find the clostest element of type 
# 
# @example
#   closest(myElement, 'div')
#
# @param [Element] el The element to start search from
# @param [String] tagname Name of tag to search for
#
module.exports = closest = (el, tagname) ->
  tagname = tagname.toLowerCase()
  loop
    if el.nodeName.toLowerCase() == tagname
      return el
    unless el = el.parentNode
      break
  null
