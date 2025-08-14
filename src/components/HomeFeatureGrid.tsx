import { useState } from "react";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";

import home_header_cards_bg from "../assets/home/home_header_cards_bg.png";
import ReuGradientButton from "./common-reusable-components/ReuGradientButton";
import { useNavigate } from "react-router-dom";
import {
  edumaat_home_page_icons,
  home_page_featureCard_images,
} from "../utils/ImageContainer";
import LazyBoxImage from "./LazyBoxImage";
import blurred_card_img from "../assets/home/blurred_card_img.svg";
import { useTheme } from "@mui/material/styles";

const StyledBox = styled(Box)({
  backgroundImage: `url(${home_header_cards_bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",

  borderRadius: "12px",
  height: 450,
  width: "100vw",
});

interface FeatureProps {
  id: string;
  label: string;
  blackIcon: string;
  blueIcon: string;
  bottomImg: string;
}

const features: FeatureProps[] = [
  {
    id: "admission",
    label: "Admission Management",
    blackIcon: edumaat_home_page_icons.blackIcons.Admission,
    blueIcon: edumaat_home_page_icons.blueIcons.AdmissionBlueIcon,
    bottomImg: home_page_featureCard_images.img1,
  },
  {
    id: "attendence",
    label: "Attendance Management",
    blackIcon: edumaat_home_page_icons.blackIcons.Attendance,
    blueIcon: edumaat_home_page_icons.blueIcons.AttendanceBlueIcon,
    bottomImg: home_page_featureCard_images.img2,
  },
  {
    id: "exam-assesment",
    label: "Exams And Assessments",
    blackIcon: edumaat_home_page_icons.blackIcons.Examination,
    blueIcon: edumaat_home_page_icons.blueIcons.ExaminationBlueIcon,
    bottomImg: home_page_featureCard_images.img3,
  },
  {
    id: "time-table",
    label: "Time Table",
    blackIcon: edumaat_home_page_icons.blackIcons.Time_Table,
    blueIcon: edumaat_home_page_icons.blueIcons.Time_TableBlueIcon,
    bottomImg: home_page_featureCard_images.img4,
  },
  {
    id: "requistion-approval",
    label: "Requisition & Approval",
    blackIcon: edumaat_home_page_icons.blackIcons.Requisitions,
    blueIcon: edumaat_home_page_icons.blueIcons.RequisitionsBlueIcon,
    bottomImg: home_page_featureCard_images.img5,
  },
  {
    id: "fees-management",
    label: "Fees Management",
    blackIcon: edumaat_home_page_icons.blackIcons.Inventory,
    blueIcon: edumaat_home_page_icons.blueIcons.InventoryBlueIcon,
    bottomImg: home_page_featureCard_images.img6,
  },
  {
    id: "finance-management",
    label: "Finance Management",
    blackIcon: edumaat_home_page_icons.blackIcons.Reports,
    blueIcon: edumaat_home_page_icons.blueIcons.ReportsBlueIcon,
    bottomImg: home_page_featureCard_images.img7,
  },
  {
    id: "communication-management",
    label: "Communication Management",
    blackIcon: edumaat_home_page_icons.blackIcons.Communication,
    blueIcon: edumaat_home_page_icons.blueIcons.CommunicationBlueIcon,
    bottomImg: home_page_featureCard_images.img8,
  },
  {
    id: "notification-remainder",
    label: "Notification & Reminder",
    blackIcon: edumaat_home_page_icons.blackIcons.Reminder_Hub,
    blueIcon: edumaat_home_page_icons.blueIcons.Reminder_HubBlueIcon,
    bottomImg: home_page_featureCard_images.img9,
  },
  {
    id: "form-builder",
    label: "Form Builder",
    blackIcon: edumaat_home_page_icons.blackIcons.Form_Builder,
    blueIcon: edumaat_home_page_icons.blueIcons.Form_BuilderBlueIcon,
    bottomImg: home_page_featureCard_images.img10,
  },
  {
    id: "quiz",
    label: "Quiz",
    blackIcon: edumaat_home_page_icons.blackIcons.Quiz,
    blueIcon: edumaat_home_page_icons.blueIcons.QuizBlueIcon,
    bottomImg: home_page_featureCard_images.img11,
  },
  {
    id: "academic-calender",
    label: "Academic Calendar",
    blackIcon: edumaat_home_page_icons.blackIcons.Calendar,
    blueIcon: edumaat_home_page_icons.blueIcons.CalendarBlueIcon,
    bottomImg: home_page_featureCard_images.img12,
  },
];

const HomeFeatureGrid = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<any>("");
  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };
  const activeFeature = features.find((feature) => feature.id === activeIndex);

  return (
    <Box sx={{ position: "relative", mb: { xs: 45, sm: 32, lg: 55 } }}>
      <StyledBox sx={{ padding: { md: "0px 50px 50px 50px" } }}>
        <Box
          sx={{
            pt: { md: 5 },
            backdropFilter: "blur(45px)",
            bgcolor: "rgba(255,255,255,0.3)",
          }}
        >
          <ReuGradientButton
            key={"get starter plan"}
            variant="contained"
            sx={{ px: { sm: 8, xs: 2 }, pb: { sm: 1.5, xs: 0.3 }, mb: 7 }}
            onClick={handleBookFreeDemo}
          >
            Book Now
          </ReuGradientButton>
          <Box
            sx={{
              borderRadius: "5px",
              border: 1.5,
              borderColor: "#ffffff",
              padding: 1.5,
            }}
          >
            <Box sx={{ bgcolor: "transparent", p: 2, borderRadius: "5px" }}>
              <Grid container spacing={2} justifyContent="center">
                {features.map((feature, index) => (
                  <Grid size={{ xs: 6, sm: 3, lg: 2 }} key={index}>
                    <Paper
                      onClick={() => setActiveIndex(feature.id)}
                      sx={{
                        height: { xs: 90, sm: 80 },
                        px: 0.5,
                        py: 1.5,
                        textAlign: "center",
                        borderRadius: 2,
                        cursor: "pointer",
                        border:
                          activeIndex === feature.id
                            ? "1.5px solid #1976d2"
                            : "1.5px solid #0000000F",
                        transition: "all 0.3s ease",
                        "& svg": {
                          fontSize: 26,
                          color:
                            activeIndex === feature.id ? "#1976d2" : "#000",
                          mb: 1,
                        },
                        "&:hover": {
                          boxShadow: 4,
                          border: "1.5px solid #1976d2",
                        },
                      }}
                    >
                      <Box
                        component={"img"}
                        src={
                          activeIndex === feature.id
                            ? feature.blueIcon
                            : feature.blackIcon
                        }
                        alt={feature.id}
                        sx={{ height: 25, width: 25 }}
                      />
                      {/* <Box>{feature.icon}</Box> */}
                      <Typography variant="body2" sx={{ fontSize: 11 }}>
                        {feature.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              {isSm && (
                <Typography sx={{ textAlign: "center", mt: 2, color: "gray" }}>
                  And more...
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </StyledBox>
      <Box
        sx={{
          position: "absolute",
          top: { sm: "80%", lg: "40%", xl: "10%" },
          zIndex: -1,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box
          component={"img"}
          src={activeFeature?.bottomImg || blurred_card_img}
          alt="Home Attendence Service"
          sx={{ height: "100%", width: "100vw" }}
        />
      </Box>
    </Box>
  );
};

export default HomeFeatureGrid;
