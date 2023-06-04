import React from "react";
import Slider from "./Slider/slider";
import styles from "./footer.module.scss";

function footer() {
  return (
    <div className={styles.footer} >
      <div className={styles.what}>
        <h3>What do I like?</h3>
      </div>
      <Slider />
    </div>
  );
}

export default footer;
