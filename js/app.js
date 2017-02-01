(function () {
	'use strict';
	$(document).ready(function () {
		$(document).foundation();

		$('.imgScale').imageScale({
			rescaleOnResize: true,
			align: 'center'
		});

		$('#main-slider').slick({
			cssEase: 'linear',
			dots: false,
			fade: true,
			infinite: true,
			slidesToScroll: 1,
			slidesToShow: 1,
			speed: 300,
			swipeToSlide: true,
			nextArrow: $('.banner button.right'),
			prevArrow: $('.banner button.left'),
		});

		$('#mini-slider').slick({
			cssEase: 'linear',
			dots: false,
			fade: true,
			infinite: true,
			slidesToScroll: 1,
			slidesToShow: 1,
			speed: 300,
			swipeToSlide: true,
			nextArrow: $('.media-box-vertical button.left-arrow-mini-slider'),
			prevArrow: $(' .media-box-vertical button.right-arrow-mini-slider'),
		});

		$('.blog-content .media-box-vertical .content .preview-content').matchHeight();

		setTimeout(function() {
			setMediaPreviewHeight('.media-box', $('.media-box-horizontal .preview-media'));
		}, 100);
	});
}());

function setMediaPreviewHeight(parentElemSelector, selector) {
	var previewEl = selector;

	$.each(previewEl, function(index, elem) {
		var jElem = $(elem);
		var parrent = jElem.closest(parentElemSelector);
		var parentHeight = parrent.height();

		jElem.height(parentHeight);
	});
}

(function() {
	var serchButton = $('.mdi.mdi-magnify');

	serchButton.on('click', function () {
		var input = $(this).closest('.input-holder, .input-holder-dark ').find('.search');
		input.focus();
	});
}());