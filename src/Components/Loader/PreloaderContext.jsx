"use client";
import { useState, useEffect, useRef } from "react";
import PreloaderUI from "./PreloaderUI";
import gsap from "gsap";

export default function PreloaderContext({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null);

  useEffect(() => {
    const animation = () => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1.5,
        delay: 0.95,
        onComplete: () => setLoading(false),
      });
    };
    if (progress === 50) {
      animation();
    }
    requestAnimationFrame(animation);
  }, [progress]);

  return (
    <>
      {loading && (
        <div ref={loaderRef}>
          <PreloaderUI
            updateLoadingProgress={setProgress}
            progress={progress}
          />
        </div>
      )}
      {children}
    </>
  );
}
