describe 'is types', ->

  describe 'isFunction', ->
    isFunction = yaks.UTILS.is.Function

    it 'should return false for undefined variables', ->
      expect(isFunction(undefined)).toBe(false)
    it 'should return false for strings', ->
      expect(isFunction('boom')).toBe(false)
    it 'should return false for arrays', ->
      expect(isFunction([1,2,3])).toBe(false)
    it 'should return false for a element', ->
      el = document.createElement('div')
      expect(isFunction(el)).toBe(false)
    it 'should return true for a function', ->
      funk = -> ""
      expect(isFunction(funk)).toBe(true)

