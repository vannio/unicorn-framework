const Browser = require('zombie');
const app = require('../../app/server');

describe('Display to do list', function() {

  before(function() {
    this.browser = new Browser({site: 'http://localhost:3000'});
  });

  describe('test', function() {

    before(function(done) {
      this.browser.visit('/', done);
    });

    it('sends an okay response', function() {
      this.browser.assert.status(200);
    });
  });
});
