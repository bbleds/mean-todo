'use strict';

var app = angular.module('todo-app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	//configure routes
	$stateProvider.state('todos', {
		url: '/',
		templateUrl: 'html-partials/todos.html'
	});

	//if we load in erroneous route, go  back to base/catch-all route
	$urlRouterProvider.otherwise('/');

	//remove hashes from urls -> clean presentation of url
	// $locationProvider.html5Mode(true);
});

app.controller('test-ctrl', function () {
	var self = this;
	this.bruh = "bruh";
});