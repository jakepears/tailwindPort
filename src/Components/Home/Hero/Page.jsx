"use client";
import { useState, useRef, useEffect } from "react";
import Hero from "./Hero";
import HeroAnims from "./HeroAnims";
export default function Page() {
  const [ready, setReady] = useState(false);
  const backgroundImage = useRef();

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <Hero ready={ready} backgroundImage={backgroundImage} />
      <HeroAnims backgroundImage={backgroundImage} />
    </>
  );
}
