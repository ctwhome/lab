'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
