'use client'
import { useEffect } from "react";
import s from './PreloaderUI.module.scss'

export default function PreloaderUI({ updateLoadingProgress, progress }) {
  useEffect(() => {
    const interval = setInterval(() => {
      updateLoadingProgress((prev) => prev + 1);
    }, 20);

    return () => clearInterval(interval);
  }, [updateLoadingProgress]);

  return (
    <>
      {progress < 100 && (
        <div className={s.preloaderStyles}>
          <div className={s.percentage}>{progress}%</div>
        </div>
      )}
    </>
  );
}