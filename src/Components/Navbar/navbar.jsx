import React, { useRef, useEffect } from "react";
import About from "../../app/About/page";
import Link from 'next/link'
import { gsap } from "gsap";
import styles from "./navbar.module.scss";

function Navbar() {
  const LinkRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      LinkRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2.6 }
    );
  }, []);

  return (
    <nav className={styles.nav} >
      <ul>
        <li>
          <Link
          className={styles.link}
            ref={LinkRef}
            href="/About" >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
