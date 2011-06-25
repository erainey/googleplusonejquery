/*!
 * Google +1 Button jQuery Plugin
 * Copyright 2011, Eric Rainey
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * Date: Sat Jun 25 2011
 */

(function($) {
	$.fn.gPlusOne = function( options ) {
		// if Google API Object does not exist, create script tag and call from Google server
		if ( typeof gapi === "undefined") {
			var gScript = document.createElement("script");
			gScript.src = "https://apis.google.com/js/plusone.js";
			$(gScript).appendTo('body');
			}
		// Settings for +1 Button	
		var plusOneSettings = { href: window.location, size: "standard", count: "true", callback: false};
		// Default options override
		if ( options ) {
			$.extend( plusOneSettings, options )
				}
		// Callback Option Check - need to revisit 6/2/2011
		if(plusOneSettings.callback != false) {
    		//$(plusOneSettings.callback);
      		}
		// Run Google API 'gapi.plusone.render' on target DOM element(s)
		return this.each(function() { 
			gapi.plusone.render(this, plusOneSettings);	
			})
		}
	});