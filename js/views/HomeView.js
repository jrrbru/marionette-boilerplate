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
        },

        events: {
            'click #notify' : 'notify',
            'click #modal' : 'showSampleModal',
            'click #confirm' : 'showSampleConfirm'
        },

        onBeforeRender: function(){
			var This = this;

			dust.render('pages:' + this.model.get('name'), {}, function (err, output){
				This.model.set('content', output);
			});
        },

        onRender: function() {
            this.ui.header.remove();
        },

        // Event handlers
        notify: function(e) {
            app.commands.execute('app:notify', {
                type: 'warning',
                title: 'A Warning',
                description: 'Something important happened! Let the user know it.'
            });
        },
        showSampleModal: function(e) {
            app.commands.execute("app:dialog:simple", {
                title: 'Dialog title!', // Optional
                message: 'The important message for user!'
            });
        },

        showSampleConfirm: function(e) {
            app.commands.execute("app:dialog:confirm", {
                icon: 'info-sign',
                title: 'Action confirmation!',
                message: 'Are you sure to perform this serious action?',
                confirmNo: function() {
                    app.commands.execute('app:notify', {
                        type: 'warning',
                        title: 'You\'ve choosed No',
                        description: 'No problem. No action was taken.'
                    }
                )},
                confirmYes: function() {
                    app.commands.execute('app:notify', {
                        type: 'success',
                        title: 'You\'ve choosed Yes',
                        description: 'You\'ve agreed! Thanks :)'
                    }
                )}
            });
        }

	});
});
