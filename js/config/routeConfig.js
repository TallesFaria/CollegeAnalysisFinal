angular.module('collegeAnalysis').config(function ($routeProvider) {
	$routeProvider
		.when('/students', {
			templateUrl: 'view/studentsList.html',
			controller: 'collegeAnalysisCtrl',
			resolve: {
				studentsList: function (studentsAPI) {
					return studentsAPI.getStudents();
				},
				subjectsList: function (subjectsAPI) {
					return subjectsAPI.getSubjects();
				}
			}
		})
		.when('/addNewStudent', {
			templateUrl: 'view/newStudent.html',
			controller: 'newStudentCtrl',
			resolve: {
				subjectsList: function (subjectsAPI) {
					return subjectsAPI.getSubjects();
				}
			}
		})
		.when('/studentDetails/:id', {
			templateUrl: 'view/studentDetails.html',
			controller: 'studentDetailsCtrl',
			resolve: {
				student: function (studentsAPI, $route) {
					return studentsAPI.getStudent($route.current.params.id);
				},
				subjectsList: function (subjectsAPI) {
					return subjectsAPI.getSubjects();
				}
			}
		})
		.when('/editStudentDetails/:id/edit', {
			templateUrl: 'view/editStudentDetails.html',
			controller: 'editStudentDetailsCtrl',
			resolve: {
				student: function (studentsAPI, $route) {
					return studentsAPI.getStudent($route.current.params.id);
				}
			}
		})
		.when('/error', {
			templateUrl: 'view/error.html'
		})
		.otherwise({ redirectTo: '/students' });
});
