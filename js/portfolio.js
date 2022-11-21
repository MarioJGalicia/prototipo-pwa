const timeline = gsap.timeline({ paused: true });

    timeline.to(".page-transition", {
        duration: .5,
        height: "100%",
        top: "0%"
    });

    timeline.to(".page-main", {
        opacity: "1",
        duration: 0
    });

    timeline.to(".page-transition", {
        duration: .8,
        height: "100%",
        top: "100%"
    });

    timeline.set(".page-transition", {
        top: "-100%"
    });




//console.log(tl.duration());

window.addEventListener("load", function () {
    timeline.play();
});
