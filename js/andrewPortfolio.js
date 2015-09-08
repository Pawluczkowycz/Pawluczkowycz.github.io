   
(function() {

   // Fade Out on page transition
	var $links = $('.figure__link', 'a[href$="html"]');
	var $h3Overlay = $('.figure__overlay-h3');
	var $h4Overlay = $('.figure__overlay-h4');
	
	
	$links.on('click', function(e) {
		e.preventDefault();
		var $href = $(this).attr('href');
		
		$h3Overlay.toggle();
		$h4Overlay.fadeIn();
		
		$('body').fadeOut(1000, function() {
			window.location = $href;
		});
		
	});
  
  
})();