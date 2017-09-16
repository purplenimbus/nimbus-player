'use strict';

describe('Service: genius', function () {

  // load the service's module
  beforeEach(module('nimbusPlayerApp'));

  // instantiate service
  var genius;
  beforeEach(inject(function (_genius_) {
    genius = _genius_;
  }));

  it('should do something', function () {
    expect(!!genius).toBe(true);
  });

});
