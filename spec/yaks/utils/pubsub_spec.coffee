describe 'PubSub Module', ->
  pubsub = window.yaks.UTILS.pubsub
  describe 'subscribe', ->
    it 'should add subscriptions to the object', ->
      pubsub.subscribe "event", -> ""
      expect(pubsub._subscriptions["event"].length).toEqual 1

    it 'should not overwrite subscriptions if key is called multiple times', ->
      pubsub.subscribe "event", -> ""
      pubsub.subscribe "event", -> ""
      expect(pubsub._subscriptions['event'].length).toEqual 3

  describe 'isSubscribed', ->
    beforeEach ->
      pubsub._subscriptions = {}
    it 'should return false if an event has not been subscribed', ->
      fun = -> ""
      pubsub.subscribe "event", fun
      expect(pubsub.isSubscribed('event2')).toBe(false)

    it 'should return true if an event has been subscribed', ->
      fun = -> ""
      pubsub.subscribe "event", fun
      expect(pubsub.isSubscribed('event')).toBe(true)

  describe 'unsubscribe',  ->
    beforeEach ->
      pubsub._subscriptions = {}

    it 'should not error if removing a non existant subscription', ->
      fun = -> pubsub.unsubscribe('event')
      expect(fun).not.toThrow()

    it 'should remove subscription fine', ->
      fun = -> ""
      pubsub.subscribe "event", fun
      expect(pubsub.isSubscribed('event', fun)).toBe(true)
      pubsub.unsubscribe "event"
      expect(pubsub.isSubscribed('event', fun)).toBe(false)

  describe 'publish', ->
    it 'should fire the callback', ->
      spy1 = jasmine.createSpy('spy')
      spy2 = jasmine.createSpy('spy')
      pubsub.subscribe "click", spy1
      pubsub.subscribe "change", spy2
      pubsub.publish('click')
      expect(spy1).toHaveBeenCalled()
      expect(spy2).not.toHaveBeenCalled()

    it 'should send any extra data through with the callback', ->
      spy1 = jasmine.createSpy('spy')
      pubsub.subscribe "click", spy1
      pubsub.publish('click', [456, 'another param'])
      expect(spy1).toHaveBeenCalledWith(456, 'another param')

  describe 'namespaced events', ->
    beforeEach ->
      pubsub._subscriptions = {}

    it 'should namespace events with period seperation notation', ->
      spy1 = jasmine.createSpy('spy1')
      spy2 = jasmine.createSpy('spy2')
      spy3 = jasmine.createSpy('spy3')
      spy4 = jasmine.createSpy('spy4')
      spy5 = jasmine.createSpy('spy5')
      pubsub.subscribe "click.namespace", spy1
      pubsub.subscribe "click.namespace1.a", spy2
      pubsub.subscribe "click.namespace1.b", spy3
      pubsub.subscribe "click.namespace2.a", spy4
      pubsub.subscribe "click.namespace2.b", spy5

      pubsub.publish('click.*')
      expect(spy1).toHaveBeenCalled()
      expect(spy2).not.toHaveBeenCalled()

      pubsub.publish('click.*.a')
      expect(spy2).toHaveBeenCalled()
      expect(spy3).not.toHaveBeenCalled()
      expect(spy4).toHaveBeenCalled()

      pubsub.publish('*.namespace2.*')
      expect(spy5).toHaveBeenCalled()
