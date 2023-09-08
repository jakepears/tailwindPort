"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

function HeroAnims({ refs }) {
  const topSpans = [useRef(null), useRef(null), useRef(null)];
  const headings = [useRef(null), useRef(null), useRef(null)];
  const backgroundImage = useRef(null);
  useEffect(() => {
    const enterTl = () => {
      gsap.fromTo(
        backgroundImage.current,
        { y: "-30vh", scale: 1.4 },
        { y: 0, scale: 1, duration: 1.6, ease: "power4.out", delay: 0.26 }
      );
    };
    const animate = () => {
      topSpans.forEach((span) => {
        gsap.fromTo(
          span.current,
          { rotation: 10, opacity: 0, y: -window.innerHeight * 0.4 },
          {
            rotation: 0,
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power4.easeOut",
            delay: 0.6,
          }
        );
      });
      headings.forEach((heading) => {
        gsap.fromTo(
          heading.current,
          { rotation: 10, opacity: 0, y: window.innerHeight * 0.5 },
          {
            rotation: 0,
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power4.easeOut",
            delay: 0.4,
          }
        );
      });
      gsap.fromTo(
        backgroundImage.current,
        { y: 0, scale: 1, delay: 0.6 },
        {
          y: window.innerHeight * 1.96,
          scale: 1.4,
          scrollTrigger: {
            start: "top",
            end: "bottom",
            scrub: true,
          },
        }
      );
    };
    setTimeout(() => requestAnimationFrame(animate), 100);
  });
  return;
}

export default HeroAnims;
