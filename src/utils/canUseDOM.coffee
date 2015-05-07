#
# Checks if DOM is available
#
# @example
#   if canUseDOM
#
# @return [Boolean]
#
module.exports = canUseDOM = !!(
  typeof window != 'undefined' and
  window.document and
  window.document.createElement
)
