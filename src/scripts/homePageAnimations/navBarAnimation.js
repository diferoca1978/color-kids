import { gsap } from "gsap";

  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  export function navBarAnimation() {
    ScrollTrigger.create({
      start: "top -80",
      end: "top 110px",
      onEnter: () => {
        gsap.to(".image", {
          height: "80px",
          width: "80px",
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(".image", {
          height: "128px",
          width: "128px",
          duration: 0.5,
        });
      },
    });
  }