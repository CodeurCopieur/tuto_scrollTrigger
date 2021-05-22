gsap.registerPlugin(ScrollTrigger);

//gsap.to(".box", {x: 500, duration:2})
//gsap.to(".box", {y: 500, duration:3, delay: 2})
//gsap.to(".box", {x: 0, duration:2, delay: 5})
//gsap.to(".box", {y: 0, duration:2, delay: 8})

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    markers: {//ou true
      startColor: "blue",
      endColor: "red",
      fontSize: "10px",
      indent: 20
    },
    start: "top 80%",
    end: "top 30%",
    scrub: true
  }
});


tl.to(".box", {x: 500, duration:5})
  .to(".box", {y: 200, duration:2})
  .to(".box", {x: 0, duration:2})

/*
gsap.to(".square", {
  x: 700,
  duration: 3,
  scrollTrigger: ".square2"
})*/


/*

Start and End

gsap.to(".square", {
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: ".square",
    start: "top 50%",
    end: () =>  `+=${document.querySelector(".square").offsetHeight}`,//"center 20%",
    markers: true,
    toggleClass: "toggleClass"
    markers: {//ou true
      startColor: "blue",
      endColor: "red",
      fontSize: "10px",
      indent: 20
    }
  }
}*/

/*
Toggle Actions

gsap.to(".square", {
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: ".square",
    start: "top 60%",
    end: "top 40%",
    toggleActions: "restart pause resume complete",
    //  ex :  play pause resume reverse restart reset complete none
    // onEnter   onLeave  onEnterBack onLeaveBack
    // restart pause resume reset
    markers: {//ou true
      startColor: "blue",
      endColor: "red",
      fontSize: "10px",
      indent: 20
    }
  }
})
*/


/*
Scrub

gsap.to(".square", {
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: ".square",
    start: "top 80%",
    end: "top 30%",
    scrub: 4, //ou true
    toggleActions: "restart none none none",
    markers: {//ou true
      startColor: "blue",
      endColor: "red",
      fontSize: "10px"
    }
  }
})

*/