'use strict';

describe('Service: wave', function () {

  // load the service's module
  beforeEach(module('nimbusPlayerApp'));

  // instantiate service
  var wave;
  beforeEach(inject(function (_wave_) {
    wave = _wave_;
  }));

  it('should do something', function () {
    expect(!!wave).toBe(true);
  });

});
