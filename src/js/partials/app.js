$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 5,
        initialSlide: 2,
        centeredSlides: true
    });  

    $('.portfolio-menu-item').hover(
       function(){ $(this).addClass('active') },
       function(){ $(this).removeClass('active') }
	)
});