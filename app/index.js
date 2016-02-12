'use strict';

var config = require('./config');
var Backbone = require('backbone');
var _ = require('underscore');

var Header = require('./views/header/header.js');
var NewTodo = require('./views/new-todo/newTodo.js');
var TodoList = require('./views/todoList/todoList.js');
var Footer = require('./views/footer/footer.js');
var Router = require('./router/router.js');

var App = Backbone.View.extend({
  initialize: function () {

    var header = new Header();
    header.render();

    var newTodo = new NewTodo();
    newTodo.render();

    var todoList = new TodoList();
    todoList.render();

    var footer = new Footer();
    footer.render();

    Backbone.history.start();
  }
});

window.app = new App();
module.exports = App;
