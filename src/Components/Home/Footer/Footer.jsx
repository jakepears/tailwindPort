/** @format */
"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import footerVid from "@assets/vids/footer-3.webm";
import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);
  const footerContainer = useRef(null);
  const heading0 = useRef(null);
  const heading1 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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

    //heading scroll trigger opening
    gsap.fromTo(
      [heading0.current, heading1.current],
      {
        rotation: 6,
        opacity: 0,
        y: (i, el) => el?.clientHeight ?? 0 * 0.5,
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
    { label: "Email", value: "hello@jpearson.art" },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/jakepearson123",
      target: "_blank",
    },
    {
      label: "Dribbble",
      value: "https://dribbble.com/jopearson",
      target: "_blank",
    },
    {
      label: "Behance",
      value: "https://www.behance.net/jakepearson5",
      target: "_blank",
    },
    {
      label: "GitHub",
      value: "https://github.com/jakepears",
      target: "_blank",
    },
    { label: "About", value: "/about" },
  ];

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("hello@jpearson.art").then(() => false);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  return (
    <footer
      className={styles.center}
      data-cursor="-invert"
      ref={footerContainer}
    >
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
              {personalLinks.map(({ label, value, target }) => (
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
                    <Link
                      href={value}
                      target={target || "_self"}
                      rel="noopener noreferrer"
                    >
                      {label}
                    </Link>
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
          type="video/webm"
          autoPlay
        />
      </div>
    </footer>
  );
}
