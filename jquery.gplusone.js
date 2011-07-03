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
			var gScript = document.createElement("script");
			gScript.src = "https://apis.google.com/js/plusone.js";
			$(gScript).appendTo('body');
		// Settings for +1 Button	
		var plusOneSettings = { href: window.location, size: "standard", count: "true", callback: ""};
		// Default options override
		if ( options ) {
			$.extend( plusOneSettings, options )
				}
        var plusOneButton = '<g:plusone href="' + plusOneSettings.href + '" size="' + plusOneSettings.size + '" count="' + plusOneSettings.size + '" callback="' + plusOneSettings.callback + '"></g:plusone>';
		// Render +1 Button on target DOM element(s)
		return this.each(function() { 
			$(this).html( plusOneButton );	
			})
		}
	});