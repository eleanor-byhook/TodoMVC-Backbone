'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var footerTemplate = require('./footer.html');
var todoList = require('./../../collections/todo.js');
var Todo = require('./../todo/todo.js');

var TodoList = Backbone.View.extend({

  el: '#footer',

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(_.template(footerTemplate())());

  }
});

module.exports = TodoList;
