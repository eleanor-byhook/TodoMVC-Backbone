'use strict';

var Backbone = require('backbone');
var _ = require('underscore');

var newTodo = require('./newTodo.html');

var NewTodo = Backbone.View.extend({

  el: '#new-todo',

  initialize: function () {
    this.render();
  },

  render: function () {

    this.$el.html(_.template(newTodo())());

  }
});

module.exports = NewTodo;
