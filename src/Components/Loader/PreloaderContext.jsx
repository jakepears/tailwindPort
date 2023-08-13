'use client'
import { useState, useEffect } from "react";
import LoadManager from "./LoadManager";
import PreloaderUI from "./PreloaderUI";
import { AnimatePresence, motion } from 'framer-motion'

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
        <AnimatePresence mode='wait' unmountOnExit>
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "anticipate" }}
          >
            <PreloaderUI
              updateLoadingProgress={setProgress}
              progress={progress}
            />
          </motion.div>
        </AnimatePresence>
      )}
      {children}
    </>
  );
}