/** @format */
"use client";
import React, { useEffect, useContext, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import vegeta from "@assets/sliderImages/dbz.webp";
import don from "@assets/sliderImages/don.webp";
import demon from "@assets/sliderImages/demon.webp";
import genji from "@assets/sliderImages/genji.webp";
import kendrick from "@assets/sliderImages/kendrick.webp";
import rocketLeague from "@assets/sliderImages/rl.webp";
import styles from "./Slider.module.scss";
import dynamic from "next/dynamic";

const SliderContext = dynamic(() => import("../SliderContext"));

function Slider() {
  const imageTrackRef = useRef(null);
  const imageTrackRef2 = useRef(null);
  const footerRef = useContext(SliderContext);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const threshold = 0;
    const handleOnScroll = () => {
      if (!footerRef.current) return;

      const footerTop = footerRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (footerTop <= viewportHeight + threshold) {
        // Footer is at or above the threshold position
        const scrollPercentage =
          ((viewportHeight + threshold - footerTop) / viewportHeight) * 100;
        const nextPercentage = -scrollPercentage;

        imageTrackRef.current.style.transform = `translate(${nextPercentage}%, -10%)`;

        for (const image of imageTrackRef.current.querySelectorAll(
          `.${styles.image}`
        )) {
          image.style.objectPosition = `${180 + nextPercentage}% center`;
        }

        imageTrackRef2.current.style.transform = `translate(${-nextPercentage}%, -10%)`;

        for (const image2 of imageTrackRef2.current.querySelectorAll(
          `.${styles.image}`
        )) {
          image2.style.objectPosition = `${190 + nextPercentage}% center`;
        }
      } else {
        setIsScrollEnabled(true);
      }
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };

    const handleMouseWheel = (event) => {
      if (!isScrollEnabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener("mousewheel", handleMouseWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("mousewheel", handleMouseWheel);
    };
    requestAnimationFrame(handleOnScroll);
  }, [isScrollEnabled, footerRef]);

  return (
    <div className={styles.full}>
      <div ref={imageTrackRef} className={styles.imageTrack}>
        <div className={styles.image}>
          <Image
            alt=""
            className={styles.image}
            placeholder="blur"
            quality={100}
            fill
            sizes="45vmin"
            src={vegeta}
            draggable="false"
          />
        </div>
        <div className={styles.image}>
          <Image
            alt=""
            className={styles.image}
            placeholder="blur"
            quality={100}
            fill
            sizes="45vmin"
            src={don}
            draggable="false"
          />
        </div>
        <div className={styles.image}>
          <Image
            alt=""
            className={styles.image}
            placeholder="blur"
            quality={100}
            fill
            sizes="45vmin"
            src={demon}
            draggable="false"
          />
        </div>
      </div>
      <div ref={imageTrackRef2} className={styles.imageTrack2}>
        <div className={styles.image}>
          <Image
            alt=""
            className={styles.image}
            placeholder="blur"
            quality={100}
            fill
            sizes="45vmin"
            src={genji}
            draggable="false"
          />
        </div>
        <div className={styles.image}>
          <Image
            alt=""
            className={styles.image}
            placeholder="blur"
            quality={100}
            fill
            sizes="45vmin"
            src={kendrick}
            draggable="false"
          />
        </div>
        <div className={styles.image}>
          <Image
            alt=""
            className={styles.image}
            placeholder="blur"
            quality={100}
            fill
            sizes="45vmin"
            src={rocketLeague}
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
