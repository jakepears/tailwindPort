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
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={ { opacity: 0 } }
            transition={{ duration: 0.6, ease: 'anticipate' }}
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