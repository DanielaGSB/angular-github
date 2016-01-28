  var mock = require('protractor-http-mock');

  describe('Github profile finder', function(){

    beforeEach(function() {
      mock(['githubUserSearch.js']);
      browser.get('http://localhost:8080');
    });

    afterEach(function(){
      mock.teardown();
    });

      it('has a title', function() {
        expect(browser.getTitle()).toEqual('Github user search');
      });

      it('finds profiles', function() {

        element(by.model('searchCtrl.searchTerm')).sendKeys('ashdl');
        element(by.className('btn')).click();

        expect(element(by.binding('user.login')).getText()).
          toEqual('ashdl76');
      });

});


//   var searchBox = element(by.model('searchCtrl.searchTerm'));
//   var searchButton = element(by.className('btn'));
//
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
