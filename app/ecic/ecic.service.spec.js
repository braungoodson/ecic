'use strict';

describe('Service: ecic', function () {

  // load the service's module
  beforeEach(module('snakeApp'));

  // instantiate service
  var ecic;
  beforeEach(inject(function (_ecic_) {
    ecic = _ecic_;
  }));

  it('should do something', function () {
    expect(!!ecic).toBe(true);
  });

});
