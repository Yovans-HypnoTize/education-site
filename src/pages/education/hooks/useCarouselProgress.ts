import { useState, useEffect, useCallback, useRef } from "react";

export const useCarouselProgress = (
  carouselItems: any,
  autoplayInterval: any
) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetProgress = useCallback(() => {
    progressRef.current = 0;
    setProgress(0);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex(index);
      resetProgress();
    },
    [resetProgress]
  );

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % carouselItems.length);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeIndex - 1 + carouselItems.length) % carouselItems.length);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    const updateInterval = 100;
    const step = (updateInterval / autoplayInterval) * 100;

    intervalRef.current = setInterval(() => {
      progressRef.current += step;
      if (progressRef.current >= 100) {
        progressRef.current = 0;
        nextSlide();
      }
      setProgress(progressRef.current);
    }, updateInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  return {
    activeIndex,
    progress,
    goToSlide,
    nextSlide,
    prevSlide,
  };
};
