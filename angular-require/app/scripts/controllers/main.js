define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularRequireApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the angularRequireApp
   */
  angular.module('angularRequireApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
