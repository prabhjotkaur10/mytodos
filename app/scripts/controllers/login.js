angular.module('mytodoApp')
.controller('loginCtrl', function($scope, signInFactory){
	$scope.loginForm={};
	$scope.loginForm.email = "";
	$scope.loginForm.password = "";
	$scope.loggedIn = false;
	$scope.user_id = "";
	$scope.valid_email = false;
	$scope.valid_pwd = false;

	$scope.validate = function($email){
		var emailReg = /^[A-Za-z]+[A-Za-z0-9._]+@[A-Za-z]+\.[A-Za-z.]{2,5}$/;
		var email_match=emailReg.test($email);
		if(email_match){
			$scope.valid_email = true;
		}else{
			$scope.valid_email = false
		}
	}

	$scope.validatePwd = function(pwd){
		if(pwd.length >= 8){
			$scope.valid_pwd = true;
		}else{
			$scope.valid_pwd = false;
		}
	}

	$scope.signinUser = function(){
		$scope.validate($scope.loginForm.email);
		$scope.validatePwd($scope.loginForm.password);
		console.log($scope.valid_pwd);
		console.log($scope.valid_email)
		if($scope.valid_email && $scope.valid_pwd){
			signInFactory.signIn($scope.loginForm)
			.then(function(data){
				$scope.data = 'this is a mocked response';
				$scope.loggedIn = true;
				$scope.user_id = data.data.id;
				// console.log($scope.user_id)
			})
		}
	}
})