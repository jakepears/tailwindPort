"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Landing.module.scss";

export default function Landing() {
  const [emailCopied, setEmailCopied] = useState(false);
  const personalLinks = [
    { label: "Email", value: "hello@jpearson.art" },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/jakepearson123" },
    { label: "Dribbble", value: "https://dribbble.com/jopearson" },
    { label: "Behance", value: "https://www.behance.net/jakepearson5" },
    { label: "GitHub", value: "https://github.com/jakepears" },
  ];

  const skewRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const handleEmailCopy = () => {
      navigator.clipboard.writeText("hello@jpearson.art");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    };
    const elements = skewRef.current.querySelectorAll(".fadeInText");
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: "1vh" },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.6,
          ease: "power4.in",
          scrollTrigger: {
            trigger: element,
            start: "top 50%",
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.about} data-cursor="-inverse">
      <div
        className={`${styles.rightCol} ${styles.fadeInText} ${styles.skewElem}`}
        ref={skewRef}
      >
        <h2 className={styles.topHeader}>Visual Storyteller</h2>
        <h3 className={styles.topText}>
          I'm a developer passionate about translating stories and ideas into
          engaging interactive experiences. Whether it's through motion, UX, or
          visuals, I thrive on finding ways to connect with people through art.
          <br />
        </h3>
        <h2 className={styles.secondHeader}>Specialties</h2>
        <h3 className={styles.bottomText}>
          <ul>
            <li>UI/UX Design and Prototyping</li>
            <li>Responsive Web Design</li>
            <li>GSAP / CSS Animations and Interactions</li>
            <li>3D Modeling and Digital Environments</li>
            <li>Video Production and Motion Graphics</li>
          </ul>
        </h3>
        <div className={`${styles.group} ${styles.fadeInText}`}>
          <ul>
            <li>
              <h2 className={styles.goal}>Goals</h2>
            </li>
            <li>
              <h3 className={styles.aim}>
                My aim is to continuously push my skills and grow as a digital
                storyteller. I'm driven to craft experiences that inform,
                educate, and inspire through thoughtful design. I want to
                leverage my whole toolkit - animation, 3D, UX, coding - to
                create work that connects.
              </h3>
            </li>
            <li>
              <h3 className={styles.git}>Get in touch</h3>
            </li>
            <ul className={`${styles.bottomList} ${styles.fadeInText}`}>
              {personalLinks.map(({ label, value }) => (
                <li key={label}>
                  {label === "Email" ? (
                    <button
                      className={`${styles.copyBtn} ${styles.flipAnimate}`}
                      data-cursor-text="Copy?"
                      onClick={() => {
                        navigator.clipboard.writeText(value);
                        setEmailCopied(true);
                        setTimeout(() => setEmailCopied(false), 5000);
                      }}
                    >
                      <span data-hover="Flip">
                        {emailCopied ? "Copied!" : label}
                      </span>
                    </button>
                  ) : (
                    <a
                      href={value}
                      className={styles.flipAnimate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span data-hover={label}>{label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
