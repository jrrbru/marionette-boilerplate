/*global define */

define([
	'marionette',
    'templates'
], function (Marionette, templates) {
	'use strict';

	return Marionette.ItemView.extend({
        template: 'notification',
		events: {
            'click .dismiss': function(e) {
                e.preventDefault();
                this.trigger('notification:close');
            }
        }
	});
});
