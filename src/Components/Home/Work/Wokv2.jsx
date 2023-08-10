import { useCallback, useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FeatureCard } from "./FeatureCard";

export default function Work() {
  const cardRefs = useMemo(
    () => Array.from({ length: 3 }).map(() => React.createRef()),
    []
  );

  const handleMouseEnter = useCallback((event) => {
    // Pause video
    const video = event.currentTarget.querySelector("video");
    video && video.play();

    // Animate title
    const title = event.currentTarget.querySelector(".title");
    title && animateTitle(title);
  }, []);

  const handleMouseLeave = useCallback((event) => {
    //Pause video
    const video = event.currentTarget.querySelector("video");
    video && video.pause();

    // Animate title
    const title = event.currentTarget.querySelector(".title");
    title && animateTitleExit(title);
  }, []);

  return (
    <section className="work-section">
      <h2 className="section-title">Creations</h2>

      <div className="grid">
        {cardRefs.map((ref) => (
          <FeatureCard
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <>
              <LazyLoadImage src={src} className="bg-img" />

              <h3 className="clamp-2 title">Title</h3>

              <p>Description</p>

              <video>...</video>
            </>
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}
