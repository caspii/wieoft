function doAnimate(el) {

		frequency = el.data('frequency'); 	// Frequency per minute
		

		if ((60/frequency*1000) > 800) {
			// Event happens more than once a second, animation duration length must shortened
			duration = (60/frequency)*1000 / 2;
			delay = duration;
		} else {
			duration = 800;
			delay = (60/frequency)*1000 - duration;

		}

		console.log(el.html() + 
			' Delay = ' + delay +
			' duration = ' + duration +
			' total = ' + (duration + delay));
		// Add delay to el
		setInterval(
			function() {
				el.css('animation-duration', duration + 'ms')
				el.toggleClass('pulse');
			},delay);	
};
	
	
$(".animated-tile").each(function() { 
	doAnimate($(this))
});