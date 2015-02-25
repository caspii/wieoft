

function doAnimate(el) {
	var pulseLength = 800 						// ms
	var frequency = el.data('frequency'); 		// Frequency per minute
	var totalDuration = (60/frequency)*1000; 	// ms
	//console.log("totalDuration = " + totalDuration/1000);
	
	el.css('animation-duration', totalDuration + 'ms');
	if (totalDuration < 1000) {
		el.css('animation-name','pulse-1s');	
	} else if (totalDuration < 2000) {
		el.css('animation-name','pulse-2s');	
	} else if (totalDuration < 4000) {
		el.css('animation-name','pulse-4s');	
	} else if (totalDuration < 8000) {
		el.css('animation-name','pulse-8s');
	} else if (totalDuration < 16000) {
		el.css('animation-name','pulse-16s');
	} else if (totalDuration < 32000) {
		el.css('animation-name','pulse-32s');
	} else if (totalDuration < 64000){
		el.css('animation-name','pulse-64s');
	} // There is no default, therefor some tiles don't pulse at all!		
	

}
	
	
$(".animated-tile").each(function() { 
	doAnimate($(this));
});