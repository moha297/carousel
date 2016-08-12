'use strict';

describe('Service: trackingService', function () {

  // load the service's module
  beforeEach(module('carouselApp'));

  // instantiate service
  var trackingService;
  beforeEach(inject(function (_trackingService_) {
    trackingService = _trackingService_;
  }));

  it('should do something', function () {
    expect(!!trackingService).toBe(true);
  });

});
