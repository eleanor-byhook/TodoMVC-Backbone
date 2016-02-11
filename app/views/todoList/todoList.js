'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var todoList = require('./../../collections/todo.js');
var Todo = require('./../todo/todo.js');

var TodoList = Backbone.View.extend({

  el: '.container',

  initialize: function() {
    this.input = this.$('#newTodo');
    todoList.on('add', this.addAll, this);
    todoList.on('reset', this.addAll, this);
    todoList.fetch();
  },

  events: {
    'keypress #newTodo': 'createTodoOnEnter'
  },

  createTodoOnEnter: function(e) {
    //Disregard any keyboard event that isn't the enter key
    if (e.keyCode !== 13 || !this.input.val().trim() ) {
      return;
    }

    todoList.create({
      label: this.input.val().trim(),
      done: false
    });

    this.input.val('');
  },

  addAll: function () {
    this.$('#todos').html(''); //clears out the list
    console.log(window.filter);
    switch(window.filter) {
      case 'completed':
        _.each(todoList.done(), this.addOne);
        break;
      case 'active':
        _.each(todoList.remaining(), this.addOne);
        break;
      default:
        todoList.each(this.addOne, this);
        break;
    }
  },

  addOne: function(todo) {
    var newTodo = new Todo({model: todo});
    $('#todos').append(newTodo.render().el);
  }
});

module.exports = TodoList;
