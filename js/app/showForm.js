define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./view/showForm.html",
        "dojo/i18n!app/nls/strForm", "dojo/dom", "dijit/form/Button",
        "dojo/dom-style", "app/User", "dojo/domReady!"],
    function(declare, WidgetBase, TemplatedMixin, template, i18n, dom, Button, domStyle, User){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            i18n: i18n,
            postMixInProperties: function(){
                this.id = "viewAccount";
            },
            postCreate : function (){
                new Button({
                    id: "btnBack",
                    label: i18n.lblBack,
                    onClick: this._showRegForm
                }, this.returnRegForm);
            },
            _setUserForm: function(user){
                this.regUserName.innerHTML = user.userName;
                this.regEmail.innerHTML  = user.email;
                this.regAltEmail.innerHTML = user.alterEmail;
                this.regPhone.innerHTML = user.phoneNumber;
                this.regPostalAddress.innerHTML = user.postalAddress;
                this.regCountry.innerHTML = user.country;
            },
            _showRegForm: function(){
                domStyle.set("registerForm","display","block");
                dom.byId("regUserForm").reset();
                dom.byId("msgValidation").innerHTML ="";
                dijit.byId("viewAccount").destroy();
            }
        });
    });
