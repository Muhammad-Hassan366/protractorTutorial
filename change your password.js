describe('practice exercise',function(){
	  var using = require('jasmine-data-provider');
	 var obj=  require("./Locator.js");
	 var dataa=require("./changepassdata.js");
	 var dataaa=require("./logindata.js");

	 using(dataaa.Datadriven, function (data, description) {
		 it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		
		 obj.UserId.sendKeys(data.f);
	    obj.Password.sendKeys(data.s).then(function(){
	    obj.Login.click();
		browser.sleep(5000);
		})

	 })
	 

	 using(dataa.Datadriven, function (data, description)
	 {
		 it('practice exsercise',function(){
		
	      obj.ml.click();
		   browser.sleep(5000);
			
			var cpp=obj.pl.get(1);
			cpp.click();
			browser.sleep(5000);
			obj.op.sendKeys("@Welcome.2");
			browser.sleep(2000);
			obj.newp.sendKeys("@Welcome.3");
			browser.sleep(2000);
			obj.cp.sendKeys("@Welcome.3");
			browser.sleep(2000);
			obj.doneb.click();
			browser.sleep(5000);


			
			
			
		
		

	})
		//browser.sleep(5000);
		//element(by.className('mat-radio-container')).click();
		//element(by.className('right-side-button mat-raised-button mat-primary')).click().then(function(text){
		//browser.sleep(5000);

	//})


	 });
	
	
	




})
})