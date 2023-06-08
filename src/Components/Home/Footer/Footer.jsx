/** @format */

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import footerVid from "@assets/vids/footer-3.mp4";
import styles from "./Footer.module.scss";



export default function Footer() {
  
  const [emailCopied, setEmailCopied] = useState(false);
  const footerContainer = useRef(null);
  const heading0 = useRef(null);
  const heading1 = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cursor = new MouseFollower();
    //container parallax
    gsap.fromTo(
      footerContainer.current,
      {
        y: () => -window.innerHeight,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: footerContainer.current,
          scrub: true,
          start: "center bottom",
          end: "bottom top",
        },
      }
    );
    // set stick to footer
    cursor.setStick(footerContainer.current);

    //heading scroll trigger opening
    gsap.fromTo(
      [heading0.current, heading1.current],
      {
        rotation: 6,
        opacity: 0,
        y: (i, el) => el.clientHeight * 0.5,
      },
      {
        rotation: 0,
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power4.easeOut",
        scrollTrigger: {
          trigger: footerContainer.current,
          start: "center center",
        },
      }
    );
  }, []);

  const personalLinks = [
    { label: "Email", value: "jpearsonbusiness@gmail.com" },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/jakepearson123" },
    { label: "Dribbble", value: "https://dribbble.com/jopearson" },
    { label: "Behance", value: "https://www.behance.net/jakepearson5" },
    { label: "GitHub", value: "https://github.com/DaCodeWiz" },
  ];

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("jpearsonbusiness@gmail.com").then(() => false);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  return (
    <footer className={styles.center} ref={footerContainer}>
      <div
        className={`${styles.footerContent} ${styles.contentWidth} ${styles.column}`}
      >
        <h2>
          <div className={styles.anim}>
            <div ref={heading0}>Jake</div>
          </div>
          <div className={styles.anim}>
            <div ref={heading1}>Pearson</div>
          </div>
        </h2>
        <p>creativity driven with a passionate focus on innovation.</p>
        <hr />
        <div className={`${styles.footerFinalP} ${styles.block}`}>
          <div className={styles.footerList}>
            <ul className={styles.linkList}>
              {personalLinks.map(({ label, value }) => (
                <li key={label}>
                  {label === "Email" ? (
                    <button
                      className="copy-btn"
                      data-cursor-text="Copy?"
                      onClick={() => {
                        navigator.clipboard.writeText(value);
                        setEmailCopied(true);
                        setTimeout(() => setEmailCopied(false), 5000);
                      }}
                    >
                      {emailCopied ? "Copied!" : label}
                    </button>
                  ) : (
                    <a href={value} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.background}>
        <video
          playsInline
          loop
          muted
          disablePictureInPicture
          src={footerVid}
          type="video/mp4"
          autoPlay
        />
      </div>
    </footer>
  );
}
