document.addEventListener("DOMContentLoaded", function () {

	'use strict';
	Splitting();
	// luxy.init();
	gsap.registerPlugin(ScrollTrigger);

	const gTl = gsap.timeline();
	gTl.from(".title .char", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" });
	gTl.to(".header__img", 2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, ease: "expo.out" }, "-=1");
	gTl.from(".header__marq", 2, { opacity: 0, yPercent: 100, ease: "expo.out" }, "-=1.5");

	const gsapSq = gsap.utils.toArray('.section-title__square');
	gsapSq.forEach((gSq, i) => {
		const rotat = gsap.from(gSq, 3, { rotation: 720 });
		ScrollTrigger.create({
			trigger: gSq,
			animation: rotat,
			start: 'top bottom',
			scrub: 1.9
		});
	});


	//header
	function header() {
		gsap.registerPlugin(ScrollTrigger);
	
		gsap.to('.title_paralax', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			yPercent: -150
		});
	
		gsap.to('.header .stroke', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: 50
		});
	
		gsap.to('.header__img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: -70
		});
	
		gsap.to('.header__img img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			scale: 1.3
		});
	
		gsap.to('.header__marq-wrapp', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: -50
		});
	
		gsap.to('.header__marq-star img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			rotate: -720
		});
	}
	
	document.addEventListener("DOMContentLoaded", function() {
		header();
	});
	


	//about
	function about() {
		gsap.from('.about__img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9
			},
			yPercent: 80
		})
		gsap.from('.about__img img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9
			},
			scale: 1.6
		})
		gsap.to('.about__txt', {
			scrollTrigger: {
				trigger: '.about__wrapp',
				start: 'top bottom',
				scrub: 1.9
			},
			yPercent: 50
		})
	}
	about();


	//benefits
	function benefits() {
		gsap.from('.benefits__num', {
			x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.benefits__list',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	benefits();


	//portfolio
	function portfolio() {
		gsap.from('.work__item, .work__item-num', {
			y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.work',
				start: 'top bottom',
				scrub: 1.9
			}
		})
		gsap.from('.work__item-img img', {
			scale: 1.6,
			scrollTrigger: {
				trigger: '.work__wrapp',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	portfolio();


	//serv
	function serv() {
		gsap.from('.serv__item-arrow', {
			x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.serv__list',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	serv();


	//footer
	function footer() {
		gsap.from('.footer__div span', {
			y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			opacity: 0,
			scrollTrigger: {
				trigger: '.footer',
				start: 'top bottom',
				end: 'bottom bottom',
				scrub: 1.9
			}
		})
	}
	footer();
});


document.addEventListener('DOMContentLoaded', () => {
	const textItems = document.querySelectorAll('.serv__item-text');

	textItems.forEach(textItem => {
		textItem.addEventListener('mouseenter', () => {
			gsap.to(textItem, {
				duration: 0.5,
				backgroundPosition: "0%",
				ease: "power2.inOut"
			});
		});

		textItem.addEventListener('mouseleave', () => {
			gsap.to(textItem, {
				duration: 0.5,
				backgroundPosition: "+100%",
				ease: "power2.inOut"
			});
		});
	});
});