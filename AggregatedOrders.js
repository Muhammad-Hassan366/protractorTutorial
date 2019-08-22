describe('practice exercise',function(){
	browser.ignoreSynchronization = true;
	var using = require('jasmine-data-provider');
	 var obj=  require("./Locator.js");
	 var Adata=require("./aggregatedordersdata.js");
	 var dataaaa=require("./logindata.js");
	 using(dataaaa.Datadriven, function (data1, description) {
		  it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		browser.sleep(4000);
		obj.UserId.sendKeys(data1.f);
		obj.Password.sendKeys(data1.s).then(function(){
		obj.Login.click();
		browser.sleep(4000);
		
		})
	 })
	})
	 
	

//using ends
 using(Adata.Datadriven, function (data, description) {
		 it('practice exsercise',function(){
			 if(description==='AggData'){
		browser.ignoreSynchronization = true;
		var menubutton=obj.mif.get(1);
			menubutton.click();
			browser.sleep(4000);
			obj.Agg.click();
			browser.sleep(4000);
			obj.Aob.click();
			browser.sleep(3000);
			obj.facilityselection.click();
			browser.sleep(3000);
			obj.facilityselectionclk.click();
			browser.sleep(3000);
			obj.priorityselection.click();
			browser.sleep(3000);
			obj.priorityselectionclk1.click();
			browser.sleep(3000);
			obj.quantitytxt.sendKeys(data.Quantity);
			browser.sleep("3000");
			obj.agdoneb.click();
			browser.sleep("5000");
			
			 }
			
		
			
})
 })
 
 using(Adata.Datadriven, function (data, description) {
		 it('practice exsercise',function(){
			 if(description==='AggData1'){
		browser.ignoreSynchronization = true;
		var menubutton=obj.mif.get(1);
			menubutton.click();
			browser.sleep(4000);
			obj.Agg.click();
			browser.sleep(4000);
			obj.Aob.click();
			browser.sleep(3000);
			obj.facilityselection.click();
			browser.sleep(3000);
			obj.facilityselectionclk.click();
			browser.sleep(3000);
			obj.priorityselection.click();
			browser.sleep(3000);
			obj.priorityselectionclk2.click();
			browser.sleep(3000);
			obj.acbox.click();
			browser.sleep(3000);
			obj.quantitytxt.sendKeys(data.Quantity);
			browser.sleep("3000");
			obj.agdoneb.click();
			browser.sleep(3000);
			
			
			 }			
})
 })


})