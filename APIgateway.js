describe('practice exercise',function(){
	 var obj=  require("./Locator.js");
	
	
	
	it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		element(by.id("mat-input-0")).sendKeys("26june@yopmail.com");
		element(by.id("mat-input-1")).sendKeys("@Welcome.2").then(function(){
		element(by.className('login-button mat-flat-button mat-primary')).click();
		browser.sleep(5000);
		
		})
		obj.ml.click();
			browser.sleep(5000);
		var Apigateway=obj.pl.get(0);
			Apigateway.click();
			browser.sleep(5000);
			obj.APIg.click();
			browser.sleep(5000);
			obj.close.click();
			browser.sleep(5000);
			//regenerate secret is missing

		
})
})