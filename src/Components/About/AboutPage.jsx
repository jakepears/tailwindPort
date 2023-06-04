'use client'
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import React from "react";
import Landing from "./Landing/landing";

MouseFollower.registerGSAP(gsap);
function AboutPage() {
  const FooterLazy = React.lazy(() => import("./Footer/footer"));
  useEffect(() => {
    const cursor = new MouseFollower();
    const lenis = new Lenis({
      lerp: 0.075,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("lenis-scroll");

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <Landing />
      <FooterLazy />
    </>
  );
}

export default AboutPage;
