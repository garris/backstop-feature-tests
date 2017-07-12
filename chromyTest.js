const Chromy = require('chromy');
const path = require('path');
const fs = require('fs');
const onReady = require('./backstop_data/engine_scripts/onReady');




let chromy = new Chromy({chromeFlags: ['--window-size=320,480'], visible: true});

chromy
  .chain()
  .console(function (text, consoleObj) {
    if (console[consoleObj.level]) {
      console[consoleObj.level]((consoleObj.level).toUpperCase() + ' > ', text);
    }
  })
  .goto('examples/featureTests/index.html')
  .wait(1)
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
  console.log('>>>',error, selectors[index], sub);
  fs.writeFileSync(`./screens/${selectors[index]}_${sub}.png`, png);
}
