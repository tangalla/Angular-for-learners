'use strict';

describe('Controller: GetEmployeeAndSalaryCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeInfoApp'));

  var GetEmployeeAndSalaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetEmployeeAndSalaryCtrl = $controller('GetEmployeeAndSalaryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GetEmployeeAndSalaryCtrl);
  });
});
