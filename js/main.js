document.addEventListener('DOMContentLoaded', function () {
	console.log('Loaded');

	const body = document.querySelector('body');
	const header = document.querySelector('.header');

	// Function to toggle header visibility based on scroll direction
	let prevScrollPos = window.scrollY;
	function toggleHeaderClassOnScroll() {
		if (window.scrollY > 300) {
			const currentScrollPos = window.scrollY;
			const header = document.querySelector('header');

			if (prevScrollPos < currentScrollPos) {
				// Если скроллим вниз, добавляем класс
				header.classList.add('header-scroll');
			} else {
				// Если скроллим вверх, удаляем класс
				header.classList.remove('header-scroll');
			}

			prevScrollPos = currentScrollPos;
		}
	}
	function handleAnyPageEvent() {
		const header = document.querySelector('header');
		header.classList.remove('header-scroll');
	}
	document.addEventListener('click', handleAnyPageEvent);
	document.addEventListener('scroll', toggleHeaderClassOnScroll);

	// ///////////////////////////////////////////////////

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

		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				autoHeight: true,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
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
	accordion('#burgermenuAccordion1btn', '#burgermenuAccordion1Body');
	accordion('#burgermenuAccordion2btn', '#burgermenuAccordion2Body');

	accordion('#footerAccordionBtn1', '#footerAccordionBody1');
	accordion('#footerAccordionBtn2', '#footerAccordionBody2');

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
				myaccaountPopupAnimation();
				fadeIn(popup, 500);
				document.body.style.overflow = 'hidden';
			});
		});

		popup.addEventListener('click', event => {
			if (event.target === popup) {
				myaccaountPopupAnimationOut();
				fadeOut(popup, 500);
				document.body.style.overflow = 'unset';
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
				document.body.style.overflow = 'unset';
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
				thanksPopupAnimation();
			});
		});

		popup.addEventListener('click', event => {
			if (event.target === popup || event.target.closest('#subscribe-popup-button-close')) {
				thanksPopupAnimatinOut();
				fadeOut(popup, 500);
				document.body.style.overflow = 'unset';
			}
		});
	}

	initializeSubscribePopup('#subscribe-popup-btn');
	// ///////////////////////////////////////////////////

	// POPUP REVIEW ///////////////////////////////////////////////////

	const popupSubscribe = document.getElementById('subscribe__popup');
	function initializeReviewPopup(buttonSelector) {
		let buttons = document.querySelectorAll(buttonSelector);
		let popup = document.getElementById('review-popup');

		buttons.forEach(button => {
			button.addEventListener('click', () => {
				popup.style.display = 'block';
				fadeIn(popup, 500);
				document.body.style.overflow = 'hidden';
				thanksPopupAnimation();
			});
		});

		popup.addEventListener('click', event => {
			if (event.target === popup || event.target.closest('#review-popup-button-close')) {
				thanksPopupAnimatinOut();
				fadeOut(popup, 500);
				document.body.style.overflow = 'unset';
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
				thanksPopupAnimation();
			});
		});

		popup.addEventListener('click', event => {
			if (event.target === popup || event.target.closest('#orderthanks-popup-button-close')) {
				fadeOut(popup, 500);
				thanksPopupAnimatinOut();
				document.body.style.overflow = 'unset';
			}
		});
	}
	initializeOrderthanksPopup('#order-thanks-popup-btn');
	// ///////////////////////////////////////////////////

	// burger ///////////////////////////////////////////////////
	$(document).ready(function () {
		$('.burger-menu-icon').click(function (event) {
			$('.burger-menu-icon, .burger-menu-body').toggleClass('active');
			body.classList.toggle('lock');
			event.stopPropagation();
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

	gsap.registerPlugin(ScrollTrigger);
	function animateClouds() {
		const cloudImgNew = document.querySelector('.two___sections-cloud-img-left');
		const cloudImgNew2 = document.querySelector('.two___sections-cloud-img-right');
		const cloudImgNew3 = document.querySelector('.two___sections-cloud-img-left-second');
		const cloudImgNew4 = document.querySelector('.two___sections-cloud-img-right-second');

		if (!cloudImgNew || !cloudImgNew2 || !cloudImgNew3 || !cloudImgNew4) {
			return; // Skip the code block if any of the required elements are missing
		}
		gsap.fromTo(
			cloudImgNew,
			{
				x: '-100%',
				opacity: 0,
			},
			{
				x: '0%',
				opacity: 1,
				duration: 5,
				delay: 0.5,
				scrub: 5,
				onComplete: () => {
					if (cloudImgNew) {
						cloudImgNew.classList.add('animated');
					}
				},
			},
			1,
		);
		gsap.fromTo(
			cloudImgNew2,
			{
				x: '100%',
				opacity: 0,
			},
			{
				x: '0%',
				opacity: 1,
				duration: 5,
				delay: 0.5,
				scrub: 5,
				onComplete: () => {
					if (cloudImgNew2) {
						cloudImgNew2.classList.add('animated');
					}
				},
			},
			'<',
		);
		gsap.fromTo(
			cloudImgNew3,
			{
				x: '-100%',
				opacity: 0,
			},
			{
				x: '-50%',
				opacity: 1,
				duration: 5,
				delay: 0.5,
				scrub: 5,
				onComplete: () => {
					if (cloudImgNew3) {
						cloudImgNew3.classList.add('animated');
					}
				},
			},
		);
		gsap.fromTo(
			cloudImgNew4,
			{
				x: '100%',
				opacity: 0,
			},
			{
				x: '50%',
				opacity: 1,
				duration: 5,
				delay: 0.5,
				scrub: 5,
				onComplete: () => {
					if (cloudImgNew4) {
						cloudImgNew4.classList.add('animated');
					}
				},
			},
		);
	}

	// Call the animation function

	const powerAnimation = function () {
		const cloudImgsPower = document.querySelectorAll('.power-cloud');
		if (!cloudImgsPower) {
			return;
		}

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
		if (!powerSliderBox) {
			return;
		}

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

	const newAnimation = function () {
		const newItems = document.querySelectorAll('.new__item-info');
		const newImages = document.querySelectorAll('.new-image');
		const newSlides = document.querySelectorAll('.new__item:not(.new__item .swiper-slide-active)'); // Інші слайди
		const activeSlide = document.querySelector('.new .swiper-slide-active'); // Поточний активний слайд

		if (!newItems || !newImages || !newSlides) {
			return;
		}

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
					// Initial position, off-screen at the top
				},
				{
					opacity: 1,
					scale: 1,
					// Final position, where the image should appear
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

	const bestsellersAnimation = function () {
		const bestsellersSlides = document.querySelectorAll('.bestsellers .swiper-slide');

		if (bestsellersSlides.length > 0) {
			gsap.fromTo(
				bestsellersSlides,
				{
					opacity: 0,
					y: 150,
				},
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.2, // Затримка між кожним слайдом
					scrollTrigger: {
						trigger: '.bestsellers',
						start: 'top 140%',
						end: 'center center',
						scrub: 1,
						ease: 'power3.inOut',
						// once: true,
					},
				},
			);
		}
	};

	const animateHiSection = function () {
		const hiCloud1 = document.querySelector('.hi-cloud-1');
		const hiCloud2 = document.querySelector('.hi-cloud-2');
		const hiCloud3 = document.querySelector('.hi-cloud-3');

		// Timeline for the animation
		if (!hiCloud1 || !hiCloud2 || !hiCloud3) {
			return;
		}
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.hi',
				start: 'top 80%',
			},
			onComplete: () => {
				hiCloud1.classList.add('animated');
			},
		});

		// Animation for .hi-cloud
		tl.from(hiCloud1, {
			x: '100%', // Start position
			opacity: 0,
			duration: 1,
			ease: 'power3.out',
		});
		tl.from(
			hiCloud2,
			{
				x: '-100%', // Start position
				opacity: 0,
				duration: 1,
				ease: 'power1.out',
			},
			'<',
		);
		tl.from(
			hiCloud3,
			{
				x: '100%', // Start position
				opacity: 0,
				duration: 1,
				ease: 'power1.out',
			},
			'<',
		);

		// Animation for .hi__image-block::before
		tl.fromTo(
			'.hi__image-block::before',
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.5,
			},
		);

		// Animation for .hi__image-ibg img
		tl.fromTo(
			'.hi__image-ibg img',
			{
				opacity: 0,
				y: '-30%',
			},
			{
				opacity: 1,
				y: '0%',
				duration: 0.5,
				ease: 'power1.out',
			},
		);

		// Simultaneous animations for .hi__info and .hi__image-name
		tl.from(
			'.hi__info',
			{
				x: '-100%',
				// Start position from the left and right respectively
				opacity: 0,
				duration: 1,
				// Additional properties can be added here
			},
			2,
		);

		tl.from(
			'.hi__image-name',
			{
				x: '100%',
				// Start position from the left and right respectively
				opacity: 0,
				duration: 1,
				// Additional properties can be added here
			},
			2, // одночасність анімації з попередньою анімацією
		);
	};

	const animateForm = function () {
		const formCloud1 = document.querySelector('.form-cloud-1');
		const formCloud2 = document.querySelector('.form-cloud-2');
		// Timeline for the animation

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.form-wrapper',
				start: 'top 80%', // Start animation when the top of the .form-wrapper section is 80% in view
			},
			onComplete: () => {
				if (formCloud1) {
					formCloud1.classList.add('animated');
				}
				if (formCloud2) {
					formCloud2.classList.add('animated');
				}
			},
		});

		// Animation for .form-cloud img
		tl.fromTo(
			formCloud1,
			{
				y: '-300px',
				x: '-100%', // Start position (image off-screen to the left)
			},
			{
				y: '0px',
				x: '0', // Move image to the center of the screen
				duration: 2, // Animation duration
			},
			1,
		);

		tl.fromTo(
			formCloud2,
			{
				y: '-300px',
				x: '100%', // Start position (image off-screen to the left)
			},
			{
				y: '0px',
				x: '0', // Move image to the center of the screen
				duration: 2, // Animation duration
			},
			'<',
		);
	};

	// GSAP ANIMATION FOR carttabs2__bg-left AND carttabs2__bg-right IMAGES
	const carttabsCloudsAnimation = function () {
		// Get the elements for the images
		const carttabs2BgLeft = document.querySelector('.carttabs2__bg-left');
		const carttabs2BgRight = document.querySelector('.carttabs2__bg-right');

		// Animate the images
		if (!carttabs2BgLeft || !carttabs2BgRight) {
			return;
		}
		gsap.fromTo(
			carttabs2BgLeft,
			{
				x: '-100%',
				delay: 2,
			},
			{
				delay: 2,
				x: '0%',
				duration: 1,

				onComplete: function () {
					carttabs2BgLeft.classList.add('animated');
				},
			},
		);
		gsap.fromTo(
			carttabs2BgRight,
			{
				x: '100%',
				delay: 2,
			},
			{
				x: '0%',
				duration: 1,
				delay: 2,

				onComplete: function () {
					carttabs2BgRight.classList.add('animated');
				},
			},
		);
	};

	const reviewsAnimation = () => {
		const reviewBlock = document.querySelector('.reviews__form-wrapper');
		const reviewContent = document.querySelector('.reviews__content');

		if (!reviewBlock || !reviewContent) {
			return;
		}

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.reviews',
				start: 'top 120%',
				end: 'center center',
				scrub: false,
				ease: 'power3.inOut',
				// markers: true,
				onComplete: () => {
					reviewBlock.classList.add('animated');
				},
			},
		});

		tl.fromTo(
			reviewBlock,
			{
				opacity: 0,
				x: '50px',
				duration: 1,
			},
			{
				opacity: 1,
				x: '0px',
				duration: 1,
			},
			1,
		);
		tl.fromTo(
			reviewContent,
			{
				opacity: 0,
				x: '-50px',
				duration: 1,
			},
			{
				opacity: 1,
				x: '0px',
				duration: 1,
			},
			'<',
		);
	};

	const myaccaountPopupAnimation = () => {
		const cloudTopLeft = document.querySelectorAll('.myaccount__popup-cloud-top-left');
		const cloudTopRight = document.querySelectorAll('.myaccount__popup-cloud-top-right');
		const cloudBottomLeft = document.querySelectorAll('.myaccount__popup-cloud-bottom-left');
		const cloudBottomRight = document.querySelectorAll('.myaccount__popup-cloud-bottom-right');

		if (!cloudTopLeft || !cloudTopRight || !cloudBottomLeft || !cloudBottomRight) {
			console.log('Some of the cloud elements are missing, animation cannot be performed.');
			return;
		}

		const tl = gsap.timeline({
			onComplete: () => {
				cloudTopLeft.forEach(el => {
					el.classList.add('animated');
				});
				cloudTopRight.forEach(el => {
					el.classList.add('animated');
				});
				cloudBottomLeft.forEach(el => {
					el.classList.add('animated');
				});
				cloudBottomRight.forEach(el => {
					el.classList.add('animated');
				});
			},
		});

		tl.fromTo(
			[cloudTopLeft, cloudBottomLeft],
			{
				opacity: 0,
				x: '-100px',
				stagger: 0.2,
			},
			{
				opacity: 1,
				x: '0',
				duration: 1,
				ease: 'power2.out',
			},
			'<',
		);

		tl.fromTo(
			[cloudTopRight, cloudBottomRight],
			{
				opacity: 0,
				x: '100px',
				stagger: 0.2,
			},
			{
				opacity: 1,
				x: '0',
				duration: 1,
				ease: 'power2.out',
			},
			'<', // Delay the second animation by 0.5 seconds to create a staggered effect
		);
	};
	const myaccaountPopupAnimationOut = () => {
		const cloudTopLeft = document.querySelectorAll('.myaccount__popup-cloud-top-left');
		const cloudTopRight = document.querySelectorAll('.myaccount__popup-cloud-top-right');
		const cloudBottomLeft = document.querySelectorAll('.myaccount__popup-cloud-bottom-left');
		const cloudBottomRight = document.querySelectorAll('.myaccount__popup-cloud-bottom-right');

		if (!cloudTopLeft || !cloudTopRight || !cloudBottomLeft || !cloudBottomRight) {
			console.log('Some of the cloud elements are missing, animation cannot be performed.');
			return;
		}

		const tl = gsap.timeline({
			onComplete: () => {
				cloudTopLeft.forEach(el => {
					el.classList.remove('animated');
				});
				cloudTopRight.forEach(el => {
					el.classList.remove('animated');
				});
				cloudBottomLeft.forEach(el => {
					el.classList.remove('animated');
				});
				cloudBottomRight.forEach(el => {
					el.classList.remove('animated');
				});
			},
		});

		tl.to(
			[cloudTopLeft, cloudBottomLeft],
			{
				opacity: 0,
				stagger: 0.2,
			},

			'<',
		);

		tl.to(
			[cloudTopRight, cloudBottomRight],
			{
				opacity: 0,
				stagger: 0.2,
			},

			'<', // Delay the second animation by 0.5 seconds to create a staggered effect
		);
	};
	const thanksPopupAnimation = () => {
		const cloudTopLeft = document.querySelectorAll('.thanks__popup-cloud-top-left');
		const cloudTopRight = document.querySelectorAll('.thanks__popup-cloud-top-right');
		const cloudBottomLeft = document.querySelectorAll('.thanks__popup-cloud-bottom-left');
		const cloudBottomRight = document.querySelectorAll('.thanks__popup-cloud-bottom-right');

		if (!cloudTopLeft || !cloudTopRight || !cloudBottomLeft || !cloudBottomRight) {
			console.log('Some of the cloud elements are missing, animation cannot be performed.');
			return;
		}

		const tl = gsap.timeline({
			onComplete: () => {
				cloudTopLeft.forEach(el => {
					el.classList.add('animated');
				});
				cloudTopRight.forEach(el => {
					el.classList.add('animated');
				});
				cloudBottomLeft.forEach(el => {
					el.classList.add('animated');
				});
				cloudBottomRight.forEach(el => {
					el.classList.add('animated');
				});
			},
		});

		tl.fromTo(
			[cloudTopLeft, cloudBottomLeft],
			{
				opacity: 0,
				x: '-100px',
				stagger: 0.2,
			},
			{
				opacity: 1,
				x: '0',
				duration: 1,
				ease: 'power2.out',
			},
			'<',
		);

		tl.fromTo(
			[cloudTopRight, cloudBottomRight],
			{
				opacity: 0,
				x: '100px',
				stagger: 0.2,
			},
			{
				opacity: 1,
				x: '0',
				duration: 1,
				ease: 'power2.out',
			},
			'<', // Delay the second animation by 0.5 seconds to create a staggered effect
		);
	};
	const thanksPopupAnimatinOut = () => {
		const cloudTopLeft = document.querySelectorAll('.thanks__popup-cloud-top-left');
		const cloudTopRight = document.querySelectorAll('.thanks__popup-cloud-top-right');
		const cloudBottomLeft = document.querySelectorAll('.thanks__popup-cloud-bottom-left');
		const cloudBottomRight = document.querySelectorAll('.thanks__popup-cloud-bottom-right');

		if (!cloudTopLeft || !cloudTopRight || !cloudBottomLeft || !cloudBottomRight) {
			console.log('Some of the cloud elements are missing, animation cannot be performed.');
			return;
		}

		const tl = gsap.timeline({
			onComplete: () => {
				cloudTopLeft.forEach(el => {
					el.classList.remove('animated');
				});
				cloudTopRight.forEach(el => {
					el.classList.remove('animated');
				});
				cloudBottomLeft.forEach(el => {
					el.classList.remove('animated');
				});
				cloudBottomRight.forEach(el => {
					el.classList.remove('animated');
				});
			},
		});

		tl.to(
			[cloudTopLeft, cloudBottomLeft],
			{
				opacity: 0,
				duration: 1,
			},
			'<',
		);

		tl.to(
			[cloudTopRight, cloudBottomRight],
			{
				opacity: 0,
				duration: 1,
			},
			'<', // Delay the second animation by 0.5 seconds to create a staggered effect
		);
	};

	const bannerAnimation = function () {
		// Timeline for the animation
		const tl = gsap.timeline({});

		// Select the elements for the circle slider
		const cloudContainer = document.querySelector('.circle-slider-clouds');
		const slideFigureAfter = document.querySelector('.circle-slide-figure::after');
		const slideFigure = document.querySelector('.circle-slide-figure');
		const slides = document.querySelectorAll('.circle-slider .swiper-slide');

		const verticalSlider = document.querySelector('.vertical-slider');
		const verticalSlides = document.querySelectorAll('.vertical-slider .swiper-slide');

		// Set initial styles to prevent flickering
		tl.set([cloudContainer, slideFigureAfter, slideFigure, slides, verticalSlider], {
			opacity: 0,
			transformOrigin: 'center',
			pointerEvents: 'none', // Initially disable interactions for all slides
		});

		// Animation for cloudContainer
		tl.fromTo(
			cloudContainer,
			{
				x: '100%',
				opacity: 0,
			},
			{
				x: '0%',
				opacity: 1,
				duration: 1.5,
				onComplete: function () {
					cloudContainer.classList.add('animated');
				},
			},
			0,
		);

		tl.fromTo(
			verticalSlider,
			{
				opacity: 0,
				x: '-100%',
			},
			{
				opacity: 1,
				x: '0%',
				duration: 2,
				ease: 'power3.out',
			},
			'<',
		);

		// Animation for slideFigure
		tl.fromTo(
			slideFigure,
			{
				y: '-50%',
				opacity: 0,
			},
			{
				y: '0%',
				opacity: 1,
				duration: 1,
				ease: 'power2.out',
			},
			'-=1', // Start 1.5 seconds before the previous animation ends
		);

		// Animation for the slides
		tl.fromTo(
			slides,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1,
				ease: 'power3.out',
				stagger: 0.15,
			},
			'=-0.5', // Start 1 second before the previous animation ends
		);
	};

	if (innerWidth > 1200) {
		reviewsAnimation();
		animateForm();
		newAnimation();
		powerAnimation();
		animateClouds();
		animateHiSection();
		bestsellersAnimation();
		carttabsCloudsAnimation();
		bannerAnimation();
	}
	// GSAP ANIMATIONS END ///////////////////////////////////////////////////

	// tabs///////////////////////////////////////////////////
	const imagesTabsFunciton = function () {
		const imagesTabsElement = document.getElementById('imagesTabs');
		if (imagesTabsElement) {
			const cartTabs = new bootstrap.Tab(imagesTabsElement);
			cartTabs.show();
		}

		// Check if the 'descriptionTabs' element exists before creating the tab
		const descriptionTabsElement = document.getElementById('descriptionTabs');
		if (descriptionTabsElement) {
			const cartTabs2 = new bootstrap.Tab(descriptionTabsElement);
			cartTabs2.show();
		}
	};
	imagesTabsFunciton();
});
