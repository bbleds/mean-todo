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


app.controller('todos-ctrl', ['$http', function($http)
{
	const self = this;

	//get todo list data
	$http.get("/api/tasks").then((response)=>
	{
		self.tasks = response.data;
	});

}]);