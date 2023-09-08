"use client";
import { useEffect, useMemo } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import dynamic from "next/dynamic";
import "../../styles/index.scss";

export default function AboutPage() {
  const LazyFooter = dynamic(() => import("./Footer/Footer"));
  const LazyLanding = dynamic(() => import("./Landing/Landing"));
  const LazyAboutNav = dynamic(() => import("./AboutNav/AboutNav"));
  const LazyCursor = dynamic(() => import("../Cursor"));
  const LazyScroll = dynamic(() => import("../SmoothScroll"));
  const Cursor = useMemo(() => LazyCursor, [LazyCursor]);
  const Scroll = useMemo(() => LazyScroll, [LazyScroll]);
  const Footer = useMemo(() => LazyFooter, [LazyFooter]);
  const Landing = useMemo(() => LazyLanding, [LazyLanding]);
  const AboutNav = useMemo(() => LazyAboutNav, [LazyAboutNav]);

  return (
    <>
      <Landing />
      <Cursor />
      <Scroll />
      <Footer />
      <AboutNav />
    </>
  );
}
