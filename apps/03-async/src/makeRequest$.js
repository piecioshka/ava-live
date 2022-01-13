const { from } = require("rxjs");
const { makeRequest } = require("./makeRequest");

const makeRequest$ = (url) => from(makeRequest(url));

module.exports = {
  makeRequest$,
};
