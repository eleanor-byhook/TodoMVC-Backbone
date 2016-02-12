'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var footerTemplate = require('./footer.html');
var TodoCollection = require('./../../collections/todo.js');

var Footer = Backbone.View.extend({

  el: '#footer',

  template: _.template(footerTemplate()),

  initialize: function () {
    this.remainingCount = TodoCollection.remaining().length;
    this.total = TodoCollection.total().length;
    TodoCollection.on('change', this.updateCount, this);
    TodoCollection.on('remove', this.updateCount, this);
  },

  events: {
    'click a': 'select',
    'blur a': 'deselect'
  },

  updateCount: function() {
    this.remainingCount = TodoCollection.remaining().length;
    this.total = TodoCollection.total().length;
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
    if(this.total > 0) {
      this.$el.html(this.template({
        count: this.remainingCount
      }));
    } else {
      this.$el.html('');
    };
  }});

module.exports = Footer;
