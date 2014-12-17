/*global define */

define([
	'marionette',
	'dust',
	'templates',
    'underscore',
], function (Marionette, dust, templates, _) {
	'use strict';

	return Marionette.ItemView.extend({
		template: 'page',

        ui: {
            header: 'h2'
        },

        onBeforeRender: function(){
			var This = this;

			dust.render('pages:' + this.model.get('name'), {}, function (err, output){
				This.model.set('content', output);
			});

        }

	});
});
