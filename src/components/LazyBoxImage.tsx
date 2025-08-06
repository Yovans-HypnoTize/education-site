import { Box, SxProps } from "@mui/material";
import { useInView } from "react-intersection-observer";

type LazyImageProps = {
  src: string;
  alt?: string;
  sx?: SxProps;
  className?: string;
  placeholder?: React.ReactNode;
};

const LazyBoxImage = ({
  src,
  alt = "",
  sx,
  className,
  placeholder = (
    <Box
      sx={{
        height: 200,
        backgroundColor: "#f0f0f0",
        borderRadius: 2,
      }}
    />
  ),
}: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  return (
    <Box ref={ref}>
      {inView ? (
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={sx}
          className={className}
        />
      ) : (
        placeholder
      )}
    </Box>
  );
};

export default LazyBoxImage;
