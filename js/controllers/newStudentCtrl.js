angular.module('collegeAnalysis').controller('newStudentCtrl', function ($scope, studentsAPI, $location, subjectsList) {
	$scope.subjectsList = subjectsList.data;

    $scope.saveStudentInfo = function (studentInfo) {
        studentsAPI.saveStudentInfo(studentInfo).success(function (req) {
            delete $scope.studentInfo;
            $location.path(`/studentDetails/${req}`);
        });
    };
});
