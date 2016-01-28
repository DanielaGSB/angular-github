
describe('factory: Search', function() {
  beforeEach(module('GitUserSearch'));

  var search;

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }
  ];

  var httpBackend;

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .expectGET("https://api.github.com/search/users?access_token=1a90749a3de6d3f9d941e7e0b5a872574b8efdfe&q=hello")
      .respond(
        { items: items }
      );
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('returns search results', function() {
    search.query('hello')
      .then(function(response) {
        expect(response.data.items).toEqual(items);
      });
    httpBackend.flush();
  });
});
