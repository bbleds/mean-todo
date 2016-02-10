'use strict';

var app = angular.module('todo-app', ['ui.router']);

//configure routes
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('todos', {
		url: '/',
		views: {
			nav: {
				templateUrl: 'html-partials/navbar.html'
			},
			content: {
				templateUrl: 'html-partials/todos.html'
			}
		}
	});

	//if we load in erroneous route, go  back to base/catch-all route
	$urlRouterProvider.otherwise('/');

	//remove hashes from urls -> clean presentation of url
	// $locationProvider.html5Mode(true);
});

app.controller('todos-ctrl', ['$http', function ($http) {
	var self = this;

	//get todo list data
	$http.get("/api/tasks").then(function (response) {
		self.tasks = response.data;
	});
	//get member data
	$http.get("/api/members").then(function (response) {
		self.members = response.data;
	});

	//Add Task
	self.addTask = function (value) {
		var data = {};
		data.title = value;
		$http.post("/api/tasks", data).success(function (response) {
			//if successful, add to array and clear out input
			self.tasks.push(response);
			self.singleTask = "";
		});
	};
	//Add Members
	self.addMember = function (value) {
		var data = {};
		data.name = value;
		$http.post("/api/members", data).success(function (response) {
			//if successful, add to array and clear out input
			self.members.push(response);
			self.singleMember = "";
		});
	};
}]);