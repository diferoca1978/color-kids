import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

gsap.to("#box", {
  duration: 3,
  rotation: 360,
  scale: 1.5,
  yoyo: true,
  scrollTrigger: {
    trigger: "#box",
    start: "top 50%",
    end: "bottom 50%",
    scrub: true,
    markers: true,
  }
});