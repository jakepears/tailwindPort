import React, { useEffect, useRef, useState } from "react";
import { gsap, Power4 } from "gsap";
import styles from "./loader.module.scss";

function getSectionHeight(element) {
  const { height } = element.getBoundingClientRect();
  const { childElementCount } = element;
  return height / childElementCount;
}

export default function Loader() {
  const countRef = useRef(null);
  const countRef2 = useRef(null);
  const loaderRef = useRef(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const transformAmount = getSectionHeight(countRef.current);

    const sequence1 = new Array(3).fill("").flatMap((_, index) => [
      gsap.to(countRef.current, {
        y: `-${transformAmount * (index + 1)}px`,
        ease: Power4.easeInOut,
        delay: 0.3 * index,
      }),
      gsap.to(countRef2.current, {
        y: `-${transformAmount * (index + 1)}px`,
        ease: Power4.easeInOut,
        at: "-=1.8",
        delay: 0.3 * index,
      }),
    ]);

    gsap
      .timeline({ defaultEase: "power4.inOut", defaults: { duration: 1 } })
      .add(sequence1)
      .then(() => {
        gsap.to(loaderRef.current, { y: "-100vh", duration: 0.5, delay: 1.5 });
        gsap.to(loaderRef.current, { opacity: 0, duration: 0.5, delay: 2 });
        setShowLoader(false); // Hide the loader after animation completes
      });
  }, []);

  return (
    <>
      {showLoader && (
        <div className={styles.loaderContainer} ref={loaderRef}>
          <div className={styles.counterContainer}>
            <ul ref={countRef}>
              <li>
                <h3>2</h3>
              </li>
              <li>
                <h3>4</h3>
              </li>
              <li>
                <h3>6</h3>
              </li>
              <li>
                <h3>9</h3>
              </li>
            </ul>
          </div>

          <div className={styles.counterContainer}>
            <ul ref={countRef2}>
              <li>
                <h3>3</h3>
              </li>
              <li>
                <h3>9</h3>
              </li>
              <li>
                <h3>8</h3>
              </li>
              <li>
                <h3>9</h3>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
