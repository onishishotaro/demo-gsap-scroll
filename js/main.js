gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".js-scroll",
  markers: true,
  start: "top top",
  toggleClass: { targets: ".js-scroll", className: "is-scroll" },
});
