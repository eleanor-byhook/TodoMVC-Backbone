'use strict'

var Backbone = require('backbone');

var TodoList = Backbone.Collection.extend({

    model: Todo,

    localStorage: new Backbone.LocalStorage("todos-backbone"),

    done: function() {
        return this.where({ done: true});
    }
});

var Todos = new TodoList();
