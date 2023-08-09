'use client'
import { useEffect } from "react";
import s from './PreloaderUI.module.scss'
import { anticipate, easeIn, motion } from 'framer-motion'

export default function PreloaderUI({ updateLoadingProgress, progress }) {
  useEffect(() => {
    const interval = setInterval(() => {
      updateLoadingProgress((prev) => prev + 1);
    }, 20);

    return () => clearInterval(interval);
    setTimeout(() => {
      clearInterval(interval);
    })
  }, [updateLoadingProgress]);

  return (
    <>
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { delay: 1.1, duration: 0.8, ease: 'anticipate' },
      }}  
    >
      {progress < 100 && (
        <div className={s.preloaderStyles}>
          <div className={s.percentage}>{progress}%</div>
        </div>
      )}
      </motion.div>
    </>
  );
}