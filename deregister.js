describe('practice exercise',function(){
	var using = require('jasmine-data-provider');
	var obj=require("./Locator.js");
	 var dataa=require("./logindata.js");
	  using(dataa.Datadriven, function (data, description){
		  it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		
		 obj.UserId.sendKeys(data.f);
	    obj.Password.sendKeys(data.s).then(function(){
	    obj.Login.click();
		browser.sleep(5000)
		})
		obj.ml.click();
		browser.sleep(5000);
		var deregister=obj.Dl.get(2);
		deregister.click();
		browser.sleep(5000);
		obj.Dyb.click();
		browser.sleep(5000);



		

})

	  });
	  //data stores actual data
	  //description stores sub object names
	  //for every iteration one data set is picked
	
	
	
	
})
