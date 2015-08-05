'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the yomantutApp
 */
angular.module('yomantutApp')
  .controller('AppCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', '$animate', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $animate) {
    //$animate.enabled(false);
    //$animate.enabled('md-sidenav', true);

    $scope.hideFilter = true;
    
    $scope.$on('$routeChangeStart', function(event, next) {
      var path = next.$$route.originalPath;
      $log.debug('path is now ' + path);
      if (path === '/listview') {
         $scope.onListview = true;
       } else {
         $scope.onListview = false;
       }
       $scope.$evalAsync();
    });

    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug('toggle ' + navID + ' is done');
              });
          },300);
      return debounceFn;
    }

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    
  }])
  .controller('LeftCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', '$location', function ($scope, $timeout, $mdSidenav, $log, $location) {
    $scope.closeAndChangePage = function (view) {
      $location.path(view);
      $mdSidenav('left').close()
        .then(function () {
          $log.debug('close LEFT is done');
        });
    };
  }])
    .controller('RightCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', 'searchText', function ($scope, $timeout, $mdSidenav, $log, searchText) {
      $scope.searchText = searchText;
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug('close RIGHT is done');
        });
    };
  }]);
