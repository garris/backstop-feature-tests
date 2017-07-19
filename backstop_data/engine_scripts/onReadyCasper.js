module.exports = function (casper, scenario, vp) {
  console.log('onReady.js is running for: ', scenario.label);

    casper.waitForSelector(
      scenario.someOnReadyScriptParameter,
      function() {console.log('FOUND > ' + scenario.someOnReadyScriptParameter) },
      function() {console.error('ERROR: NOT FOUND > ' + scenario.someOnReadyScriptParameter) },
      10000
    );
    casper.thenEvaluate(function () {
      console.log('Hi there from inside your browser.')
      document.querySelector('.jumbotron p').style.background = 'greenyellow';
      document.querySelector('.jumbotron p').style.color = '#333';
      document.querySelector('.jumbotron p').style.padding = '27px';
      var result = document.getElementsByTagName('body')[0].classList[0];
      console.log('result for ' + vp.label + ' >', result)
    })
};
