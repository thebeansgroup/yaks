div = "<div id='test'></div>"

describe 'DOM Modules', ->
    dom = window.yaks.DOM
    
    describe 'Classes', ->
        beforeEach ->
          document.querySelectorAll('#jasmine_content')[0].innerHTML = div

        afterEach ->
          document.querySelectorAll('#jasmine_content')[0].innerHTML = ""

        it 'should check if an element has class', ->
            el = document.querySelectorAll("#test")[0]
            expect(dom.hasClass(el, 'test-class')).toBe(false)
            dom.addClass(el,'test-class')
            expect(dom.hasClass(el, 'test-class')).toBe(true)

        it 'should add class to element', ->
            el = document.querySelectorAll("#test")[0]
            dom.addClass(el,'test-class')
            expect(dom.hasClass(el, 'test-class')).toBe(true)

        it 'should remove class from an element', ->
            el = document.querySelectorAll("#test")[0]
            dom.addClass(el,'test-class')
            expect(dom.hasClass(el, 'test-class')).toBe(true)
            dom.removeClass(el,'test-class')
            expect(dom.hasClass(el, 'test-class')).toBe(false)

        it 'should toggle class on an element', ->
            el = document.querySelectorAll("#test")[0]
            hasClass = dom.hasClass(el, 'test-class')
            dom.toggleClass(el,'test-class')
            expect(dom.hasClass(el, 'test-class')).toBe(!hasClass)