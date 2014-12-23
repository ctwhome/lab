define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularRequireApp.controller:CartCtrl
   * @description
   * # CartCtrl
   * Controller of the angularRequireApp
   */
  angular.module('angularRequireApp.controllers.CartCtrl', [])
    .controller('CartCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
