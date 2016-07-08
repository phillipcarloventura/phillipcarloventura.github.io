$(document).ready(function(){
	$('a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		var scrollSpeed = 700;

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top -30
		}, scrollSpeed, 'swing', function () {
			window.location.hash = target;
		});
	});
	
	//for animation
	new WOW().init();
	

})