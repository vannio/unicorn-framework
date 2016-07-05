const Browser = require('zombie');
const app = require('../../app/server');
const http = require('http');
console.log("moustache");

describe('Display to do list', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
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
