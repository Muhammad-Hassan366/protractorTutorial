describe('practice exercise',function(){
	browser.ignoreSynchronization = true;
	var using = require('jasmine-data-provider');
	 var obj=  require("./Locator.js");
	 var mdata=require("./machinesdata.js");
	 var dataaaa=require("./logindata.js");
	 using(dataaaa.Datadriven, function (data1, description) {
		  it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		obj.UserId.sendKeys(data1.f);
		obj.Password.sendKeys(data1.s).then(function(){
		obj.Login.click();
		browser.sleep(4000);
		
		})
	 })
	})
//using ends
 using(mdata.Datadriven, function (data, description) {
		 it('practice exsercise',function(){
		browser.ignoreSynchronization = true;
		var menubutton=obj.mif.get(1);
			menubutton.click();
			browser.sleep(5000);
			obj.machineoptionlink.click();
			browser.sleep(5000);
			obj.machinebutton.click();
				browser.sleep(5000);
				obj.machinecli.click();
				browser.sleep(5000);
				obj.machineclis.click();
				browser.sleep(3000);
				obj.mproducer.sendKeys(data.machineproducer);
				browser.sleep(3000);
				obj.mmodel.sendKeys(data.model);
				browser.sleep(3000);
				obj.mserail.sendKeys(data.serialnumber);
				browser.sleep(3000);
				obj.mcapacity.sendKeys(data.capacity);
				browser.sleep(3000);
				obj.msubmitform.click();
				browser.sleep(5000);		
})
 })

})