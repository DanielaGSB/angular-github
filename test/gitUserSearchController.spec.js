describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;


  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    }, {
       "login": "stephenlloyd",
       "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
       "html_url": "https://github.com/stephenlloyd"
     }];

  describe('initialization', function() {

    beforeEach(inject(function($controller) {
      ctrl = $controller('GitUserSearchController');
    }));

    it('initialises with an empty search result and term', function() {
      expect(ctrl.searchResult).toBeUndefined();
      expect(ctrl.searchTerm).toBeUndefined();
    });
  });

  describe('when searching for a user', function() {
    var fakeSearch, scope;

    beforeEach(function() {
      fakeSearch = jasmine.createSpyObj('fakeSearch', ['query']);
      module({Search : fakeSearch});
    });

    beforeEach(inject(function($q, $rootScope, $controller) {
      scope = $rootScope;
      fakeSearch.query.and.returnValue($q.when({ data: items }));
      ctrl = $controller('GitUserSearchController');
    }));


    //  var httpBackend;

    //  beforeEach(inject(function($httpBackend) {
    //    httpBackend = $httpBackend;
    //    httpBackend
    //       .expectGET("https://api.github.com/search/users?access_token=1a90749a3de6d3f9d941e7e0b5a872574b8efdfe&q=hello")
    //       .respond(
    //         { items: items }
    //       );
    //    }));

    // afterEach(function() {
    //    httpBackend.verifyNoOutstandingExpectation();
    //    httpBackend.verifyNoOutstandingRequest();
    //  });

      it('displays search results', function() {
        ctrl.searchTerm = 'hello';
        ctrl.doSearch();
        scope.$apply();         // equivalente a flush para mock
        expect(ctrl.searchResult).toEqual(items);
      });
    });
  });
