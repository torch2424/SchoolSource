'use strict';

/**
 * @ngdoc function
 * @name redesignProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the redesignProjectApp
 */
angular.module('redesignProjectApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [
        {
          image: 'http://lorempixel.com/400/200/'
        },
        {
          image: 'http://lorempixel.com/400/200/food'
        },
        {
          image: 'http://lorempixel.com/400/200/sports'
        },
        {
          image: 'http://lorempixel.com/400/200/people'
        }
    ];
  });
