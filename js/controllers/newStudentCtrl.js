angular.module('collegeAnalysis').controller('newStudentCtrl', function ($scope, studentsAPI, $location) {
	$scope.saveStudentInfo = function (studentInfo) {
        studentsAPI.saveStudentInfo(studentInfo).success(function (req) {
            delete $scope.studentInfo;
            $location.path(`/studentDetails/${req}`);
        });
    };
});
