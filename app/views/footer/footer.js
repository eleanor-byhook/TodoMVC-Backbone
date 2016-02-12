'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var footerTemplate = require('./footer.html');
var TodoCollection = require('./../../collections/todo.js');

var Footer = Backbone.View.extend({

  el: '#footer',

  template: _.template(footerTemplate()),

  initialize: function () {
    console.log('model: ' + JSON.stringify(this.model));
    this.remainingCount = TodoCollection.remaining().length;
    TodoCollection.on('change', this.updateCount, this);
    this.render();
  },

  events: {
    'click a': 'select',
    'blur a': 'deselect'
  },

  updateCount: function() {
    console.log('called');
    this.remainingCount = TodoCollection.remaining().length;
    this.render();
  },

  select: function(e) {
    this.$(e.target).addClass('selected');
    this.$(e.target).focus();
  },

  deselect: function(e) {
    this.$(e.target).removeClass('selected');
    this.$(e.target).blur();
  },

  render: function () {
    this.$el.html(this.template({
      count: this.remainingCount
    }));

  }
});

module.exports = Footer;
