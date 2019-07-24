var obj=  require("./Locator.js");
var data=  require("./deregister.js");

exports.login = function () {
	obj.UserId.sendKeys(data.Datadriven.firstinput);
	       obj.Password.sendKeys(data.Datadriven.secondinput).then(function(){
	       obj.Login.click();
		   browser.sleep(5000);
    
    });
};
		

	

		
		
		
	


