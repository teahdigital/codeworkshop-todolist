(function(){
	'use strict';

	var app = angular.module('todolist', ['ngRoute', 'appControllers']);

	app.config(function($routeProvider) {
		$routeProvider

		.when('/', {
			templateUrl : 'views/home.html',
			controller  : 'homeCtrl'
		})

		.when('/list/:name/', {
			templateUrl : 'views/list.html',
			controller  : 'listCtrl'
		})

		.otherwise({
			redirectTo:'/'
		});
	});

	angular.module('appControllers', []);
})();