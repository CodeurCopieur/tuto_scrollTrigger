gsap.registerPlugin(ScrollTrigger)

/*gsap.to(".square", {
  x: 700,
  duration: 3,
  scrollTrigger: ".square2"
})*/


gsap.to(".square", {
  //x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: ".square",
    start: "top 50%",
    end: () =>  `+=${document.querySelector(".square").offsetHeight}`,//"center 20%",
    markers: true,
    toggleClass: "toggleClass"
    /*markers: {//ou true
      startColor: "blue",
      endColor: "red",
      fontSize: "10px",
      indent: 20
    }*/
  }
})