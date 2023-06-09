/** @format */
'use client'
import React, { useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import Navbar from "./Navbar/navbar";
import Home from './Home/Home';
import MouseFollower from "mouse-follower";
import s from "../styles/index.scss";
import '../styles/cursor.scss';
import OrientationMessage from "./Orientation/orientation";

export default function App() {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower({
      
    });
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
    <div className={`${s.center} ${s.column}`}>
          <OrientationMessage />
          <Home />
          <Navbar />
    </div>
  );
}