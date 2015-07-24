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
  });
