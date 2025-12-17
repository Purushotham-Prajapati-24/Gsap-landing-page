let t1 = gsap.timeline();

t1.from('.nav-left', {
    y: -50,
    duration: 0.8,
    delay: 0.5,
    ease: "power3.out",
    opacity: 0
});

// Start this second tween at the very beginning of the timeline (position 0)
t1.from(".nav-right .nav-links  , .nav-right button", {
    y: -50,
    duration: 0.3,
    ease: "power3.out",
    opacity: 0,
    stagger: 0.1,
});

let t2 = gsap.timeline();

t2.from('.hero-left',{
    x: -500,
    duration: 0.8,
    delay: 1,
    ease: "power3.out",
    opacity: 0
});

t2.from('.hero-right',{
    x: 500,
    duration: 0.8,
    delay: 1,
    ease: "power3.out",
    opacity: 0
},0);



gsap.from('.card-1, .card-3',{
    x:-500,
    duration:0.8,
    ease:'power3.out',
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:'.card-1, .card-3',
        scroller:'body',
        start:'top 70%',
        scrub:0.2
    }
})

gsap.from('.card-2, .card-4',{
    x:500,
    duration:0.8,
    ease:'power3.out',
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:'.card-2, .card-4',
        scroller:'body',
        start:'top 70%',
        scrub:0.2
    }
})

gsap.from('.bottom-1, .bottom-1 p, .bottom-1 img, .bottom-1 h1, .bottom-1 button ',{
    y:300,
    opacity:0,
    duration:0.8,
    stagger:0.5,
    scrollTrigger:{
        trigger:'.bottom-1 ',
        scroller:'body',
        start:'top 110%',
        end:'top 70%',
        scrub:2,
    }
})

gsap.from('.sec',{
    y:200,
    opacity:0,
    duration:0.8,
    stagger:0.5,
    scrollTrigger:{
        trigger:'.bottom-2',
        scroller:'body',
        markers:true,
        start:'top 75%',
        end:'top 50%',
        scrub:2,
    }
})