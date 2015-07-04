(function () {
  'use strict';
	
	angular.module('appControllers')
 
	.controller('homeCtrl', function($scope, $routeParams, $http){
		console.log('homeCtrl: ready');
	})

	.controller('listCtrl', function($scope, $routeParams, $http){
		$scope.name = $routeParams.name;
	});
	 
})();