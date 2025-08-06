import { useParams } from "react-router-dom";
import K12Schools from "./K12Schools";
import College from "./College";
import University from "./University";
import { Box, Typography } from "@mui/material";
import EducationManagement from "./EducationManagement";

const EducationMarket = () => {
  const { educationId } = useParams();
  if (educationId === "schools-k12") {
    return <K12Schools />;
  } else if (educationId === "college") {
    return <College />;
  } else if (educationId === "university") {
    return <University />;
  } else if (educationId === "education-boards") {
    return <EducationManagement />;
  } else if (educationId === "coaching") {
    return <EducationManagement />;
  }
  return (
    <Box sx={{ px: 5, py: 10 }}>
      <Typography sx={{ fontSize: 25, fontWeight: 700 }}>
        ⚠️ Page under maintenance.
      </Typography>
      <Typography>
        We’ll be back shortly. Thank you for your understanding.
      </Typography>
    </Box>
  );
};

export default EducationMarket;
