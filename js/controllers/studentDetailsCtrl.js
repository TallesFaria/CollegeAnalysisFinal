angular.module("collegeAnalysis").controller("studentDetailsCtrl", function ($scope, $routeParams, student, subjectsList, studentsAPI, $location) {
	$scope.student = student.data;
	$scope.subjectsList = subjectsList.data;

	$scope.deleteStudentInfo = function (student) {
		console.log('Deleting:' + student.name)
		studentsAPI.deleteStudentInfo(student).success(function (data) {
			delete $scope.student;
            // $scope.editStudentForm.$setPristine();
            $location.path("/students");
        })
    };
});