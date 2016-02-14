'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
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
    TodoCollection.on('reset', this.setFilter, this);
  },

  events: {
    'click a': 'select',
    'click input[type="button"]': 'clearCompleted'
  },

  updateCount: function() {
    this.remainingCount = TodoCollection.remaining().length;
    this.total = TodoCollection.total().length;
    this.setFilter();
    this.render();
  },

  setFilter: function() {
    var filter = window.filter || '';
    this.$('#todo-footer .filters li a')
        .removeClass('selected')
        .filter('[href="#/' + filter + '"]')
        .addClass('selected');
  },

  select: function(e) {
    this.$('#todo-footer .filters li a')
    .removeClass('selected');
    this.$(e.target).addClass('selected');
  },

  clearCompleted: function() {
    var completed = TodoCollection.done();
    _.each(completed, function(item) {
      item.destroy();
    });
  },

  render: function () {
    if (this.total > 0) {
      this.$el.html(this.template({
        count: this.remainingCount
      }));
      this.filter = window.filter || '';
      this.setFilter();
    } else {
      this.$el.html('');
    }
  }});

module.exports = Footer;
