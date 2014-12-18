'use strict';

describe('Service: casa', function () {

  // load the service's module
  beforeEach(module('yoAngularApp'));

  // instantiate service
  var casa;
  beforeEach(inject(function (_casa_) {
    casa = _casa_;
  }));

  it('should do something', function () {
    expect(!!casa).toBe(true);
  });

});
