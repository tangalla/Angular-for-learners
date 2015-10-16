'use strict';

/**
 * @ngdoc function
 * @name employeeInfoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the employeeInfoApp
 */
angular.module('employeeInfoApp')
  .controller('GetEmployeeCtrl',['$scope', '$routeParams', 'employee', function ($scope, $routeParams, employee) {
   var url = 'data/employee-info.json',params={'parameterId':'abc123'};
		$scope.parentMethod = function () {
		employee.getResults(url,params).then(function(data) {
			$scope.firstName = data.firstName;
			$scope.lastName = data.lastName;
			$scope.id = data.Id;
		}, function(data) {
			console(data);
		});
		};
		$scope.parentMethod();
  }]);
