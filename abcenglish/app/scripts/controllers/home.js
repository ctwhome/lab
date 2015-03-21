'use strict';

/**
 * @ngdoc function
 * @name abcenglishApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the abcenglishApp
 */
angular.module('abcenglishApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
