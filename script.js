function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

init()

var crcr = document.querySelector(".cursor")
var main = document.querySelector(".main")
// main.addEventListener("mousemove",function (dets) {
document.addEventListener("mousemove",function (dets) {
  // console.log(dets.x);
  // crcr.style.left = dets.x + "px"
  // crcr.style.top = dets.y + "px"

  // there are ziggling after show image on cursor hover
  crcr.style.left = dets.x + 20 + "px"
  crcr.style.top = dets.y + 20 + "px"
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})

tl.to(".page1 h1",{
    x:-100,
},"anim")

tl.to(".page1 h2",{
    x:100,
},"anim")

tl.to(".page1 video", {
    width: "90%",
}, "anim")

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -115%",
      end: "top -120%",
      scrub: 3
  }
})

tl2.to(".main", {
  backgroundColor: "#fff",
})


var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -280%",
      end: "top -300%",
      scrub: 3
  }
})

tl3.to(".main",{
  backgroundColor:'#0f0d0d'
})


// box image hover 

var boxes = document.querySelectorAll(".box")
// console.log(boxes);

boxes.forEach(function (elem) {
  // console.log(elem);
  elem.addEventListener('mouseenter',function () {
    // elem.style.backgroundColor= "red"
    var att = elem.getAttribute("data-image")
    // console.log(att);

    crcr.style.width = "470px"
    crcr.style.height = "370px"
    crcr.style.borderRadius = "0px"
    crcr.style.backgroundImage = `url(${att})`

  })
  elem.addEventListener('mouseleave',function () {
    elem.style.backgroundColor= "transparent"

    crcr.style.width = "20px"
    crcr.style.height = "20px"
    crcr.style.borderRadius = "50%"
    crcr.style.backgroundImage = `none`
  })
})



var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelectorAll("#purple")
h4.forEach(function (elem) {
  // console.log(elem);
  elem.addEventListener("mousemove",function () {
    purple.style.display = "block"
    purple.style.opacity = "1"
  })

  nav.addEventListener("mouseleave",function () {
    purple.style.display = "none"
    purple.style.opacity = "0"
  })
})