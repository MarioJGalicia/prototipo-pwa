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
        duration: .1,
        height: "100%",
        top: "100%",
        ease: "Power4.out"
    });

    timeline.set(".page-transition", {
        top: "-100%"
    });

var l = document.querySelector('.progreso').getTotalLength();
var animFoco = gsap.timeline({repeat:-1});
var id, width = 1;

animFoco.set(".progreso", 
    {
        strokeDasharray:l
    });
animFoco.fromTo(".progreso", 1,  
    {
        strokeDashoffset:l
    }, 
    {
        strokeDashoffset:0
    },
);

function loading(){
    id = setInterval(frame, 25);
}
function frame(){
    if(width>=100){
        clearInterval(id)
        timeline.play();
    }
    else{
        width++;
        animFoco.play();
    }
}
window.onload = function(){
    loading();
}