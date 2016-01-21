var request = require('request');
var server = require('./../server/server.js');
var base_url = 'http://localhost:5000/';

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function() {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
      });
    });
  });
});