angular.module('mytodoApp')
.factory('omdbApi1', function($http, $q) {
	var service = {};
	var baseUrl = "http://www.omdbapi.com/?v=1&";

	function httpPromise(url){
		var deferred = $q.defer();
		$http.get(url)
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(){
				deferred.reject();
			})
			return deferred.promise;
	}

	service.search = function(query){
			return httpPromise(baseUrl + 's=' + encodeURIComponent(query))
	}

	service.find = function(id){
			return httpPromise(baseUrl + 'i=' + id)
	}

	service.deleteMovie = function(movie_id){
    var params = {
        movie_id: movie_id
    };
    var fake_url = 'http://www.example.com/?v=1&';

    return $http.post(fake_url, params)
    .success(function(data){
      result = data;
    })
    .error(function(error){
    });
  };

	return service;
})