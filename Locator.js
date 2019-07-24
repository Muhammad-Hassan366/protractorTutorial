/**
 * http://usejsdoc.org/
 */
function  allLocators()
{


this.UserId=element(by.id("mat-input-0"));

this.Password=element(by.id("mat-input-1"));
this.Login=element(by.className('login-button mat-flat-button mat-primary'));
this.ForgotPasswordLink=element(by.className('col-lg-6 col-md-6 col-sm-12 col-md-offset-6 col-lg-offset-6'));
this.ForgotPasswordEmailID=element(by.css('input[placeholder="Email ID"]'));
this.ForgotPasswordSubmitButton=element(by.css('button[id="forgotPasswordSubmitButton"]'));
this.ml=element(by.css('button[aria-haspopup="true"]'));
this.Dl=element.all(by.css('.mat-menu-item'));
this.Dyb=element(by.css('button[color="primary"]'));
this.pl=element.all(by.css('.mat-menu-item'));
this.op=element(by.css('input[placeholder="Old Password *"]'));
this.newp=element(by.css('input[placeholder="New Password *"]'));
this.cp=element(by.css('input[placeholder="Confirm Password *"]'));
this.doneb=element(by.css('button[color="primary"]'));
this.APIg=element(by.css('button[class="mat-stroked-button ng-star-inserted"]'));
this.close=element(by.css('button[color="warn"]'));
this.mif=element.all(by.css('.mat-icon-button'));
this.fli=element(by.css('a[routerlink="/facilities"]'));
this.fb=element(by.css('button[color="primary"]'));
this.fa=element(by.css('input[placeholder="Facility Address *"]'));
this.fcc=element(by.css('mat-select[placeholder="Country *"]'));
this.frb=element(by.css('span[class="mat-option-text"]'));
this.ft=element(by.css('mat-select[placeholder="Facility Type *"]'));
this.fs=element(by.cssContainingText('.cdk-overlay-pane mat-option', 'Retail Outlet'));
this.fr=element(by.css('mat-radio-button[value="true"]'));
this.fx=element(by.css('input[placeholder="Facility Excise Number"]'));
this.Fb=element(by.css('button[id="facilitySubmitButton2"]'));

this.getURL=function()
{

browser.get('http://juliemr.github.io/protractor-demo/');
};

};

  module.exports= new allLocators();
 /* a.getModel();
  console.log(a.engine);*/

