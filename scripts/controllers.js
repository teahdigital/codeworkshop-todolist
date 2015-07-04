(function () {
  'use strict';
	
	angular.module('appControllers')
 
	.controller('homeCtrl', function($scope, $routeParams, API){
		
		$scope.lists = [];
		API.getLists().success(function (response) {
            $scope.lists = response;
        }).error(function (error) {
            $scope.status = 'Unable to load lists data: ' + error.message;
        });

	})

	.controller('listCtrl', function($scope, $routeParams, API){
		$scope.name = $routeParams.name;

		$scope.tasks = [];
		API.getTask($routeParams.name).success(function (response) {
            $scope.tasks = response;
        }).error(function (error) {
            $scope.status = 'Unable to load tasks data: ' + error.message;
        });

	})

	.controller('editCtrl', function($scope, $routeParams){
		
	})

	.controller('deleteCtrl', function($scope, $routeParams){
		
	})

	.factory('API', function($http) {
		var urlAPI = 'http://localhost/codeworkshop-todolist/data/';
    	var dataFactory = {};

    	dataFactory.getLists = function () {
	        return $http.get(urlAPI + 'lists.json');
	    };

	    dataFactory.getTask = function () {
	        return $http.get(urlAPI + 'tasks.json');
	    };

	    return dataFactory;
	});
	 
})();