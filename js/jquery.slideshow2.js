$(document).ready(function() {
		
		var target;
		var triggers;
		var images;
		var lastElem;
		var mask;
		
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
			
		/*	these are for Next and Previous Buttons		
			$('.next').click(function() {
				target = $('ul.triggers li.active').index();
				target === lastElem ? target = 0: target = target + 1;
				sliderResponse(target);
				resetTiming();
			});
			
			$('.prev').click(function() {
				target = $('ul.triggers li.active').index();
				lastElem = triggers.length - 1;
				target === 0 ? target = lastElem : target = target -1;
				sliderResponse(target);
				resetTiming();
			});
		*/
			
			function sliderTiming() {
				target = $('ul.triggers li.active').index();
				target === lastElem ? target = 0 : target = target + 1;
				sliderResponse(target);
			};
			
			var timingRun = setInterval(function() { sliderTiming(); }, 4500);
			function resetTiming() {
				clearInterval(timingRun);
				timingRun = setInterval(function() { sliderTiming(); }, 4500);
			};
			
		}
		
		
		calculateWidth();
		$(window).resize(function() {
			
			var newWidth = $('#maincontentcontainer').width();
			mask.css('width', newWidth*(3) +'px');
			images.css('width', newWidth);
			imgWidth = newWidth;
			$(window).mouseup(slideshow);
		});
});