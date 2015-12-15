
// Testing index.js: One positive and one negative test.

var indexFile = require('../index.js');
var should = require('should');

describe('Testing is_palindrome', function() {
     it('+ Should return true if string is a palindrome', function(done) {
     	indexFile.is_palindrome('101').should.be.true;
        done();
     });

     it('- Should return false if string is a palindrome', function(done) {
     	indexFile.is_palindrome('1010').should.be.false;
        done();
     });
  });