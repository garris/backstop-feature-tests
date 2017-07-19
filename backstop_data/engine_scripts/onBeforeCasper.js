var cookiePath = "./backstop_data/cookies.json";

const fs = require('fs');

var COOKIES = [];

COOKIES = COOKIES.concat(JSON.parse(fs.read(cookiePath)));

module.exports = function (casper, scenario, vp) {
  console.log('onBefore.js is running for: ', vp.label);
  casper.page.cookies = COOKIES;
};
