gsap.registerPlugin(ScrollTrigger);

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
*/
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