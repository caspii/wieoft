function doAnimate(el) {

		frequency = el.data('frequency'); 	// Frequency per minute
		

		if (frequency > 60) {
			// Envent happens more than once a second, animation duration length must shortened
			duration = (60/frequency)*1000 / 2;
			delay = duration;
		} else {
			duration = 800;
			delay = (60/frequency)*1000 - duration; 

		}

		console.log("Delay = " + delay);
		// Add delay to el
		setInterval(
			function() {
				el.toggleClass('pulse');
				el.css('animation-duration', duration + 'ms')
			},delay);	
};
	
	
$(".animated-tile").each(function() { 
	doAnimate($(this))
});