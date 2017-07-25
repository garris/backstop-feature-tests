module.exports = function (chromy, scenario, vp) {
  console.log('>>>')
  console.log(chromy.wait)
  return chromy
    .wait(scenario.someOnReadyScriptParameter)
    .evaluate(`_vpLabel = '${vp.label}'`)
    .evaluate(function () {
      console.log('Testing viewport: ' + _vpLabel)
      document.querySelector('.jumbotron p').style.background = 'greenyellow';
      document.querySelector('.jumbotron p').style.color = '#333';
      document.querySelector('.jumbotron p').style.padding = '27px';
      return document.getElementsByTagName('body')[0].classList[0];
    })
};
