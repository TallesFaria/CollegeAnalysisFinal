angular.module('collegeAnalysis').controller('studentDetailsCtrl', function ($scope, $routeParams, student, subjectsList, studentsAPI, $location) {
	$scope.student = student.data;
	$scope.subjectsList = subjectsList.data;

	$scope.deleteStudentInfo = function (studentInfo) {
		studentsAPI.deleteStudentInfo(studentInfo).success(function (data) {
			delete $scope.student;
			$location.path('/students');
		});
    };
});
