$(function () {

	'use strict';


	//Lenis Smooth scroll
	// const lenis = new Lenis({
	// 	duration: 1.2,
	// 	infinite: false
	// });
	function raf(time) {
		// lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)

	//Integration Lenis on GSAP ScrollTrigger
	// lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time) => {
		// lenis.raf(time * 1000)
	})

	//Create animation
	function scrollTrig() {

		gsap.registerPlugin(ScrollTrigger);

		let gsapAnim = gsap.utils.toArray('.gsap__anim');
		gsapAnim.forEach(section => {
			gsap.to(section, {
				scrollTrigger: {
					trigger: section,
					start: 'bottom bottom',
					end: 'bottom top',
					scrub: true,
					snap: true
				},
				yPercent: 100,
				ease: 'none'
			});
		});

		let parallaxWrapp = gsap.utils.toArray('.parallax__wrapp');
		parallaxWrapp.forEach(parallax => {
			gsap.to(parallax, {
				scrollTrigger: {
					trigger: parallax,
					start: 'top top',
					end: 'bottom top',
					scrub: true
				},
				yPercent: -20,
				ease: 'none'
			});
		});

		gsap.to('.title-p', {
			scrollTrigger: {
				trigger: 'header.header',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			yPercent: 100
		});

		gsap.to('.title__img img', {
			scrollTrigger: {
				trigger: '.serv',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			},
			rotate: 360,
			ease: 'none'
		});

		gsap.to('.title__t', {
			scrollTrigger: {
				trigger: '.serv',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			xPercent: -10,
			ease: 'none'
		});

		gsap.to('.serv .stroke', {
			scrollTrigger: {
				trigger: '.serv',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			xPercent: 10,
			ease: 'none'
		});

		gsap.to('.serv__item:nth-child(1)', {
			scrollTrigger: {
				trigger: '.serv',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			xPercent: -10,
			ease: 'none'
		});

		gsap.to('.serv__item:nth-child(3)', {
			scrollTrigger: {
				trigger: '.serv',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			xPercent: 10,
			ease: 'none'
		});

		gsap.to('.portfolio__item-img img', {
			scrollTrigger: {
				trigger: '.portfolio',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			scale: 1.3,
			ease: 'none'
		});
	}
	scrollTrig();

	//resize window
	const debouncedResize = _.debounce(onWindowResize, 500);
	function onWindowResize() {
		console.log('Window resized!');
		location.reload();
	}
	$(window).on('resize', debouncedResize);
});