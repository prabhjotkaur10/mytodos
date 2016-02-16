"use strict";

angular.module('mytodoApp')
	.factory('testFactory', function($http){
  // return {
  //   sayHello: function(text){
  //       return "Factory says \"Hello " + text + "\"";
  //   }
  //   ,
  //   sayGoodbye: function(text){
  //       return "Factory says \"Goodbye " + text + "\"";
  //   }  
  // }

  // var customers = {};
  
  // //get request to the read cities
  // customers.getCustomers = function(){
  //   return $http.get('http://www.w3schools.com/angular/customers.php');
  // };
  // return customers; 
  var lng = {}, 
    _languages = ['en', 'es', 'fr'];
  
  lng.getlanguages = function() {
    return _languages;
  }
  
  return lng;              
});