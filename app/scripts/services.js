'use strict';

/* Services */

angular.module('employeeInfoApp')
.factory('employee', function($http, $q, $filter) {
	var service = {};
	var baseUrl = "//" + window.location.hostname + ":8080";
	
	service.getResults = function(url,params) {
		var deferred = $q.defer();
		$http({
			method : 'GET',
			url : url,
			params : params
		}).success(function(data) {
			deferred.resolve(data);
		}).error(function() {
			deferred.reject('There was an error');
		});
		return deferred.promise;
	};
	return service;
});
