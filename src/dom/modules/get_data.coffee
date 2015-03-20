#
# Get all data attributes from an element
#
# @example
#   getData(el)
#
# @param [Element]  el the element to get data from
#
module.exports = getData = (el) ->
  data = {}
  for attr in el.attributes
    data[attr.name] = attr.value  if /^data-/.test(attr.name)
  return data
