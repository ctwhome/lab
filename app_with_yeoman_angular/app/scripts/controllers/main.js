'use strict';

/**
 * @ngdoc function
 * @name appWithYeomanAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appWithYeomanAngularApp
 */
angular.module('appWithYeomanAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
