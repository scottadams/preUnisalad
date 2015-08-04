'use strict';

/**
 * @ngdoc overview
 * @name yomantutApp
 * @description
 * # yomantutApp
 *
 * Main module of the application.
 */
angular
  .module('yomantutApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'ngMaterial',
    'ngAnimate'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('us');
  }])
  .config(function($mdIconProvider) {
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/notification-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/tool', {
        templateUrl: 'views/tool.html',
        controller: 'ToolCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/listview', {
        templateUrl: 'views/listview.html',
        controller: 'ListviewCtrl'
      })
      .when('/addPost', {
        templateUrl: 'views/addpost.html',
        controller: 'AddpostCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
