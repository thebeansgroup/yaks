// Generated by CoffeeScript 1.11.1
(function() {
  var GlobalEvents, bruteTimeoutCount, canUseDOM, pubsub;

  pubsub = require('./pubsub.js');

  canUseDOM = require('./canUseDOM.js');

  bruteTimeoutCount = 0;

  GlobalEvents = (function() {
    function GlobalEvents() {
      if (canUseDOM) {
        this.ready = this.ready.bind(this);
        this.ready();
        this.resize();
        this.scroll();
      }
    }

    GlobalEvents.prototype.ready = function() {
      if (document.readyState === 'complete') {
        return this._ready_completed();
      } else {
        bruteTimeoutCount++;
        if (bruteTimeoutCount < 25) {
          return setTimeout(this.ready, 1000);
        }
      }
    };

    GlobalEvents.prototype._ready_completed = function() {
      return pubsub.publish('load');
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

}).call(this);
