angular.module("collegeAnalysis").controller("studentDetailsCtrl", function ($scope, $routeParams, student, subjectsList) {
	$scope.student = student.data;
	$scope.subjectsList = subjectsList.data;
});