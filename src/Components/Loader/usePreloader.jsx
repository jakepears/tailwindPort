"use client";
import { useState, useEffect } from "react";
import { setCookie } from "cookies-next";

export default function usePreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Set cookie on first render
    setCookie("preloaderShown", "true");
  }, []);

  return {
    loading,
    progress,
    setProgress,
  };
}
