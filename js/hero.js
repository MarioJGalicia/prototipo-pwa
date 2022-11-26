gsap.registerPlugin(ScrollTrigger);


// confirmar si podemos usar el SW
if ( navigator.serviceWorker ) {

    navigator.serviceWorker.register('/sw.js');
    console.log("Se registro el serviceWorker");

}

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

navTl.to('.launcher-container', {
  duration:0,
  display: "none",
  ease: Expo.easeInOut
}, "<");


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

    /*=============== Flotante Newsletter ===============*/ 


    var btnPop = gsap.timeline({
      scrollTrigger: {
        trigger: "#parallax",
        //pin:true,
        scroller: virtualScrollSelector,  
        scrub: true,   
      start: "top top",
      end:"+=300",
        onEnter :() => console.log("Se inicio el scroll 2"),
        onLeave :() => console.log("Se termino el scroll 2"),
        //markers: true
      },
    }); 

    setTimeout(()=>{
      btnPop.to(".launcher-container", 
      { 
        duration: .5, 
        display: "flex", 
        ease: Expo.easeInOut,

      });

      btnPop.to(".launcher-open-icon i", 
      { 

        duration: .5, 
        fontSize:20,
        ease: Expo.easeInOut
      });

            btnPop.to(".info-launcher-container",
      {
        opacity: 1,
        width: 200,
        height: 60,
        duration: .9,
        ease: Expo.easeInOut
      });

      btnPop.to(".info-launcher-container p", 
      { 
        duration: .5, 
        fontSize: 16,
        ease: Expo.easeInOut
      });

    }, 1000)



var formALta = document.querySelector(".form-alta");
var alta = document.querySelector(".alta");
var formBaja = document.querySelector(".form-baja");
var baja = document.querySelector(".baja");
var showBaja = gsap.timeline({ paused: true});

showBaja.to(baja,
  {
    display: "none",
    opacity: 0,
        duration: .9,
        ease: Expo.easeInOut
})

showBaja.to(".modal-botom",
  {
    padding: 0,
    opacity: 0,
        duration: .9,
        ease: Expo.easeInOut
})

showBaja.to( ".modal-botom",
  {
    display: "none",
    opacity: 0,
        duration: .9,
        ease: Expo.easeInOut
})

showBaja.to( ".spinner",
  {
    display: "block",
    opacity: 1,
        duration: .9,
        ease: Expo.easeInOut
})

showBaja.to(formALta,
  {
    display: "none",
    opacity: 1,
        duration: .9,
        ease: Expo.easeInOut
})

showBaja.to(formBaja,
  {
    display: "block",
    opacity: 1,
        duration: .9,
        ease: Expo.easeInOut
})

showBaja.to( ".spinner",
  {
    display: "none",
    opacity: 0,
        duration: .9,
        ease: Expo.easeInOut
})

showBaja.to(".modal-botom",
  {
    display: "block",
    padding: 16,
    opacity: 1,
        duration: .9,
        ease: Expo.easeInOut
})

showBaja.to(alta,
  {
    display: "block",
    opacity: 1,
        duration: .9,
        ease: Expo.easeInOut
})

showBaja.reverse();
baja.addEventListener('click', function(){
  showBaja.reversed(!showBaja.reversed());
})

alta.addEventListener('click', function(){
  showBaja.reversed(!showBaja.reversed());

})
/*
    var btnPopup = document.querySelector(".launcher-container");
    const btnOpen = document.querySelector(".launcher-open-icon");
    const btnExit = document.querySelector(".launcher-close-icon");
    var btnShow = gsap.timeline({ paused: true});

    btnShow.to(btnOpen,
      {
        opacity: 0,
        duration: .9,
        ease: Expo.easeInOut
      }, "<")
    btnShow.to(".mop-container",
    {
      duration: 1,
      opacity: 1,
      display: "block",
      ease: Expo.easeInOut
    }, "<")

    btnShow.to(btnExit,
    {
      opacity: 1,
      duration: .1,
      ease: Expo.easeInOut
    }, "<")

    btnShow.to(".launcher-close-icon i",
    {
      fontSize: 20,
      opacity: 1,
      duration: .9,
      ease: Expo.easeInOut
    }, "<")

    btnShow.to(
      ".info-launcher-container",
      {
        opacity: 0,
        duration: 0,
        ease: Expo.easeInOut
      }, "<")

    btnShow.reverse();
    btnPopup.addEventListener('click', function(){
      btnShow.reversed(!btnShow.reversed());
    })
*/

/*=============== Titulo de portafolio ===============*/ 

var titlePortfolio = gsap.timeline({
  scrollTrigger: {
    trigger: "#port1",
    start: "top top",
    end: "bottom top",
    scroller: virtualScrollSelector,  
   // markers:true,
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
    //markers:true,
    pin:true,
    scrub: true
  },
});

vistaPortfolio.to(".pin-wrap", 
{ 
  x: -horizontalScrollLength,
  ease: "none"
})


/*Rotacion de texto*/


  let direction = 1; // 1 = forward, -1 = backward scroll

  const roll1 = roll(".big-name .name-wrap", {duration: 38}),
        roll2 = roll("big-especial .name-wrap", {duration: 10}, true),
        scroll = ScrollTrigger.create({
          trigger: "#nosotros",
          scroller: virtualScrollSelector,  
          onUpdate(self) {
            if (self.direction !== direction) {
              direction *= -1;
              gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
            }
          }
        });

  // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
  function roll(targets, vars, reverse) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() { 
              this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            }
          }), 
          elements = gsap.utils.toArray(targets),
          clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
          }),
          positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
    positionClones();
    elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
    window.addEventListener("resize", () => {
      let time = tl.totalTime(); // record the current time
      tl.totalTime(0); // rewind and clear out the timeline
      positionClones(); // reposition
      tl.totalTime(time); // jump back to the proper time
    });
    return tl;
  }


// cada vez que se actualiza la ventana, debemos actualizar ScrollTrigger y luego actualizar LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// después de que todo esté configurado, refresque() ScrollTrigger y actualice LocomotiveScroll porque es posible que se haya agregado relleno para fijar, etc.
ScrollTrigger.refresh();

const debugButton = document.querySelector('.to-button');
debugButton.onclick = function() {
  locoScroll.scrollTo(0);
}
