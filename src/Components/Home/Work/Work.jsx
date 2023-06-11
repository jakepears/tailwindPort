import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import WK1 from "@assets/images/primera.mp4";
import WK2 from "@assets/vids/munkeyTrailer.mp4";
import beats from "@assets/images/beats-ad.mp4";
import primeraSC from "@assets/images/primera-sc.webp";
import munkeyTrailer from "@assets/images/MunkeyPic.webp";
import styles from "./Work.module.scss";

export default function Work() {
  const workRef = useRef(null);
  const munkey = useRef(null);
  const primera = useRef(null);
  const beatsRef = useRef(null);
  const heading = useRef(null);
  const textAnims = useRef([]);

  function handleMouseEnter(event) {
    // play video
    const video = event.currentTarget.querySelector("video");
    if (video) video.play();

    // animation
    const textAnim = event.currentTarget.querySelector(".textAnim");
    if (textAnim) {
      gsap.killTweensOf(textAnim);
      gsap.fromTo(
        textAnim,
        {
          rotation: 10,
          opacity: 0,
          y: () => textAnim.clientHeight * 0.5,
        },
        { rotation: 0, y: 0, opacity: 1, duration: 0.7, ease: "power4.out" }
      );
    }
  }

  function handleMouseLeave(event) {
    // pause video
    const video = event.currentTarget.querySelector("video");
    if (video) video.pause();

    // animation
    const textAnim = event.currentTarget.querySelector(".textAnim");
    if (textAnim) {
      gsap.killTweensOf(textAnim);
      gsap.fromTo(
        textAnim,
        { rotation: 0, opacity: 1, y: 0 },
        {
          rotation: -10,
          y: -textAnim.clientHeight,
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // primera
    if (primera.current) {
      gsap.fromTo(
        primera.current,
        { y: -20 },
        {
          y: 120,
          scrollTrigger: {
            trigger: primera.current,
            ease: "power4.out",
            scrub: true,
          },
        }
      );
    }

    // munkey
    if (munkey.current) {
      gsap.fromTo(
        munkey.current,
        { y: -100 },
        {
          y: 110,
          scrollTrigger: {
            trigger: munkey.current,
            ease: "power4.out",
            scrub: true,
          },
        }
      );
    }

    // beatsRef
    if (beatsRef.current) {
      gsap.fromTo(
        beatsRef.current,
        { y: -50 },
        {
          y: -120,
          scrollTrigger: {
            trigger: beatsRef.current,
            ease: "power4.out",
            scrub: true,
          },
        }
      );
    }

    // heading scroll trigger opening
    gsap.fromTo(
      heading.current,
      {
        rotation: 6,
        opacity: 0,
        y: () => heading.current.clientHeight * 0.5,
      },
      {
        rotation: 0,
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power4.out",
        scrollTrigger: { trigger: heading.current, start: "center bottom" },
      }
    );
  }, []);

  return (
    <section
      className={`${styles.column} ${styles.contentWidth} ${styles.workSection}`}
      ref={workRef}
    >
      <div className={styles.anim}>
        <h1 ref={heading}>creations</h1>
      </div>
      <div className={styles.row}>
        <div
          ref={primera}
          data-cursor-text="Primera!"
          className={`${styles.block} ${styles.block0}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={primeraSC} alt="Project 1" loading="lazy" />
          <video
            playsInline=""
            loop="loop"
            muted
            disablePictureInPicture=""
            className={styles.video}
            src={WK1}
            type="video/mp4"
          />
          <div className={styles.textWrapper}>
            <p ref={(el) => (textAnims.current[0] = el)} className="textAnim">
              <span>
                <strong>Under Development</strong>
              </span>
              <span> Currently Unavailable</span>
            </p>
          </div>
        </div>
        <div className={`${styles.column} ${styles.workRightSection}`}>
          <div className={styles.row}>
            <svg
              viewBox="0 0 12 12"
              fill="#1D2C27"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
              data-v-669b4a84=""
            >
              <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"></path>
            </svg>
            <span>Featured Projects</span>
          </div>
          <p className={styles.quote}>
            <br />
            my works (currently ongoing...)
          </p>
          <div
            data-cursor-text="Try it!"
            className={`${styles.block} ${styles.block1}`}
            ref={munkey}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={munkeyTrailer}
              alt={"picture of dude being cash money"}
            />
            <video
              playsInline=""
              loop="loop"
              muted
              disablePictureInPicture=""
              className={styles.video}
              src={WK2}
              type="video/mp4"
            />
            <div className={styles.textWrapper}>
              <p ref={(el) => (textAnims.current[1] = el)} className="textAnim">
                <span>
                  <strong>Munkey AI </strong>
                </span>
                <span>ChatGPT Remake</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div
          className={`${styles.block} ${styles.block2}`}
          ref={beatsRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="https://images.unsplash.com/photo-1627697823116-42877786ac26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className={styles.beatsPic}
            fill={true}
            alt={"dude is being extremely cash money"} />
          <video
            playsInline=""
            loop="loop"
            muted
            disablePictureInPicture=""
            className={styles.video}
            src={beats}
            type="video/mp4"
          />
          <div className={styles.textWrapper}>
            <p ref={(el) => (textAnims.current[2] = el)} className="textAnim">
              <span>
                <strong>Beats Ad</strong>
              </span>
              <span> Motion Design</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
