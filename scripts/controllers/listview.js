'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:ListviewCtrl
 * @description
 * # ListviewCtrl
 * Controller of the yomantutApp
 */
angular.module('yomantutApp')
  .controller('ListviewCtrl', ['$scope', 'searchText', 'filterFilter', 'localStorageService', '$animate', 
                                function ($scope, searchText, filterFilter, localStorageService, $animate) {

    $scope.searchText = searchText;

    $scope.posts = [{
    	item: 'Crisis ticket',
    	postDate: new Date("2015-03-20"),
    	user: 'Helen Mart',
        number: 2,
    	cost: 20,
    	meet: '[some geo data]',
    	eventDate: new Date("2015-03-25")
    },
    {
        item: 'Crisis ticket',
        postDate: new Date("2015-03-14"),
        user: 'James Smith',
        number: 2,
        cost: 18.5,
        meet: '[some geo data]',
        eventDate: new Date("2015-03-25")
    },
    {
        item: 'Crisis ticket',
        postDate: new Date("2015-03-21"),
        user: 'James Bore',
        number: 2,
        cost: 22,
        meet: '[some geo data]',
        eventDate: new Date("2015-03-26")
    },
    {
    	item: 'crisis ticket',
    	postDate: new Date("2015-02-22"),
    	user: 'Bob todd',
        number: 1,
    	cost: 12,
    	meet: '[some geo data]',
    	eventDate: new Date("2015-03-19")
    },
    {
        item: 'Ocean',
        postDate: new Date("2014-02-25"),
        user: 'Rad Cliff',
        number: 3,
        cost: 5,
        meet: '[some geo data]',
        eventDate: new Date("2015-12-19")
    },
    {
        item: 'Boiler Room',
        postDate: new Date("2014-02-25"),
        user: 'Hudmo lol',
        number: 5,
        cost: 100,
        meet: '[some geo data]',
        eventDate: new Date("2015-10-19")
    }
    ];

    localStorageService.set('ticketPosts', $scope.posts)



    $scope.sortModes = [{
        label: 'Date added',
        code: 'postDate'
    },
    { 
        label:'Price',
        code: 'cost'
    },
    {
        label: 'Date of event',
        code: 'eventDate'
    }];

    $scope.sortBy = 'postDate';


  }]);
