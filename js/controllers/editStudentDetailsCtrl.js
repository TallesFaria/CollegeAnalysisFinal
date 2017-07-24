angular.module('collegeAnalysis').controller('editStudentDetailsCtrl', function ($scope, studentsAPI, student, $location) {
    $scope.student = student.data;
    $scope.saveStudentInfo = function (studentInfo) {
        studentsAPI.saveStudentEdit(studentInfo).success(function () {
            studentsAPI.getStudents().success(function (data) {
                console.log(data);
            });
            $location.path(`/studentDetails/${studentInfo.id}`);
        });
    };
});
