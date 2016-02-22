angular.module('mytodoApp')
.factory('signInFactory', function($http){
	baseUrl = 'api/v1';
	authUrl = "/api/v1/auth";
	access_token = '123'; //replace your access token here
  var signin_user = {};
  var headers = { 'Authorization': 'Token token="' + access_token + '"' };

  //Sign in
  signin_user.signIn = function(formData){
    var dataObj = {
      login_id: formData.email,
      password:formData.password
    };
    return $http.post('http://localhost:3000/api/v1/auth/sign_in' , dataObj, {headers: headers});
  };

  return signin_user;
})