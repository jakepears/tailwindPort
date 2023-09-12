"use client";
import React, { useRef, useEffect, useState, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import imagesLoaded, { imgLoad } from "imagesloaded";
import dynamic from "next/dynamic";
import BG from "@assets/images/laanding-2.webp";
import s from "./Hero.module.scss";

const ScrollCTA = dynamic(() => import("../ScrollCTA/ScrollCTA"));

export default function Hero() {
  const topSpans = [useRef(null), useRef(null), useRef(null)];
  const headings = [useRef(null), useRef(null), useRef(null)];
  const backgroundImage = useRef(null);
  const image = useRef(backgroundImage);
  const imgLoad = imagesLoaded(image);
  const isLoaded = useRef(false);
  const isAnimationEnd = useRef(false);
  const [bgVisible, setBgVisible] = useState(false);
  useEffect(() => {
    const st = () => {
      gsap.fromTo(
        backgroundImage.current,
        { y: 0, scale: 1, delay: 0.6 },
        {
          y: window.innerHeight * 1.96,
          scale: 1.4,
          scrollTrigger: {
            start: "top",
            end: "bottom",
            scrub: true,
          },
        }
      );
    };
    const animation = () => {
      gsap.fromTo(
        backgroundImage.current,
        { y: "-30vh", scale: 1.4 },
        { y: 0, scale: 1, duration: 1.6, ease: "power4.out", delay: 0.26 }
      );
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
    };
    imgLoad.on("always", () => {
      setBgVisible(true);
      setTimeout(() => {
        st();
        animation();
      });
    });
    requestAnimationFrame(st, animation);
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
            width={1440}
            height={2156}
            blurDataURL="data:image/webp;base64,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"
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
