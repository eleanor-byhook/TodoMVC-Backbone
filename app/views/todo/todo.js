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
    $(".checkbox").after("<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='-10 -18 100 135'><circle cx='50' cy='50' r='50' fill='none' stroke='#bddad5' stroke-width='3'/><path fill='#5dc2af' d='M72 25L42 71 27 56l-4 4 20 20 34-52z'/></svg>");
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
