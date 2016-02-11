'use strict';

var Backbone = require('backbone');
var TodoList = require('./../collections/todo.js');

var Router = Backbone.Router.extend({
  routes: {
    '*filter': 'setFilter'
  },

  setFilter: function(params) {
    window.filter = !params ? '' : params.trim();
    TodoList.trigger('reset');
  }
})

module.exports = Router;
