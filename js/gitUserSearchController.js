githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;

  var access_token = '1a90749a3de6d3f9d941e7e0b5a872574b8efdfe';

  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {

    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };
}]);
