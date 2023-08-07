import { useState } from "react";

export default function LoadManager({ imageCount }) {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  return {
    isLoaded: imagesLoaded === imageCount,

    handleImageLoaded: () => setImagesLoaded((prev) => prev + 1),
  };
}
