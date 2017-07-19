angular.module("collegeAnalysis").filter("name", function () {
	return function (input) {
		var namesList = input.split(" ");
		var namesListFormatted = namesList.map(function (name) {
			if(name.length <= 3) {
                if(/(da|de|do|das|dos)/.test(name)) return name;
            }
			return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
		});
		return namesListFormatted.join(" ");
	};
});