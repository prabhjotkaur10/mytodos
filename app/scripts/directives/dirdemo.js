'use strict';

angular.module('mytodoApp')
.directive('dirdemo', function() {
  return {
			restrict: 'E',
      // Better to externalize to templateUrl, this is for demonstration sake
      template: '<div>Hello {{name}}</div>',
      replace: false
		};
});