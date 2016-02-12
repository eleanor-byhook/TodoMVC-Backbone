'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var footerTemplate = require('./footer.html');
var todoList = require('./../../collections/todo.js');
var Todo = require('./../todo/todo.js');

var TodoList = Backbone.View.extend({

  el: '#footer',

  template: _.template(footerTemplate()),

  initialize: function () {
    this.render();
  },

  events: {
    'click a': 'select',
    'blur a': 'deselect'
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
    this.$el.html(this.template());

  }
});

module.exports = TodoList;
