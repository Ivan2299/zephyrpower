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

	// Function   ACCORDIONS///////////////////////////////////////////////////

	let activeAccordion = null;

	function closeAccordion() {
		if (activeAccordion) {
			activeAccordion.classList.remove('active');
			const panel = activeAccordion.nextElementSibling;
			panel.style.maxHeight = null;
			const checkbox = activeAccordion.querySelector('input[type="radio"]');
			if (checkbox) {
				checkbox.checked = false; // Deactivate the checkbox
			}
			activeAccordion = null;
		}
	}

	function accordion(accordionBtn, accordionPanel) {
		const accordions = document.querySelectorAll(accordionBtn);

		accordions.forEach(accordion => {
			accordion.addEventListener('click', function (e) {
				e.preventDefault();
				const panel = this.nextElementSibling; // Get the sibling (accordion content) element
				const isActive = this.classList.contains('active');

				closeAccordion(); // Close the currently active accordion (if any)

				if (!isActive) {
					this.classList.add('active');
					panel.classList.add('active');
					panel.style.maxHeight = panel.scrollHeight + 'px';
					const checkbox = this.querySelector('input[type="radio"]');
					if (checkbox) {
						checkbox.checked = true; // Activate the checkbox
					}
					activeAccordion = this; // Set the current accordion as the active one
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
	// ///////////////////////////////////////////////////

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

	// burger ///////////////////////////////////////////////////
	$(document).ready(function () {
		$('.burger-menu-icon').click(function (event) {
			$('.burger-menu-icon, .burger-menu-body').toggleClass('active');
		});
	});
	// ////	ORDER PAGE ANIMATION VERTICAL TIMELINE ///////////////////////////////////////////////
	function handleFormOrder() {
		const contactInputs = document.querySelectorAll('.form-order__contacts-input');
		const paymentInputs = document.querySelectorAll('.form-order__payment__input');
		const contactsBlock = document.querySelector('.form-order__contacts');
		const paymentBlock = document.querySelector('.form-order__payment');
		const deliveryBlock = document.querySelector('.form-order__delivery');
		const callbackBlock = document.querySelector('#checkboxCallbackLabel');

		if (!contactsBlock || !paymentBlock || !deliveryBlock || !callbackBlock) {
			return; // Skip the code block if any of the required elements are missing
		}

		contactInputs.forEach(input => {
			input.addEventListener('input', checkContactInputs);
		});

		function checkContactInputs() {
			const isAllContactInputsFilled = Array.from(contactInputs).every(
				input => input.value.trim() !== '',
			);

			if (isAllContactInputsFilled) {
				paymentBlock.classList.add('active');
				deliveryBlock.classList.add('preActive');
			}
		}

		paymentInputs.forEach(input => {
			input.addEventListener('input', checkPaymentInputs);
		});

		function checkPaymentInputs() {
			const isAllPaymentInputsFilled = Array.from(paymentInputs).some(input => input.checked);

			if (isAllPaymentInputsFilled) {
				deliveryBlock.classList.add('active');
				callbackBlock.classList.add('active');
			}
		}

		checkContactInputs();
		checkPaymentInputs();
	}

	handleFormOrder();

	// ///////////////////////////////////////////////////

	// CATALOG FILTER BLOCK OPEN/CLOSE///////////////////////////////////////////////////
	const filterBtn = document.querySelector('.catalog__content-top-left-filter');
	const filterBlock = document.querySelector('.catalog__filter-block');

	const toggleFilterBlock = () => {
		filterBlock.classList.toggle('active');
	};

	if (filterBtn) {
		filterBtn.addEventListener('click', event => {
			toggleFilterBlock();
		});
	}

	// Немає потреби прив'язувати подію click кожен раз, коли ви викликаєте toggleFilterBlock()
	// Зворотній виклик навішується один раз під час ініціалізації
	if (filterBlock) {
		filterBlock.addEventListener('click', event => {
			if (event.target === filterBlock || event.target.closest('.catalog__filter-block-close')) {
				toggleFilterBlock();
			}
		});
	}

	// CATALOG FILTER BLOCK OPEN/CLOSE END ///////////////////////////////////////////////////

	// GSAP ANIMATIONS  ///////////////////////////////////////////////////
	function animateClouds() {
		const cloudImgNew = document.querySelector('.two___sections-cloud-img-left');
		const cloudImgNew2 = document.querySelector('.two___sections-cloud-img-right');
		const cloudImgNew3 = document.querySelector('.two___sections-cloud-img-left-second');
		const cloudImgNew4 = document.querySelector('.two___sections-cloud-img-right-second');

		gsap.registerPlugin(ScrollTrigger);

		gsap.to(cloudImgNew, {
			scrollTrigger: {
				trigger: '.home-hero-block',
				start: 'top top',
				end: '+=' + window.innerHeight * 2,
				scrub: 2,
				normalizeScroll: true,
			},
			x: -600,
		});

		gsap.to(cloudImgNew2, {
			scrollTrigger: {
				trigger: '.home-hero-block',
				start: 'top top',
				end: '+=' + window.innerHeight * 2,
				scrub: 2,
				normalizeScroll: true,
			},
			x: 0,
		});

		gsap.to(cloudImgNew3, {
			x: '-70%',
			duration: 2,
			scrollTrigger: {
				trigger: '.home-hero-block',
				start: 'top top',
				scrub: 2,
				ease: 'power1.inOut',
			},
		});

		gsap.to(cloudImgNew4, {
			x: '70%',
			duration: 2,
			scrollTrigger: {
				trigger: '.home-hero-block',
				start: 'top top',
				scrub: 2,
				ease: 'power1.inOut',
			},
		});
	}

	// Call the animation function
	animateClouds();

	const powerAnimation = function () {
		const cloudImgsPower = document.querySelectorAll('.power-cloud');

		// Анімація хмаринок з використанням ScrollTrigger
		cloudImgsPower.forEach((cloudImg, index) => {
			const isLeftSide = [0, 1, 2, 6].includes(index); // Перевіряємо, чи хмаринка з лівої сторони
			const direction = isLeftSide ? '-=50%' : '+=50%'; // Змінюємо напрямок руху для лівих та правих хмаринок

			gsap.set(cloudImg, {
				x: isLeftSide ? '-100%' : '100%', // Початкова позиція зліва або справа від екрану
				opacity: 0, // Початкова прозорість
				scale: 0.8, // Початковий масштаб (зменшимо для ефекту зближення)
			});

			gsap.to(cloudImg, {
				x: '0%', // Виїжджаємо до центру горизонтально
				opacity: 1, // Збільшуємо прозорість
				scale: 1, // Повертаємо масштаб до нормального
				duration: 3, // Тривалість анімації
				scrollTrigger: {
					trigger: '.power', // Використовуємо клас "power" як тригер
					start: 'top bottom', // Починаємо анімацію, коли верхній край тригера збігається з нижнім краєм екрану
					end: 'center center', // Закінчуємо анімацію, коли центр тригера збігається з центром екрану
					scrub: 3, // Збільшений scrub для плавної анімації
					ease: 'power1.inOut', // Додано easing для більш плавного ефекту
				},
			});
		});

		// Анімація для слайдера
		const powerSliderBox = document.querySelector('.power-slider-box');

		gsap.set(powerSliderBox, {
			opacity: 0, // Початкова прозорість
			y: '-200px', // Початкова позиція зверху від екрану
		});

		// Timeline для анімації слайдера
		const sliderTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.power', // The element that triggers the animation
				start: 'top center', // The start position of the animation
				end: 'top bottom', // The end position of the animation
				scrub: 2, // The scrubbing effect duration
				ease: 'power1.inOut', // The easing function for the animation
			},
		});

		sliderTimeline
			.to(powerSliderBox, {
				opacity: 1, // Появлення power-slider-box
				y: '0%', // Зсув вниз для появи
				duration: 2, // Збільшимо тривалість анімації для більшої затримки
			})
			.from('.power .swiper-slide-active', {
				duration: 1, // Зробимо тривалість 1 секунду, щоб мати ефект збільшення
			})
			.to('.power .swiper-slide-active', {
				duration: 0, // Зробимо тривалість 0, щоб слайдер не анімувався
			})
			.from('.power .swiper-slide:not(.power .swiper-slide-active)', {
				y: '-100%', // Анімація інших слайдів - зсув зверху вниз
				stagger: 0.15, // Затримка між анімаціями слайдів
				duration: 0, // Зробимо тривалість 0, щоб слайдер не анімувався
			});

		// Додамо затримку для появи слайдів після анімації power-slider-box
		gsap.from('.power .swiper-slide', {
			opacity: 0,
			y: '-100px',
			// stagger: 0.15,
			duration: 0.5,
			scrollTrigger: {
				trigger: '.power',
				start: 'top center',
				end: 'top bottom',
				scrub: 2.5,
				ease: 'power1.inOut',
			},
			onEnterBack: () => sliderTimeline.pause(), // Зупиняємо анімацію при прокрутці вгору
			onLeaveBack: () => sliderTimeline.play(), // Відновлюємо анімацію при прокрутці вниз
		});
	};
	powerAnimation();

	const newAnimation = function () {
		const newItems = document.querySelectorAll('.new__item-info');
		const newImages = document.querySelectorAll('.new-image');
		const newSlides = document.querySelectorAll('.new__item:not(.new__item .swiper-slide-active)'); // Інші слайди
		const activeSlide = document.querySelector('.new .swiper-slide-active'); // Поточний активний слайд

		// Створюємо Timeline
		const newTimeline = gsap.timeline();

		// Анімація для елементів new__item-info
		newItems.forEach(item => {
			newTimeline.from(item, {
				opacity: 0,
				y: 150,
				duration: 0.2,
			});
		});

		// Анімація для елементів new-image
		newImages.forEach(image => {
			newTimeline.fromTo(
				image,
				{
					opacity: 0,
					scale: 0.8,
					top: '-40%', // Initial position, off-screen at the top
				},
				{
					opacity: 1,
					scale: 1,
					top: '-40%', // Final position, where the image should appear
					duration: 0.8,
					// delay: 0.2, // Add a delay to synchronize with .new__item-info appearance
				},
				1.5,
			);
		});

		// Додамо затримку для появи інших слайдів після анімації new__item-info та new-image
		newTimeline.from(
			newSlides,
			{
				opacity: 0,
				y: 50,
			},
			0.5,
		); // Затримка 0.5 секунд для плавного з'явлення інших слайдів

		// Анімація для активного слайда
		newTimeline.from(
			activeSlide,
			{
				scale: 0.8,
				duration: 1,
			},
			0,
		);
	};
	newAnimation();

	const bestsellersAnimation = function () {
		const bestsellersSlides = document.querySelectorAll('.bestsellers .swiper-slide');
		bestsellersSlides.forEach(slide => {
			gsap.from(slide, {
				opacity: 0,
				y: 150,
				duration: 1,
				scrollTrigger: {
					trigger: '.bestsellers', // Використовуємо клас "power" як тригер
					start: 'top center', // Починаємо анімацію, коли верхній край тригера збігається з нижнім краєм екрану
					end: 'center center', // Закінчуємо анімацію, коли центр тригера збігається з центром екрану
					scrub: 1, // Збільшений scrub для плавної анімації
					ease: 'power1.inOut', // Додано easing для більш плавного ефекту
				},
			});
		});
	};
	bestsellersAnimation();

	const bannerAnimation = function () {
		// Timeline for the animation
		const tl = gsap.timeline({
			onStart: disableSliderInteractions, // Disable interactions at the start of the animation
			onComplete: enableSliderInteractions, // Enable interactions after the animation
		});

		// Select the elements
		const cloudContainer = document.querySelector('.circle-slider-clouds');
		const slideFigureAfter = document.querySelector('.circle-slide-figure::after');
		const slideFigure = document.querySelector('.circle-slide-figure');
		const slides = document.querySelectorAll('.circle-slider .swiper-slide');

		// Set initial styles to prevent flickering
		tl.set([cloudContainer, slideFigureAfter, slideFigure, slides], {
			opacity: 0,
			transformOrigin: 'center',
		});

		// Animation for cloudContainer
		tl.fromTo(
			cloudContainer,
			{
				opacity: 0,
				x: '100%',
			},
			{
				delay: 1,
				x: '0%',
				opacity: 1,
				duration: 1,
			},
		);

		// Animation for slideFigureAfter
		tl.to(slideFigureAfter, {
			opacity: 1,
			duration: 1,
		});

		// Animation for slideFigure
		tl.to(slideFigure, {
			opacity: 1,
			duration: 1,
		});

		// Animation for the slides
		tl.to(
			slides,
			{
				opacity: 1,
				duration: 1,
				stagger: 0.35,
			},
			'-=0.5', // Start half a second before the previous animation ends
		);

		// Function to disable user interactions with the sliders during the animation
		function disableSliderInteractions() {
			const sliders = document.querySelectorAll('.swiper-container');
			sliders.forEach(slider => (slider.style.pointerEvents = 'none'));
		}

		// Function to enable user interactions with the sliders after the animation
		function enableSliderInteractions() {
			const sliders = document.querySelectorAll('.swiper-container');
			sliders.forEach(slider => (slider.style.pointerEvents = 'auto'));
		}
	};

	bannerAnimation();

	// GSAP ANIMATIONS END ///////////////////////////////////////////////////

	// tabs///////////////////////////////////////////////////
	const cartTabs = new bootstrap.Tab(document.getElementById('imagesTabs'));
	myTabs.show();
	const cartTabs2 = new bootstrap.Tab(document.getElementById('descriptionTabs'));
	myTabs.show();
});
