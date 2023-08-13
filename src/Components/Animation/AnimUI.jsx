'use client'
import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import s from './AnimUI.module.scss'

export default function AnimUI({  }) {
  const [isCovered, setIsCovered] = useState(false);
  const bars = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  useEffect(() => {
    const onStart = () => {
      bars.forEach((bars) => {
        gsap.to(bars.current, {
          y: "-100vh", 
          ease: "power4.inOut",
          duration: 0.6,
          stagger: 0.36,
          opacity: .4,
          delay: 2
        });
      });
    };
    onComplete(() => {
      onStart();
    });
    setIsCovered(true);
    requestAnimationFrame(onStart)
  }, [bars]);

  return (
    <>
    {isCovered ?
    <div className={s.container}>
      <div className={s.bar} ref={bars[0]}></div>
      <div className={s.bar1} ref={bars[1]}></div>
      <div className={s.bar2} ref={bars[2]}></div>
      <div className={s.bar3} ref={bars[3]}></div>
    </div>
    : null}
    </>
  );
}
