'use strict';

angular.module('snakeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ecic', {
        url: '/ecic',
        templateUrl: 'app/ecic/ecic.html',
        controller: 'EcicCtrl'
      });
  });