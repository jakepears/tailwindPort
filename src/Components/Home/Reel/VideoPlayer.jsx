"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import promo from "@assets/vids/promo.webm";
import styles from "./VideoPlayer.module.scss";

export default function VideoPlayer({ handleClick, handleScroll }) {
  const container = useRef(null);

  useEffect(() => {
    gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1 });
  }, []);

  const onClick = () => {
    handleClick();
  };

  const onWheel = () => {
    handleScroll();
  };

  return (
    <div
      ref={container}
      onClick={onClick}
      onWheel={onWheel}
      className={styles.videoPlayer}
    >
      <video autoPlay="autoplay">
        <source src={promo} type="video/webm" />
      </video>
    </div>
  );
}
