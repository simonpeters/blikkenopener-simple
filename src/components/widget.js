import $ from 'jquery';

class Widget {
  constructor($el, $container) {
    this.$el = $el;
    this.$container = $container;
    this.domEvents = [];
  }

  on(element, event, cb, onEl = true) {
    if (onEl) {
      this.$el.find(element).on(event, cb);
    } else {
      $(element).on(event, cb);
    }

    this.domEvents.push({
      element: element,
      event: event,
      cb: cb,
      onEl: onEl
    })
  }

  destroy() {
    this.domEvents.forEach((e) => {
      if (e.onEl) {
        this.$el.find(e.element).off(e.event, e.cb);
      } else {
        $(e.element).off(e.event, e.cb);
      }
    });
  }
}

export default Widget;
