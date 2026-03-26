import { useEffect, useRef, useState } from "react";

const IDLE_POSITION = -100;
const PREV_POSITION = 0;
const NEXT_POSITION = -200;

function wrapIndex(index, total) {
  return (index + total) % total;
}

function GallerySlider({
  photos,
  autoPlay = true,
  autoPlayDelay = 4200,
  showDots = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(IDLE_POSITION);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const viewportRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const pointerIdRef = useRef(null);

  const totalSlides = photos.length;

  if (!totalSlides) {
    return null;
  }

  const hasMultipleSlides = totalSlides > 1;
  const previousIndex = wrapIndex(currentIndex - 1, totalSlides);
  const nextIndex = wrapIndex(currentIndex + 1, totalSlides);
  const visibleSlides = [photos[previousIndex], photos[currentIndex], photos[nextIndex]];
  const isBusy = position !== IDLE_POSITION;

  useEffect(() => {
    if (transitionEnabled) {
      return undefined;
    }

    const frame = requestAnimationFrame(() => {
      setTransitionEnabled(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [transitionEnabled]);

  useEffect(() => {
    if (!autoPlay || !hasMultipleSlides || isHovered || isDragging || isBusy) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setTransitionEnabled(true);
      setPosition(NEXT_POSITION);
    }, autoPlayDelay);

    return () => window.clearInterval(timer);
  }, [autoPlay, autoPlayDelay, hasMultipleSlides, isBusy, isDragging, isHovered]);

  const goToNext = () => {
    if (!hasMultipleSlides || isBusy) {
      return;
    }

    setTransitionEnabled(true);
    setPosition(NEXT_POSITION);
  };

  const goToPrevious = () => {
    if (!hasMultipleSlides || isBusy) {
      return;
    }

    setTransitionEnabled(true);
    setPosition(PREV_POSITION);
  };

  const goToSlide = (index) => {
    if (index === currentIndex || isBusy) {
      return;
    }

    setCurrentIndex(index);
    setPosition(IDLE_POSITION);
    setDragOffset(0);
    dragOffsetRef.current = 0;
  };

  const handlePointerDown = (event) => {
    if (!hasMultipleSlides) {
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    dragStartXRef.current = event.clientX;
    dragOffsetRef.current = 0;
    pointerIdRef.current = event.pointerId;

    setIsDragging(true);
    setTransitionEnabled(false);
    setDragOffset(0);

    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDragging || pointerIdRef.current !== event.pointerId) {
      return;
    }

    const nextDragOffset = event.clientX - dragStartXRef.current;
    dragOffsetRef.current = nextDragOffset;
    setDragOffset(nextDragOffset);
  };

  const finishDrag = (pointerId) => {
    if (!isDragging || (pointerIdRef.current !== null && pointerId !== pointerIdRef.current)) {
      return;
    }

    const sliderWidth = viewportRef.current?.offsetWidth ?? 0;
    const threshold = Math.max(48, sliderWidth * 0.18);
    const shouldNavigate = Math.abs(dragOffsetRef.current) > threshold;
    const nextPosition = dragOffsetRef.current < 0 ? NEXT_POSITION : PREV_POSITION;

    setIsDragging(false);
    setTransitionEnabled(true);
    setDragOffset(0);
    dragOffsetRef.current = 0;

    if (shouldNavigate) {
      setPosition(nextPosition);
    } else {
      setPosition(IDLE_POSITION);
    }

    pointerIdRef.current = null;
  };

  const handlePointerUp = (event) => {
    finishDrag(event.pointerId);
  };

  const handlePointerCancel = (event) => {
    finishDrag(event.pointerId);
  };

  const handleTransitionEnd = (event) => {
    if (event.propertyName !== "transform" || position === IDLE_POSITION) {
      return;
    }

    setTransitionEnabled(false);
    setDragOffset(0);
    dragOffsetRef.current = 0;
    setCurrentIndex((index) =>
      position === NEXT_POSITION
        ? wrapIndex(index + 1, totalSlides)
        : wrapIndex(index - 1, totalSlides)
    );
    setPosition(IDLE_POSITION);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }
  };

  return (
    <div
      className="gallery-slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="gallery-slider-shell">
        <button
          type="button"
          className="gallery-nav gallery-nav-prev"
          onClick={goToPrevious}
          aria-label="Show previous haircut"
          disabled={!hasMultipleSlides || isBusy}
        >
          <span aria-hidden="true">&#8592;</span>
        </button>

        <div
          ref={viewportRef}
          className={`gallery-viewport ${isDragging ? "is-dragging" : ""}`}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <div
            className={`gallery-track ${transitionEnabled ? "is-transitioning" : ""}`}
            style={{
              transform: `translateX(calc(${position}% + ${dragOffset}px))`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {visibleSlides.map((photo, index) => (
              <figure
                key={`${photo.label}-${index}-${currentIndex}`}
                className={`gallery-slide ${index === 1 ? "is-active" : ""}`}
              >
                <div className="gallery-media">
                  <img src={photo.src} alt={photo.alt} loading="lazy" draggable="false" />
                </div>

                <figcaption className="gallery-caption">
                  <span className="gallery-caption-label">{photo.label}</span>
                  <span className="gallery-caption-copy">{photo.alt}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="gallery-nav gallery-nav-next"
          onClick={goToNext}
          aria-label="Show next haircut"
          disabled={!hasMultipleSlides || isBusy}
        >
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>

      <div className="gallery-slider-footer">
        {showDots && hasMultipleSlides ? (
          <div className="gallery-pagination" aria-label="Gallery pagination">
            {photos.map((photo, index) => (
              <button
                key={photo.label}
                type="button"
                className={`gallery-dot ${index === currentIndex ? "is-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Show ${photo.label}`}
                aria-pressed={index === currentIndex}
              />
            ))}
          </div>
        ) : (
          <span />
        )}

        <p className="gallery-counter">
          {String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}

export default GallerySlider;
