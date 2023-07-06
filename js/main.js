'use strict';
document.addEventListener('DOMContentLoaded', function () {
	console.log('Loaded');

	// select
	$(document).ready(function () {
		$('#mySelect').select2();
	});

	// <sliders>
	const verrticalSliderBanner = document.querySelector('.vertical-slider');
	const circleSlider = document.querySelector('.circle-slider');
	const sliderNew = document.querySelector('.new-slider');
	const sliderBestsellers = document.querySelector('.bestsellers-slider');
	const sliderPower = document.querySelector('.power-slider');

	let slider1 = new Swiper(verrticalSliderBanner, {
		direction: 'vertical',
		// // paralax: true,
		// observer: true,
		// observeParents: true,
		watchOverflow: true,
		centeredSlides: true,
		slidesPerView: 2,
		loop: true,
		spaceBetween: -70,
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

	let slider3 = new Swiper(sliderNew, {
		direction: 'horizontal',
		// paralax: true,
		// observer: true,
		// observeParents: true,
		// watchOverflow: true,
		centeredSlides: true,
		slidesPerView: 3,
		initialSlide: 2,
		spaceBetween: 20,
		// // grabCursor: true,
		slideToClickedSlice: false,
		slidesPerGroup: 1,
		// autoHeight: true,
		speed: 800,
		effect: {
			slide: {
				// Slide effect options
				shadow: true, // Add shadow to the slides
				fadeEffect: {
					crossFade: true, // Cross-fade transition effect
				},
			},
		},

		// autoplay: {
		// 	delay: 4000, // Delay between slide transitions (in milliseconds)
		// 	disableOnInteraction: false, // Autoplay continues even when the user interacts with the slider
		// },

		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

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
	let slider4 = new Swiper(sliderBestsellers, {
		direction: 'horizontal',
		// paralax: true,
		// observer: true,
		// observeParents: true,
		// watchOverflow: true,
		centeredSlides: true,
		loop: true,
		slidesPerView: 3,
		initialSlide: 1,
		spaceBetween: 40,
		// // grabCursor: true,
		slideToClickedSlice: false,
		slidesPerGroup: 1,
		// autoHeight: true,
		speed: 800,
		effect: {
			slide: {
				// Slide effect options
				shadow: true, // Add shadow to the slides
				fadeEffect: {
					crossFade: true, // Cross-fade transition effect
				},
			},
		},

		// autoplay: {
		// 	delay: 4000, // Delay between slide transitions (in milliseconds)
		// 	disableOnInteraction: false, // Autoplay continues even when the user interacts with the slider
		// },

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

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
	let slider5 = new Swiper(sliderPower, {
		direction: 'horizontal',
		// paralax: true,
		// observer: true,
		// observeParents: true,
		// watchOverflow: true,
		centeredSlides: true,
		loop: true,
		slidesPerView: 3,
		initialSlide: 1,
		spaceBetween: 60,	
		// // // grabCursor: true,
		// slideToClickedSlice: false,
		// slidesPerGroup: 1,
		// autoHeight: true,
		speed: 800,
		effect: {
			slide: {
				// Slide effect options
				shadow: true, // Add shadow to the slides
				fadeEffect: {
					crossFade: true, // Cross-fade transition effect
				},
			},
		},

		// autoplay: {
		// 	delay: 4000, // Delay between slide transitions (in milliseconds)
		// 	disableOnInteraction: false, // Autoplay continues even when the user interacts with the slider
		// },

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

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
