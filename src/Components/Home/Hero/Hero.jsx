import React, { useRef, useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollCTA from "../ScrollCTA/ScrollCTA";
import Image from "next/image";
import BG from "@assets/images/laanding-2.webp";
import s from "./Hero.module.scss";

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger);
 
  //Opening animation
  const topSpans = [useRef(null), useRef(null), useRef(null)];
  const headings = [useRef(null), useRef(null), useRef(null)];
  const backgroundImage = useRef(null);
  
  useEffect(() => {
    const enterTl = () => {
    gsap.fromTo(
      backgroundImage.current,
      { y: "-30vh", scale: 1.4 },
      { y: 0, scale: 1, duration: 1.6, ease: "power4.out", delay: 0.26 }
    );
  }
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
            delay: 0.4,
          }
        );
      });
      gsap.fromTo(backgroundImage.current, 
        {y: 0, scale: 1, delay: 0.6},
        {
        y: window.innerHeight * 1.96,
        scale: 1.4,
        scrollTrigger: {
          start: "top",
          end: "bottom",
          scrub: true,
        },
      });
    };
    setTimeout(() => requestAnimationFrame(animate), 300)
  });

  return (
    <section data-cursor="-inverse" className={s.heroContainer}>
      <ScrollCTA />
      <div className={`${s.contentWidth} ${s.column}`}>
        <div className={s.heroBackground}>
          <Image
            src={BG}
            alt="Beautiful landscape"
            placeholder="blur"
            width={1920}
            sizes="100vw"
            ref={backgroundImage}
            priority
          />
        </div>
        <div data-cursor-text="Hey!" className={s.topSpanContainer}>
          <div className={s.anim}>
            <span ref={topSpans[0]}>charmed by tech</span>
          </div>
          <div className={s.anim}>
            <span ref={topSpans[1]}>and entertained by creativity.</span>
          </div>
          <div className={s.anim}>
            <span ref={topSpans[2]}>
              “Man is still the most extraordinary computer of all.”
            </span>
          </div>
        </div>
        <h1>
          <div className={s.heroTitleAnim}>
            <p ref={headings[0]}>Art</p>
          </div>
          <div className={s.heroTitleAnim}>
            <p ref={headings[1]}>In</p>
          </div>
          <div className={s.heroTitleAnim}>
            <p ref={headings[2]}>Motion</p>
          </div>
        </h1>
        <span className={s.bottomSpan}>
          <h3 className={s.myName}>jake pearson</h3>
          engineer / motion designer
        </span>
      </div>
    </section>
  );
}