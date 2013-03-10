window.beans = window.beans || {};

// Backbone View Class Module
define([
	'jquery',
	'underscore',
	'backbone',
	'collections/collection'
], function( $, _, Backbone,BeansMessages) {
	'use strict'			
	beans.SearchView = Backbone.View.extend({
		el: $("#searcharea"),
		initialize: function() {
			this.$input = this.$('input');
			this.$sbutton = this.$('#searchbutton');
			this.$results = this.$('#results');
		},
		template : $("#template").html(),
		events: {
			"submit": "getMessages",
			"click #resetbutton": "clearSearch"
		},
		getMessages: function(ev) {
		  	ev.preventDefault();			
			var term = $.trim(this.$input.val());
					
			if (this.validation(term)){
				this.$sbutton.text("Searching...");
				var messages = new BeansMessages([], {term:term,count:20});
				messages.on('reset',function(data){
					this.render(data);
				},this);
				}
			else {
				alert("Please enter the search term!");
			}
		},
		clearSearch: function(ev){
			ev.preventDefault();
			this.$input.val("");
		},
		render: function(data) {
			var template = _.template(this.template, {
				tweets: data
			});
			$('#results').html(template);
			this.$sbutton.text("Search");
    	},
		validation:function(term){
			// Basic validation - empty string check
			return term === '' ? false : true;
		}
	});	
	return beans.SearchView;	
});