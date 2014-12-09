function doAnimate(el) {

		frequency = el.data('frequency'); 	// Frequency per minute
		
		total_duration = (60/frequency)*1000;
		animation_duration = 800;

		if (total_duration < 800) {
			// total_duration too short, animation must be shortened too.
			animation_duration = total_duration / 2;
			total_duration = animation_duration;
		} 

		console.log(el.html() + 
			' total_duration = ' + total_duration +
			' animation_duration = ' + animation_duration);

		// Add total_duration to el
		setInterval(
			function() {
				el.css('animation-duration', animation_duration + 'ms')
				el.toggleClass('pulse');
			},total_duration);	
};
	
	
$(".animated-tile").each(function() { 
	doAnimate($(this))
});