(function(){
	'use strict';

	var app = angular.module('todolist', ['ngRoute', 'appControllers']);

	app.config(function($routeProvider) {
		$routeProvider

		.when('/', {
			templateUrl : 'views/index.html',
			controller  : 'homeController'
		})

		// .when('/client/:slug/', {
		// 	templateUrl : 'views/client.html',
		// 	controller  : 'clientController'
		// })

		.otherwise({
			redirectTo:'/'
		});
	});

	angular.module('appControllers', []);
	
})();