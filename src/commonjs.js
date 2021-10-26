var mod = require('./commonjs-mod');

exports.testCall1 = function () {
  console.log('commonjs testCall1 : ' + mod.something());
};

exports.testCall2 = function () {
  console.log('commonjs testCall2');
};
