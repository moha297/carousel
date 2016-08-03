'use strict';

describe('Controller: ResizableCtrl', function () {

  // load the controller's module
  beforeEach(module('carouselApp'));

  var ResizableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResizableCtrl = $controller('ResizableCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResizableCtrl.awesomeThings.length).toBe(3);
  });
});
