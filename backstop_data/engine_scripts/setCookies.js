const DOMAIN = 'https://garris.github.io/';
const COOKIES = [
  {
    "url": DOMAIN,
    "expirationDate": 1528614000,
    "hostOnly": false,
    "httpOnly": false,
    "name": "test2",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "XYZ",
    "id": 1000
  },
  {
    "url": DOMAIN,
    "expirationDate": 1528614000,
    "hostOnly": false,
    "httpOnly": false,
    "name": "test",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "ABCDE",
    "id": 1001
  },
  {
    "url": DOMAIN,
    "expirationDate": 1528614000,
    "hostOnly": false,
    "httpOnly": false,
    "name": "test3",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "FOO",
    "id": 1001
  }
]

module.exports = function (chromyChain, scenario, vp) {
  console.log('onBefore.js is running for: ', vp.label);
  COOKIES.forEach((cookie) => {
     chromyChain.setCookie(cookie);
  })
  return chromyChain;
};
