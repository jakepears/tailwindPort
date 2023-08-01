import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollCTA from "../ScrollCTA/ScrollCTA";
import Image from "next/image";
import BG from "@assets/images/laanding-2.webp";
import styles from "./Hero.module.scss";

export default function Hero() {
 
  //Opening animation
  const topSpans = [useRef(null), useRef(null), useRef(null)];
  const headings = [useRef(null), useRef(null), useRef(null)];
  const backgroundImage = useRef(null);

  useEffect(() => {
    
    const animate = () => {
      topSpans.forEach((span) => {
        gsap.fromTo(
          span.current,
          { rotation: 10, opacity: 0, y: -window.innerHeight * 0.4 },
          {
            rotation: 0,
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power4.easeOut",
            delay: 0.6,
          }
        );
      });
      headings.forEach((heading) => {
        gsap.fromTo(
          heading.current,
          { rotation: 10, opacity: 0, y: window.innerHeight * 0.5 },
          {
            rotation: 0,
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power4.easeOut",
            delay: 0.6,
          }
        );
      });
      gsap.to(backgroundImage.current, {
        y: window.innerHeight * 2.06,
        opacity: 0.3,
        scale: 1.4,
        scrollTrigger: {
          start: "top",
          end: "bottom",
          scrub: true,
        },
      });
    };
    setTimeout(() => requestAnimationFrame(animate), 2000);
  }, []);

  return (
    <section
      data-cursor="-inverse"
      className={styles.heroContainer}
    >
      <ScrollCTA />
      <div className={`${styles.contentWidth} ${styles.column}`}>
        <div className={styles.heroBackground}>
          <Image
            src={BG}
            alt="Background hero"
            ref={backgroundImage}
            priority
          />
        </div>
        <div data-cursor-text="Hey!" className={styles.topSpanContainer}>
          <div className={styles.anim}>
            <span ref={topSpans[0]}>charmed by tech</span>
          </div>
          <div className={styles.anim}>
            <span ref={topSpans[1]}>and entertained by creativity.</span>
          </div>
          <div className={styles.anim}>
            <span ref={topSpans[2]}>
              “Man is still the most extraordinary computer of all.”
            </span>
          </div>
        </div>
        <h1>
          <div className={styles.heroTitleAnim}>
            <p ref={headings[0]}>Art</p>
          </div>
          <div className={styles.heroTitleAnim}>
            <p ref={headings[1]}>In</p>
          </div>
          <div className={styles.heroTitleAnim}>
            <p ref={headings[2]}>Motion</p>
          </div>
        </h1>
        <span className={styles.bottomSpan}>
          <h3 className={styles.myName}>jake pearson</h3>
          engineer / motion designer
        </span>
      </div>
    </section>
  );
}