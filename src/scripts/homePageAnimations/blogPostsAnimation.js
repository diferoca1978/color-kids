import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function blogPostsAnimation() {
  gsap.from("#title", {
    scrollTrigger: {
      trigger: "#title",
      start: "top 80%",
      end: "top 10%",
      scrub: 1,
    },
    opacity: 0,
    scale: 0,
    duration: 0.3,
    ease: "power2.out",
  });

  gsap.from(".posts", {
    scrollTrigger: {
      trigger: ".posts",
      start: "top 90%",
      end: "top 40%",
      scrub: 1,
    },
    opacity: 0,
    x: 200,
    duration: 0.5,
    ease: "power2.out",
  });
}
