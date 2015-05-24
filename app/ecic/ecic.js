'use strict';

angular.module('snakeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ecic', {
        url: '/',
        templateUrl: 'app/ecic/ecic.html',
        controller: 'EcicCtrl'
      });
  });
