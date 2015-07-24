'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:ToolCtrl
 * @description
 * # ToolCtrl
 * Controller of the yomantutApp
 */
angular.module('yomantutApp')
  .controller('ToolCtrl', function ($scope) {
    $scope.items = [ {
    	name: 'Tickets',
    	posts: '10'
    },
    {
    	name: 'lifts',
    	posts: '21'
    },
    {
    	name: 'Lost and Found',
    	posts: '100'
    },
    {
    	name: 'For Sale',
    	posts: '20'
    }
    ];
  });
