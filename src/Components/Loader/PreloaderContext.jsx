"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const PreloaderUI = dynamic(() => import("./PreloaderUI"));

export default function PreloaderContext({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress === 99) {
      setLoading(false);
    }
  }, [progress]);
  return (
    <>
      {loading && (
        <PreloaderUI updateLoadingProgress={setProgress} progress={progress} />
      )}
      {children}
    </>
  );
}
