//= require_self
//= require_tree ./collections
//= require_tree ./models
//= require_tree ./views
//= require_tree ./templates
//= require_tree ./routers


$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};


var Store = Store || (function(window, document, $, undefined){
    return  {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    }
})(window, document, jQuery);

