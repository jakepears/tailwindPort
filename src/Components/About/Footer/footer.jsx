import React, { useRef } from "react";
import Slider from "./Slider/Slider";
import styles from "./Footer.module.scss";
import SliderContext from "./SliderContext";

function Footer() {
  const footerRef = useRef(null);

  return (
    <div className={styles.footer} >
      <div className={styles.what} ref={footerRef}>
        <h3>What do I like?</h3>
      </div>
      <SliderContext.Provider value={footerRef}>
        <Slider />
      </SliderContext.Provider>
    </div>
  );
}

export default Footer;