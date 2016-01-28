githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  var access_token = '1a90749a3de6d3f9d941e7e0b5a872574b8efdfe';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': access_token
        }
      });
    }
  };
}]);
