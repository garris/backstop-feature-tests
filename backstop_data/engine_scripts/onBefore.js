let cookiePath = "./backstop_data/cookies.json";

const fs = require('fs');
const path = require('path');
cookiePath = path.resolve(cookiePath);

let COOKIES = [];

if (fs.existsSync(cookiePath)) {
  COOKIES = COOKIES.concat(JSON.parse(fs.readFileSync(cookiePath)));
} else {
  console.log('Cookie file not found: ' + cookiePath);
}

module.exports = function (chromyChain, scenario, vp) {
  console.log('onBefore.js is running for: ', vp.label);
  COOKIES.forEach((cookie) => {
     chromyChain.setCookie(cookie);
  })
  return chromyChain;
};
