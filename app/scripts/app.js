'use strict';

/**
 * @ngdoc overview
 * @name employeeInfoApp
 * @description
 * # employeeInfoApp
 *
 * Main module of the application.
 */
angular
  .module('employeeInfoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/getEmployee', {
        templateUrl: 'views/get-employee.html',
        controller: 'GetEmployeeCtrl',
        controllerAs: 'employee'
      })
      .when('/getSalary', {
        templateUrl: 'views/get-salary.html',
        controller: 'GetSalaryCtrl',
        controllerAs: 'salary'
      })
      .when('/getEmployeeAndSalary', {
        templateUrl: 'views/get-employee-salary.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
