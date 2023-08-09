'use client'
import { useState, useEffect } from "react";
import LoadManager from "./LoadManager";
import PreloaderUI from "./PreloaderUI";
import { AnimatePresence, motion } from 'framer-motion'

export default function PreloaderContext({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  

  useEffect(() => {
    if (window)
      setLoading(false);
  }, []);
  return (
    <>
      {loading && (
        <AnimatePresence>
        <PreloaderUI
          updateLoadingProgress={setProgress}
          progress={progress}
        />
        </AnimatePresence>
        )}
      {children}
    </>
  );
}