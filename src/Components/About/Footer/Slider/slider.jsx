/** @format */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import wallpaper0 from "@assets/sliderImages/dbz.webp";
import wallpaper1 from "@assets/sliderImages/don.webp";
import wallpaper2 from "@assets/sliderImages/demon.webp";
import wallpaper3 from "@assets/sliderImages/genji.webp";
import wallpaper4 from "@assets/sliderImages/kendrick.webp";
import wallpaper5 from "@assets/sliderImages/rl.webp";
import styles from "./slider.module.scss";

function Slider() {
  const imageTrackRef = useRef(null);

  useEffect(() => {
    const handleOnScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      const nextPercentage = -scrollPercentage;

      imageTrackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;

      for (const image of imageTrackRef.current.querySelectorAll(
        `.${styles.image}`
      )) {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    };

    window.addEventListener("scroll", handleOnScroll);

    gsap.fromTo(
      imageTrackRef.current,
      { x: "100vw" },
      { x: "-25vw", duration: 2.17, delay: 0.57, ease: "power4.inOut" }
    );

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <div className={styles.full}>
      <div
        ref={imageTrackRef}
        className={styles.imageTrack}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <Image
          alt=""
          className={styles.image}
          data-cursor-text="Drag Images!"
          src={wallpaper0}
          draggable="false"
        />
        <Image alt="" className={styles.image} src={wallpaper1} draggable="false" />
        <Image alt="" className={styles.image} src={wallpaper2} draggable="false" />
        <Image alt="" className={styles.image} src={wallpaper3} draggable="false" />
        <Image alt="" className={styles.image} src={wallpaper4} draggable="false" />
        <Image alt="" className={styles.image} src={wallpaper5} draggable="false" />
      </div>
    </div>
  );
}

export default Slider;
