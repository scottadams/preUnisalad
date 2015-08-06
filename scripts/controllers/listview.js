'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:ListviewCtrl
 * @description
 * # ListviewCtrl
 * Controller of the yomantutApp
 */
angular.module('yomantutApp')
  .controller('ListviewCtrl', ['$scope', 'searchText', 'filterFilter', 'localStorageService', '$animate', '$mdBottomSheet', 
                                function ($scope, searchText, filterFilter, localStorageService, $animate, $mdBottomSheet) {

    $scope.searchText = searchText;
    var showAddPost = true;

    $scope.posts = [{
        id: 1,
    	item: 'Crisis ticket',
    	postDate: new Date("2015-03-20"),
    	user: 'Helen Mart',
        number: 1,
    	cost: 20,
    	meet: 'Lenton pick up',
    	eventDate: new Date("2015-03-25")
    },
    {
        id: 2,
        item: 'Crisis ticket',
        postDate: new Date("2015-03-14"),
        user: 'James Smith',
        number: 2,
        cost: 18.5,
        meet: 'your house',
        eventDate: new Date("2015-03-25")
    },
    {
        id: 3,
        item: 'Crisis ticket',
        postDate: new Date("2015-03-21"),
        user: 'James Bore',
        number: 2,
        cost: 22,
        meet: 'the moon',
        eventDate: new Date("2015-03-26")
    },
    {
        id: 4,
    	item: 'crisis ticket',
    	postDate: new Date("2015-02-22"),
    	user: 'Bob todd',
        number: 1,
    	cost: 12,
    	meet: 'Lenton pick up',
    	eventDate: new Date("2015-03-19")
    },
    {
        id: 5,
        item: 'Ocean',
        postDate: new Date("2014-02-25"),
        user: 'Rad Cliff',
        number: 3,
        cost: 5,
        meet: 'library',
        eventDate: new Date("2015-12-19")
    },
    {
        id: 6,
        item: 'Boiler Room',
        postDate: new Date("2014-02-25"),
        user: 'Hudmo lol',
        number: 1,
        cost: 10,
        meet: 'SN8 massive',
        eventDate: new Date("2015-10-19")
    }
    ];

    //localStorageService.set('ticketPosts', $scope.posts)

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

    //---------------------------------------------------------------------
    //---------------------------------------------------------------------
    //---------------------------------------------------------------------

    $scope.openPostDetails = function($event, info) {
        console.log(info.item)
        $mdBottomSheet.show({
            templateUrl: 'views/postdetails.html',
            controller: 'PostdetailCtrl',
            targetEvent: $event
        });
    };

    $scope.test = function() {
        console.log('test')
    }

  }]);
