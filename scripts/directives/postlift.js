'use strict';

/**
 * @ngdoc directive
 * @name yomantutApp.directive:postLift
 * @description
 * # postLift
 */
angular.module('yomantutApp')
  .directive('postLift', function () {
    return {
      templateUrl: 'scripts/directives/postlift.html',
      restrict: 'E',
      scope: {
      	info: '='
      }
    };
  });
