window.beans = window.beans || {};
// Backbone Collection class AMD module and its dependencies
define([
	'jquery',
	'underscore',
	'backbone',
	'models/model'
], function( $, _, Backbone,BeansMessage) {
	'use strict'
	beans.Messages = Backbone.Collection.extend({
		initialize: function(models,opts){
			this.term = opts.term;
			this.count = opts.count || 20;
			this.fetch();
		},
		url : function() {
			var term = encodeURIComponent(this.term);
			return "http://search.twitter.com/search.json?q="+term+"&rpp="+this.count+"&lang=en&callback=?"
		},
		model: BeansMessage,
		sync: function(method, model, options){
			options.timeout = 15000;
			options.dataType = "jsonp";
			options.url = this.url();
			return Backbone.sync(method, model, options);
        },
		parse: function(response) {
            return response.results;
        }
	});		
	return beans.Messages;
});