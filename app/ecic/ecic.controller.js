'use strict';

angular.module('snakeApp')
  .controller('EcicCtrl', function ($scope, ecic) {
	$scope.ecic = ecic.get();
  });
