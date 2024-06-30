// lib/timers-promises-polyfill.js
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
const setImmediatePromise = util.promisify(setImmediate);

module.exports = { 
  setTimeout: setTimeoutPromise,
  setImmediate: setImmediatePromise,
};
