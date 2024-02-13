// 淡進
gsap.registerPlugin(ScrollTrigger);
let t1 = gsap.matchMedia();
t1.add("(min-width: 1200px)", () => {
    // 熱門景點
    const fadein1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".advantage",
            start: "top 80%",
            end: "bottom 50%",
        }

    });
    fadein1.from('#dog', { opacity: 0, x: -100, duration: 0.5 })
    fadein1.from('#L1, #L2, #L3', { opacity: 0, x: -100, duration: 0.5 })
    fadein1.from('#R1 ,#R2, #R3', { opacity: 0, x: 100, duration: 0.5 })
});


