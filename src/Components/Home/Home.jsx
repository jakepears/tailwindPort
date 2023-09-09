import React, { useMemo } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const LazyHero = dynamic(() => import("./Hero/Hero"));
  const LazyWork = dynamic(() => import("./Work/Work"));
  const LazyReel = dynamic(() => import("./Reel/Reel"));
  const LazyNew = dynamic(() => import("./News/News"));
  const LazyFooter = dynamic(() => import("./Footer/Footer"));
  const Hero = useMemo(() => LazyHero, [LazyHero]);
  const Work = useMemo(() => LazyWork, [LazyWork]);
  const Reel = useMemo(() => LazyReel, [LazyReel]);
  const News = useMemo(() => LazyNew, [LazyNew]);
  const Footer = useMemo(() => LazyFooter, [LazyFooter]);
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
