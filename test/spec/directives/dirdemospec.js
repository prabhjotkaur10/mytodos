'use strict';

describe('Directive: dirdemo', function () {
	var element,
	name = 'Homer';
  // load the controller's module
  beforeEach(module('mytodoApp'));

  beforeEach(function(){
  	element = angular.element('<dirdemo/>');
  	inject(function($rootScope,$compile){
  		var scope = $rootScope.$new();
  		scope.name = name;
  		$compile(element)(scope);
  		scope.$digest();
  	});
  });

  it('says hello', function(){
  	expect(element.text()).toBe('Hello Homer');
  })
});
