/*eslint-env mocha */

var hello = require(__dirname + '/../hello');
var expect = require('chai').expect;

describe('hello without using process.argv', function() {
  beforeEach(function() {                     //need to backup the argv for reversion
    this.processArgvBackup = process.argv;
    process.argv = ['node', 'hello.js'];      //formatted correctly, as an array
  });
  afterEach(function() {
    process.argv = this.processArgvBackup;    //restore original values
  });
  it('should greet the Salmon with no process.argv', function() {
    expect(hello()).to.eql('hello Salmon');
  });
});

describe('hello with process.argv', function() {
  beforeEach(function() {                     //same befores and afters
    this.processArgvBackup = process.argv;
    process.argv = ['node', 'hello.js', 'test'];      //added 'test' as [2] argument
  });
  afterEach(function() {
    process.argv = this.processArgvBackup;
  });
  it('should greet test using process.argv', function() {
    expect(hello()).to.eql('hello test');
  });
});
