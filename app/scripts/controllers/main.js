'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function($scope,testFactory, $http, customerFactory) {
    $scope.todos = [];
    // $scope.abc = testFactory.sayHello('angular');

    // Get all languages
	  $scope.languages = testFactory.getlanguages();
	  var authToken;

	  //get customers
	  customerFactory.getCustomers()
	  .success(function(data){
	  	$scope.customers = data.records;
	  })

	  // $http.get('http://www.w3schools.com/angular/customers.php').then(function(response) {
	  // 	authToken = response.headers('A-Token');
	  //   $scope.customers = response.data;
	  // });

    $scope.addTodo = function(){
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };

    $scope.removeTodo = function(index){
    	$scope.todos.splice(index, 1);
    };
  });
