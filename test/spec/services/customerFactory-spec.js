"use strict";

describe('customerFactory', function () {
    // beforeEach(module('mytodoApp'));
    // var service,httpBackend, testUrl;

    // beforeEach(inject(function ($injector) {
    // // angular.mock.inject(function ($injector) {
    //     httpBackend = $injector.get('$httpBackend');
    //     service = $injector.get('customerFactory');
    //   }));
    // // }));



    // it('should call the backend testurl ', function () {
    //     httpBackend.expectGET('http://www.w3schools.com/angular/customers.php').respond();
    //     service.getCustomers();
    //     httpBackend.flush();
    // });

  var httpBasedService,httpBackend;

  beforeEach(function (){  
      // load the module.
      module('mytodoApp');
      
      // get your service, also get $httpBackend
      // $httpBackend will be a mock, thanks to angular-mocks.js
      inject(function($injector) {
        httpBasedService = $injector.get('customerFactory');    
        httpBackend = $injector.get('$httpBackend');
      });
    });
    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should match the response.', function (){
      // set up some data for the http call to return and test later.
      var returnData = { "records":[
           {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}//,
           
           ] };
      
      // expectGET to make sure this is called once.
      httpBackend.expectGET('http://www.w3schools.com/angular/customers.php').respond(returnData);
      
      // make the call.
      var returnedPromise = httpBasedService.getCustomers();
      
      // set up a handler for the response, that will put the result
      // into a variable in this scope for you to test.
      var result;
      returnedPromise.then(function(data) {
        result = data;
      });
      
      // flush the backend to "execute" the request to do the expectedGET assertion.
      httpBackend.flush();
      
      // check the result. 
      // (after Angular 1.2.5: be sure to use `toEqual` and not `toBe`
      // as the object will be a copy and not the same instance.)
      expect(result).toEqual(returnData);

      // httpBasedService.getCustomers(function (result) {
      //     expect(result).toEqual({
      //     })
      //   });

    });
});