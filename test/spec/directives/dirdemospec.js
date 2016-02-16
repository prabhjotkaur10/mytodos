'use strict';

describe('Directive: dirdemo', function () {
  var element,
  name = 'Homer';
  // load the controller's module
  beforeEach(module('mytodoApp'));

  beforeEach(inject(function($rootScope,$compile){
    element = angular.element('<dirdemo/>');
    var scope = $rootScope.$new();
    scope.name = name;
    $compile(element)(scope);
    scope.$digest();
  }));

  it('says hello', function(){
    expect(element.text()).toBe('Hello Homer');
  })
});
