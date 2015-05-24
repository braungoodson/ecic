'use strict';

angular.module('snakeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/ecic/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
