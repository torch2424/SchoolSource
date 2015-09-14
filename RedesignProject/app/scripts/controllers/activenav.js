'use strict';

/**
 * @ngdoc function
 * @name redesignProjectApp.controller:ActivenavCtrl
 * @description
 * # ActivenavCtrl
 * Controller of the redesignProjectApp
 */
angular.module('redesignProjectApp')
  .controller('ActivenavCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Fucntion to find the active page
    $scope.isActive = function(route) {
        return route === $location.path();
    }
  });
