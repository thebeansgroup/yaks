// Generated by CoffeeScript 1.9.1
(function() {
  var Plugin, YaksPlugin, isFunction;

  isFunction = require('../utils/isType.js').Function;

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
      yaksPlugin.prototype = Object.create(Plugin.prototype);
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

}).call(this);