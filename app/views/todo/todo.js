'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var todo = require('./todo.html');

var Todo = Backbone.View.extend({

  tagName: 'div',

  template: _.template(todo()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  initialize: function () {
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },

  events: {
    'click [type="checkbox"]':'toggleDone'
  },

  toggleDone: function() {
    this.model.toggle();
  }

});

module.exports = Todo;
