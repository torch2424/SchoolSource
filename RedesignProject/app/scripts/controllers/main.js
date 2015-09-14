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

    $scope.myInterval = 3500;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [
        {
          image: '../images/vientoslide1.jpg'
        },
        {
          image: '../images/vientoslide2.jpg'
        },
        {
          image: '../images/vientoslide3.jpg'
        }
    ];
  });
