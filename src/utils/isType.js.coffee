class IsType
  @Function: (obj)-> ! !(obj and obj.constructor and obj.call and obj.apply)

module.exports = IsType