"use client";
import React, { useRef, useEffect, useState, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import imagesLoaded, { imgLoad } from "imagesloaded";
import dynamic from "next/dynamic";
import BG from "@assets/images/laanding-2.webp";

const ScrollCTA = dynamic(() => import("../ScrollCTA/ScrollCTA"));

export default function Hero() {
  const topSpans = [useRef(null), useRef(null), useRef(null)];
  const headings = [useRef(null), useRef(null), useRef(null)];
  const backgroundImage = useRef(null);
  const image = useRef(backgroundImage);
  const imgLoad = imagesLoaded(image);
  const isLoaded = useRef(false);
  const isAnimationEnd = useRef(false);
  const [bgVisible, setBgVisible] = useState(false);
  useEffect(() => {
    const st = () => {
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
    const animation = () => {
      gsap.fromTo(
        backgroundImage.current,
        { y: "-30vh", scale: 1.4 },
        { y: 0, scale: 1, duration: 1.6, ease: "power4.out", delay: 0.26 }
      );
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
    };
    imgLoad.on("always", () => {
      setBgVisible(true);
      setTimeout(() => {
        st();
        animation();
      });
    });
    requestAnimationFrame(st, animation);
  });
  return (
    <section
      data-cursor="-inverse"
      className="w-[100dvw] max-h-[110%] top-0 text-white flex justify-center items-end relative overflow-hidden py-[5vw]"
    >
      <ScrollCTA />
      <div className="w-[84dvw] max-w-[84dvw] flex flex-col">
        <div className="m-0 p-0 w-[100dvw] h-full absolute left-0 top-0 bg-[#1d2c27] origin-center bg-fixed bg-cover">
          <Image
            src={BG}
            alt="Beautiful landscape"
            placeholder="blur"
            width={1440}
            height={2156}
            sizes="100vw"
            ref={backgroundImage}
            priority
            className="object-cover absolute w-full h-auto pointer-events-none object-top"
          />
        </div>
        <div
          data-cursor-text="Hey!"
          className="mt-[10dvw] mb-[5dvw] text-[#b75c5f] mix-blend-difference text-shadow-[#1d2c27_1px_1px_4px_6px]"
        >
          <div className="overflow-hidden">
            <span
              ref={topSpans[0]}
              className="text-[1.66dvw] font-light leading-[2.3dvw] block"
            >
              charmed by tech
            </span>
          </div>
          <div className="overflow-hidden">
            <span
              ref={topSpans[1]}
              className="text-[1.66dvw] font-light leading-[2.3dvw] block"
            >
              and entertained by creativity.
            </span>
          </div>
          <div className="overflow-hidden">
            <span
              ref={topSpans[2]}
              className="text-[1.66dvw] font-light leading-[2.3dvw] block"
            >
              "Man is still the most extraordinary computer of all."
            </span>
          </div>
        </div>
        <h1 className="-translate-x-[1.4vw] tracking-[-0.79861dvw] leading-[12.70833dvw]">
          <div className="h-[16dvw] overflow-hidden">
            <p ref={headings[0]} className="origin-left">
              Art
            </p>
          </div>
          <div className="h-[16dvw] overflow-hidden">
            <p ref={headings[1]} className="origin-left">
              In
            </p>
          </div>
          <div className="h-[16dvw] overflow-hidden">
            <p ref={headings[2]} className="origin-left">
              Motion
            </p>
          </div>
        </h1>
        <span className="mt-[7dvw] mix-blend-difference">
          <h3 className="text-[#87aab1]">jake pearson</h3>
          engineer / motion designer
        </span>
      </div>
    </section>
  );
}
