'use strict';

var config = require('./config');
var Backbone = require('backbone');
var _ = require('underscore');

var Header = require('./views/header/header.js');
var NewTodo = require('./views/new-todo/newTodo.js');
var Todos = require('./views/todos/todos.js');

var App = Backbone.View.extend({
  initialize: function () {
    var header = new Header();
    header.render();

    var newTodo = new NewTodo();
    newTodo.render();

    var todos = new Todos();
    todos.render();

  }
});
//88

window.app = new App();
module.exports = App;
