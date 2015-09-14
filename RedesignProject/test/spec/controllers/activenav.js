'use strict';

describe('Controller: ActivenavCtrl', function () {

  // load the controller's module
  beforeEach(module('redesignProjectApp'));

  var ActivenavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivenavCtrl = $controller('ActivenavCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActivenavCtrl.awesomeThings.length).toBe(3);
  });
});
