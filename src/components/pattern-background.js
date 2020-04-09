import Widget from './widget';
import $ from 'jquery';
import _ from 'lodash';

class PatternBackground extends Widget {
  constructor($el, $container) {
    super($el, $container);

    this.canvas = this.$el.find('canvas');
    this.context = this.canvas[0].getContext('2d');

    this.image = new Image();
    this.image.src = this.$el.data('image');

    this.reset();
    this.getParameters();
    this.eventHandlers();
  }

  static widgetName() {
    return 'pattern-background';
  }

  getParameters() {
    this.expand = true;
    this.follow = true;
    this.move = true;

    if (!this.follow && !this.move) {
      this.active = false;
    }
  }

  reset() {
    this.canvasWidth = $(window).width();
    this.canvasHeight = $(window).height();
    this.canvas[0].width = this.canvasWidth;
    this.canvas[0].height = this.canvasHeight;

    this.active = true;

    this.addWidth = 0;
    this.addHeight = 0;
  }

  eventHandlers() {
    if (this.follow) {
      this.on('body', 'mousemove', (e) => this.mouseMove(e), false);
    }

    this.on(window, 'resize', _.debounce(() => this.resize(), 500), false);

    this.on(this.image, 'load', () => {
      this.populateImageArray();
      window.requestAnimationFrame(() => this.draw());
    }, false);
  }

  resize() {
    console.log('resize');
    this.reset();
    this.populateImageArray();
  }

  populateImageArray() {
    this.images = [];

    for (var w = -100; w < this.canvasWidth + 100; w += this.image.width) {
      for (var h = -100; h < this.canvasHeight + 100; h += this.image.height) {
        this.images.push({
          w: w,
          h: h
        })
      }
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    if (this.move) {
      this.addWidth += 1;
      this.addHeight += 1;
    }

    this.images.forEach((img) => {
      var w = img.w + this.addWidth;
      var h = img.h + this.addHeight;
      var width = this.image.width;
      var height = this.image.height;

      if (this.follow) {
        var targetX = this.cursorX - w;
        var targetY = this.cursorY - h;
        var rotation = Math.atan2(targetY, targetX);
      } else {
        rotation = 0;
      }

      if (this.expand) {
        width += 50;
        height += 50;
      }

      this.drawRotatedImage(this.image, w, h, width, height, rotation);
    });

    // Reset addWidth or addHeight when they become larger then the image
    if (this.addWidth > this.image.width) {
      this.addWidth = 0;
    }

    if (this.addHeight > this.image.height) {
      this.addHeight = 0;
    }

    if (this.active) {
      window.requestAnimationFrame(() => this.draw());
    }
  }

  drawRotatedImage(image, x, y, width, height, angle) {
    // move to the middle of where we want to draw our image
    this.context.translate(x, y);

    // rotate around that point
    this.context.rotate(angle);

    // draw it up and to the left by half the width
    // and height of the image
    this.context.drawImage(image, -(width / 2), -(height / 2));

    // and restore the co-ords to how they were when we began
    this.context.rotate(-angle);
    this.context.translate(-x, -y);
  }

  mouseMove(e) {
    this.cursorX = e.pageX;
    this.cursorY = e.pageY - $(document).scrollTop();
  }

  destroy() {
    this.active = false;

    super.destroy();
  }
}


export default PatternBackground;
