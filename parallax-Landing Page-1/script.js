const tl=gsap.timeline ({
    scrollTrigger:{
        trigger:"#background",
        start:"top top",
        scrub:1
    }
})

const elem =gsap.utils.toArray('.parallax').forEach(elem => {
    const depth=elem.dataset.depth;
    const shifting=-(depth*(elem.offsetHeight*1.1));
    tl.to(elem,{
        y:shifting,
        ease:"none"
    },0)
    .to('#overlay',{
        opacity:0,
        ease:"none"
    },0)
})

const tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#content",
        start:"top center",
        toggleActions:'play pause esume reverse'
    }
});

tl2.from('.block',{
    stagger:.3,
    opacity:0,
    delay:.1,
    duration:1,
    ease:'Expo.easeInOut'

})
.from('.block .img',{
    stagger:.1,
    opacity:0,
    duration:1.5,
    ease:'Expo.easeInOut'
})
.from('#content p',{
    y:10,
    opacity:0,
    duration:1.5,
    ease:'Expo.easeInOut'
}) 