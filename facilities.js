describe('practice exercise',function(){
	var using = require('jasmine-data-provider');
	 var obj=  require("./Locator.js");
	 var dataa=require("./facilitiesdata.js");
	 var dataaa=require("./logindata.js");
	 using(dataaa.Datadriven, function (data, description) {
		  it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		element(by.id("mat-input-0")).sendKeys(data.f);
		element(by.id("mat-input-1")).sendKeys(data.s).then(function(){
		element(by.className('login-button mat-flat-button mat-primary')).click();
		browser.sleep(4000);
		})
	 })
	 using(dataa.Datadriven, function (data, description) {
		 it('practice exsercise',function(){
		
		var menubutton=obj.mif.get(1);
			menubutton.click();
			browser.sleep(4000);
			obj.fli.click();
			browser.sleep(4000);
			obj.fb.click();
			browser.sleep(4000);
			obj.fa.sendKeys(data.facilityaddress);
			browser.sleep(2000);
			obj.fcc.click();
			browser.sleep(2000);
			obj.frb.click();
			browser.sleep(2000);
			obj.ft.click();
			browser.sleep(2000);
			obj.fs.click();
			browser.sleep(2000);
			obj.fr.click();
			browser.sleep(2000);
			obj.fx.sendKeys(data.facilityexcisenumber);
			browser.sleep(5000);
			obj.fb.click();
			browser.sleep(5000);
			

		
})

	 })

	
	
})
})
