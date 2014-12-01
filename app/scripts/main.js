function doAnimate(el) {
		delay = el.data('delay');
		console.log("Delay = " + delay);
		// Add delay to el
		setInterval(
			function() {
				el.toggleClass("pulse");
			},delay);	
};
	
	
$(".animated-tile").each(function() { 
	doAnimate($(this))
});