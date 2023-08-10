'use client'
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import Footer from "./Footer/footer"
import MouseFollower from "mouse-follower";
import React from "react";
import Landing from "./Landing/landing";
import { AnimatePresence, motion } from "framer-motion";
import '../../styles/cursor.scss';
import '../../styles/index.scss';
import AboutNav from "./AboutNav/aboutNav";

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
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'anticipate' }}
      >
        <Landing />
        <Footer />
        <AboutNav />
      </motion.div>
    </AnimatePresence>
  );
}

export default AboutPage;
