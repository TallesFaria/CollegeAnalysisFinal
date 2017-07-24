angular.module('collegeAnalysis').service('subjectsAPI', function ($http, config) {
	this.getSubjects = function () {
		return $http.get(config.baseUrl + '/subjects');
	};
});
