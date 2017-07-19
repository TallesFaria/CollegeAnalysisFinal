angular.module("collegeAnalysis").factory("studentsAPI", function ($http, config) {
	var _getStudents = function () {
		return $http.get(config.baseUrl + "/students");
	};

	var _getStudent = function (id) {
		console.log(config.baseUrl + "/students/" + id);
		return $http.get(config.baseUrl + "/students/" + id);
	};

	var _saveStudentInfo = function (student) {
		return $http.post(config.baseUrl + "/students", student);
	};

	var _saveStudentEdit = function (student) {
		return $http.post(config.baseUrl + "/students/edit", student);
	};

	var _deleteStudentInfo = function (student) {
		console.log('Deleting:' + student)
		return $http.post(config.baseUrl + "/students/delete", student);
	};

	return {
		getStudents: _getStudents,
		getStudent: _getStudent,
		saveStudentInfo: _saveStudentInfo,
		saveStudentEdit: _saveStudentEdit,
		deleteStudentInfo: _deleteStudentInfo
	};
});