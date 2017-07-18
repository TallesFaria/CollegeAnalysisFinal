angular.module("collegeAnalysis").config(function ($routeProvider) {
	$routeProvider.when("/students", {
		templateUrl: "view/studentsList.html",
        controller: "collegeAnalysisCtrl",
        resolve: {
			studentsList: function (studentsAPI) {
				return studentsAPI.getStudents();
			},
			subjectsList: function (subjectsAPI) {
				return subjectsAPI.getSubjects();
			}
		}
	});
	$routeProvider.when("/addNewStudent", {
		templateUrl: "view/newStudent.html",
		controller: "newStudentCtrl",
		resolve: {
			subjectsList: function (subjectsAPI) {
				return subjectsAPI.getSubjects();
			}
		}
	});
	$routeProvider.when("/studentDetails/:id", {
		templateUrl: "view/studentDetails.html",
		controller: "studentDetailsCtrl",
		resolve: {
			student: function (studentsAPI, $route) {
				return studentsAPI.getStudent($route.current.params.id);
            },
            subjectsList: function (subjectsAPI) {
				return subjectsAPI.getSubjects();
			}
		}
	});
	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});
	$routeProvider.otherwise({redirectTo: "/students"});
});