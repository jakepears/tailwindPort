import { useState, useEffect } from "react";

export default function LoadManager({imageCount}) {

  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagesLoaded(prev => prev + 1);  
    }, 1500);

    if(imagesLoaded === imageCount) {
      clearInterval(interval); 
    }

  }, [imagesLoaded, imageCount]);

  return {
    isLoaded: imagesLoaded === imageCount
  };
}