define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./view/main.html",
		"app/regForm", "dojo/domReady!"],
    function(declare, WidgetBase, TemplatedMixin, template, regForm){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            postCreate : function (){
                var regForm_ = new regForm();
                regForm_.placeAt(this.appForm, "last");
            }});
});
