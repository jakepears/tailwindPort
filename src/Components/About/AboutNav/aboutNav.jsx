import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "./aboutNav.module.scss";

function AboutNav() {
  const linkRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      linkRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2.6 }
    );
  }, []);

  return (
    <nav className={styles.nav}>
      <ul>
        <li data-cursor-video="/video/homeCursorVid.webm">
          <Link className={styles.link} ref={linkRef} href="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AboutNav;
