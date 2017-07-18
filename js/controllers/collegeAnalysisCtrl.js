angular.module("collegeAnalysis").controller("collegeAnalysisCtrl", function ($scope, $http, studentsList, subjectsList) {
    $scope.app = "College Analysis";
    $scope.studentsList = studentsList.data;
    $scope.subjectsList = subjectsList.data;

    $scope.sortStudentsBy = function (searchTerm) {
		$scope.sortStudentsCriteria = searchTerm;
		$scope.sortDirection = !$scope.sortDirection;
	};
});