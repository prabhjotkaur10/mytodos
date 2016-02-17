describe('reverse suite', function(){
	beforeEach(module('mytodoApp'))
	var reverseFilter,
	scope;

	beforeEach(inject(function ($filter, $rootScope) {
    scope = $rootScope.$new();
    reverseFilter = $filter('reverse', {
      $scope: scope
    });
  }));

	it('should reverse a string', function(){
		expect(reverseFilter('ABCD')).toEqual('DCBA');
	})
})