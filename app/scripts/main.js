
$.keyframe.define([{
    name: 'trapdoor-sequence',
    '0%': {'opacity': '1'},
    '60%': {'opacity': '0.3'},
    '90%': {'opacity': '0.3'},
    '100%': {'opacity': '1'}
}]);




function doAnimate(el) {
$(el).playKeyframe({
    name: 'trapdoor-sequence',
    duration: '1s',
    iterationCount: 'infinite',
    });
}
	
	
$(".animated-tile").each(function() { 
	doAnimate($(this));
});