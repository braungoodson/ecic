'use strict';

describe('Controller: EcicCtrl', function () {

  // load the controller's module
  beforeEach(module('snakeApp'));

  var EcicCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EcicCtrl = $controller('EcicCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
