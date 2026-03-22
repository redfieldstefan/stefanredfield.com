import useEmblaCarousel from "embla-carousel-react";
import cn from "classnames";
import styles from "./BioCarousel.module.css";

export function BioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <div className={cn("embla", styles.container)}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className={cn("embla__slide", styles.slideContainer)}>
            <p className={styles.slide}>
              I am a Senior Full-Stack Engineer and Leader with 10 years
              building production-grade React and Node.js applications.
            </p>
          </div>
          <div className={cn("embla__slide", styles.slideContainer)}>
            <p className={styles.slide}>
              I am Experienced designing and implementing architecture,
              modernizing legacy systems, and delivering effective and
              performant user interfaces.
            </p>
          </div>
          <div className={cn("embla__slide", styles.slideContainer)}>
            <p className={styles.slide}>
              I have a strong background leading teams while remaining deeply
              hands-on regarding implementation and production delivery.
            </p>
          </div>
          <div className={cn("embla__slide", styles.slideContainer)}>
            <p className={styles.slide}>
              Contact me @ redfield.stefan@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={goToNext} className={cn("embla__next", styles.button)}>
          &#8594;
        </button>
      </div>
    </div>
  );
}
