'use strict';

/**
 * @ngdoc directive
 * @name yomantutApp.directive:post
 * @description
 * # post
 */
angular.module('yomantutApp')
  .directive('postTicket', function () {
    return {
      templateUrl: 'scripts/directives/postticket.html',
      restrict: 'E',
      scope: {
      	info: '='
      }
    };
  });
