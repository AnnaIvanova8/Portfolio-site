$(function(){

   $(".menu a, .header__link, .logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

   $('.menu__btn, .menu a').click(function(event) {
      $('.menu__btn,.menu__list').toggleClass('active');
      $('body').toggleClass('lock');
   });
   
$(window).scroll(function(){
   $('.header__wrapper').toggleClass('menu__scrolled', $(this).scrollTop() > 128)
});
});

var mixer = mixitup('.works__content');