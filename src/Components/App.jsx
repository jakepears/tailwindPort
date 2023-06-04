/** @format */
'use client'
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import Navbar from "./Navbar/navbar";
import MouseFollower from "mouse-follower";
import s from "../styles/index.scss";
import OrientationMessage from "./Orientation/orientation";

MouseFollower.registerGSAP(gsap);
const HomeLazy = React.lazy(() => import("./Home/Home"));

export default function App() {

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
    <div className={`${s.center} ${s.column}`}>
      <OrientationMessage />
        <Navbar />
        <HomeLazy />
    </div>
  );
}
