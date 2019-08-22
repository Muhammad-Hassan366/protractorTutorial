describe('practice exercise',function(){
	browser.ignoreSynchronization = true;
	var using = require('jasmine-data-provider');
	 var obj=  require("./Locator.js");
	 var Adata=require("./productdata.js");
	 var dataaaa=require("./logindata.js");
	 using(dataaaa.Datadriven, function (data1, description) {
		  it('practice exsercise',function(){
		browser.get("http://lhr.techlogix.com:8890/QA/portal/#/login");
		browser.ignoreSynchronization = true;
		browser.sleep(4000);
		obj.UserId.sendKeys(data1.f);
		obj.Password.sendKeys(data1.s).then(function(){
		obj.Login.click();
		browser.sleep(5000);
		})
	 })
	})
//using ends
 using(Adata.Datadriven, function (data, description) {
		 it('practice exsercise',function(){
			  if(description==='negdata'){
		browser.ignoreSynchronization = true;
		var menubutton=obj.mif.get(1);
			menubutton.click();
			browser.sleep(4000);
			obj.prodclk.click();
			browser.sleep(3000);
			obj.Muserb.click();
			browser.sleep(4000);
			obj.Pchkbox.click();
			browser.sleep(3000);
			obj.Ptype.click();
			browser.sleep(3000);
			obj.ptypeclk.click();
			browser.sleep(3000);
			obj.pnme.sendKeys(data.productname);
			browser.sleep(3000);
			obj.pw.sendKeys(data.weight);
			browser.sleep(3000);
			obj.pcn.sendKeys(data.combinednomenclature);
			browser.sleep(3000);
			obj.pdonebtn.click();
			browser.sleep(6000);	
			  }		
})
 })
 using(Adata.Datadriven, function (data, description) {
		 it('practice exsercise',function(){
			 if(description==='negdata1'){
		browser.ignoreSynchronization = true;
		var menubutton=obj.mif.get(1);
			menubutton.click();
			browser.sleep(4000);
			obj.prodclk.click();
			browser.sleep(3000);
			obj.Muserb.click();
			browser.sleep(4000);
			obj.Ptype.click();
			browser.sleep(3000);
			obj.ptypeclk.click();
			browser.sleep(3000);
			obj.gtin.sendKeys(data.productnumber);
			browser.sleep(3000);
			obj.pid.sendKeys(data.productidentifier);
			browser.sleep(3000);
			obj.pnme.sendKeys(data.productname);
			browser.sleep(3000);
			obj.pw.sendKeys(data.weight);
			browser.sleep(3000);
			obj.pcn.sendKeys(data.combinednomenclature);
			browser.sleep(3000);
			obj.pdonebtn.click();
			browser.sleep(6000);	
			 }		
})
 })
})