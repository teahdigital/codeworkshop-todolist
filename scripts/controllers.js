(function () {
  'use strict';
	
	angular.module('appControllers')
 
	.controller('homeCtrl', function($scope, $routeParams, API){
		
		$scope.lists = [];
		API.getLists().success(function (response) {
            $scope.lists = response.boards;
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

        $scope.users = [];
		API.getUser().success(function (response) {
            $scope.users = response;
        }).error(function (error) {
            $scope.status = 'Unable to load users data: ' + error.message;
        });

        /////////////////////////////////////////////////////////////////////
	    $scope.checked = [];

	    // Add a Item to the list
	    $scope.addItem = function () {
	        $scope.users.push({
	            amount: $scope.itemUser,
	            name: $scope.itemName
	        });
	        // Clear input fields after push
	        $scope.itemUser = "";
	        $scope.itemName = "";
	    };

	    // Add Item to Checked List and delete from Unchecked List
	    $scope.toggleChecked = function (item, index) {
	        $scope.checked.push(item);
	        $scope.users.splice(index, 1);
	    };

	    // Get Total Items
	    $scope.getTotalItems = function () {
	        return $scope.users.length;
	    };

	    // Get Total Checked Items
	    $scope.getTotalCheckedItems = function () {
	        return $scope.checked.length;
	    };



	})

	.controller('addList', function($scope, $routeParams){
		
	})

	.controller('deleteCtrl', function($scope, $routeParams){
		
	})

	.factory('API', function($http) {
		 var urlAPI = 'http://codeworkshops.teah.digital/todolist/laravel-api/public/';
		// var urlAPI = 'http://localhost/codeworkshop-todolist/data/';
    	var dataFactory = {};

    	dataFactory.getLists = function () {
	        return $http.get(urlAPI + 'boards');
	        // return $http.get(urlAPI + 'lists.json');
	    };

	    dataFactory.getTask = function () {
	        return $http.get(urlAPI + 'tasks.json');
	    };

	    dataFactory.getUser = function () {
	        return $http.get(urlAPI + 'users.json');
	    };

	    return dataFactory;
	});
	 
})();