(function () {
  'use strict';
	
	angular.module('appControllers')

 	.controller('navController', function($scope, $http){
		
		// $http.get("http://localhost/projects/github-projects/laravelApps/teah-dashboard/public/clients").success(function(response) {
		// 	$scope.clients = response.clients;
		// });
 		$http.get("apirest/public/clients").success(function(response) {
			$scope.clients = response.clients;
		});

		

	})

	.controller('homeController', function($scope, $http){

		$http.get("apirest/public/projects").success(function(response) {
			$scope.projects = response.projects;
		}); 

	})
	
	.controller('clientController', ['$scope','$routeParams','$http', function($scope, $routeParams, $http) {
  		var slug = $routeParams.slug;

		$http.get("apirest/public/projects/"+slug+"").success(function(response) {
			$scope.projects = response.projects;
			$scope.client = response.projects[0].client;
		}); 

		 

	}]);

}());