import { Box, Grid, Typography } from "@mui/material";
import missionWomenImage from "../../assets/missionwomanimg.png";
import visionBgImage from "../../assets/visionbgimg.png";

type cardVariant = "women-card" | "globe-card";

interface CardItems {
  id: string | number;
  title: string | number;
  content: string | number;
  variant: cardVariant;
  bgImg: string;
}

const cardItems: CardItems[] = [
  {
    id: "mission-vision",
    title: "Mission & Vision",
    content:
      "Empower institutions with smart, scalable, and intuitive digital solutions.",
    variant: "women-card",
    bgImg: missionWomenImage,
  },
  {
    id: "leadership-team",
    title: "Leadership Team",
    content: "Meet the experienced minds driving innovation in education ERP.",
    variant: "globe-card",
    bgImg: visionBgImage,
  },
  {
    id: "our-journey",
    title: "Our Journey",
    content:
      "From a simple idea to a global education platform — explore our growth story.",
    variant: "women-card",
    bgImg: missionWomenImage,
  },
];

const WhoWeAre = () => {
  return (
    <Box>
      <title>Who We Are | Edumaat</title>
      <meta
        name="description"
        content="Discover Edumaat's mission, vision, leadership, and journey. Learn how we’re transforming education management through innovation."
      />
      <meta
        name="keywords"
        content="Edumaat mission, Edumaat vision, leadership team, education ERP company, about Edumaat"
      />
      <meta name="author" content="Edumaat Team" />
      <link rel="canonical" href="https://edumaat.com/who-we-are" />

      <Box sx={{ px: { xs: 2, md: 4, lg: 22 }, mt: 12, mb: 10 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 20, sm: 24, md: 30 },
              mb: 3,
              mt: 15,
            }}
          >
            With a passion for education and a commitment to innovation, we
            empower institutions to improve operational efficiency, enhance
            learning outcomes, and foster institutional excellence.
          </Typography>

          <Typography sx={{ color: "gray" }}>
            Built on a vision to transform education management. Edumaat blends
            deep domain expertise with cutting-edge technology to simplify how
            institutions operate and thrive.
          </Typography>
        </Box>

        <Box mt={5}>
          <Grid container spacing={{ xs: 1, sm: 4 }} justifyContent={"center"}>
            {cardItems.map((item) => {
              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                  }}
                >
                  <Box
                    component={"img"}
                    src={item.bgImg}
                    sx={{ height: "100%", width: "100%" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: 2, sm: 15 },
                      left: 15,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: 22,
                        mt: { xs: 2, sm: 0 },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ mt: 2, width: "70%" }}>
                      {item.content}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
