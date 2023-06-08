import React from "react";
import styles from "./footer.module.scss";
import ScrollContainer from "./ScrollContainer";

function Footer() {
  return (
    <div className={styles.footer} >
      <div className={styles.what}>
        <h3>What do I like?</h3>
      </div>
      <ScrollContainer />
    </div>
  );
}

export default Footer;
