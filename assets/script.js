$(document).ready(function(){

// Waypoint for the nav
	$('#cover-nav').waypoint(function(direction){
		if (direction == 'down') {
			$('#cover-nav').css({'position':'fixed', 'top': '0px'});
		} else {
			$('#cover-nav').css({'position':'absolute', 'top': 'auto'});
		}
	});

	$('.slide-thumbnaillife').on({
		mouseover: function() {
			$(this).find('.overlay').stop(true, true).fadeIn();
		},
		mouseout: function() {
			$(this).find('.overlay').stop(true, true).fadeOut();
		}
	});

	$('.slide-thumbnailexp').on({
		mouseover: function() {
			$(this).find('.overlay').stop(true, true).fadeIn();
		},
		mouseout: function() {
			$(this).find('.overlay').stop(true, true).fadeOut();
		}
	});

	$('.slide-thumbnailconnect').on({
		mouseover: function() {
			$(this).find('.overlaysocial').stop(true, true).fadeIn();
		},
		mouseout: function() {
			$(this).find('.overlaysocial').stop(true, true).fadeOut();
		}
	});

	// Hover on circles
		// $('.slide-thumbnaillife').hover(
	  //   function() { $('.overlay').fadeIn(); },
	  //   function() { $('.overlay').fadeOut(); }
	  // )
		$('#cover-background.img-scaled-h').click(function() {
			alert('hi');
		});

	// $('#cover-background .img-scaled-h').hover(
	//
	// 	function() { alert('hi'); $('#cover-background .img-hover').fadeIn(); },
	// 	function() { $('#cover-background .img-hover').fadeOut(); }
	// )

});
