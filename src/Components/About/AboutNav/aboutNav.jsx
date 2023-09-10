"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "./AboutNav.module.scss";

export default function AboutNav() {
  const linkRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      linkRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.6, ease: "power4.out" }
    );
  }, []);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link className={styles.link} ref={linkRef} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} ref={linkRef} href="/personal">
            Personal
          </Link>
        </li>
      </ul>
    </nav>
  );
}
