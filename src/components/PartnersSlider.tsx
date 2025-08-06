import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trustedByImage1 from "../assets/trustedBy/logo1.png";
import trustedByImage2 from "../assets/trustedBy/logo2.png";
import trustedByImage3 from "../assets/trustedBy/logo3.png";
import trustedByImage4 from "../assets/trustedBy/logo4.png";
import trustedByImage5 from "../assets/trustedBy/logo5.png";
import trustedByImage6 from "../assets/trustedBy/logo6.png";
import { Box } from "@mui/material";

const trustedByImages = [
  trustedByImage1,
  trustedByImage2,
  trustedByImage3,
  trustedByImage4,
  trustedByImage5,
  trustedByImage6,
];

const PartnersSlider = () => {
  const settings = {
    dots: !true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      sliderRef?.current?.slickPlay();
    }
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "90%" }}>
        <Slider
          {...settings}
          ref={sliderRef}

          // ref={(slider) => (sliderRef = slider)}
        >
          {trustedByImages.map((imgSrc, index) => (
            <Box
              key={index}
              sx={{
                padding: { sm: 1, lg: 5 },
                width: "100%",
                height: "100%",
                mx: { xs: 5, lg: 20 },
                my: 0,
              }}
            >
              <Box
                component={"img"}
                src={imgSrc}
                alt={`Trusted By ${index + 1}`}
                sx={{
                  width: { xs: 70, md: 150, lg: "200px" },
                  height: { xs: 60, sm: "auto" },
                  margin: "",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default PartnersSlider;
