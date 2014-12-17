/*global define */

define([
	'marionette',
	'templates',
    'underscore',
], function (Marionette, templates, _) {
	'use strict';

	return Marionette.ItemView.extend({
		template: 'page',

        ui: {
            header: 'h2'
        }
	});
});
