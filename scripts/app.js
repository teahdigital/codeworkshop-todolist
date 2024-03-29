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

		.when('/addlist/', {
			templateUrl : 'views/addlist.html',
			controller  : 'addlistCtrl'
		})

		.otherwise({
			redirectTo:'/'
		});
	});

	angular.module('appControllers', []);
})();