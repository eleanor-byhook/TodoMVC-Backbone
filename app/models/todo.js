'use strict';

var Backbone = require('backbone');

var Todo = Backbone.Model.extend({

    defaults: function() {
        return {
            label: '',
            done: false
        };
    },

    toggle: function() {
        this.save({done: !this.get("done")});
    }

});

module.exports = Todo;
