'use strict';
document.addEventListener('DOMContentLoaded', function () {
	console.log('Loaded');

	const verrticalSliderBanner = document.querySelector('.vertical-slider');
	const circleSlider = document.querySelector('.circle-slider');

	let slider1 = new Swiper(verrticalSliderBanner, {
		direction: 'vertical',
		// // paralax: true,
		// observer: true,
		// observeParents: true,
		watchOverflow: true,
		centeredSlides: true,
		slidesPerView: 2,
		loop: true,
		// spaceBetween: -70,
		// grabCursor: true,
		// slideToClickedSlice: true,
		slidesPerGroup: 1,
		// autoHeight: true,
		speed: 800,
		effect: 'slide',
		// autoplay: {
		// 	delay: 1000,
		// },

		// keyboard: {
		// 	enabled: true,
		// 	pageUpDown: true,
		// },

		// Брейкпоинты
		// breakpoints: {
		// 	640: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 0,
		// 		autoHeight: true,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	992: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 20,
		// 	},
		// 	1268: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 30,
		// 	},
		// },
	});

	let slider2 = new Swiper(circleSlider, {
		direction: 'horizontal',
		// // paralax: true,
		// observer: true,
		// observeParents: true,
		// watchOverflow: true,
		centeredSlides: true,
		slidesPerView: 3,
		loop: true,
		// spaceBetween: -70,
		// grabCursor: true,
		// slideToClickedSlice: true,
		slidesPerGroup: 1,
		// // autoHeight: true,
		// speed: 800,
		// effect: 'slide',
		// // autoplay: {
		// 	delay: 1000,
		// },

		// keyboard: {
		// 	enabled: true,
		// 	pageUpDown: true,
		// },

		// Брейкпоинты
		// breakpoints: {
		// 	640: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 0,
		// 		autoHeight: true,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	992: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 20,
		// 	},
		// 	1268: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 30,
		// 	},
		// },
	});
});
