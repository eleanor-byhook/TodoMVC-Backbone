'use strict';

var Backbone = require('backbone');
var _ = require('underscore');

var header = require('./header.html');

var Header = Backbone.View.extend({

  el: '#header',

  initialize: function () {
    this.render();
  },

  render: function () {

    this.$el.html(_.template(header())({
      data: {
        name: 'todos'
      }
    }));

  }
});

module.exports = Header;
window.app = new Header();
