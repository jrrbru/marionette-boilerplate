require.config({
	paths: {
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
		marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
		dust: '../bower_components/dustjs-linkedin/dist/dust-core',
		marionette_dust: '../bower_components/marionette-dust/src/amd/backbone.marionette.dust',
		jquery: '../bower_components/jquery/dist/jquery.min',
		localStorage: '../bower_components/backbone.localStorage/backbone.localStorage',
		tpl: 'lib/tpl',
        bootstrap: 'lib/bootstrap.min'
	},

	shim: {
		underscore: {
			exports: '_'
		},

		backbone: {
			exports: 'Backbone',
			deps: ['jquery', 'underscore']
		},

		marionette: {
			exports: 'Backbone.Marionette',
			deps: ['backbone']
		},

		dust: {
			exports: 'dust'
		},

        bootstrap: {
            deps: ['jquery']
        }

	},
    waitSeconds: 60
});

require([
	'app',
    'modules/Pages',
    'jquery',
	'bootstrap'
], function (app, PagesModule) {
	'use strict';

    app.addInitializer(function() {
        PagesModule.start();
    });

	app.start();
});
