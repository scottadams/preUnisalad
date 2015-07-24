'use strict';

/**
 * @ngdoc function
 * @name yomantutApp.controller:AddpostCtrl
 * @description
 * # AddpostCtrl
 * Controller of the yomantutApp
 */
angular.module('yomantutApp')
  .controller('AddpostCtrl', function ($scope) {
    $scope.possibleNumber = [1, 2, 3, 4, 5, 6];
    $scope.numberOfTickets = 1;

	var mapOptions = {
	  center: new google.maps.LatLng(52.948347, -1.181688),
	  zoom: 12,
	  streetViewControl: false,
	  mapTypeControl: false
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	var input = document.getElementById('searchTextField');
	var options = {
		componentRestrictions: {country: 'uk'}
	};

	var autocomplete = new google.maps.places.Autocomplete(input, options);
	autocomplete.bindTo('bounds', map);

  });
