jQuery wrapper for the Google +1 button. Renders +1 button on the page inside target DOM element and writes Google API script tag into the DOM on the fly. Requires jQuery library.

Call the gPlusOne function on the DOM element you wish to target, for example:

$('div').gPlusOne();

Different properties can be manipulated, based on the Google +1 button attributes.

"href" - (string) URL that the +1 Button is targeting. Defaults to "window.location."

"size" - (string) Controls +1 Button size. Options are "small", "medium", "standard", and "tall." Defaults to "standard."

"count" - (string) Show an aggregate count for the targeted URL. Options are "true" or "false." Defaults to "true."

"callback" - (string) Name of function to be called when the +1 Button is clicked. Note that the state of the button can be evaluated in this function - "on" or "off"

Example of "callback" property integration:


function alertState(plusone) {	
	alert('+1 Button state is now' + plusone.state);

}

<code>$('div').gPlusOne({</code>
	
	href: "http://www.google.com",
	
	size: "small",	
	
	count: "false",
	
	callback: "alertState"		

});



More information about the Google +1 Button can be found at http://code.google.com/apis/+1button/