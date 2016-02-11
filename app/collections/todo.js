'use strict';

var Backbone = require('backbone');
var Store = require('backbone.localstorage');
var Todo = require('./../models/todo.js');

var TodoList = Backbone.Collection.extend({

  model: Todo,

  localStorage: new Store('todos-backbone'),

  done: function () {
    return this.where({done: true});
  },

  remaining: function() {
    return this.where({done: false});
  }

});

var todoList = new TodoList();
module.exports = todoList;
