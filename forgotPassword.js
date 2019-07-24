describe('practice exercise',function(){
	 var using = require('jasmine-data-provider');
	 var obj=  require("./Locator.js");
	 var dataa=require("./forgotPasswordData.js");
	  using(dataa.Datadriven, function (data, description)
	 {
		 it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		//element(by.css('input[value="03AOLTBLR-vuw_z95p2G9XcSdzhw_GWYelXmpWzAXvSi_VDFq11Abf3CqduP6uqt6sBjpyBfYpY7Xt1yrQolQUhd8CDBX16_tocrEOHphmH5rvdWpU2v2Bxf6OJa0Wd1_Ats7ZSRsbKAHbBng1o6Naxyn9J1B6e7nvUd7UC_igQ4r179iit9eApXRJvSnZgeiirduueUZLgBs9gFyJMM1B_ovSDoSaYZPh1dcY40r95SNGmEhuSZlTEgvhW1BNqQod3l8mBG5f06fHOK6wcKTPeRV2QaS-2UB-RA"]')).click();
		obj.ForgotPasswordLink.click().then(function(){
		browser.sleep(5000);
		obj.ForgotPasswordEmailID.sendKeys(data.EmailID);
		browser.sleep(5000);
		obj.ForgotPasswordSubmitButton.click();
		browser.sleep(5000);

	})
		browser.sleep(5000);

})

	 });
	 
})