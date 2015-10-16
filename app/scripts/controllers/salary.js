'use strict';

/**
 * @ngdoc function
 * @name employeeInfoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the employeeInfoApp
 */
angular.module('employeeInfoApp')
  .controller('GetSalaryCtrl',['$scope', '$routeParams', 'employee', function ($scope, $routeParams, employee) {
    var url = 'data/salary.xml',params={'parameterId':'abc123'};
		employee.getResults(url,params).then(function(data) {
			var parsedData = x2js.xml_str2json(data);
			$scope.amount = parsedData.salary.amount;
			$scope.currency = parsedData.salary.currency;
			$scope.month = parsedData.salary.month;
		}, function(data) {
			console(data);
		});
  }]);
