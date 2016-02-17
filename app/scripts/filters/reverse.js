angular.module('mytodoApp')
	.filter('reverse', function () {
		return function(text){
			return text.split("").reverse().join("");
		}
	})