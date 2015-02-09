
	$(document).ready(function() {
	
		$("i.fa-bars").toggle(function() {
			$("nav").fadeIn("slow")},
			function() {
				$("nav").fadeOut("slow")});
				
		$(window).on('resize', (function(){
			var navDisplay = $("nav").css("display");
			var windowWidth = $(window).width();
			var bars = $("i.fa-bars").css("display");
			if(windowWidth > 768 || bars == "none") {
			$("nav").slideDown();}
			}));
	});

		$(document).ready(function() {
		
		    var target,
			 triggers,
			 images,
			 lastElem,
			 mask,
			 imgWidth;
			
			function calculateWidth() {
				target;
				triggers = $('ul.triggers li');
				images = $('ul.images li');
				lastElem = triggers.length-1;
				mask = $('.mask ul.images');
			
			
				imgWidth = images.width();
				images.css('width', imgWidth);
		
				triggers.first().addClass('active');
				mask.css('width', imgWidth*(lastElem+1) +'px');
				slideshow();
			}
			
			function slideshow() {
				function sliderResponse(target) {
					mask.stop(true,false).animate({'left':'-'+ imgWidth*target + 'px'},300);
					triggers.removeClass('active').eq(target).addClass('active');
				};
			
				triggers.click(function() {
					if(!$(this).hasClass('active')) {
						target = $(this).index();
						sliderResponse(target);
						resetTiming();
					};
				});
			
				function sliderTiming() {
					target = $('ul.triggers li.active').index();
					target === lastElem ? target = 0 : target = target + 1;
					sliderResponse(target);
				};
			
				var timingRun = setInterval(function() { sliderTiming(); }, 5000);
				function resetTiming() {
					clearInterval(timingRun);
					timingRun = setInterval(function() { sliderTiming(); }, 5000);
				};
			}
			
			//calculateWidth();
			window.onload = calculateWidth;
			$(window).resize(function() {
			
				var newWidth = $('#maincontentcontainer').width();
				mask.css('width', newWidth*(3) +'px');
				images.css('width', newWidth);
				imgWidth = newWidth;
				$(window).mouseup(slideshow);
			});
		});
