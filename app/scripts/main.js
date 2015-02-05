// Properties for the pulse
var properties = {
    opacity:1,
    color: "white",
	backgroundColor: "background:rgba(255,255,255, 0.3);"
};

// On devices more than 788px wide, remove expensive background animation to tiles
var windowWidth = window.screen.width < window.outerWidth ? 
window.screen.width : window.outerWidth;
if ( windowWidth < 768) {
	properties.backgroundColor = "";
} 


function doAnimate(el) {

		var animationDuration = 500;				// ms		
		var frequency = el.data('frequency'); 		// Frequency per minute
		var totalDuration = (60/frequency)*1000; 	// ms
		var interval = totalDuration - animationDuration;

		if (interval < 1 ) {
			// totalDuration too short, animation must be shortened too.
			animationDuration = totalDuration / 2;
			interval = totalDuration / 2;
		} 

		el.pulse(properties,
			{ 
				duration: animationDuration, 
				interval : interval,
				pulses:-1
			});
}
	
	
$(".animated-tile").each(function() { 
	doAnimate($(this));
});