describe('practice exercise',function(){
	browser.ignoreSynchronization = true;
	var using = require('jasmine-data-provider');
	 var obj=  require("./Locator.js");
	 var Adata=require("./Mdata.js");
	 var dataaaa=require("./logindata.js");
	 using(dataaaa.Datadriven, function (data1, description) {
		  it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		browser.sleep(4000);
		obj.UserId.sendKeys(data1.f);
		obj.Password.sendKeys(data1.s).then(function(){
		obj.Login.click();
		browser.sleep(3000);
		})
	 })
	})
//using ends
 using(Adata.Datadriven, function (data, description) {
		 it('practice exsercise',function(){
		browser.ignoreSynchronization = true;
		var menubutton=obj.mif.get(1);
			menubutton.click();
			browser.sleep(4000);
			obj.Muserclk.click();
			browser.sleep(4000);
			obj.Muserb.click();
			browser.sleep(4000);
			obj.mfirstname.sendKeys(data.Firstname);
			browser.sleep(4000);
			obj.mlname.sendKeys(data.Lastname);
			browser.sleep(3000);
			obj.memail.sendKeys(data.Email);
			browser.sleep(3000);
			obj.mdbtn.click();
			browser.sleep(6000);


			
			
			
			
})
 })
})