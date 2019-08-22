var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['facilities.js'],
  capabilities: {
	    'browserName': 'chrome'
	  },

	  directConnect: true,
	  framework: 'jasmine',
	 

	  
   onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   },

   


   
   jasmineNodeOpts: {
    showColors: true, 
    defaultTimeoutInterval: 90000// Use colors in the command line report.
  }

  
  

};
