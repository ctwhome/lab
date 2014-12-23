define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularRequireApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the angularRequireApp
   */
  angular.module('angularRequireApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
