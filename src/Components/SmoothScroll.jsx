"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function SmoothScroll() {
  useEffect(() => {
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
  return;
}

export default SmoothScroll;
