(function () {
  'use strict';
	
	angular.module('appControllers')
 
	.controller('homeCtrl', function($scope, $routeParams, $http){

		$http.get("http://localhost/codeworkshop-todolist/data/lists.json").success(function(response) {
			$scope.lists = response;
		});
	})

	.controller('listCtrl', function($scope, $routeParams, $http){
		$scope.name = $routeParams.name;

		// $http.get("http://localhost/codeworkshop-todolist/data/lists.json").success(function(response) {
			//  $scope.lists = response;
			// console.log(response);
		// });

	});
	 
})();