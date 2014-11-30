console.log('\'Allo \'Allo!');

function doAnimate(el) {
	setInterval(function() {animate(el)},1000);
} 

function animate(el) {
	el.toggleClass("pulse");
}

doAnimate($(".animated-tile"));