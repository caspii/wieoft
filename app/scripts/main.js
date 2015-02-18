

function doAnimate(el) {
	var animationDuration = 500;				// ms		
	var frequency = el.data('frequency'); 		// Frequency per minute
	var totalDuration = (60/frequency)*1000; 	// ms
	var interval = totalDuration - animationDuration;


	$.keyframe.define([{
    	name: 'pulse',
    		'0%': {'opacity': '0.3'},
    		'30%': {'opacity': '1'},
    		'100%': {'opacity': '0.3'}
	}]);

	$(el).playKeyframe({
    	name: 'pulse',
    	duration: totalDuration + "ms",
    	iterationCount: 'infinite',
    });
}
	
	
$(".animated-tile").each(function() { 
	doAnimate($(this));
});