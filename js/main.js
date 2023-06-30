'use strict';
document.addEventListener('DOMContentLoaded', function () {
	console.log('Loaded');

	const verricalSliderBanner = document.querySelector('.vertical-slider');

	let verticalSwiperBanner = new Swiper(verricalSliderBanner, {
		direction: 'vertical',
		// // paralax: true,
		// observer: true,
		// observeParents: true,
		centeredSlides: true,
		slidesPerView: 1.5,
		loop: true,
		spaceBetween: -70,
		// grabCursor: true,
		// slideToClickedSlice: true,
		slidesPerGroup: 1,
		// autoHeight: true,
		speed: 800,
		effect: 'slide',

		keyboard: {
			enabled: true,
			pageUpDown: true,
		},

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
