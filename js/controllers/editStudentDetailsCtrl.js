angular.module("collegeAnalysis").controller("editStudentDetailsCtrl", function ($scope, studentsAPI, student, $location) {
    $scope.student = student.data;
    $scope.saveStudentInfo = function (student) {
        studentsAPI.saveStudentEdit(student).success(function (data) {
            delete $scope.student;
            // $scope.editStudentForm.$setPristine();
            $location.path("/students");
        })
    };
});