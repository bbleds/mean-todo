const app = angular.module('todo-app',['ui.router']);


//configure routes
	app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
		$stateProvider
			.state('todos', {
				url: '/',
				templateUrl: 'html-partials/todos.html'
			});

			//if we load in erroneous route, go  back to base/catch-all route
			$urlRouterProvider.otherwise('/');

			//remove hashes from urls -> clean presentation of url
			// $locationProvider.html5Mode(true);
	});


app.controller('test-ctrl',function()
{
	const self = this;
	this.bruh = "bruh";
});