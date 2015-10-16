describe('Controller: GetEmployeeCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeInfoApp'));

  var GetEmployeeCtrl, url = 'data/employee-info.json',params={'parameterId':'abc123'},data,
    scope;
beforeEach(inject(function($rootScope, $controller, employee){
  scope=$rootScope.$new();
  mockDataSvc=employee;
  firstController = $controller('GetEmployeeCtrl', {
    $scope: scope, 
    employee: mockDataSvc
  });
}));

  it('should expect method', function () {
  	 expect(scope.parentMethod).toBeDefined();	 
  });
   it('should attach a list of awesomeThings to the scope', function () { 
  	   mockDataSvc.getResults(url,params).then(function(result) {
          data = result;
      });
      expect(data).not.toBeNull();
  });
});
