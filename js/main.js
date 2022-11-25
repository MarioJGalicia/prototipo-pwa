gsap.registerPlugin(ScrollTrigger);

const virtualScrollSelector = '.js-virtual-scroll';
const boxTextSelector = '.js-box-text';

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

    /*=============== Popup Newsletter 
    var closePop = gsap.timeline(); //pause default
    var btnPopClose =  document.getElementById("btnCloseP");
    //setTime para el tiempo en el que se quiere mostrar algo
    setTimeout(()=>{
      closePop.to(".popup-sucribete", 
      { 
        duration: .5, 
        opacity: 1,
        ease: Expo.easeInOut
      });

      btnPopClose.addEventListener('click', function(){
        closePop.to(".popup-sucribete", 
        { 
          backgroundColor:"#00000000",
          duration: .5,
          ease: Expo.easeInOut
        });

        closePop.to(".popup-sucribete", 
        { 
          opacity: 0,
          y: 600,
          duration: .5,
          ease: "power3.in",
          display: "none"

        });
      })

    }, 700)
===============*/ 




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



/*=============== Hero general===============
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;
  var heroGeneral = gsap.timeline();

  heroGeneral.to(".pin-wrap", {
    scrollTrigger: {
        trigger: "#sectionGeneral",
        //markers:true,
        pin: true,
        scrub: true,
        onEnter :() => console.log("Se inicio el scroll en hero"),
        onLeave :() => console.log("Se termino el scroll en hero"),
        //snap: 1 / (sections.length - 1),
        start: "top top",
        //end: () => "+=" + document.querySelector("#social-media").offsetWidth
        end: pinWrapWidth

    },
    x: -horizontalScrollLength,
    ease: "none"
  });

*/




/*=============== Hero servicios ===============*/ 
var hero1 = gsap.timeline({
      scrollTrigger: {
      trigger: "#parallax",
      pin:true,
      scroller: virtualScrollSelector,  
      scrub: true,   
      start: "top top",
      end:"+=900",
      onEnter :() => console.log("Se inicio el scroll 1"),
      onLeave :() => console.log("Se termino el scroll 1"),
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
        trigger: "#hero-marca",
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
        width: 60,
        height: 60,
        ease: Expo.easeInOut,

      });

      btnPop.to(".launcher-open-icon svg", 
      { 

        duration: .5, 
        width: 28,
        height: 32,
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

    btnShow.to(".launcher-close-icon svg",
    {
      width: 28,
      height: 32,
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

/*=============== Titulo de portafolio ===============*/ 

/*
var titlePortfolio = gsap.timeline({
      scrollTrigger: {
      trigger: "#port1",
      pin:true,
      scroller: virtualScrollSelector,  
      scrub: true,   
      start: "top top",
      end:"bottom 50%",
      onEnter :() => console.log("Se inicio el text-portf"),
      onLeave :() => console.log("Se termino el text-portf"),
      markers: true

  }});

titlePortfolio.to("#portfolio", 
{ 
      scale: 50, 
      x: "200%"
})

titlePortfolio.to("#port1", 
{ 
      backgroundColor:"#363636",
      duration: .08
},"<")

/*titlePortfolio.to("#Portafolio", 
{ 
      display: "block",
      duration: .08
},">");*/


/*=============== Nosotros 
let button = document.querySelector(".button");
let reverse = document.querySelector(".reverse");
let perfil = gsap.timeline({ paused: true, reversed: true });

    button.addEventListener("click", (e) => {
      perfil.play();
    });

    reverse.addEventListener("click", (e) => {
    perfil.reverse();
    });

    //Rotacion de icono
    perfil.to(".button svg", {
      ease: "power1.inOut",
      rotate:90,
    });

    //ocultar svg
    perfil.to(".button svg", {
      ease: "power1.inOut",
      duration: 0.2,
      y: -10,
      opacity: 0,
    });

    //rotar el boton
    perfil.to(".button", {
      ease: "power1.inOut",
      yPercent: 114,
    });

    //Dimension de la tarjeta
    perfil.to(
      ".top",
      {
        ease: "power1.inOut",
        height: 300,
      },
      0.6
    );

    //ocultar boton 
    perfil.to(
      ".button",
      {
        ease: "power1.inOut",
        bottom:"-200%",
        borderRadius: 0,
        scaleX: 10,
        scaleY: 2.6,
      },
      1.1
    );

    //ocultar boton 
    perfil.to(
      ".button",
      {
        ease: "power1.inOut",
        bottom:"-50%",
       // width:"100%",
       // height:"100%"
      },
      1.1
    );
    // Perfil
    perfil.to(
      ".datos-socio",
      {
        display: "block",
        ease: "power1.inOut",
        duration: .9,
      }, "<");

     // Next Screen BG Duration
    perfil.from(".datos-socio", {
      ease: "power1.inOut",
      yPercent: 100,
      duration: .5,
    });

    perfil.from(".datos-socio svg", {
      ease: "power1.inOut",
      xPercent: -250,
      duration: 0.5,
    }); 

    // animacion del nombre de socio
    perfil.from(".datos-socio h2", {
      ease: "power1.inOut",
      scale: 0,
      opacity: 0,
      duration: 0.3,
    }); 

    // Animacion del qr
    perfil.from(".qr-perfil", {
      ease: "power1.inOut",
      scale: 0,
      opacity: 0,
      duration: 0.3,
    }); 

    // Descripcion del socio
    perfil.from(".datos-socio p", {
      ease: "power1.inOut",
      scale: 0,
      opacity: 0,
      duration: 0.3,
    }); 

    perfil.to(".conte-perfil", {
      ease: "power1.inOut",
      backgroundColor: "#101010",
      duration: 0.1,
    });

    // Next Screen Entire section X & Y axis Duration
    perfil.to(".datos-socio", {
      ease: "power1.inOut",
      yPercent: -5,
      duration: 1,
    }); 

    perfil.to(".datos-socio", {
      ease: "power1.inOut",
      yPercent: 0,
      duration: 1,
    }); 



===============*/ 



// cada vez que se actualiza la ventana, debemos actualizar ScrollTrigger y luego actualizar LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// después de que todo esté configurado, refresque() ScrollTrigger y actualice LocomotiveScroll porque es posible que se haya agregado relleno para fijar, etc.
ScrollTrigger.refresh();


const debugButton = document.querySelector('.to-button');
debugButton.onclick = function() {
  locoScroll.scrollTo(0);
  // window.scrollTo(0, 0); // → don't work
}


