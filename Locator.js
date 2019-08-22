/**
 * http://usejsdoc.org/
 */
function  allLocators()
{

this.error=element(by.className('validation-failed ng-star-inserted'));
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
this.fa=element(by.css('input[id="facilityAddress"]'));
this.fcc=element(by.css('mat-select[placeholder="Country *"]'));
this.frb=element(by.css('span[class="mat-option-text"]'));
this.ft=element(by.css('mat-select[placeholder="Facility Type *"]'));
this.fs=element(by.cssContainingText('.cdk-overlay-pane mat-option', 'Retail Outlet'));
this.fr=element(by.css('mat-radio-button[value="true"]'));
this.fx=element(by.css('input[placeholder="Facility Excise Number"]'));
this.Fb=element(by.css('button[id="facilitySubmitButton2"]'));
//this.fer=element(by.cssContainingText('mat-error', 'Required information'));
this.fer=element(by.css('mat-error[id="mat-error-0"]'));
this.fexr=element(by.css('mat-error[id="mat-error-3"]'));
this.ftypes=element(by.css('mat-error[id="mat-error-2"]'));
this.machineoptionlink=element(by.css('a[routerlink="/machines"]'));
this.machinebutton=element(by.className('mat-mini-fab mat-primary'));
this.machinecli=element(by.css('mat-select[id="facilityId"]'));
//this.machineclis=element(by.css('mat-option[id="mat-option-1"]'));
this.machineclis=element(by.cssContainingText('.cdk-overlay-pane .mat-option span', '201'));
this.mproducer=element(by.css('input[id="machineProducer"]'));
this.mmodel=element(by.css('input[id="machineModel"]'));
this.mserail=element(by.css('input[id="machineSerialNumber"]'));
this.mcapacity=element(by.css('input[id="machineCapacity"]'));
this.msubmitform=element(by.css('button[id="submitMachineForm"]'));
this.Agg=element(by.css('a[routerlink="/aggregated-level-orders"]'));
this.Aob=element(by.className('mat-mini-fab mat-primary'));
this.facilityselection=element(by.css('mat-select[id="facilityId"]'));
this.facilityselectionclk=element(by.cssContainingText('.cdk-overlay-pane .mat-option span', '201'));
this.priorityselection=element(by.css('mat-select[id="orderPriority"]'));
this.priorityselectionclk1=element(by.cssContainingText('.cdk-overlay-pane .mat-option span', 'Normal'));
this.priorityselectionclk2=element(by.cssContainingText('.cdk-overlay-pane .mat-option span', 'Urgent'));
this.quantitytxt=element(by.css('input[id="requiredQuantity"]'));
this.acbox=element(by.css('mat-checkbox[id="agreedToNotificationCheckBox"]'));
this.agdoneb=element(by.css('button[id="addAggregatedLevelOrderButton"]'));
this.Muserclk=element(by.css('a[routerlink="/manage-users"]'));
this.Muserb=element(by.css('button[color="primary"]'));
this.mfirstname=element(by.css('input[placeholder="First Name *"]'));
this.mlname=element(by.css('input[placeholder="Last Name "]'));
this.memail=element(by.css('input[placeholder="Email *"]'));
this.mdbtn=element(by.className('mat-flat-button mat-primary'));
this.prodclk=element(by.css('a[routerlink="/products"]'));
this.Pchkbox=element(by.css('mat-checkbox[id="isEUCheckbox"]'));
this.Ptype=element(by.css('mat-select[id="productTypeDropdown"]'));
this.ptypeclk=element(by.cssContainingText('.cdk-overlay-pane .mat-option span', 'Cigar'));
this.gtin=element(by.css('input[id="productNumberField"]'));
this.pid=element(by.css('input[id="productIdentifier"]'));
this.pnme=element(by.css('input[id="productName"]'));
this.pw=element(by.css('input[id="weight"]'));
this.pcn=element(by.css('input[id="nomenClature"]'));
this.pdonebtn=element(by.css('button[id="addProductButton"]'));





};

  module.exports= new allLocators();
 /* a.getModel();
  console.log(a.engine);*/

