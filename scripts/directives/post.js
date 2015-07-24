'use strict';

/**
 * @ngdoc directive
 * @name yomantutApp.directive:post
 * @description
 * # post
 */
angular.module('yomantutApp')
  .directive('post', function () {
    return {
      templateUrl: 'scripts/directives/post.html',
      restrict: 'E',
      scope: {
      	info: '='
      }
    };
  });
