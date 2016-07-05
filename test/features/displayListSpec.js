const Browser = require('zombie');
const app = require('../../app/server');

describe('Display to do list', function() {
  var browser;

  before(function() {
    browser = new Browser({site: 'http://localhost:3000'});
  });

  before(function(done) {
    browser.visit('/', done);
  });

  it('sends an okay response', function() {
    browser.assert.status(200);
  });

  it('can display a task that has been added by a user', function(){
    // browser.fill.in()
  });

});
