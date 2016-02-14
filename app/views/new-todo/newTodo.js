'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var newTodo = require('./newTodo.html');
var todoCollection = require('./../../collections/todo.js');

var NewTodo = Backbone.View.extend({

  el: '#new-todo',

  events: {
    'click #toggleAll': 'toggleAll'
  },

  initialize: function () {
    this.render();
  },

  toggleAll: function() {
    var remaining = todoCollection.remaining();
    var all = todoCollection.models;
    console.log(remaining);
    console.log(all);
    if (remaining.length) {
      console.log('remaining');
      _.each(remaining, function(item) {
        item.toggle();
      });
    } else {
      console.log('all');
      _.each(all, function(item) {
        item.toggle();
      });
    }
  },

  render: function () {
    this.$el.html(_.template(newTodo())());
  }
});

module.exports = NewTodo;
