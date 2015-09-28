'use strict';

describe('Controller: LiveeventsCtrl', function () {

  // load the controller's module
  beforeEach(module('redesignProjectApp'));

  var LiveeventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LiveeventsCtrl = $controller('LiveeventsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LiveeventsCtrl.awesomeThings.length).toBe(3);
  });
});
