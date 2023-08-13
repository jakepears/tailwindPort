import React, { useMemo } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const LazyHero = dynamic(() => import("./Hero/Hero"));
  const LazyNew = dynamic(() => import("./News/News"));
  const LazyReel = dynamic(() => import("./Reel/Reel"));
  const LazyWork = dynamic(() => import("./Work/Work"));
  const LazyFooter = dynamic(() => import("./Footer/Footer"));
  const Hero = useMemo(() => (LazyHero), [LazyHero]);
  const News = useMemo(() => (LazyNew), [LazyNew]);
  const Reel = useMemo(() => (LazyReel), [LazyReel]);
  const Work = useMemo(() => (LazyWork), [LazyWork]);
  const Footer = useMemo(() => (LazyFooter), [LazyFooter]);
  return (
    <>
      <Hero />
      <Work />
      <Reel />
      <News />
      <Footer />
    </>
  );
}

