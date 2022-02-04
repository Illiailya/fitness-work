$(function () {
	// header изменения при скролле 
	$(window).on("scroll", function () {
		$('.header').toggleClass("header--active", $(this).scrollTop() > 0);
	});
	// header изменения анимации скролаа по ссылкам в хэдере
	$(".header a").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);

	});

	// Бургер
	$('.burger').on('click', function () {
		$('.burger').toggleClass('burger--active');
		$('.menu').toggleClass('menu--active');
		$('.logo').toggleClass('logo--active');
		$('body').toggleClass('lock');
	});

	$('.works__heading').on('click', function () {
		$(this).parent().find('.works__heading').toggleClass('works__heading--active');
		$(this).parent().find('.works__icon').toggleClass('works__icon--active');
		$(this).parent().toggleClass('works__tab--active');
		if ($(this).parent().find('.works__content').length) {
			$(this).parent().find('.works__content').slideToggle(300);
			return false;
		}
	});


// slider для testimonials
	$('.testimonials__slider').slick({
		arrows: false,
		dots: true
	});

	// starraiting для  testimonials
	$('.testimonials__stars').rateYo({
		rating: 5,
		starWidth: "25px",
		readOnly: true,
		normalFill: "#000000",
		ratedFill: "#FDBC64",
	});

//footer для скрытия/открытия списков в футере
	$('.footer-mobile__heading').on('click', function () {
		$(this).parent().find('.footer-mobile__heading').toggleClass('footer-mobile__heading--active');
		$(this).parent().find('.footer-mobile__list').toggle('footer-mobile__list--active');
		if ($(this).parent().find('.footer__list').length) {
			$(this).parent().find('.footer__list').slideToggle(300);
			return false;
		}
	});


});