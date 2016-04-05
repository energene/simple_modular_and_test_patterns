var greet = require(__dirname + '/greet');

var hello = module.exports = exports = function() {
  var greeting = greet(process.argv[2] || 'Salmon');//if process.argv dne, use Salmon
  console.log(greeting);
  return greeting;//need this value for use in test
};

hello();
