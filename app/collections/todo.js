'use strict';

var Backbone = require('backbone');
var Todo = require('./../models/todo.js');

var TodoList = Backbone.Collection.extend({

  model: Todo,

  localStorage: new Backbone.LocalStorage('todos-backbone'),

  done: function () {
    return this.where({done: true});
  }
});

var Todos = new TodoList();
