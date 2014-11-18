'use strict';

/**
 * @ngdoc overview
 * @name appWithYeomanAngularApp
 * @description
 * # appWithYeomanAngularApp
 *
 * Main module of the application.
 */
angular
  .module('appWithYeomanAngularApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
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
      .otherwise({
        redirectTo: '/'
      });
  });
