'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:ToolCtrl
 * @description
 * # ToolCtrl
 * Controller of the yomantutApp
 */
angular.module('yomantutApp')
  .controller('ToolCtrl', ['$scope', '$location', 'localStorageService', function ($scope, $location, localStorageService) {
    $scope.items = [ {
        label: 'tickets',
    	name: 'Tickets',
    	posts: '10',
        icon: ''
    },
    {
        label: 'lifts',
    	name: 'Lifts',
    	posts: '21',
        icon: 'bower_components/material-design-icons/maps/svg/production/ic_directions_car_48px.svg'
    },
    {
        label: 'misc',
    	name: 'Miscellaneous',
    	posts: '100',
        icon: ''
    },
    {
        label: 'sale',
    	name: 'For sale',
    	posts: '20',
        icon: ''
    }
    ];

    $scope.goToList = function (list) {
        console.log(list);
        $location.path('/listview');
        localStorageService.set('list', list);
    };
  }]);
