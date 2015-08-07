'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:PostdetailCtrl
 * @description
 * # PostdetailCtrl
 * Controller of the yomantutApp
 */
angular.module('yomantutApp')
  .controller('PostdetailCtrl', ['$scope', 'tappedPost', function ($scope, tappedPost) {
    $scope.post = tappedPost.post;
  }]);
