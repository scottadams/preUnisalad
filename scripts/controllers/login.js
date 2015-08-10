'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the yomantutApp
 */
angular.module('yomantutApp')
  .controller('LoginCtrl', function ($scope, localStorageService) {
    $scope.university = localStorageService.get('uni');
    $scope.landingTo = localStorageService.get('sign');

    if ($scope.landingTo == 'in') {
    	console.log('in');
    	$scope.selectedTab = 0;
    }else {
    	console.log('up');
    	$scope.selectedTab = 1;
    };
  });
