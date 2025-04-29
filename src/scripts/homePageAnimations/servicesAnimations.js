import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function servicesAnimations() {
  gsap.from(".title", {
    scrollTrigger: {
      trigger: ".title",
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
    },
    opacity: 0,
    scale: 0,
    duration: 1.5,
    ease: "power2.out",
  });

  gsap.from(".animated-service-1", {
    scrollTrigger: {
      trigger: ".animated-service-1",
      start: "top 90%",
      end: "top 40%",
      scrub: 1,
    },
    opacity: 0,
    scale: 0,
    duration: 1.5,
    ease: "power2.out",
  });

  gsap.from(".animated-service-2", {
    scrollTrigger: {
      trigger: ".animated-service-2",
      start: "top 90%",
      end: "top 40%",
      scrub: 1,
    },
    opacity: 0,
    scale: 0,
    duration: 1.5,
    ease: "power2.out",
  });

  gsap.from(".animated-service-3", {
    scrollTrigger: {
      trigger: ".animated-service-3",
      start: "top 90%",
      end: "top 40%",
      scrub: 1,
    },
    opacity: 0,
    scale: 0,
    duration: 1.5,
    ease: "power2.out",
  });
}