define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/form/ValidationTextBox",
    "dijit/form/SimpleTextarea"
], function(declare, _WidgetBase, ValidationTextBox, SimpleTextarea){
    declare("valSimpleTextArea", [_WidgetBase, ValidationTextBox, SimpleTextarea], {
        postCreate: function() {
            this.inherited(arguments);
        },
        onFocus: function() {
            if (!this.isValid()) {
                this.displayMessage(this.getErrorMessage());
            }
        },
        onBlur: function() {
            this.validate(false);
        }
    });
});


