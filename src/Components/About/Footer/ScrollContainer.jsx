import { useEffect, useRef, useState } from "react";
import Slider from "./Slider/slider";

function ScrollContainer() {
  const footerRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleOnScroll = () => {
      const footerTop = footerRef.current.getBoundingClientRect().bottom;
      const threshold = 0; // Adjust this value based on your needs

      if (footerTop <= threshold) {
        setShouldAnimate(true);
        window.removeEventListener("scroll", handleOnScroll);
      }
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <div>
      <div ref={footerRef}></div>
      <Slider shouldAnimate={shouldAnimate} />
    </div>
  );
}

export default ScrollContainer;
