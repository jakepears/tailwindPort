'use client'
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import Footer from "./Footer/footer"
import MouseFollower from "mouse-follower";
import React from "react";
import Landing from "./Landing/landing";
import '../../styles/cursor.scss';
import '../../styles/index.scss';

function AboutPage() {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);
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
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Landing />
      <Footer />
    </>
  );
}

export default AboutPage;
