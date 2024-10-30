const load = document.querySelector('.loader');
        const loadingVideo = document.getElementById('loading-video');
       
        const body = document.body;

        // Event listener for when the DOM content is fully loaded
        

        window.addEventListener('DOMContentLoaded', () => {
            // Event listener for when the video ends
            loadingVideo.addEventListener('ended', () => {
                // GSAP animation to slide the loader out to the right
               
                gsap.to(load, {
                    duration: 2,
                    x: '100%',
                    ease: 'power2.inOut',
                    onComplete: () => {
                        // Hide the loader after the animation completes
                        load.style.display = 'none';
                        
                        // Enable scrolling on the body
                        body.style.overflowY = 'scroll';
                    }
                });
            });
        });


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        start: "50% 50%", // Animation starts when the center of the trigger element (#main) reaches the center of the viewport
        end: "150% 50%", // Animation ends when the center of the trigger element (#main) reaches 150% of the viewport width from the left
        scrub: 2, // Smoothly scrubs animation over 2 seconds
        pin: true,
    }
});

// Main animation sequence
tl.to("#center", {
    height: "100vh" // Animates the height of element with id 'center' to 100vh
}, 'a')
    .to("#top", {
        top: "-50%", // Moves element with id 'top' to top -50% of its container
        opacity: 0,
    }, 'a')
    .to("#bottom", {
        bottom: "-50%", // Moves element with id 'bottom' to bottom -50% of its container
        opacity: 0,
    }, 'a')
    .to("#center", {
        scale: 0.8, // Animates the scale of element with id 'center' to 0.8
    }, 'a') // Make sure this scale animation is part of the same label ('a')
    .from('.CarCard', {
        y: -20,
        stagger: 0.1, // Stagger each car card's animation by 0.1 seconds
        delay: 1 // Delay the start of this animation by 1 second
    }, 'a');
