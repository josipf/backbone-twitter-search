window.beans = window.beans || {};
// Defining Model module and its dependencies
define([
	'backbone'
], function(Backbone ) {
	'use strict'
	beans.Message = Backbone.Model.extend({});		
	return beans.Message;
});