$(document).ready(function() {
		  
      // Opening Animation
      $("#main-img").animate({
			  left: "+=100px",
			  opacity: 1.0
			}, 900);
      
      $("#hero-h2").fadeIn(1000);
			$("#hero-p").slideDown(700);
      $("#hero-a").fadeIn(1500).css('display', 'block');

      // Reveal Navigation
      $('.fa-bars').on('click', function(){
        $('.main-ul').slideToggle('slow');
      });
      
      
      // Scrolling Animation
      var win = $(window),
			    page = $('body'),
				nav100 = $('header'),
        documentHeight = $('body').height(),
        footerHeight = $('#footer').height();
        
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
        
 var newEff = debounce(function() {
        var totalH = page.scrollTop() + win.height(),
           targetH = totalH - 0.5 * footerHeight,
        containerH = $('.container').height(),
           windowH = win.height(),
          headerH1 = $('header h1');
        
			  if (page.scrollTop() > 20) {
			    nav100.addClass('header-moveUp');
          headerH1.css({
            'font-size': '3rem',
            'margin-top': '10px'
           });
			  }
			  if (page.scrollTop() < 20) {
			    nav100.removeClass('header-moveUp');
          headerH1.css('font-size', '4rem');
			  }
        if (page.scrollTop() > containerH - windowH - 100) {
          $('.fa-twitter-square').addClass('slideInUp');
          $('.fa-google-plus-square').addClass('slideInUp');          
          $('.fa-facebook-square').addClass('slideInUp');
          $('.fa-linkedin-square').addClass('slideInUp');
        }
        if (page.scrollTop() < containerH - windowH - 100) {
          $('.fa-twitter-square').removeClass('slideInUp');
          $('.fa-google-plus-square').removeClass('slideInUp');
          $('.fa-facebook-square').removeClass('slideInUp');
          $('.fa-linkedin-square').removeClass('slideInUp');
        }
      }, 36);

win.on('scroll', newEff);      

// Small Image Pop-up
var smallImage = $('.small-image');
var imageScreen = $('.img-effect');
      
imageScreen.on('click', function() {
        
  // Show Pop-up
  $(this).prev('.small-image').find('.image-background')
            .clone().prependTo('body').css({
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'right': '0',
            'bottom': '0',
            'background-color': 'rgba(0,0,0,0.8)',
            'transition': 'background-color 0.5s',
            'z-index': 25
  });

  var $popupImage = $('body').find('img').first();

      
  $popupImage.css({
  'border': '1px solid #111',
  'box-shadow': '0 1px 15px #000',
  'max-width': '500px',
  'width': 0,
  'opacity': 0,
  'position': 'fixed',
  'top': '50%',
  'left': '50%',
  'transform': 'translateY(-50%) translateX(-50%)',
  'transition': 'transform 0.5s',
  'z-index': 15
  }).animate({ opacity: 1, width: '90%' }, 600);;
          
  // Close Pop-up
  $popupImage.on('click', function() {        
    $(this).parent('.image-background').remove();
  });

});

// jQueryUi Tabs
$( "#tabs" ).tabs();
      
      
// Image Swap Function
var $imgSwap = $('.image-swap');

$imgSwap.on('click', function() {
        
  var $bigImg = $('.one-half .image-swap:first'),
      $thisSource = $(this).attr('src'),
      $bigImgSource = $bigImg.attr('src'),
      $that = $(this);
        
  $(this).attr('src', $bigImgSource);
  $bigImg.attr('src', $thisSource);
        
});  
});