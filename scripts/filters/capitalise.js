'use strict';

/**
 * @ngdoc filter
 * @name yomantutApp.filter:capitalise
 * @function
 * @description
 * # capitalise
 * Filter in the yomantutApp.
 */
angular.module('yomantutApp')
  .filter('capitalise', function() {
    return function(input) {
      return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
    }
});
