import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LazyBoxImage from "../../components/LazyBoxImage";
import education_boards_headerImage from "../../assets/education/education_boards/education_boards_headerImage.svg";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";
import whyChooseIcon1 from "../../assets/education/k12Images/k12WhyChooseIcon1.png";
import whyChooseIcon2 from "../../assets/education/k12Images/k12WhyChooseIcon2.png";
import whyChooseIcon3 from "../../assets/education/k12Images/k12WhyChooseIcon3.png";
import EduBoardsTabImage1 from "../../assets/education/education_boards/EduBoardsTabImage1.svg";
import EduBoardsTabImage2 from "../../assets/education/education_boards/EduBoardsTabImage2.svg";
import EduBoardsTabImage3 from "../../assets/education/education_boards/EduBoardsTabImage3.svg";
import EduBoardsTabImage4 from "../../assets/education/education_boards/EduBoardsTabImage4.svg";
import EducationBoardsAccordion from "./components/EducationBoardsAccordion";

const tabData = [
  {
    id: "Affiliation-Institution-Management",
    content: {
      title: "Affiliation & Institution Management",
      img: EduBoardsTabImage1,
      points: [
        {
          id: 1,
          label: "Manage school registrations, inspections, and renewals",
        },
        {
          id: 2,
          label:
            "Define and enforce affiliation criteria, fee structures, and compliance workflows",
        },
        {
          id: 3,
          label:
            "Track institution profiles, academic offerings, and performance metrics",
        },
        {
          id: 4,
          label:
            "Automate renewal alerts, inspection logs, and approval cycles",
        },
      ],
    },
  },
  {
    id: "Curriculum-Standardization-Circulars",
    content: {
      title: "Curriculum Standardization & Circulars",
      img: EduBoardsTabImage2,
      points: [
        {
          id: 1,
          label:
            "Define curricula, subject hierarchies, and academic calendars centrally",
        },
        {
          id: 2,
          label:
            "Publish official notices, circulars, and updates with acknowledgment tracking",
        },
        {
          id: 3,
          label:
            "Share guidelines, training materials, and documentation across schools",
        },
        {
          id: 4,
          label:
            "Maintain version control and historical audit of syllabus revisions",
        },
      ],
    },
  },
  {
    id: "Centralized-Examination-Assessment",
    content: {
      title: "Centralized Examination & Assessment",
      img: EduBoardsTabImage3,
      points: [
        {
          id: 1,
          label:
            "Design board-level assessments and distribute across affiliated schools",
        },
        {
          id: 2,
          label:
            "Enable question paper generation, exam scheduling, and answer sheet tracking",
        },
        {
          id: 3,
          label:
            "Collect, validate, and publish results with consolidated reports",
        },
        {
          id: 4,
          label:
            "Monitor performance across institutions, regions, and categories",
        },
      ],
    },
  },
  {
    id: "Policy-Analytics-Governance-Reporting",
    content: {
      title: "Policy Analytics & Governance Reporting",
      img: EduBoardsTabImage4,
      points: [
        {
          id: 1,
          label:
            "Generate reports aligned with national education policy (NEP), RTE, or board standards",
        },
        {
          id: 2,
          label:
            "Analyze enrollment, dropouts, academic outcomes, and infrastructure stats ",
        },
        {
          id: 3,
          label:
            "Provide insights for curriculum planning, resource allocation, and school ranking",
        },
        {
          id: 4,
          label:
            "Export data in formats suited for regulatory and government reporting",
        },
      ],
    },
  },
];

const whyChooseItems = [
  {
    id: "Built-for-Multi-Institution-Oversight",
    label: "Built for Multi-Institution Oversight",
    icon: whyChooseIcon1,
  },
  {
    id: "Governance-Grade-Compliance",
    label: "Governance-Grade Compliance",
    icon: whyChooseIcon2,
  },
  {
    id: "Scalable-Secure-and-Cloud-Based",
    label: "Scalable, Secure, and Cloud-Based",
    icon: whyChooseIcon3,
  },
];

