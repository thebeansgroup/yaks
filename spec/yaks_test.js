(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var div;

div = "<div data-yaks-action-active=true data-yaks-action-type='my_function'></div>";

describe('Actions Module', function() {
  var actions, pubsub;
  actions = window.yaks.modules.actions;
  pubsub = window.yaks.UTILS.pubsub;
  describe('Registering Actions', function() {
    it('should allow scripts to register', function() {
      var fun1, fun2;
      fun1 = function() {
        return "test1";
      };
      fun2 = function() {
        return "test1";
      };
      yaks.registerAction('test', fun1);
      expect(actions._getActions()['test']).toBe(fun1);
      return expect(actions._getActions()['test']).not.toBe(fun2);
    });
    return it('should only register functions', function() {
      yaks.registerAction('test2', {});
      yaks.registerAction('test3', []);
      expect(actions._getActions()['test2']).toBe(void 0);
      return expect(actions._getActions()['test3']).toBe(void 0);
    });
  });
  return describe('Discovering DOM actions', function() {
    var spy;
    spy = jasmine.createSpy('action-spy');
    yaks.registerAction('my_function', spy);
    beforeEach(function() {
      return document.querySelectorAll('#jasmine_content')[0].innerHTML = div;
    });
    afterEach(function() {
      return document.querySelectorAll('#jasmine_content')[0].innerHTML = "";
    });
    it('should fire the action when event is published', function() {
      var el;
      el = document.querySelectorAll("[" + actions.ACTIVE_ELEMENT + "]")[0];
      pubsub.publish('new_content');
      return expect(spy).toHaveBeenCalledWith(el);
    });
    return it('should deactivate triggers once processed', function() {
      var el, el_after;
      el = document.querySelectorAll("[" + actions.ACTIVE_ELEMENT + "]");
      expect(el.length).not.toBe(0);
      pubsub.publish('new_content');
      el_after = document.querySelectorAll("[" + actions.ACTIVE_ELEMENT + "]");
      return expect(el_after.length).toBe(0);
    });
  });
});



},{}],2:[function(require,module,exports){
describe('is types', function() {
  return describe('isFunction', function() {
    var isFunction;
    isFunction = yaks.UTILS.is.Function;
    it('should return false for undefined variables', function() {
      return expect(isFunction(void 0)).toBe(false);
    });
    it('should return false for strings', function() {
      return expect(isFunction('boom')).toBe(false);
    });
    it('should return false for arrays', function() {
      return expect(isFunction([1, 2, 3])).toBe(false);
    });
    it('should return false for a element', function() {
      var el;
      el = document.createElement('div');
      return expect(isFunction(el)).toBe(false);
    });
    return it('should return true for a function', function() {
      var funk;
      funk = function() {
        return "";
      };
      return expect(isFunction(funk)).toBe(true);
    });
  });
});



},{}],3:[function(require,module,exports){
describe('PubSub Module', function() {
  var pubsub;
  pubsub = window.yaks.UTILS.pubsub;
  describe('subscribe', function() {
    it('should add subscriptions to the object', function() {
      pubsub.subscribe("event", function() {
        return "";
      });
      return expect(pubsub._subscriptions["event"].length).toEqual(1);
    });
    return it('should not overwrite subscriptions if key is called multiple times', function() {
      pubsub.subscribe("event", function() {
        return "";
      });
      pubsub.subscribe("event", function() {
        return "";
      });
      return expect(pubsub._subscriptions['event'].length).toEqual(3);
    });
  });
  describe('isSubscribed', function() {
    beforeEach(function() {
      return pubsub._subscriptions = {};
    });
    it('should return false if an event has not been subscribed', function() {
      var fun;
      fun = function() {
        return "";
      };
      pubsub.subscribe("event", fun);
      return expect(pubsub.isSubscribed('event2')).toBe(false);
    });
    return it('should return true if an event has been subscribed', function() {
      var fun;
      fun = function() {
        return "";
      };
      pubsub.subscribe("event", fun);
      return expect(pubsub.isSubscribed('event')).toBe(true);
    });
  });
  describe('unsubscribe', function() {
    beforeEach(function() {
      return pubsub._subscriptions = {};
    });
    it('should not error if removing a non existant subscription', function() {
      var fun;
      fun = function() {
        return pubsub.unsubscribe('event');
      };
      return expect(fun).not.toThrow();
    });
    return it('should remove subscription fine', function() {
      var fun;
      fun = function() {
        return "";
      };
      pubsub.subscribe("event", fun);
      expect(pubsub.isSubscribed('event', fun)).toBe(true);
      pubsub.unsubscribe("event");
      return expect(pubsub.isSubscribed('event', fun)).toBe(false);
    });
  });
  describe('publish', function() {
    it('should fire the callback', function() {
      var spy1, spy2;
      spy1 = jasmine.createSpy('spy');
      spy2 = jasmine.createSpy('spy');
      pubsub.subscribe("click", spy1);
      pubsub.subscribe("change", spy2);
      pubsub.publish('click');
      expect(spy1).toHaveBeenCalled();
      return expect(spy2).not.toHaveBeenCalled();
    });
    return it('should send any extra data through with the callback', function() {
      var spy1;
      spy1 = jasmine.createSpy('spy');
      pubsub.subscribe("click", spy1);
      pubsub.publish('click', [456, 'another param']);
      return expect(spy1).toHaveBeenCalledWith(456, 'another param');
    });
  });
  return describe('namespaced events', function() {
    beforeEach(function() {
      return pubsub._subscriptions = {};
    });
    return it('should namespace events with period seperation notation', function() {
      var spy1, spy2, spy3, spy4, spy5;
      spy1 = jasmine.createSpy('spy1');
      spy2 = jasmine.createSpy('spy2');
      spy3 = jasmine.createSpy('spy3');
      spy4 = jasmine.createSpy('spy4');
      spy5 = jasmine.createSpy('spy5');
      pubsub.subscribe("click.namespace", spy1);
      pubsub.subscribe("click.namespace1.a", spy2);
      pubsub.subscribe("click.namespace1.b", spy3);
      pubsub.subscribe("click.namespace2.a", spy4);
      pubsub.subscribe("click.namespace2.b", spy5);
      pubsub.publish('click.*');
      expect(spy1).toHaveBeenCalled();
      expect(spy2).not.toHaveBeenCalled();
      pubsub.publish('click.*.a');
      expect(spy2).toHaveBeenCalled();
      expect(spy3).not.toHaveBeenCalled();
      expect(spy4).toHaveBeenCalled();
      pubsub.publish('*.namespace2.*');
      return expect(spy5).toHaveBeenCalled();
    });
  });
});



},{}]},{},[1,2,3]);
