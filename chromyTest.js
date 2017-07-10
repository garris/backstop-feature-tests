const Chromy = require('chromy');
const path = require('path');
const fs = require('fs');
const onReady = require('./backstop_data/engine_scripts/onReady');


// console.log()

function captureAndSave(chromyObj, selector) {
  console.log('captureAndSave >')
  return chromyObj
      .screenshot()
      .result(png => console.log('found = ', !!png))
}



let chromy = new Chromy({chromeFlags: ['--window-size=320,480'], visible: true});

c1 = chromy
  .chain()
  .console(function (text, consoleObj) {
    if (console[consoleObj.level]) {
      console[consoleObj.level]((consoleObj.level).toUpperCase() + ' > ', text);
    }
  })
  .goto('examples/featureTests/index.html');

// let checkText = openedIndexFile.evaluate(() => {
//     return document.getElementsByTagName('h1')[0].innerText;
//   })
//   .result((result) => {
//     console.log('checkText >', result);
//   });

// c2 = onReady(c1, null, {name: "monkey"})
//             .wait(500)
//             .result(_ => 'NOT_EXIST');




// const s3 = s2
//   .evaluate(() => {
//     return document.getElementsByTagName('a')[0].innerText;
//   })
//   .result((result) => {
//     console.log('RESULT >', result);
//   });
// console.log(doesItExist);

// var result = doesItExist
  // .screenshot()

c1
  .screenshotMultipleSelectors(
    ["body", "h1", "h2"],
    handlescreenshots,
    {useQuerySelectorAll: true}
  )
  .result(png => console.log('result = ', png))
  .wait(1)
  .end()
  .then(_ => {
    chromy.close()
    console.log('success');
  })
  .catch(e => {
    // chromy.close();
    console.log('error > ' + e);
  });


function handlescreenshots(error, png, index, selectors, sub){
  console.log('>>>',error, selectors[index], sub);
  fs.writeFileSync(`./screens/${selectors[index]}_${sub}.png`, png);
}



  // .screenshotSelector('html')
  // .result((png) => {
  //   fs.writeFileSync('./chromyTest.png', png)
  // })
