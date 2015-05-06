define(["dojo/_base/declare", "dojo/_base/lang"],
    function(declare, lang){
        return declare(null,{
            userName: "",
            email: "",
            alterEmail: "",
            phoneNumber: "",
            postalAddress: "",
            country: "",
            constructor: function(args){
                lang.mixin(this, args);
            }
        });
    });