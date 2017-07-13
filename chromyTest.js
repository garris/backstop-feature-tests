const Chromy = require('chromy');
const path = require('path');
const fs = require('fs');
const onReady = require('./backstop_data/engine_scripts/onReady');


const DOMAIN = 'https://garris.github.io/';
const DOMAIN_PATH = DOMAIN + 'BackstopJS/examples/featureTests/';
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

let chromy = new Chromy({chromeFlags: ['--window-size=1280,800'], visible: true});

var chromyChain = chromy.chain();

chromyChain
  .console(function (text, consoleObj) {
    if (console[consoleObj.level]) {
      console[consoleObj.level]((consoleObj.level).toUpperCase() + ' > ', text);
    }
  })

COOKIES.forEach((cookie) => {
   chromyChain.setCookie(cookie);
})

chromyChain
  .goto(DOMAIN_PATH)
  .wait('._READY')
  .screenshotMultipleSelectors(
    ["body", "h1", "h2"],
    handlescreenshots,
    {useQuerySelectorAll: true}
  )
  .end()
  .then(_ => {
    chromy.close()
    console.log('success');
  })
  .catch(e => {
    chromy.close()
    console.log('error caught > ' + e);
  });


function handlescreenshots(error, png, index, selectors, sub){
  console.log('saving >', selectors[index], sub);
  fs.writeFileSync(`./screens/${selectors[index]}_${sub}.png`, png);
}
