import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ErrorPage = () => {
  const naviage = useNavigate();
  // const error = useRouteError();
  // console.error(error);

  const GradientText = styled(Typography)({
    fontSize: "9rem",
    fontWeight: 800,
    background: "linear-gradient(to right, #D946EF, #9333EA)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  });

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign="center">
        <GradientText variant="h1">404</GradientText>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="text.secondary"
          pt={1}
          pb={2}
        >
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" color="text.primary">
          Sorry, the page you're looking for doesn't exist.
        </Typography>
        <Typography
          sx={{
            mt: 3,
            color: "#1976d2",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => {
            naviage("/");
          }}
        >
          Back to home
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorPage;
