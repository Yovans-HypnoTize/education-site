import { Box, Grid, Typography } from "@mui/material";
import award_1 from "../../assets/award_1.png";
import award_2 from "../../assets/award_2.png";
import award_3 from "../../assets/award_3.png";

const awardsCertifications = [
  {
    name: "Education Technology Awards ",
    src: award_1,
    description: "Honored by leading EdTech bodies.",
  },
  {
    name: "Industry Certifications",
    src: award_2,
    description: "Compliance and performance validated by the best. ",
  },
  {
    name: "Partner Accreditations",
    src: award_3,
    description: "Endorsed by our ecosystem of trusted collaborators. ",
  },
];

const AwardsRecognition = () => {
  return (
    <Box>
      <title>Awards & Recognition | Edumaat</title>
      <meta
        name="description"
        content="Explore the awards and recognitions Edumaat has received for excellence in education technology and innovation."
      />
      <meta
        name="keywords"
        content="Edumaat awards, Edumaat recognition, education technology awards, EdTech achievements, Edumaat certifications"
      />
      <meta name="author" content="Edumaat Team" />
      <link rel="canonical" href="https://edumaat.com/awards-recognition" />

      <Box sx={{ px: { xs: 4, md: 22 }, mt: 3, mb: 10 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 30, mb: 3 }}>
            Awards & Recognition
          </Typography>
          <Typography>
            Recognized by leaders in education and technology. We’re proud to be
            recognized for our innovation and impact in education technology.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={2} justifyContent={"center"}>
            {awardsCertifications?.map((val, index) => (
              <Grid size={{ xs: 12, sm: 4 }} key={index} textAlign={"center"}>
                <img src={val?.src} height={90} width={120} />
                <Typography sx={{ fontWeight: "bold" }}>{val?.name}</Typography>
                <Typography sx={{ color: "gray" }}>
                  {val?.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AwardsRecognition;
