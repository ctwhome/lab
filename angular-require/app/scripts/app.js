/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/cart']/*deps*/, function (angular, MainCtrl, AboutCtrl, CartCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name angularRequireApp
   * @description
   * # angularRequireApp
   *
   * Main module of the application.
   */
  return angular
    .module('angularRequireApp', ['angularRequireApp.controllers.MainCtrl',
'angularRequireApp.controllers.AboutCtrl',
'angularRequireApp.controllers.CartCtrl',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
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
        .when('/cart', {
          templateUrl: 'views/cart.html',
          controller: 'CartCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
