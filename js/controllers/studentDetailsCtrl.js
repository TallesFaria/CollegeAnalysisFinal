angular.module('collegeAnalysis').controller('studentDetailsCtrl', function ($scope, $routeParams, student, studentsAPI, $location) {
	$scope.student = student.data;

	$scope.deleteStudentInfo = function (studentInfo) {
		studentsAPI.deleteStudentInfo(studentInfo).success(function () {
			delete $scope.student;
			$location.path('/students');
		});
    };
});
