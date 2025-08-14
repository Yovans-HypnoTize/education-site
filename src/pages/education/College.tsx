import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomizedTabs from "./components/CustomizedTabs";
import collageWhyChooseIcon1 from "../../assets/education/collage/collageWhyChooseIcon1.png";
import collageWhyChooseIcon2 from "../../assets/education/collage/collageWhyChooseIcon2.png";
import collageWhyChooseIcon3 from "../../assets/education/collage/collageWhyChooseIcon3.png";
import collageWhyChooseIcon4 from "../../assets/education/collage/collageWhyChooseIcon4.png";
import tabImage1 from "../../assets/education/collage/tabImage1.png";
import tabImage2 from "../../assets/education/collage/tabImage2.png";
import tabImage3 from "../../assets/education/collage/tabImage3.png";
import tabImage4 from "../../assets/education/collage/tabImage4.png";
import collage_headerImage from "../../assets/education/collage/collage_headerImage.png";
import LazyBoxImage from "../../components/LazyBoxImage";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";

const tabData = [
  {
    id: "Alumini",
    label: "Alumni",
    content: {
      title: "Alumni Engagement",
      subTitle: "You’re never alone — our support team is always here to help.",
      img: tabImage1,
      points: [
        {
          id: 1,
          label: "Maintain alumni records with academic and career data ",
        },
        {
          id: 2,
          label: "Host alumni meetups, webinars, and mentoring initiatives  ",
        },
        {
          id: 3,
          label: "Support donation tracking and fundraising campaigns ",
        },
        {
          id: 4,
          label: "Facilitate alumni networking and knowledge-sharing platforms",
        },
      ],
    },
  },
  {
    id: "Credit System",
    label: "Credit System",
    content: {
      title: "Credit System Support ",
      subTitle: "",
      img: tabImage2,
      points: [
        {
          id: 1,
          label:
            "Track course completions, electives, and credit hours semester-wise",
        },
        {
          id: 2,
          label:
            "Automated GPA/CGPA calculations aligned with college grading policies ",
        },
        {
          id: 3,
          label:
            "Manage diploma and undergraduate programs with distinct credit requirements",
        },
        { id: 4, label: "Enable cross-department elective enrollments" },
      ],
    },
  },
  {
    id: "Exam mangement",
    label: "Exam Management",
    content: {
      title: "Internal & External Exam Management ",
      subTitle: "",
      img: tabImage3,
      points: [
        {
          id: 1,
          label:
            "Plan and execute internal assessments, unit tests, and final exams",
        },
        {
          id: 2,
          label:
            "Support for various grading methods: marks, grades, and credits",
        },
        {
          id: 3,
          label:
            "Automate invigilation rosters, hall tickets, and seating plans",
        },
        {
          id: 4,
          label:
            "Consolidate internal results with external board exam outcomes",
        },
      ],
    },
  },
  {
    id: "Placement Management",
    label: "Placement",
    content: {
      title: "Placement Module ",
      subTitle: "",
      img: tabImage4,
      points: [
        { id: 1, label: "Coordinate campus interviews and internship drives" },
        {
          id: 2,
          label: "Maintain company databases and student application records",
        },
        {
          id: 3,
          label: "Host online aptitude tests and evaluate candidate fit",
        },
        {
          id: 4,
          label:
            "Track offers, generate reports, and collect recruiter feedback",
        },
      ],
    },
  },
];

const whyChooseItems = [
  {
    id: "Purpose-built-for-College-Administration",
    label: "Purpose-built for College Administration",
    icon: collageWhyChooseIcon1,
  },
  {
    id: "Real-Time-Analytics",
    label: "Real-Time Analytics",
    icon: collageWhyChooseIcon2,
  },
  {
    id: "Data-Security-Compliance",
    label: "Data Security & Compliance",
    icon: collageWhyChooseIcon3,
  },
  {
    id: "Hybrid-Learning-Support",
    label: "Hybrid Learning Support",
    icon: collageWhyChooseIcon4,
  },
];

const College = () => {
  const navigate = useNavigate();

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };

  return (
    <Box>
      <title>School ERP Software | Edumaat for College</title>
      <meta
        name="description"
        content="Edumaat simplifies K-12 school management with tools for attendance, fee tracking, academics, transport, and parent engagement."
      />
      <meta
        name="keywords"
        content="school ERP, K-12 management, student attendance, parent portal, school automation"
      />
      <link rel="canonical" href="https://edumaat.com/education/collage" />

      {/* <Box
        sx={{
          mt: { xs: 3, lg: 3 },
          mx: { xs: 8 },
        }}
      >
        <Box
          className={"college_header_bg"}
          sx={{ px: 3, pt: 5, borderRadius: 14, height: 460 }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                width: "80%",
                fontWeight: "bold",
                fontSize: { xs: 25, md: 30 },
                textAlign: "center",
              }}
              className="textWhite"
            >
              Edumaat for Education Powering every type of <br /> learning
              environment
            </Typography>
          </Box>

          <Grid container spacing={5} sx={{ px: 7 }}>
            <Grid size={6}></Grid>
            <Grid size={6} sx={{ pl: 2 }}>
              <Typography
                sx={{ fontSize: { xs: 14, xl: 16 }, lineHeight: 2.2, mt: 7 }}
                className="textWhite"
              >
                From schools and colleges to coaching centres and vocational{" "}
                <br />
                institutes — Edumaat adapts to your unique academic needs with{" "}
                <br />
                smart, scalable solutions.
              </Typography>
              <ReuButton
                sx={{
                  bgcolor: "#ffffff",
                  color: "#000000",
                  height: 50,
                  width: 230,
                  mt: 5,
                  fontSize: 16,
                }}
                onClick={handleBookFreeDemo}
              >
                Book Now
              </ReuButton>
            </Grid>
          </Grid>
        </Box>
      </Box> */}

      <Box
        sx={{
          mt: { sm: 3, lg: 3 },
          "@media (min-width: 1996px)": {
            px: 50,
          },
        }}
      >
        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ pl: {xs:2, sm: 5, lg: 10 } }}>
            <Box sx={{ mt: { xs: 2, md: 5 } }}>
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
              src={collage_headerImage}
              alt="Collage Header Image"
              sx={{
                height: { sm: 370, lg: 400 },
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ px: { xs: 2, sm: 8 }, mt: { xs: 5, sm: 0, md: 5 }, mb: 7 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Streamline operations and empower student achievement
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{ textAlign: "center", mt: 3 }}
        >
          Colleges require systems that can adapt to their specific
          administrative and academic workflows. Edumaat simplifies
          institutional management by supporting multi-department coordination,
          internal evaluations, and career-focused initiatives — all in one
          integrated platform.
        </Typography>
      </Box>

      <Box sx={{ my: 4, px: { xs: 1, sm: 4, md: 12 } }}>
        <Box
          sx={{
            borderRadius: 3,
            // boxShadow: "1px 1px 3px rgba(0,0,0, 0.3)",
            overflow: "hidden",
            boxShadow: " 0px 4px 36px #2F5DF55C",
          }}
        >
          <CustomizedTabs tabData={tabData} />
        </Box>
      </Box>

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
            Why Colleges Choose Edumaat
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
      </Box>
    </Box>
  );
};

export default College;
