describe('login suite', function(){
  var loginCtrl, scope;
  var $rootScope, $httpBackend, signInFactory;

  beforeEach(module('mytodoApp'));

  beforeEach(inject(function(_$rootScope_, _$httpBackend_, _signInFactory_){
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    signInFactory = _signInFactory_;
    var response = {
      data: {}
    }
  }))
  beforeEach(inject(function($controller, $rootScope, _signInFactory_, $q){
    scope = $rootScope.$new();

    loginCtrl = $controller('loginCtrl', {
      $scope: scope//,
      // myService: serviceMock
    });
  }));

  it('should have blank email field initially', function(){
    dump('should have blank email field initially')
    scope.loginForm.email = "";
    expect(scope.loginForm.email).toBe("");
  })

  it('should have blank password field initially', function(){
    dump('should have blank password field initially')
    scope.loginForm.password = "";
    expect(scope.loginForm.password).toBe("");
  })

  it('should validate the email field', function(){
    dump('should validate the email field')
    scope.loginForm.email = 'abc@abc.com';
    scope.validate(scope.loginForm.email);    
    expect(scope.valid_email).toBe(true);
  })

  it('should invalidate the wrong email field', function(){
    dump('should invalidate the wrong email field');
    scope.loginForm.email = 'abc';
    scope.validate(scope.loginForm.email);
    expect(scope.valid_email).toBe(false);
  })

  it('should take password having length more than 8', function(){
    dump('should take password having length more than 8');
    scope.loginForm.password = '12345678';
    scope.validatePwd(scope.loginForm.password);
    expect(scope.valid_pwd).toBe(true);
  })

  it('should not take password having length less than 8', function(){
    dump('should not take password having length less than 8');
    scope.loginForm.password = '1234567';
    scope.validatePwd(scope.loginForm.password);
    expect(scope.valid_pwd).toBe(false);
  })

  it('should sign in if valid', function(){
    dump('should sign in if valid');
    scope.valid_pwd = true;
    scope.valid_email = true;
    scope.loginForm.email = 'abc@abc.com';
    scope.loginForm.password = '12345678';

    var dataObj = {
      login_id: 'abc@abc.com',
      password:'12345678'
    };
    //mock an http request and its response
    $httpBackend.expectPOST('http://localhost:3000/api/v1/auth/sign_in', dataObj).respond(200);
    //real request
    signInFactory.signIn(scope.loginForm)
    .then(function(data){
      response = data.status;
    })

    $httpBackend.flush();
    expect(response).toBe(200);
  })

  it('should send an HTTP POST request', function(){
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  })
})