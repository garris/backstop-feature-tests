module.exports = function (chromy, scenario, vp) {
  console.log('onReady.js is running for: ', vp.name);
  return chromy
    .wait(scenario.someOnReadyScriptParameter)
    .evaluate(function () {
      console.log('Hi there from inside your browser.')
      document.querySelector('.jumbotron p').style.background = 'greenyellow';
      document.querySelector('.jumbotron p').style.color = '#333';
      document.querySelector('.jumbotron p').style.padding = '27px';
      return document.getElementsByTagName('body')[0].classList[0];
    })
    .result(resultFromPreviousEval => console.log('result for ' + vp.label + ' >', resultFromPreviousEval));
};