const EducationBoards = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>(tabData[0].id);
  const navigate = useNavigate();

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };

  const handleActiveAccordion = (value: string) => {
    setActiveAccordion(value);
  };

  return (
    <Box>
      <title>School ERP Software | Edumaat for EducationBoards</title>
      <meta
        name="description"
        content="Edumaat simplifies K-12 school management with tools for attendance, fee tracking, academics, transport, and parent engagement."
      />
      <meta
        name="keywords"
        content="school ERP, K-12 management, student attendance, parent portal, school automation"
      />
      <link rel="canonical" href="https://edumaat.com/education/collage" />

      <Box
        sx={{
          mt: { sm: 3, lg: 3 },
          "@media (min-width: 1996px)": {
            px: 50,
          },
        }}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ pl: { xs: 2, sm: 5, lg: 10 } }}>
            <Box sx={{ mt: { xs: 2, sm: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 25, md: 35 },
                }}
              >
                Edumaat for <br /> Education Powering every <br /> type of
                learning environment.
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ my: { xs: 2, lg: 6 } }}
              >
                From schools and colleges to coaching centres and vocational
                institutes — Edumaat adapts to your unique academic needs with
                smart, scalable solutions.
              </Typography>
              <Box sx={{ mt: { xs: 5 } }}>
                <ReuOutlineBorderedButton
                  variant="outlined"
                  sx={{
                    width: 250,
                    transition: "transform 0.4s ease,  0.4s ease, 0.4s ease",
                    willChange: "transform",
                    color: "#ffffff",
                    bgcolor: "#1976d2",
                    borderColor: "#1976d2",
                  }}
                  onClick={handleBookFreeDemo}
                >
                  Book Now
                </ReuOutlineBorderedButton>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <LazyBoxImage
              src={education_boards_headerImage}
              alt="Education boards header image "
              sx={{ height: { sm: 370, md: 450 }, width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* <Box sx={{ py: 5, px: 8, position: "relative" }}>
        <LazyBoxImage
          src={Students_map}
          alt="Students Map"
          sx={{ height: 450 }}
        />
        <Box
          sx={{
            px: 3,
            py: 6,
            boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
            position: "absolute",
            top: "20%",
            right: "20%",
            bgcolor: "#ffffff",
            borderRadius: 5,
            width: "40%",
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
           Standardize Oversight and Empower Schools with Digital Governance
          </Typography>
          <Typography sx={{ mt: 4 }}>
            Education boards oversee complex academic ecosystems comprising affiliated schools, diverse curricula, and regulatory compliance. Edumaat enables boards to digitize affiliation management, streamline curriculum enforcement, centralize assessments, and generate actionable insights — all from a unified platform.
          </Typography>
        </Box>
      </Box> */}

      <Box
        sx={{
          my: 4,
          px: { xs: 1, sm: 4, md: 6, xl: 10 },
          "@media (min-width: 1936px)": {
            px: 50,
          },
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: " 0px 4px 36px #2F5DF55C",
          }}
        >
          <Box sx={{ px: 4, mt: 5, mb: 4 }}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Standardize Oversight and Empower Schools with Digital Governance
            </Typography>
            <Typography
              variant="body2"
              color="initial"
              sx={{ textAlign: "center", mt: 3 }}
            >
              Education boards oversee complex academic ecosystems comprising
              affiliated schools, diverse curricula, and regulatory compliance.
              Edumaat enables boards to digitize affiliation management,
              streamline curriculum enforcement, centralize assessments, and
              generate actionable insights — all from a unified platform.
            </Typography>
          </Box>

          <Box
            sx={{
              height: {
                xs: "100%",
                lg: 480,
              },
            }}
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, sm: 5 }}>
                <LazyBoxImage
                  src={
                    tabData.find((item) => item.id === activeAccordion)?.content
                      .img ?? ""
                  }
                  alt={`Accordion_${
                    tabData.find((item) => item.id === activeAccordion)?.id
                  }`}
                  sx={{ height: { xs: 100, sm:300, md: 400 }, width: "100%" }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 7 }}>
                <Box sx={{ mt: { xs: 0, sm: 5 }, px: { xs: 3, sm: 0 } }}>
                  <EducationBoardsAccordion
                    tabData={tabData}
                    handleActiveAccordion={handleActiveAccordion}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* <Box className={"college_whyChooseBgImage"} sx={{ px: 12, py: 5, my: 8 }}>
        <Box>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", mb: 4, fontSize: 25, fontWeight: 600 }}
            className="textWhite"
          >
            Why Colleges Choose Edumaat
          </Typography>
        </Box>

        <Grid container spacing={8}>
          {whyChooseItems.map((item, idx) => {
            return (
              <Grid size={3} key={`${idx}_${item.id}`}>
                <Box
                  sx={{
                    bgcolor: "#ffffff",
                    height: 130,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 1,
                  }}
                >
                  <LazyImage
                    src={item.icon}
                    alt={item.id}
                    style={{ height: 50, width: 50 }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{ textAlign: "center", py: 3, fontSize: 14 }}
                    className="textWhite"
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box> */}
      {/* <Box
        sx={{
          borderRadius: 5,
          my: 5,
          mx: { xs: 2, sm: 8 },
          overflow: "hidden",
          "@media (min-width: 1996px)": {
            mx: 60,
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
              py: 3,
            }}
          >
            Why Education Boards Choose Edumaat
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, lg: 8 }} sx={{ pt: 5, pb: 8 }}>
          {whyChooseItems.map((item, index) => (
            <React.Fragment key={`${item.label}_${index}`}>
              <Grid
                size={{ xs: 12, sm: 3 }}
                sx={{
                  background:
                    "transparent radial-gradient(closest-side at 19% 26%, #FFFFFF 0%, #F8F7FC 100%) 0% 0% no-repeat padding-box",
                  boxShadow: " 0px 4px 16px #00000029",
                  border: "0.25px solid rgba(112, 112, 112, 0.3)",
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    mt: 2,
                    mx: 4,
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    pt: 3,
                  }}
                >
                  <LazyBoxImage
                    src={item.icon}
                    alt={`${item.label}`}
                    sx={{ height: 50, width: 50 }}
                  />
                </Box>

                <Box
                  sx={{
                    minHeight: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box> */}
      <Box
        sx={{
          borderRadius: 5,
          my: 5,
          mx: { xs: 2, sm: 8 },
          overflow: "hidden",
          "@media (min-width: 1996px)": {
            mx: 60,
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
              py: 3,
            }}
          >
            Why Education Boards Choose Edumaat
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, lg: 8 }} sx={{ pt: 5, pb: 8 }}>
          {whyChooseItems.map((item, index) => (
            <React.Fragment key={`${item.label}_${index}`}>
              <Grid
                size={{ xs: 12, sm: 4 }}
                sx={{
                  background:
                    "transparent radial-gradient(closest-side at 19% 26%, #FFFFFF 0%, #F8F7FC 100%) 0% 0% no-repeat padding-box",
                  boxShadow: " 0px 4px 16px #00000029",
                  border: "0.25px solid rgba(112, 112, 112, 0.3)",
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    mt: 2,
                    mx: 4,
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    pt: 3,
                  }}
                >
                  <LazyBoxImage
                    src={item.icon}
                    alt={`${item.label}`}
                    sx={{ height: 50, width: 50 }}
                  />
                </Box>

                <Box
                  sx={{
                    minHeight: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: 14,
                      mx: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default EducationBoards;
