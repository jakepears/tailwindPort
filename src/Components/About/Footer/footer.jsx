"use client";
import React, { useRef } from "react";
import styles from "./Footer.module.scss";
import SliderContext from "./SliderContext";
import Slider from "./Slider/Slider";

export default function Footer() {
  const footerRef = useRef(null);

  return (
    <div className={styles.footer}>
      <div className={styles.what} ref={footerRef}>
        <h3>What do I like?</h3>
      </div>
      <SliderContext.Provider value={footerRef}>
        <Slider />
      </SliderContext.Provider>
    </div>
  );
}
