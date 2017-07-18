angular.module("collegeAnalysis").controller("newStudentCtrl", function ($scope, studentsAPI, $location, subjectsList) {
	$scope.subjectsList = subjectsList.data;
    
    $scope.saveStudentInfo = function (student) {
        studentsAPI.saveStudentInfo(student).success(function (data) {
            delete $scope.student;
            $location.path("/students");
        })
    };
});