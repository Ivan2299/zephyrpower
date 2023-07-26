'use strict';

document.addEventListener('DOMContentLoaded', function () {
	console.log('Loaded');

	// sliders///////////////////////////////////////////////////
	const verrticalSliderBanner = document.querySelector('.vertical-slider');
	const circleSlider = document.querySelector('.circle-slider');
	const sliderNew = document.querySelector('.new-slider');
	const sliderBestsellers = document.querySelector('.bestsellers-slider');
	const sliderPower = document.querySelector('.power-slider');
	const sliderSpecial = document.querySelector('.special-slider');

	let slider1 = new Swiper(verrticalSliderBanner, {
		direction: 'vertical',
		// allowSlideNext: false,
		// allowSlidePrev: false,
		// allowTouchMove: false,
		// mousewheel: false,
		centeredSlides: true,
		preventClicks: true,
		longswipes: false,
		longswipesMs: 3000,
		maxBackfaceHiddenSlides: 1,
		slidesPerView: 3,
		loop: true,
		height: 430,
		// spaceBetween: 10,
		grabCursor: true,
		// slideToClickedSlice: true,
		slidesPerGroup: 1,
		// autoHeight: true,
		speed: 800,
		effect: 'slide',

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
		// allowSlideNext: false,
		// allowSlidePrev: false,
		preventClicks: true,
		allowTouchMove: true,
		// mousewheel: false,
		centeredSlides: true,
		slidesPerView: 3,
		loop: true,
		grabCursor: true,
		slideToClickedSlice: true,
		slidesPerGroup: 1,
		speed: 800,
		effect: 'slide',
		// 	// delay: 3000,
		// 	reverseDirection: true,
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
		grabCursor: false,
		slideToClickedSlice: true,
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
		// // grabCursor: true,
		slideToClickedSlice: true,
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
	let slider6 = new Swiper(sliderSpecial, {
		direction: 'horizontal',
		// paralax: true,
		// observer: true,
		// observeParents: true,
		// watchOverflow: true,
		centeredSlides: true,
		loop: true,
		slidesPerView: 3,
		initialSlide: 1,
		// // grabCursor: true,
		slideToClickedSlice: true,
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
	// slider1.controller.control = slider2;
	slider2.controller.control = slider1;
	slider1.controller.control = slider2;

	// accordion///////////////////////////////////////////////////

	// Function to handle accordion behavior
	function accordion(accordionBtn, accordionPanel) {
		const accordions = document.querySelectorAll(accordionBtn);

		accordions.forEach(accordion => {
			accordion.addEventListener('click', function (e) {
				e.preventDefault();
				const panel = this.nextElementSibling; // Get the sibling (accordion content) element

				this.classList.toggle('active');
				panel.classList.toggle('active');

				if (panel.classList.contains('active')) {
					panel.style.maxHeight = panel.scrollHeight + 'px';
					const checkbox = this.querySelector('input[type="radio"]');
					if (checkbox) {
						checkbox.checked = true; // Activate the checkbox when the accordion is active
					}
				} else {
					panel.style.maxHeight = null;
					const checkbox = this.querySelector('input[type="radio"]');
					if (checkbox) {
						checkbox.checked = false; // Deactivate the checkbox when the accordion is inactive
					}
				}
			});
		});
	}

	// Initialize accordions
	accordion('#accordionorder1', '#accordionorder1Body');
	accordion('#accordionorder2', '#accordionorder2Body');
	accordion('#accordionorder3', '#accordionorder3Body');
	accordion('#accordionorder4', '#accordionorder4Body');
	accordion('#accordionOrderPage1', '#accordionOrderPage1Body');
	accordion('#accordionOrderPage2', '#accordionOrderPage2Body');

	// FUNCTIONS FOR POPUP SMOOTH
	function fadeOut(element, duration) {
		let startTime = performance.now();
		let startOpacity = parseFloat(element.style.opacity);

		requestAnimationFrame(function animate(currentTime) {
			let elapsedTime = currentTime - startTime;
			let progress = elapsedTime / duration;

			element.style.opacity = Math.max(startOpacity - progress, 0);

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				element.style.display = 'none';
			}
		});
	}
	function fadeIn(element, duration) {
		element.style.opacity = 0;
		var startTime = performance.now();

		requestAnimationFrame(function animate(currentTime) {
			var elapsedTime = currentTime - startTime;
			var progress = elapsedTime / duration;

			element.style.opacity = Math.min(progress, 1);

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		});
	}

	// popup my-account///////////////////////////////////////////////////
	function initializeMyAccountPopup(buttonSelector) {
		const buttons = document.querySelectorAll(buttonSelector);
		const popup = document.getElementById('my-account-Popup');

		buttons.forEach(button => {
			button.addEventListener('click', () => {
				popup.style.display = 'block';
				fadeIn(popup, 500);
				document.body.style.overflow = 'hidden';
			});
		});

		popup.addEventListener('click', event => {
			if (event.target === popup) {
				fadeOut(popup, 500);
				document.body.style.overflow = 'auto';
			}
		});
	}

	initializeMyAccountPopup('#my-account-button');

	// POPUP EMPTY CART///////////////////////////////////////////////////
	function initializeEmptyCartPopup(buttonSelector) {
		const buttons = document.querySelectorAll(buttonSelector);
		const popup = document.getElementById('emptycart-Popup');

		buttons.forEach(button => {
			button.addEventListener('click', () => {
				popup.style.display = 'block';
				fadeIn(popup, 500);
				document.body.style.overflow = 'hidden';
			});
		});

		popup.addEventListener('click', event => {
			if (event.target === popup || event.target.closest('#emptycart-Popup-button-close')) {
				fadeOut(popup, 500);
				document.body.style.overflow = 'auto';
			}
		});
	}

	initializeEmptyCartPopup('#emptycart-Popup-button');

	/////////////////////////////////////////////////////////////////////

	// POPUP SUBSCRIBE ///////////////////////////////////////////////////
	function initializeSubscribePopup(buttonSelector) {
		let buttons = document.querySelectorAll(buttonSelector);
		let popup = document.getElementById('subscribe-popup');

		buttons.forEach(button => {
			button.addEventListener('click', () => {
				popup.style.display = 'block';
				fadeIn(popup, 500);
				document.body.style.overflow = 'hidden';
			});
		});

		popup.addEventListener('click', event => {
			if (event.target === popup || event.target.closest('#subscribe-popup-button-close')) {
				fadeOut(popup, 500);
				document.body.style.overflow = 'auto';
			}
		});
	}

	initializeSubscribePopup('#subscribe-popup-btn');
	// ///////////////////////////////////////////////////

	// POPUP REVIEW ///////////////////////////////////////////////////
	function initializeReviewPopup(buttonSelector) {
		let buttons = document.querySelectorAll(buttonSelector);
		let popup = document.getElementById('review-popup');

		buttons.forEach(button => {
			button.addEventListener('click', () => {
				popup.style.display = 'block';
				fadeIn(popup, 500);
				document.body.style.overflow = 'hidden';
			});
		});

		popup.addEventListener('click', event => {
			if (event.target === popup || event.target.closest('#review-popup-button-close')) {
				fadeOut(popup, 500);
				document.body.style.overflow = 'auto';
			}
		});
	}

	initializeReviewPopup('#review-popup-btn');
	// ///////////////////////////////////////////////////

	// POPUP ORDER THANKS ///////////////////////////////////////////////////
	function initializeOrderthanksPopup(buttonSelector) {
		let buttons = document.querySelectorAll(buttonSelector);
		let popup = document.getElementById('orderthanks-popup');

		buttons.forEach(button => {
			button.addEventListener('click', () => {
				popup.style.display = 'block';
				fadeIn(popup, 500);
				document.body.style.overflow = 'hidden';
			});
		});

		popup.addEventListener('click', event => {
			if (event.target === popup || event.target.closest('#orderthanks-popup-button-close')) {
				fadeOut(popup, 500);
				document.body.style.overflow = 'auto';
			}
		});
	}

	initializeOrderthanksPopup('#order-thanks-popup-btn');
	// ///////////////////////////////////////////////////

	// Search///////////////////////////////////////////////////
	// const body = document.getElementsByTagName('body')[0];
	// const searchInput = document.querySelector('.header__search-input');
	// searchInput.addEventListener('focus', event => {
	// 	// event.target.parentElement.classList.add('active');
	// 	body.classList.add('search-open');
	// });

	searchInput.addEventListener('blur', event => {
		// event.target.parentElement.classList.remove('active');
		// body.classList.remove('search-open');
	});

	// burger ///////////////////////////////////////////////////
	$(document).ready(function () {
		$('.burger-menu-icon').click(function (event) {
			$('.burger-menu-icon, .burger-menu-body').toggleClass('active');
		});
	});

	// tabs///////////////////////////////////////////////////
	const cartTabs = new bootstrap.Tab(document.getElementById('imagesTabs'));
	myTabs.show();
	const cartTabs2 = new bootstrap.Tab(document.getElementById('descriptionTabs'));
	myTabs.show();
});
