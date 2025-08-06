import React from "react";
import { useInView } from "react-intersection-observer";

type LazyImageProps = {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  placeholder?: React.ReactNode;
};

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt = "",
  style,
  className,
  placeholder = <div style={{ backgroundColor: '#f0f0f0' }} />,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  return (
    <div ref={ref} style={style} className={className}>
      {inView ? (
        <img src={src} alt={alt} style={style} className={className} />
      ) : (
        placeholder
      )}
    </div>
  );
};

export default LazyImage;
