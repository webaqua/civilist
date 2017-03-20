
$(function() {
	//
	// //SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };
	//
	// //E-mail Ajax Send
	// //Documentation & Example: https://github.com/agragregra/uniMail
	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });
	//
	// //Chrome Smooth Scroll
	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {
	//
	// };

	!function($){
	$(document).on('click', 'a[href^="#"]', function () {
	$('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 1000 );
	return false;
	});
	}(jQuery);

		// Fix a bug with Chrome where HTML5 autoplay videos stop when the DOM
	// around them is manipulated.
	var $video = $('video[autoplay]'),
	  videoElement = $video[0],
		videoElement2 = $video[1];
	// Attach an event listener to trigger the video.
	$video.on('canplaythrough', function() {
	  this.play();
	});
	// Check the readystate of the video as sometimes it fires the
	// canplaythrough event before we've attached our listener.
	if (videoElement.readyState > 3) {
	  videoElement.play();
	}
	if (videoElement2.readyState > 3) {
	  videoElement.play();
	}

	var glide = $('.slider').glide().data('api_glide');
	$(window).on('keyup', function (key) {
	if (key.keyCode === 13) {
	glide.jump(3, console.log('Wooo!'));
	};
	});
	$('.slider-arrow').on('click', function() {
	console.log(glide.current());
	});

	$("#my-menu").mmenu({
		navbar:{
			title : "Меню"
		}
	});

	$(".mobile-mnu").click(function() {
		var mobilemAPI = $("#my-menu").data("mmenu");
		mobilemAPI.open();
		var thiss = $(this).find(".toggle-mnu");
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	setTimeout(function() {
 	 $('.preloader').fadeOut('slow', function() {});
 }, 3000);

});
