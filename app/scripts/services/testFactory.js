"use strict";

angular.module('mytodoApp')
	.factory('testFactory', function(){
  return {
    sayHello: function(text){
        return "Factory says \"Hello " + text + "\"";
    }
    ,
    sayGoodbye: function(text){
        return "Factory says \"Goodbye " + text + "\"";
    }  
  }               
});