'use strict';

/**
 * @ngdoc function
 * @name appWithYeomanAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appWithYeomanAngularApp
 */
angular.module('appWithYeomanAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
