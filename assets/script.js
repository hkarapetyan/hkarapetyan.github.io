$(document).ready(function(){

// Waypoint for the nav
	$('#cover-nav').waypoint(function(direction){
		if (direction == 'down') {
			$('#cover-nav').css({'position':'fixed', 'top': '0px'});
		} else {
			$('#cover-nav').css({'position':'absolute', 'top': 'auto'});
		}
	});

// Hover on circles
	$('.slide-thumbnaillife').hover(
    function() { $('.overlay').fadeIn(); },
    function() { $('.overlay').fadeOut(); }
  )


});
