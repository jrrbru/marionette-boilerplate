/*global define */

define([
	'marionette',
	'views/PageView',
	'templates',
    'underscore',

], function (Marionette, PageView, templates, _) {
	'use strict';

	return PageView.extend({

        events: {
            'click #notify' : 'notify',
            'click #modal' : 'showSampleModal',
            'click #confirm' : 'showSampleConfirm'
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
