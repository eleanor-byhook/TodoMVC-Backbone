'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var todo = require('./todo.html');

var Todo = Backbone.View.extend({

  tagName: 'div',

  template: _.template(todo()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.input = this.$('.edit');
    return this;
  },

  initialize: function () {
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },

  events: {
    'click [type="checkbox"]':'toggleDone',
    'click .destroy': 'destroy',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close',
    'mouseenter .todo': 'displayDestroyButton',
    'mouseleave .todo': 'hideDestroyButton',
    'dblclick .todo': 'edit',
    'touchstart .todo .label': 'edit'
  },

  toggleDone: function() {
    this.model.toggle();
  },

  edit: function() {
    this.$el.addClass('editing');
    this.input.focus();
  },

  close: function() {
    var value = this.input.val().trim();
    if (value) {
      this.model.save({label: value});
    }
    this.$el.removeClass('editing');
  },

  updateOnEnter: function(e) {
    if (e.which === 13) {
      this.close();
    }
  },

  destroy: function() {
    this.model.destroy();
  },

  displayDestroyButton: function(e) {
    var currentTodo = this.$el.find('.destroy');
    currentTodo.addClass('show');
  },

  hideDestroyButton: function(e) {
    var currentTodo = this.$el.find('.destroy');
    currentTodo.removeClass('show');
  }

});

module.exports = Todo;
