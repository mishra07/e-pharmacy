gsap.registerPlugin(ScrollTrigger);

var path = document.querySelector(".path");
// console.log(path.getTotalLength());

var temp = document.querySelector("#text1");
// console.log(temp.getTotalLength());

gsap.from("#text", {
    // ScrollTrigger: "#heading",
    duration: 2,
    opacity: 0,
})

gsap.from("#learn", {
    opacity: 0,
    delay: 2,
})
var text = document.querySelector("#text");

var animation = document.querySelector("#animation");
anime({
    targets: animation,
    delay: 3000,
})
gsap.fromTo("#tagline", { opacity: 0 }, { opacity: 1, duration: 2.5 });
