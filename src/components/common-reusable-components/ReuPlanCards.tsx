import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import awesomeIcon from "../../assets/awesomeIcon.png";
import glimpseImage from "../../assets/glimpseImage.png";
import ReuGradientButton from "./ReuGradientButton";
import { useNavigate } from "react-router-dom";

interface cardBodyContent {
  heading: string;
  points: any[];
}

interface ReuPlanCard {
  title: string;
  description: string;
  description2?: string;
  buttonText: string;
  highlight: boolean;
  cardBodyContent: cardBodyContent;
}

interface ReuPlanCardsProps {
  plans: ReuPlanCard[];
  showBody?: boolean;
}

const ReuPlanCards: React.FC<ReuPlanCardsProps> = ({
  plans,
  showBody = true,
}) => {
  const navigate = useNavigate();
  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };
  return (
    <Grid container spacing={4} justifyContent="center" alignItems="stretch">
      {plans.map((plan, index) => (
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
          <Card
            elevation={0}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              textAlign: "left",
              height: "100%",
              display: "flex",
              flexDirection: "column",

              boxShadow: "none",
              transition: "transform 0.4s ease,  0.4s ease, 0.4s ease",
              willChange: "transform",
              "&:hover": {
                boxShadow: "none",
                transform: "scale(1.10)",
              },
            }}
          >
            <Box sx={{ backgroundColor: "#eef2ff" }}>
              <CardContent sx={{ position: "relative", p: 4, height: "280px" }}>
                {plan.highlight && (
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      position: "absolute",
                      top: 12,
                      right: 15,
                      width: 40,
                      height: 40,
                      borderRadius: 5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={glimpseImage}
                      alt="glimpseImage"
                      height={25}
                      width={25}
                    />
                  </Box>
                )}
                <Typography variant="h6" component="h2" fontWeight={700} gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h6" component="h2" fontWeight={400}>
                  {plan.description}
                </Typography>
                {showBody && plan.description2 && (
                  <Typography sx={{ color: "gray", pt: 1, fontSize:14 }}>
                    {plan.description2}
                  </Typography>
                )}
              </CardContent>
              <Box display="flex" justifyContent="center" pb={5}>
                <ReuGradientButton
                  key={"get starter plan"}
                  variant="contained"
                  sx={{ width: "85%", height: 55 }}
                  onClick={handleBookFreeDemo}
                >
                  {plan.buttonText}
                </ReuGradientButton>
              </Box>
            </Box>

            {showBody && (
              <Box sx={{ mt: 2, p: 2, flexGrow: 1 }}>
                <Typography fontWeight={600} gutterBottom>
                  {plan.cardBodyContent.heading}
                </Typography>
                {plan.cardBodyContent.points.map((point, idx) => (
                  <Box sx={{ display: "flex", py: 0.5 }} key={idx}>
                    <img
                      src={awesomeIcon}
                      alt={`${point}_${idx}`}
                      height={13}
                      width={13}
                      style={{ marginTop: "5px" }}
                    />
                    <Box key={idx} sx={{ ml: 1 }}>
                      {point.renderContent}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReuPlanCards;
