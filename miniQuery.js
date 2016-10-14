
(function  () {

	var _$ = window.$;
	var _jQuery = window.jQuery;
	var jQuery = window.jQuery = window.$ = function(selector){

		return new jQuery.fn.init(selector);
	};

	jQuery.fn = jQuery.prototype = {
		init:function(selector){
			var elements = document.getElementsByTagName(selector);
			Array.prototype.push.apply(this,elements);
			return this;	
		},
		jQuery:"1.0.0",
		length:0,
		size:function(){
			return this.length;
		}

	};
	jQuery.fn.init.prototype = jQuery.fn;

	jQuery.extend = jQuery.fn.extend = function(){
		var o = arguments[0];
		for(var p in o){
			this[p] = o[p];
		}
	};

	jQuery.extend({
		trim:function(text){
			return (text||"").replace(/^\s+|\s+$/g,"");
		},
		noConflict:function(){
			window.$ = _$;
			window.jQuery = _jQuery;
			return jQuery;
		}
	});

	jQuery.fn.extend({
		get:function(num){
			return this[num];
		},
		each:function(fn){
			for(var i = 0 ;i< this.length; i++){
				fn(i,this[i]);
			}
			return this;
		},
		css:function(){
			var l = arguments.length;
			if(l == 1){
				return this[0].style[arguments[0]];
			} else {
				var name = arguments[0];
				var value = arguments[1];
				this.each(function(index,ele) {
					ele.style[name] = value;

				});
			}
			return this;
		}

	});

})();



