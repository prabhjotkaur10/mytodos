angular.module('mytodoApp')
.factory('PopularMovies', function($resource) {
  return $resource('popular/:movieId', {movieId: '@id'},{
    update:{
      method: 'PUT'
    },
    save:{
      method: 'POST'
    },
    get:{
      method:'GET'
    }
  })
})