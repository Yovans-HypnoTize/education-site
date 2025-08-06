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
    id: "partnership-opportunities",
    title: "Partnership Opportunities",
    content: "Reseller & System Integrator models",
    variant: "women-card",
    bgImg: missionWomenImage,
  },
  {
    id: "careers-edumaat",
    title: "Careers @ Edumaat",
    content: "Join our fast-growing team in product, support, and consulting",
    variant: "globe-card",
    bgImg: visionBgImage,
  },
  {
    id: "collaborate-on-innovation",
    title: "Collaborate on Innovation",
    content:
      "Co-create with us on AI, analytics, and next-gen learning solutions",
    variant: "women-card",
    bgImg: missionWomenImage,
  },
];

const GrowWithUs = () => {
  return (
    <Box>
      <title>Grow With Us | Edumaat</title>
      <meta
        name="description"
        content="Explore partnership, career, and collaboration opportunities with Edumaat."
      />
      <meta
        name="keywords"
        content="Edumaat, careers, resellers, AI education, EdTech, partnership"
      />
      <meta name="author" content="Edumaat Team" />
      <link rel="canonical" href="https://edumaat.com/grow-with-us" />

      <Box sx={{ px: { xs: 2, sm: 6, lg: 22 }, mt: 12, mb: 10 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 22, sm: 30 },
              mb: 3,
              mt: 15,
            }}
          >
            Edumaat is always looking for passionate individuals, implementation
            partners, and resellers who share our vision of digitally empowered
            education.
          </Typography>

          <Typography sx={{ color: "gray" }}>
            Whether you’re a tech professional, education consultant, or
            institutional advisor — there’s a place for you in our growth story.
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
                        fontSize: { sm: 22 },
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

export default GrowWithUs;
