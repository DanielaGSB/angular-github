// describe('Github Profile finder', function() {

  var mock = require('protractor-http-mock');
  mock(['githubUserSearch.js']);

  describe('Github profile finder', function(){
    it('finds profiles', function() {
      browser.get('http://localhost:8080');

      element(by.model('searchCtrl.searchTerm')).sendKeys('ashdl');
      element(by.className('btn')).click();

      expect(element(by.binding('user.login')).getText()).
        toEqual('ashdl76');
    });

  afterEach(function(){
    mock.teardown();
  });

});


//   var searchBox = element(by.model('searchCtrl.searchTerm'));
//   var searchButton = element(by.className('btn'));
//
//   beforeEach(function() {
//     browser.get('http://localhost:8080');
//   });
//
//   it('has a title', function() {
//     expect(browser.getTitle()).toEqual('Github user search');
//   });
//
//   it('finds profiles', function() {
//
//     searchBox.sendKeys('spike');
//     searchButton.click();
//
//     var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
//     expect(profiles.get(0).getText()).toBe('spike');
//   });
//
//   it('finds the last Spike', function() {
//     searchBox.sendKeys('spike');
//     searchButton.click();
//
//     var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
//     expect(profiles.last().getText()).toEqual('spikebike');
//   });
// });
