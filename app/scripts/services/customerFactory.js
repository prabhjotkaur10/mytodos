"use strict";

angular.module('mytodoApp')
	.factory('customerFactory', function($http){

  var customers = {};
  
  //get request to the read cities
  customers.getCustomers = function(){
    return $http.get('http://www.w3schools.com/angular/customers.php');
  };
  return customers;              
});