// Configuration of Require.js and dependencies
require.config({
	shim: {
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		},
	},
	paths: {
		jquery: 'vendor/jquery-1.9.1.min',
		underscore: 'vendor/lodash.min',
		backbone: 'vendor/backbone',
		text: 'vendor/text'
	}
});

// Initialization of the application
require([
	'views/app'
], function(SearchApp) {
	new SearchApp();
});