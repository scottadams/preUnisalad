'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yomantutApp
 */

angular.module('yomantutApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
  	$scope.universities = ['Imperial College London', 'Nottingham University', 'Leeds University', 'Exeter University', 'Oxford University'];
  	$scope.uniSelected = function () {
  		console.log('User selected ' + $scope.university);
      	localStorageService.set('uni', $scope.university);
	};
  });