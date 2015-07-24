'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yomantutApp
 */
angular.module('yomantutApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
