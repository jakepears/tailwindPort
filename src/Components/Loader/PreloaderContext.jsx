'use client'
import { useState, useEffect } from "react";
import LoadManager from "./LoadManager";
import PreloaderUI from "./PreloaderUI";

export default function PreloaderContext({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { isLoaded } = LoadManager({ imageCount: 10 });

  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
    }
    console.log('loading');
  }, [isLoaded]);
  return (
    <>
      {loading && (
        <PreloaderUI
          updateLoadingProgress={setProgress}
          progress={progress}
        />
      )}
      {children}
    </>
  );
}