;(function (root, factory){
	'use strict';

	/* istanbul ignore next */
	if(typeof define === 'function' && define.amd){
		define('Ajax, factory');
	}
	else if(typeof exports === 'object'){
		exports = module.exports = factory();
	}
	else{
		root.Ajax = factory();
	}
	})(this, function(){
		'use strict';

		function Ajax() {
			var $public = {};
			var $private = {};

			return $public
		}

		return Ajax
	});