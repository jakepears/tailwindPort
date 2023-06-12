import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "./navbar.module.scss";

function Navbar() {
  const linkRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      linkRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.6 }
    );
  }, []);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link className={styles.link} ref={linkRef} href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
