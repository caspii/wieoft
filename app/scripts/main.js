// Properties for the pulse
var properties = {
    opacity:1,
    color: "blue",
   	size: 1.1
	};

function doAnimate(el) {

		var animationDuration = 300;				// ms		
		var frequency = el.data('frequency'); 		// Frequency per minute
		var totalDuration = (60/frequency)*1000; 	// ms
		var interval = totalDuration - animationDuration;

		if (interval < 1 ) {
			// totalDuration too short, animation must be shortened too.
			animationDuration = totalDuration / 2;
			interval = totalDuration / 2;
		} 

		console.log(el.html() + 
			' animationDuration = ' + animationDuration +
			' interval = ' + interval +
			' totalDuration = ' + totalDuration
			);

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