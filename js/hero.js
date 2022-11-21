gsap.registerPlugin(ScrollTrigger);


const virtualScrollSelector = '.virtual-scroll';
//const boxTextSelector = '.js-box-text';

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(virtualScrollSelector),
  lerp: 0.1,
  smooth: true,
  tablet: {
    smooth: true,
  },
  smartphone: {
    smooth: true,
  }
});

// cada vez que se actualice Locomotive Scroll, dígale a ScrollTrigger que también se actualice (posicionamiento sincronizado)


locoScroll.on("scroll", ScrollTrigger.update);

//decirle a ScrollTrigger que use estos métodos proxy para el elemento ".smooth-scroll" ya que Locomotive Scroll está secuestrando cosas
ScrollTrigger.scrollerProxy(virtualScrollSelector, {
  scrollTop(value) {
    return arguments.length 
    ? locoScroll.scrollTo(value, 0, 0) 
    : locoScroll.scroll.instance.scroll.y;
  }, 
// no tenemos que definir scrollLeft porque solo nos estamos desplazando verticalmente.
  getBoundingClientRect() {
    return {
      top: 0, 
      left: 0, 
      width: window.innerWidth, 
      height: window.innerHeight
    };
  },
  pinType: document.querySelector(virtualScrollSelector).style.transform ? "transform" : "fixed"
});


/*=============== Menu ===============*/ 

var menuToggle = document.getElementById("menuToggle");
var menuBar = gsap.timeline({ paused: true});

menuBar.to('.line1', 0.5,{
  autoAlpha:0
}, 'start')

menuBar.to('.line2', 0.5,{
  x:1,
  backgroundColor: "#f9f9f9"
}, 'start')

menuBar.to('.line3', 0.5,{
  autoAlpha:0
}, 'start')



menuBar.reverse();

var navTl = gsap.timeline({ paused:true });
var link1= document.querySelector(".link1");
var link2= document.querySelector(".link2");
var link3= document.querySelector(".link3");
var link4= document.querySelector(".link4");
var link5= document.querySelector(".link5");


navTl.to('.fullpage-menu', {
  duration:0,
  display: "block",
  ease: Expo.easeInOut
}, "<");

navTl.to('.bg-menu', {
  duration:1,
  opacity:1,
  ease: Expo.easeInOut
}, "<");

navTl.to('.menu-izq', {
  duration:1,
  opacity:1,
  ease: Expo.easeInOut
}, "<");

navTl.from('.main-menu li a', {
  duration:1,
  y:"100%",
  rotateY:30,
  stagger:0.2,
  ease: Expo.easeInOut 
}, "-=0.5");

navTl.reverse();

menuToggle.addEventListener('click', function(){
  menuBar.reversed(!menuBar.reversed());
  navTl.reversed(!navTl.reversed());
})

link1.addEventListener('click', function(){
  menuBar.reversed(!menuBar.reversed());
  navTl.reversed(!navTl.reversed());
})
link2.addEventListener('click', function(){
  menuBar.reversed(!menuBar.reversed());
  navTl.reversed(!navTl.reversed());
})

link3.addEventListener('click', function(){
  menuBar.reversed(!menuBar.reversed());
  navTl.reversed(!navTl.reversed());
})

link4.addEventListener('click', function(){
  menuBar.reversed(!menuBar.reversed());
  navTl.reversed(!navTl.reversed());
})

link5.addEventListener('click', function(){
  menuBar.reversed(!menuBar.reversed());
  navTl.reversed(!navTl.reversed());
})


/*=============== Hero servicios ===============*/ 
var hero1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#parallax",
    pin:true,
    scroller: virtualScrollSelector,  
    scrub: true,   
    start: "top top",
    end:"+=500"
//markers: true

  }});



hero1.to(".post-insta", 
{
  height: 469,
  width: 709,
  duration: 1, 
  ease: Power4.easeInOut
})
hero1.to(".tit-marca", 
{
  display: "none", 
  duration: 0.5, 
  ease: Power4.easeInOut
})

hero1.to(".post-insta", 
{
  width: 400,
  height: 400,
  duration: 1, 
  ease: Power4.easeInOut
})


hero1.to("#text-ofer", 
{
  text: {value: "Oferta"}, 
  duration: 2, 
  delay: 1, 
  ease: "none"
});

