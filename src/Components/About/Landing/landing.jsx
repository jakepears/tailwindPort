import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./landing.module.scss";

function landing() {
  
  
  const [emailCopied, setEmailCopied] = useState(false);
  const personalLinks = [
    { label: "Email", value: "jpearsonbusiness@gmail.com" },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/jakepearson123" },
    { label: "Dribbble", value: "https://dribbble.com/jopearson" },
    { label: "Behance", value: "https://www.behance.net/jakepearson5" },
    { label: "GitHub", value: "https://github.com/DaCodeWiz" },
  ];
  

  const skewRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const handleEmailCopy = () => {
    navigator.clipboard.writeText("jpearsonbusiness@gmail.com");
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
          ease: "power4.in",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.about} data-cursor="-inverse">
      <div className={`${styles.rightCol} ${styles.fadeInText} ${styles.skewElem}`} ref={skewRef}>
        <h3 className={styles.topText}>
          I'm a student who is mesmerized by clean visuals. Whether it by
          scenery in the outdoors or a well designed website, I love to see it.
          I'm currently learning web development and I'm excited to see where it
          takes me. <br />
        </h3>
        <h3 className={styles.bottomText}>
          I put a strong focus on interaction in my projects in hopes that
          they're be what sets me apart from others. I'm always looking for new
          ways to make my projects more interactive and engaging.{" "}
        </h3>
        <div className={`${styles.group} ${styles.fadeInText}`}>
          <ul>
            <li>
              <h3>Experience</h3>
            </li>
            <li>
              <h4>
                I'm looking to break into the professional tech realm so right
                now it's mainly independent projects.
              </h4>
            </li>
            <li>
              <h4 className={styles.special}>Freelance Developer</h4>
            </li>
            <li>
              <p>2022 - Present</p>
            </li>
            <li>
              <h3>Contact Me</h3>
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

export default landing;
