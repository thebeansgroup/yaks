div = "<div data-yaks-action-active=true data-yaks-action-type='my_function'></div>"

describe 'Actions Module', ->
  actions = window.yaks.modules.actions
  pubsub = window.yaks.UTILS.pubsub

  describe 'Registering Actions', ->
    it 'should allow scripts to register', ->
      fun1 = -> "test1"
      fun2 = -> "test1"
      yaks.registerAction 'test', fun1
      expect(actions._getActions()['test']).toBe(fun1)
      expect(actions._getActions()['test']).not.toBe(fun2)

    it 'should only register functions', ->
      yaks.registerAction 'test2', {}
      yaks.registerAction 'test3', []
      expect(actions._getActions()['test2']).toBe(undefined)
      expect(actions._getActions()['test3']).toBe(undefined)

  describe 'Discovering DOM actions', ->
    spy = jasmine.createSpy('action-spy')
    yaks.registerAction 'my_function', spy

    beforeEach ->
      document.querySelectorAll('#jasmine_content')[0].innerHTML = div
      
    afterEach ->
      document.querySelectorAll('#jasmine_content')[0].innerHTML = ""

    it 'should fire the action when event is published', ->
      el = document.querySelectorAll("[#{actions.ACTIVE_ELEMENT}]")[0]
      pubsub.publish('new_content')
      expect(spy).toHaveBeenCalledWith(el)
    
    it 'should deactivate triggers once processed', ->
      el = document.querySelectorAll("[#{actions.ACTIVE_ELEMENT}]")
      expect(el.length).not.toBe(0)
      pubsub.publish('new_content')
      el_after = document.querySelectorAll("[#{actions.ACTIVE_ELEMENT}]")
      expect(el_after.length).toBe(0)