hero1.to("#text-ofer", 
{
  left: "0",
  duration: 2, 
  delay: 1, 
  ease: "none"
})


hero1.to("span.word-1", 
{
  opacity: 1,
  delay: 1, 
  duration: 1, 
  ease: Power4.easeInOut
},">")
hero1.to("span.word-2", 
{
  opacity: 1,
  delay: 2, 
  duration: 1,
  ease: Power4.easeInOut
},">")
hero1.to("span.word-3", 
{
  opacity: 1,
  delay: 0, 
  duration: 1,
  ease: Power4.easeInOut
},">")
hero1.to("span.word-4", 
{
  opacity: 1,
  delay: 2, 
  duration: 1,
  ease: Power4.easeInOut
},">")

hero1.to("#text-promo", 
{

  left: "0",
  top: "50%",
  fontSize: 32,
  duration: 2, 
  delay: 1, 
  ease: "none"
})

hero1.to(".rec_promo", 
{
  opacity: 1,
  delay: .5, 
  minHeight:11,
  duration: 2, 
  width:"60%",
  border:"2px solid #fff"
})

hero1.to(".rec_promo p", 
{
  opacity: 1,
  duration: .5, 
  ease: Expo.easeInOut
})

hero1.to(".post-insta small", 
{
  opacity: 1,
  duration: .7, 
  ease: Expo.easeInOut
})

hero1.to(".post-insta", 
{
  color:"#fff",
  duration: .7, 
  ease: Expo.easeInOut
})

hero1.to("img.cel-insta", 
{
  display: "block",
  y:0,
  opacity: 1,
  duration: 3, 
  ease: Expo.easeInOut
})

hero1.to(".post-insta", {
  backgroundPosition: "center",
  backgroundSize: "cover",
  ease: "none"
});

hero1.to(".post-insta", 
{
//top: 41,
  scale: ".59%",
  duration: 1,
  ease: Power4.easeInOut
})

hero1.to(".cel-insta", 
{
  translate: "0 -7.5%",
  duration: 1  })

/*=============== Titulo de portafolio ===============*/ 

var titlePortfolio = gsap.timeline({
  scrollTrigger: {
    trigger: "#port1",
    start: "top top",
    end: "bottom top",
    scroller: virtualScrollSelector,  
    markers:true,
    pin:true,
    scrub: true
  },
});

titlePortfolio.to("#portfolio", 
{ 
  scale: 50, 
  x: "200%"
})

titlePortfolio.to("#port1", 
{ 
  backgroundColor:"#1F2125",
  duration: .08
},"<")





let pinBoxes = document.querySelectorAll(".pin-wrap > *");
let pinWrap = document.querySelector(".pin-wrap");
let portLeft = document.querySelector(".left");
let portRig = document.querySelector(".right");
let pinWrapWidth = pinWrap.offsetWidth;
let horizontalScrollLength = pinWrapWidth - window.innerWidth;

var vistaPortfolio = gsap.timeline({
  scrollTrigger: {
    trigger: "#sectionGeneral",
    start: "top top",
    end: "bottom top",
    scroller: virtualScrollSelector,  
    onEnter :() => console.log("Se inicio el scroll 1"),
    onLeave :() => console.log("Se termino el scroll 1"),
    markers:true,
    pin:true,
    scrub: true
  },
});

vistaPortfolio.to(".pin-wrap", 
{ 
  x: -horizontalScrollLength,
  ease: "none"
})



/*document.querySelectorAll(".avance div").forEach((btn, index) => {
  btn.addEventListener("click", () => {
      console.log("click realizado");

    vistaPortfolio.to(window, 
    {
      duration: 1, 
      scrollTo:{
        y: horizontalScrollLength + (index + 1),
        offsetX:70
      }
    });
  });
});*/

// cada vez que se actualiza la ventana, debemos actualizar ScrollTrigger y luego actualizar LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// después de que todo esté configurado, refresque() ScrollTrigger y actualice LocomotiveScroll porque es posible que se haya agregado relleno para fijar, etc.
ScrollTrigger.refresh();

const debugButton = document.querySelector('.to-button');
debugButton.onclick = function() {
  locoScroll.scrollTo(0);
}
