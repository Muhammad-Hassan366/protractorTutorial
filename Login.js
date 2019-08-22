describe('practice exercise',function(){
	var using = require('jasmine-data-provider');
	var obj=require("./Locator.js");
	 var dataa=require("./logindata.js");
	  using(dataa.Datadriven, function (data, description){
		  it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		element(by.css('div[class="validation-failed ng-star-inserted"]'));
		obj.UserId.clear();
		obj.Password.clear();
		 obj.UserId.sendKeys(data.f);
	    obj.Password.sendKeys(data.s).then(function(){
		obj.Login.click();
		 //expect((obj.errormessage).getText()).toBe('Username or password is incorrect');
		 
		browser.sleep(5000);
		
		})
		//obj.UserId.clear();
		//obj.Password.clear();
		expect((obj.errormessage1).getText()).toBe("Username or password issssincorrect");
		console.log(obj.errormessage1.getText());
		browser.sleep(5000);

		
		//obj.UserId.clear();
		//expect((obj.errormessage2).getText()).toBe('Please fill all required fields');
		//console.log(obj.errormessage2.getText());
		//if(description==dataa.Datadriven.case1) {
			//console.log(description);
		//obj.errormessage1.getText().then(function(text){
		//browser.sleep(3000);
		//expect((obj.errormessage1).getText()).toBe('hjkhkj');
		//expect(text).toBe('Username or password iss incorrect');
		 //console.log(text);
		//browser.sleep(5000);
		//});
		//expect((obj.errormessage).getText()).toBe('Username or password is incorrect');
		//}
	
		



		

})

	  });
	  //data stores actual data
	  //description stores sub object names
	  //for every iteration one data set is picked
	
	
	
	
})





































































