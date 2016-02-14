'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var TodoCollection = require('./../../collections/todo.js');
var Todo = require('./../todo/todo.js');

var TodoList = Backbone.View.extend({

  el: '.container',

  initialize: function() {
    this.input = this.$('#newTodo');
    TodoCollection.on('add', this.addAll, this);
    TodoCollection.on('reset', this.addAll, this);
    TodoCollection.on('remove', this.addAll, this);
    TodoCollection.fetch();
  },

  events: {
    'keypress #newTodo': 'createTodoOnEnter'
  },

  createTodoOnEnter: function(e) {
    //Disregard any keyboard event that isn't the enter key
    if (e.keyCode !== 13 || !this.input.val().trim() ) {
      return;
    }

    TodoCollection.create({
      label: this.input.val().trim(),
      done: false
    });

    this.input.val('');
  },

  addAll: function () {
    this.$('#todos').html(''); //clears out the list
    switch (window.filter) {
      case 'completed':
        _.each(TodoCollection.done(), this.addOne);
        break;
      case 'active':
        _.each(TodoCollection.remaining(), this.addOne);
        break;
      default:
        TodoCollection.each(this.addOne, this);
        break;
    }
  },

  addOne: function(todo) {
    var newTodo = new Todo({model: todo});
    $('#todos').append(newTodo.render().el);
  }
});

module.exports = TodoList;
