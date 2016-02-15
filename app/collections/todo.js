'use strict';

var Backbone = require('backbone');
var Store = require('backbone.localstorage');
var Todo = require('./../models/todo.js');

var TodoCollection = Backbone.Collection.extend({

  model: Todo,

  localStorage: new Store('todos-backbone'),

  done: function () {
    return this.where({done: true});
  },

  remaining: function() {
    return this.where({done: false});
  },

  total: function() {
    return this;
  }

});

var todoCollection = new TodoCollection();
module.exports = todoCollection;
