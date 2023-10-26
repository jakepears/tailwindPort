"use client";
import { useContext, useEffect } from "react";
import { getCookie } from "cookies-next";
import usePreloader from "./usePreloader";
import PreloaderUI from "./PreloaderUI";

export default function PreloaderContext({ children }) {
  const { loading, progress, setProgress } = usePreloader();

  const showPreloader = !getCookie("preloaderShown");

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);
  return (
    <>
      {showPreloader && (
        <PreloaderUI
          loading={loading}
          progress={progress}
          setProgress={setProgress}
        />
      )}
      {children}
    </>
  );
}
