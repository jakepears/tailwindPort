'use client'
import { useEffect, useMemo } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import '../../styles/cursor.scss';
import '../../styles/index.scss';

function AboutPage() {
  const LazyFooter = dynamic(() => import("./Footer/Footer"));
  const LazyLanding = dynamic(() => import("./Landing/Landing"));
  const LazyAboutNav = dynamic(() => import("./AboutNav/AboutNav"));
  const MemoFooter = useMemo(() => LazyFooter, [LazyFooter]);
  const MemoLanding = useMemo(() => LazyLanding, [LazyLanding]);
  const AboutNav = useMemo(() => LazyAboutNav, [LazyAboutNav]);
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
        <MemoLanding />
        <MemoFooter />
        <AboutNav />
      </motion.div>
    </AnimatePresence>
  );
}

export default AboutPage;
