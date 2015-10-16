'use strict';

    describe('Controller: GetEmployeeCtrl', function () {
 
      // load the controller's module
      beforeEach(module('employeeInfoApp'));
 
      var MainCtrl,
        scope;
 
      // Initialize the controller and a mock scope
      beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('GetEmployeeCtrl', {
          $scope: scope

        });
      }));

      it('should attach a list of awesomeThings to the scope', function () {
        // Change this line
        expect(scope.awesomeThings.length).toBe(3);
 
        // To this
        expect(scope.awesomeThings.length).toBe(4);
      });
    });