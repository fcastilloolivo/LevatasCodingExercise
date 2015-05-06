define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./view/regForm.html",
        "dojo/i18n!app/nls/strForm", "dojo/dom", "dijit/form/Button", "app/showForm",
        "dijit/form/ValidationTextBox", "dojox/validate/web", "dojo/html","dijit/form/Textarea",
		"app/valSimpleTextArea",
		"dojo/dom-style", "dijit/form/CheckBox", "dojo/data/ItemFileReadStore", "dijit/form/FilteringSelect", "dojo/_base/lang","app/User", "dojo/domReady!"],
		function(declare, WidgetBase, TemplatedMixin, template, i18n,
				 dom, Button, showForm, ValidationTextBox, validateWeb, html,  Textarea,
				 valSimpleTextArea,  domStyle, CheckBox, ItemFileReadStore,FilteringSelect, lang, User){
	        return declare([WidgetBase, TemplatedMixin], {
	            templateString: template,
                i18n: i18n,
				postMixInProperties: function(){
					this.id = "registerForm";
				},
	            postCreate: function (){
	            	new Button({
						id: "btnContinue",
	                    label: i18n.lblContinue,
						onClick: this._submitForm
	                }, this.registerUser);

                    new Button({
                        id: "btnReset",
                        label: i18n.lblReset,
                        onClick: this._resetForm
                    }, this.clearForm);
	            },
                _submitForm: function(){
                    dom.byId("msgValidation").innerHTML ="";

                    if(!dijit.byId("regUserForm").validate()){
                        dom.byId("msgValidation").innerHTML = i18n.msgFormInvalid;
						return false;
					}

                    if(dijit.byId("txtPassword").get("value")!=dijit.byId("txtRePassword").get("value")){
                        dom.byId("msgValidation").innerHTML = i18n.msgPassInvalid;
                        return false;
                    }

					if(!dijit.byId("chkTerms").checked){
                        dom.byId("msgValidation").innerHTML = i18n.msgTermsNotAccepted;
						return false;
					}
					var showForm_ = new showForm();

                    var userData = new User();
                    userData.userName =  dijit.byId("txtUserName").get("value");
                    userData.email =  dijit.byId("txtEmail").get("value");
                    userData.alterEmail =  dijit.byId("txtAlterEmail").get("value");
                    userData.phoneNumber =  dijit.byId("txtCountryCode").get("displayedValue") + "-" +
                        dijit.byId("txtCityCode").get("displayedValue") + "-" + dijit.byId("txtPhoneNumber").get("displayedValue");
                    userData.postalAddress =  dijit.byId("txtPostalAddress").get("value");
                    userData.country =  dijit.byId("selCountry").get("value");

                    showForm_._setUserForm(userData);
					domStyle.set("registerForm","display","none");
                    showForm_.placeAt(dom.byId("appForm"), "last");
				},
                _resetForm: function(){
                    dom.byId("regUserForm").reset();
                    dom.byId("msgValidation").innerHTML ="";
                }
	        });
	});
