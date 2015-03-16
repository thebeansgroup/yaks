(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/st/src/yaks/src/dom/index.js.coffee":[function(require,module,exports){
var _;

_ = module.exports;

_.addClass = require('./modules/add_class.js.coffee');

_.hasClass = require('./modules/has_class.js.coffee');

_.removeClass = require('./modules/remove_class.js.coffee');

_.toggleClass = require('./modules/toggle_class.js.coffee');



},{"./modules/add_class.js.coffee":"/Users/st/src/yaks/src/dom/modules/add_class.js.coffee","./modules/has_class.js.coffee":"/Users/st/src/yaks/src/dom/modules/has_class.js.coffee","./modules/remove_class.js.coffee":"/Users/st/src/yaks/src/dom/modules/remove_class.js.coffee","./modules/toggle_class.js.coffee":"/Users/st/src/yaks/src/dom/modules/toggle_class.js.coffee"}],"/Users/st/src/yaks/src/dom/modules/add_class.js.coffee":[function(require,module,exports){
var addClass, hasClass;

hasClass = require('./has_class.js.coffee');

module.exports = addClass = function(el, className) {
  if (!hasClass(el, className)) {
    return el.className += " " + className;
  }
};



},{"./has_class.js.coffee":"/Users/st/src/yaks/src/dom/modules/has_class.js.coffee"}],"/Users/st/src/yaks/src/dom/modules/has_class.js.coffee":[function(require,module,exports){
var hasClass;

module.exports = hasClass = function(el, className) {
  return new RegExp(" " + className + " ").test(" " + el.className + " ");
};



},{}],"/Users/st/src/yaks/src/dom/modules/remove_class.js.coffee":[function(require,module,exports){
var hasClass, removeClass;

hasClass = require('./has_class.js.coffee');

module.exports = removeClass = function(el, className) {
  var classes;
  if (!hasClass(el, className)) {
    return false;
  }
  classes = " " + (el.className.replace(/[\t\r\n]/g, " ")) + " ";
  while (classes.indexOf(" " + className + " ") >= 0) {
    classes = classes.replace(" " + className + " ", " ");
  }
  return el.className = classes.replace(/^\s+|\s+$/g, "");
};



},{"./has_class.js.coffee":"/Users/st/src/yaks/src/dom/modules/has_class.js.coffee"}],"/Users/st/src/yaks/src/dom/modules/toggle_class.js.coffee":[function(require,module,exports){
var addClass, hasClass, removeClass, toggleClass;

hasClass = require('./has_class.js.coffee');

addClass = require('./add_class.js.coffee');

removeClass = require('./remove_class.js.coffee');

module.exports = toggleClass = function(el, className) {
  if (hasClass(el, className)) {
    return removeClass(el, className);
  } else {
    return addClass(el, className);
  }
};



},{"./add_class.js.coffee":"/Users/st/src/yaks/src/dom/modules/add_class.js.coffee","./has_class.js.coffee":"/Users/st/src/yaks/src/dom/modules/has_class.js.coffee","./remove_class.js.coffee":"/Users/st/src/yaks/src/dom/modules/remove_class.js.coffee"}],"/Users/st/src/yaks/src/index.js.coffee":[function(require,module,exports){
var yaks;

yaks = {
  DOM: require('./dom/index.js.coffee'),
  modules: require('./modules/index.js.coffee'),
  UTILS: require('./utils/index.js.coffee'),
  registerAction: require('./modules/actions.js.coffee').registerAction
};

window.yaks = yaks;

module.exports = yaks;



},{"./dom/index.js.coffee":"/Users/st/src/yaks/src/dom/index.js.coffee","./modules/actions.js.coffee":"/Users/st/src/yaks/src/modules/actions.js.coffee","./modules/index.js.coffee":"/Users/st/src/yaks/src/modules/index.js.coffee","./utils/index.js.coffee":"/Users/st/src/yaks/src/utils/index.js.coffee"}],"/Users/st/src/yaks/src/modules/actions.js.coffee":[function(require,module,exports){
var Actions, a, isFunction, plugin, pubsub;

pubsub = require('../utils/pubsub.js.coffee');

isFunction = require('../utils/isType.js.coffee').Function;

plugin = require('./plugin.js.coffee');

Actions = (function() {
  var _actions;

  Actions.prototype.ACTIVE_ELEMENT = 'data-yaks-action-active';

  Actions.prototype.TYPE = 'data-yaks-action-type';

  _actions = {};

  function Actions() {
    pubsub.subscribe('load', this.findActions.bind(this));
    pubsub.subscribe('new_content', this.findActions.bind(this));
  }

  Actions.prototype.registerAction = function(name, action) {
    if (isFunction(action)) {
      return _actions[name] = action;
    }
  };

  Actions.prototype.findActions = function() {
    var action, i, len, ref, results;
    ref = document.querySelectorAll("[" + this.ACTIVE_ELEMENT + "]");
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      action = ref[i];
      results.push(this._fireAction(action));
    }
    return results;
  };

  Actions.prototype._fireAction = function(el) {
    var type;
    type = el.getAttribute(this.TYPE);
    if (_actions[type] == null) {
      return false;
    }
    _actions[type](el);
    return el.removeAttribute(this.ACTIVE_ELEMENT);
  };

  Actions.prototype._getActions = function() {
    return Object.create(_actions);
  };

  return Actions;

})();

module.exports = a = new Actions();



},{"../utils/isType.js.coffee":"/Users/st/src/yaks/src/utils/isType.js.coffee","../utils/pubsub.js.coffee":"/Users/st/src/yaks/src/utils/pubsub.js.coffee","./plugin.js.coffee":"/Users/st/src/yaks/src/modules/plugin.js.coffee"}],"/Users/st/src/yaks/src/modules/index.js.coffee":[function(require,module,exports){
var modules;

modules = module.exports;

modules.actions = require('./actions.js.coffee');

modules.plugin = require('./plugin.js.coffee');



},{"./actions.js.coffee":"/Users/st/src/yaks/src/modules/actions.js.coffee","./plugin.js.coffee":"/Users/st/src/yaks/src/modules/plugin.js.coffee"}],"/Users/st/src/yaks/src/modules/plugin.js.coffee":[function(require,module,exports){
var Plugin, YaksPlugin, isFunction;

isFunction = require('../utils/isType.js.coffee').Function;

Plugin = (function() {
  Plugin.prototype.LIFECYCLE_METHODS = ['init', 'events', 'action'];

  function Plugin(el1) {
    var i, len, method, ref;
    this.el = el1;
    this.__autobind();
    ref = this.LIFECYCLE_METHODS;
    for (i = 0, len = ref.length; i < len; i++) {
      method = ref[i];
      if (typeof this[method] === "function") {
        this[method]();
      }
    }
    this;
  }

  Plugin.prototype.__autobind = function() {
    var bind, isBindable, method, results, that;
    that = this;
    isBindable = function(method) {
      return method !== '__autobind' && that.LIFECYCLE_METHODS.indexOf(method) === -1 && isFunction(that[method]) === true;
    };
    bind = function(method) {
      var bound;
      bound = function() {
        return arguments.callee._inherited.apply(that, arguments);
      };
      bound._inherited = that[method];
      return that[method] = bound;
    };
    results = [];
    for (method in this) {
      if (isBindable(method)) {
        results.push(bind(method));
      }
    }
    return results;
  };

  return Plugin;

})();

YaksPlugin = (function() {
  var _createNewClass;

  function YaksPlugin() {}

  YaksPlugin.prototype.create = function(methods) {
    var plugin;
    return plugin = function(el) {
      var klass;
      klass = _createNewClass(methods);
      return new klass(el);
    };
  };

  _createNewClass = function(methods) {
    var fn, hasProp, key, yaksPlugin;
    hasProp = {}.hasOwnProperty;
    yaksPlugin = function() {
      return this.constructor.apply(this, arguments);
    };
    yaksPlugin.prototype = Plugin.prototype;
    for (key in methods) {
      fn = methods[key];
      if (!hasProp.call(yaksPlugin.prototype, key)) {
        yaksPlugin.prototype[key] = fn;
      }
    }
    return yaksPlugin;
  };

  return YaksPlugin;

})();

module.exports = new YaksPlugin();



},{"../utils/isType.js.coffee":"/Users/st/src/yaks/src/utils/isType.js.coffee"}],"/Users/st/src/yaks/src/utils/globalEvents.js.coffee":[function(require,module,exports){
var GlobalEvents, pubsub;

pubsub = require('./pubsub.js.coffee');

GlobalEvents = (function() {
  function GlobalEvents() {
    this.ready();
    this.resize();
    this.scroll();
  }

  GlobalEvents.prototype.ready = function() {
    document.addEventListener("DOMContentLoaded", this._ready_completed.bind(this), false);
    return window.addEventListener("load", this._ready_completed.bind(this), false);
  };

  GlobalEvents.prototype._ready_completed = function() {
    pubsub.publish('load');
    document.removeEventListener("DOMContentLoaded", this._ready_completed.bind(this), false);
    return window.removeEventListener("load", this._ready_completed.bind(this), false);
  };

  GlobalEvents.prototype.resize = function() {
    this.resizeTimer = null;
    window.addEventListener('onresize', this._resize_handler.bind(this));
    return window.addEventListener('resize', this._resize_handler.bind(this));
  };

  GlobalEvents.prototype._resize_handler = function() {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
    return this.resizeTimer = setTimeout(this._resize_fire.bind(this), 400);
  };

  GlobalEvents.prototype._resize_fire = function() {
    return pubsub.publish('resize', this._resize_get_breakpoint_name());
  };

  GlobalEvents.prototype._resize_get_breakpoint_name = function() {
    if (window.getComputedStyle == null) {
      return '';
    }
    return window.getComputedStyle(document.body, ':after').getPropertyValue('content').replace('-', '') || '';
  };

  GlobalEvents.prototype.scroll = function() {
    this.scrollTimer = null;
    window.addEventListener('onscroll', this._scroll_handler.bind(this));
    return window.addEventListener('scroll', this._scroll_handler.bind(this));
  };

  GlobalEvents.prototype._scroll_handler = function() {
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
    }
    return this.scrollTimer = setTimeout(this._scroll_fire.bind(this), 200);
  };

  GlobalEvents.prototype._scroll_fire = function() {
    return pubsub.publish('scroll');
  };

  return GlobalEvents;

})();

module.exports = new GlobalEvents();



},{"./pubsub.js.coffee":"/Users/st/src/yaks/src/utils/pubsub.js.coffee"}],"/Users/st/src/yaks/src/utils/index.js.coffee":[function(require,module,exports){
var utils;

utils = module.exports;

utils._globalEvents = require('./globalEvents.js.coffee');

utils.pubsub = require('./pubsub.js.coffee');

utils.is = require('./isType.js.coffee');



},{"./globalEvents.js.coffee":"/Users/st/src/yaks/src/utils/globalEvents.js.coffee","./isType.js.coffee":"/Users/st/src/yaks/src/utils/isType.js.coffee","./pubsub.js.coffee":"/Users/st/src/yaks/src/utils/pubsub.js.coffee"}],"/Users/st/src/yaks/src/utils/isType.js.coffee":[function(require,module,exports){
var IsType;

IsType = (function() {
  function IsType() {}

  IsType.Function = function(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  };

  return IsType;

})();

module.exports = IsType;



},{}],"/Users/st/src/yaks/src/utils/pubsub.js.coffee":[function(require,module,exports){
var PubSub;

PubSub = (function() {
  function PubSub(_subscriptions) {
    this._subscriptions = _subscriptions != null ? _subscriptions : {};
  }

  PubSub.prototype.subscribe = function(key, cb) {
    var cbs;
    (cbs = this._subscriptions[key] || []).push(cb);
    this._subscriptions[key] = cbs;
    return this;
  };

  PubSub.prototype.isSubscribed = function(key) {
    return Boolean(this._getMatches(key)[0].length);
  };

  PubSub.prototype.unsubscribe = function(key) {
    var found_key, j, len, ref, results;
    ref = this._getMatches(key)[0];
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      found_key = ref[j];
      results.push(this._removeFromObject(found_key));
    }
    return results;
  };

  PubSub.prototype.publish = function(key, args) {
    var j, k, len, len1, matches, ref, sub, subs;
    if (args == null) {
      args = [];
    }
    matches = this._getMatches(key);
    if (!matches[0].length) {
      return false;
    }
    args = args.constructor === Array ? args : [args];
    ref = matches[1];
    for (j = 0, len = ref.length; j < len; j++) {
      subs = ref[j];
      for (k = 0, len1 = subs.length; k < len1; k++) {
        sub = subs[k];
        sub.apply(sub, args);
      }
    }
    return this;
  };

  PubSub.prototype._getMatches = function(key) {
    var cb, keys, matches, ref, subKey;
    keys = [];
    matches = [];
    ref = this._subscriptions;
    for (subKey in ref) {
      cb = ref[subKey];
      if (!(this._isMatch(key, subKey))) {
        continue;
      }
      keys.push(subKey);
      matches.push(cb);
    }
    return [keys, matches];
  };

  PubSub.prototype._isMatch = function(subKey, _subKey) {
    var i, longerMessageLength, sub1Array, sub1Bitmask, sub2Array, sub2Bitmask;
    sub1Array = _subKey.split('.');
    sub2Array = subKey.split('.');
    sub1Bitmask = '';
    sub2Bitmask = '';
    longerMessageLength = sub1Array.length >= sub2Array.length ? sub1Array.length : sub2Array.length;
    if (_subKey === subKey) {
      return true;
    }
    if (sub1Array.length !== sub2Array.length) {
      return false;
    }
    i = 0;
    while (i < longerMessageLength) {
      if (sub1Array[i] !== '*' && sub2Array[i] !== '*' && sub1Array[i] !== sub2Array[i]) {
        return false;
      }
      sub1Bitmask += sub1Array[i] === '*' ? '0' : '1';
      sub2Bitmask += sub2Array[i] === '*' ? '0' : '1';
      i++;
    }
    return sub1Bitmask >= sub2Bitmask;
  };

  PubSub.prototype._removeFromObject = function(key) {
    var error;
    try {
      return delete this._subscriptions[key];
    } catch (_error) {
      error = _error;
      return this._subscriptions[key] = void 0;
    }
  };

  return PubSub;

})();

module.exports = new PubSub();



},{}]},{},["/Users/st/src/yaks/src/dom/index.js.coffee","/Users/st/src/yaks/src/dom/modules/add_class.js.coffee","/Users/st/src/yaks/src/dom/modules/has_class.js.coffee","/Users/st/src/yaks/src/index.js.coffee","/Users/st/src/yaks/src/modules/index.js.coffee","/Users/st/src/yaks/src/utils/index.js.coffee"]);
