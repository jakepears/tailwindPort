/** @format */
'use client'
import React, { useEffect, useMemo } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import MouseFollower from "mouse-follower";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "../styles/index.scss";
import '../styles/cursor.scss';

export default function App() {
  const LazyNavbar = dynamic(() => import("../Components/Navbar/Navbar"));
  const LazyHome = dynamic(() => import("../Components/Home/Home"));
  const MemoNavbar = useMemo(() => (LazyNavbar), [LazyNavbar]);
  const MemoHome = useMemo(() => (LazyHome), [LazyHome]);
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
    <div className={`${styles.center} ${styles.column}`}>
      <AnimatePresence mode="wait" unmountOnExit>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "anticipate" }}
        >
          <MemoNavbar />
          <MemoHome />
        </motion.div>
        </AnimatePresence>
    </div>
  );
}