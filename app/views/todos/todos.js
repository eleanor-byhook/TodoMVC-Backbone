'use strict';

var Backbone = require('backbone');
var _ = require('underscore');

var todo = require('./todos.html');

var Todo = Backbone.View.extend({

    el: '#todos',

    tagName: "li",

    initialize: function() {
        this.render();
    },

    render: function() {

        this.$el.html(_.template(todo())({data: {
            label: 'Take out garbage',
            done: false
        }}));

    }
});

module.exports = Todo;
window.app = new Todo;



