describe('practice exercise',function(){
	var using = require('jasmine-data-provider');
	var obj=require("./Locator.js");
	 var dataa=require("./logindata.js");

	  using(dataa.Datadriven, function (data, description){
		  it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		//browser.waitForAngularEnabled(false);
		//element(by.css('div[class="validation-failed ng-star-inserted"]'));
		obj.UserId.clear();
		obj.Password.clear();
		 obj.UserId.sendKeys(data.f);
	   obj.Password.sendKeys(data.s).then(function(){
		obj.Login.click();
		browser.sleep(5000);
		if(description==='case1'){
			console.log("hello1");
			//console.log(description);
			browser.sleep(5000);
		expect((obj.error).getText()).toBe("Username or password is incorrect");
		obj.error.getText().then(function(text)
		{
			console.log(text);

		})
		
		
	
		browser.sleep(5000);
		}
		
		
		 
		browser.sleep(5000);
		
		});
		
})

	  });
	 	
})
