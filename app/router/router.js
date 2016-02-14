'use strict';

var Backbone = require('backbone');
var TodoCollection = require('./../collections/todo.js');

var Router = Backbone.Router.extend({
  routes: {
    '*filter': 'setFilter'
  },

  setFilter: function(params) {
    window.filter = !params ? '' : params.trim();
    TodoCollection.trigger('reset');
  }
});

var router = new Router();
module.exports = router;
