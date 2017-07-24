angular.module('collegeAnalysis').directive('uiGrade', function () {
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, ctrl) {
			console.log(element);
			var _formatGrade = function (grade) {
				grade = grade.replace(/[^0-9]+/g, '');
				if (grade.length > 2 && grade !== '100') {
					grade = grade.substring(0, 2) + '.' + grade.substring(2);
				}
				if (grade.length > 5) {
					grade = grade.substring(0, 5);
				}
				return grade;
			};

			element.bind('keyup', function () {
				ctrl.$setViewValue(_formatGrade(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});