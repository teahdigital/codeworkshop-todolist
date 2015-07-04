(function(){
	'use strict';

	var app = angular.module('dashboard', ['ngRoute', 'ngAnimate', 'appControllers']);

	app.config(function($routeProvider) {
		$routeProvider

		.when('/', {
			templateUrl : 'views/home.html',
			controller  : 'homeController'
		})

		.when('/client/:slug/', {
			templateUrl : 'views/client.html',
			controller  : 'clientController'
		})

		.otherwise({
			redirectTo:'/'
		});
	});

	angular.module('appControllers', []);
	
})();