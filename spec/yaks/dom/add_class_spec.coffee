div = "<div id='test'></div>"

describe 'DOM Modules', ->
    dom = window.yaks.DOM

    beforeEach ->
      document.querySelectorAll('#jasmine_content')[0].innerHTML = div

    afterEach ->
      document.querySelectorAll('#jasmine_content')[0].innerHTML = ""

    it 'should add class to element', ->
      el = document.querySelectorAll("#test")[0]
      dom.addClass(el,'test-class')
      expect(dom.hasClass(el, 'test-class')).toBe(true)

