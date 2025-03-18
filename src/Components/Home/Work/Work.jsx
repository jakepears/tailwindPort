"use client";
import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import primeraVid from "public/assets/vids/primera.webm";
import reaplyVid from "public/assets/vids/reaplyCrop.webm";
import beats from "public/assets/vids/beats-ad.webm";
import primeraSC from "public/assets/images/primera-sc.webp";
import reaplyImg from "public/assets/images/reaplyImg.webp";

export default function Work() {
  const workRef = useRef(null);
  const reaply = useRef(null);
  const primera = useRef(null);
  const beatsRef = useRef(null);
  const heading = useRef(null);
  const textAnims = useRef([]);

  const handleMouseEnter = useCallback((event) => {
    // play video
    const video = event.currentTarget.querySelector("video");
    video && video.play();

    const textAnim = event.currentTarget.querySelector(".textAnim");
    textAnim && animateTextIn(textAnim);

    // animation
  }, []);

  const handleMouseLeave = useCallback((event) => {
    // pause video
    const video = event.currentTarget.querySelector("video");
    video && video.pause();

    // animation
    const textAnim = event.currentTarget.querySelector(".textAnim");
    textAnim && animateTextOut(textAnim);
  }, []);

  const animateTextIn = (textAnim) => {
    gsap.fromTo(
      textAnim,
      {
        rotation: 10,
        opacity: 0,
        y: () => textAnim?.clientHeight ?? 0 * 0.5,
      },
      { rotation: 0, y: 0, opacity: 1, duration: 0.7, ease: "power4.out" }
    );
  };

  const animateTextOut = (textAnim) => {
    gsap.fromTo(
      textAnim,
      { rotation: 0, opacity: 1, y: 0 },
      {
        rotation: -10,
        y: -textAnim?.clientHeight ?? 0,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      }
    );
  };

  const scrollTriggerAnim = () => {
    // primera
    gsap.fromTo(
      primera.current,
      { y: -80 },
      {
        y: 120,
        scrollTrigger: {
          trigger: primera.current,
          ease: "power4.out",
          scrub: true,
        },
      }
    );

    // reaply
    gsap.fromTo(
      reaply.current,
      { y: -100 },
      {
        y: 140,
        scrollTrigger: {
          trigger: reaply.current,
          ease: "power4.out",
          scrub: true,
          velocity: 1.3,
        },
      }
    );

    // beatsRef

    gsap.fromTo(
      beatsRef.current,
      { y: -50 },
      {
        y: 110,
        scrollTrigger: {
          velocity: 2,
          start: "start end",
          invalidateOnRefresh: true,
          trigger: beatsRef.current,
          ease: "power4.out",
          scrub: true,
        },
      }
    );
  };
  const HeaderAnim = () => {
    // heading scroll trigger opening
    gsap.fromTo(
      heading.current,
      {
        y: 100,
        rotation: 6,
        opacity: 0,
        y: () => heading.current?.clientHeight ?? 0 * 0.5,
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
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerAnim();
    HeaderAnim();

    requestAnimationFrame(scrollTriggerAnim);
  }, []);

  return (
    <section
      className="w-[100dvw] text-[#d3d4d4] pl-[7%] overflow-hidden"
      ref={workRef}
    >
      <div ref={heading} className="mt-[15dvh] ml-[7dvw] mb-[10dvh]">
        <h1 className="text-[17dvw] leading-[17dvw] origin-left">work</h1>
      </div>
      <div className="flex">
        <div
          ref={primera}
          data-cursor-text="Info below"
          className="relative pl-[5dvw] h-[40dvh]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={primeraSC}
            alt="Project 1"
            placeholder="blur"
            loading="lazy"
            className="h-full object-cover max-w-full pointer-events-none"
          />
          <video
            playsInline
            loop
            muted
            disablePictureInPicture
            className="absolute object-cover w-auto h-full top-0 left-0 z-[1] hidden pointer-events-none transition-all duration-350 ease-in-out"
            src={primeraVid}
            type="video/webm"
          >
            <source src={primeraVid} type="video/webm" />
          </video>
          <div className="overflow-hidden absolute -bottom-[1.8dvw] text-[0.96dvw] z-[1] pointer-events-none">
            <p
              ref={(el) => (textAnims.current[0] = el)}
              className="textAnim whitespace-nowrap font-thin leading-none opacity-0 origin-left text-gray-500 mt-0"
            >
              <span>
                <strong className="text-[#1b2a25] font-medium">Primera</strong>
              </span>
              <span> Motion Graphics</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col pl-[6dvw]">
          <div className="flex items-center">
            <svg
              className="mt-1 h-4 w-4 mr-3"
              viewBox="0 0 12 12"
              fill="#1D2C27"
              xmlns="http://www.w3.org/2000/svg"
              data-v-669b4a84=""
            >
              <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"></path>
            </svg>
            <span className="text-[1.5dvw]">Hover for preview</span>
          </div>
          <div
            className="relative h-[32dvw] aspect-square mb-[12dvh] mt-[15dvh] ml-[4dvw] max-w-full z-[2]"
            ref={reaply}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={reaplyImg}
              alt={"picture of dude being cash money"}
              placeholder="blur"
              loading="lazy"
              className="h-full object-cover max-w-full pointer-events-none"
            />
            <video
              playsInline
              loop
              muted
              disablePictureInPicture
              className="absolute w-full h-full object-cover aspect-square z-[1] hidden pointer-events-none transition-all duration-350 ease-in-out"
              src={reaplyVid}
              type="video/webm"
            >
              <source src={reaplyVid} type="video/webm" />
            </video>
            <div className="overflow-hidden absolute -bottom-[1.8dvw] text-[0.96dvw] z-[1] pointer-events-none">
              <p
                ref={(el) => (textAnims.current[1] = el)}
                className="textAnim whitespace-nowrap font-thin leading-none opacity-0 origin-left text-gray-500 mt-0"
              >
                <span>
                  <strong className="text-[#1b2a25] font-medium">
                    Reaply{" "}
                  </strong>
                </span>
                <span>Motion Design</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div
          className="relative pt-[5dvh] mb-[20dvh] w-[30dvw] aspect-square h-[50dvh] transition-all duration-350 ease-in-out"
          ref={beatsRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="https://images.unsplash.com/photo-1627697823116-42877786ac26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="w-full"
            fill
            sizes="40dvw"
            loading="lazy"
            alt={"picture of dude being cash money"}
          />
          <video
            playsInline
            loop
            muted
            disablePictureInPicture
            className="absolute w-full h-full object-cover hidden pointer-events-none transition-all duration-350 ease-in-out"
            src={beats}
            type="video/webm"
          >
            <source src={beats} type="video/webm" />
          </video>
          <div className="overflow-hidden absolute -bottom-[1.8dvw] text-[0.96dvw] z-[1] pointer-events-none">
            <p
              ref={(el) => (textAnims.current[2] = el)}
              className="textAnim whitespace-nowrap font-thin leading-none opacity-0 origin-left text-gray-500 mt-0"
            >
              <span>
                <strong className="text-[#1b2a25] font-medium">Beats</strong>
              </span>
              <span> Motion Design</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
