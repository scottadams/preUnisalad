'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:ListviewCtrl
 * @description
 * # ListviewCtrl
 * Controller of the yomantutApp
 */
angular.module('yomantutApp')
  .controller('ListviewCtrl', ['$scope', 'searchText', 'filterFilter', 'localStorageService', '$animate', '$mdBottomSheet', 'tappedPost',
                                function ($scope, searchText, filterFilter, localStorageService, $animate, $mdBottomSheet, tappedPost) {

    $scope.searchText = searchText;

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
    $scope.focusPost = $scope.posts[0];
    $scope.backdrop = false;

    $scope.openPostDetails = function($event, info) {


        $scope.backdrop = true;

        tappedPost.post = info;

        ScrollOperation(info);
        
        $mdBottomSheet.show({
            templateUrl: 'views/postdetails.html',
            controller: 'PostdetailCtrl',
            targetEvent: $event
        }).then(function () {
            console.log('clicked a contact method');
        }, function () {
            console.log('cancelled');

            var focusedId = "#idCard" + info.id;
            $(focusedId).removeClass('bottom-sheet-open'); //
            $('#listview').removeClass('bottom-sheet-open'); //add padding to bottom so lowest posts can still be brought up
            //$('md-card.md-card > md-card-content > div.fill-absolute').removeClass('whiten');
        });
        

        
    };

  }]);


function ScrollOperation(info) {
    var contentHeight = document.getElementById('content-scrollable').getBoundingClientRect().height;
    var bottomSheetHeight = 220;
    var postCardHeight = document.getElementById('id' + info.id).getBoundingClientRect().height;

    //account for menu schrink status
    var toolbarTransform = getComputedStyle(document.getElementById('toolbar'), null).transform.split(',')[5];
    var toolbarY = parseInt(toolbarTransform.substring(0, toolbarTransform.length-1));
    
    var offsetTopCalc = contentHeight - (postCardHeight + bottomSheetHeight) + 5;
    console.log(toolbarY +32)
    offsetTopCalc += (toolbarY) % 65;

    var cards = document.getElementsByClassName('md-card');
    var idFormatted = '#idCard' + info.id;
    $(idFormatted).addClass('bottom-sheet-open');

    //for (var i = 0; i < cards.length; i++) {
    //    idFormatted = '#idCard' + info.id;
    //    if (idFormatted == '#' + cards[i].id) {
    //        $(idFormatted).addClass('bottom-sheet-open'); TOO CPU INTENSIVE?
    //    } else {
    //        console.log(cards[i].id + ' ' + idFormatted)
    //        $('#' + cards[i].id + ' > md-card-content > div.fill-absolute').addClass('whiten');
    //    };
    //};

    $('#listview').addClass('bottom-sheet-open');
    $('#content-scrollable').scrollTo('#id' + info.id, {offsetTop: offsetTopCalc});
}
