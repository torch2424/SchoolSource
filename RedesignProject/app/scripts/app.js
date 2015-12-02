'use strict';

/**
 * @ngdoc overview
 * @name redesignProjectApp
 * @description
 * # redesignProjectApp
 *
 * Main module of the application.
 */
angular
  .module('redesignProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/liveevents', {
        templateUrl: 'views/liveevents.html',
        controller: 'LiveeventsCtrl',
        controllerAs: 'liveevents'
      })
      .otherwise({
        redirectTo: '/'
      });

      // use the HTML5 History API
       $locationProvider.html5Mode(true);
  });
