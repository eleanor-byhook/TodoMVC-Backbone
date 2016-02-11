'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
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
    'dblclick .todo': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
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
  }

});

module.exports = Todo;
