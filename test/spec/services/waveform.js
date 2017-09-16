'use strict';

describe('Service: waveForm', function () {

  // load the service's module
  beforeEach(module('nimbusPlayerApp'));

  // instantiate service
  var waveForm;
  beforeEach(inject(function (_waveForm_) {
    waveForm = _waveForm_;
  }));

  it('should do something', function () {
    expect(!!waveForm).toBe(true);
  });

});
