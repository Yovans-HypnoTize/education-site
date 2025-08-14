import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import collageWhyChooseIcon1 from "../../assets/education/coaching/whyChooseIcon1.png";
import collageWhyChooseIcon2 from "../../assets/education/coaching/whyChooseIcon2.png";
import collageWhyChooseIcon3 from "../../assets/education/coaching/whyChooseIcon3.png";
import collageWhyChooseIcon4 from "../../assets/education/coaching/whyChooseIcon4.png";
import GridImage1 from "../../assets/education/coaching/GridImage1.svg";
import GridImage2 from "../../assets/education/coaching/GridImage2.svg";
import GridImage3 from "../../assets/education/coaching/GridImage3.svg";
import GridImage4 from "../../assets/education/coaching/GridImage4.svg";
import coaching_center_headerImage from "../../assets/education/coaching/coaching_center_headerImage.png";
import LazyBoxImage from "../../components/LazyBoxImage";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";
import CircleIcon from "@mui/icons-material/Circle";

const GridPoints = {
  Grid1Points: [
    {
      id: 1,
      label: "Convert inquiries into enrollments with ease ",
    },
    {
      id: 2,
      label: "Capture leads from walk-ins, calls, and online forms  ",
    },
    {
      id: 3,
      label: "Track counselor follow-ups and interaction histories",
    },
    {
      id: 4,
      label: "Automate SMS/email campaigns for lead nurturing ",
    },
    {
      id: 5,
      label: "Access conversion dashboards to analyze performance and ROI",
    },
  ],
  Grid2Points: [
    {
      id: "Organize-teaching-operations-with-precision-and-flexibility.",
      label: "Organize teaching operations with precision and flexibility.",
    },
    {
      id: "Create-and-manage-multiple-batches-by-subject-grade-or-faculty ",
      label:
        "Create and manage multiple batches by subject, grade, or faculty ",
    },
    {
      id: "Auto-generate-and-customize-timetables-with-teacher-availability ",
      label:
        "Auto-generate and customize timetables with teacher availability ",
    },
    {
      id: " Monitor-attendance-and-easily-reschedule-missed-sessions ",
      label: " Monitor attendance and easily reschedule missed sessions ",
    },
    {
      id: "Reassign-faculty-and-track-class-substitutions-in-real-time",
      label: "Reassign faculty and track class substitutions in real time",
    },
  ],
  Grid3Points: [
    {
      id: "Extend-learning-beyond-classroom-boundaries",
      label: "Extend learning beyond classroom boundaries. ",
    },
    {
      id: "Upload-or-link-recorded-lectures-YouTube-GoogleDrive-etc",
      label: "Upload or link recorded lectures (YouTube, Google Drive, etc.)",
    },
    {
      id: "Categorize-content-by-subject-topic-or-batch",
      label: "Categorize content by subject, topic, or batch ",
    },
    {
      id: "Enable-students-to-access-missed-classes-and-revision-materials",
      label: "Enable students to access missed classes and revision materials",
    },
    {
      id: "Track-video-engagement-to-identify-weak-learning-areas",
      label: "Track video engagement to identify weak learning areas",
    },
  ],
  Grid4Points: [
    {
      id: "Boost-exam-readiness-and-track-academic-progress.",
      label: "Boost exam readiness and track academic progress.",
    },
    {
      id: "Conduct-online-mock-tests-timed-quizzes-and-practice-exams ",
      label: "Conduct online mock tests, timed quizzes, and practice exams ",
    },
    {
      id: "Auto-evaluate-objective-questions-with-instant-feedback",
      label: "Auto-evaluate objective questions with instant feedback",
    },
    {
      id: "Provide-topic-wise-analytics-to-improve-learning-outcomes",
      label: "Provide topic-wise analytics to improve learning outcomes",
    },
    {
      id: "Share-reports-and-insights-with-students-and-parents",
      label: "Share reports and insights with students and parents",
    },
  ],
};

const whyChooseItems = [
  {
    id: "Purpose-Built-for-Rapid-Delivery-and-Scale",
    label: "Purpose-Built for Rapid Delivery and Scale",
    icon: collageWhyChooseIcon1,
  },
  {
    id: "Data-Driven-Performance-Tracking",
    label: "Data-Driven Performance Tracking",
    icon: collageWhyChooseIcon2,
  },
  {
    id: "Hybrid-Learning-Ready",
    label: "Hybrid Learning Ready",
    icon: collageWhyChooseIcon3,
  },
  {
    id: "Secure-Centralized-and-Scalable",
    label: "Secure, Centralized, and Scalable",
    icon: collageWhyChooseIcon4,
  },
];

const CustomPoint = ({ point }: any) => (
  <Box sx={{ display: "flex", mt: 0.5 }}>
    <CircleIcon
      sx={{
        height: 12,
        width: 12,
        color: "#828282",
        mt: 0.7,
      }}
    />
    <Typography sx={{ pl: 2, fontSize: 14, lineHeight: 2 }}>
      {point.label}
    </Typography>
  </Box>
);

const CoachingCenter = () => {
  const navigate = useNavigate();

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };

  return (
    <Box>
      <title>School ERP Software | Edumaat for CoachingCenter</title>
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
        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ pl: { xs: 2, sm: 5, lg: 10 } }}>
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
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: { xs: 3, sm: 0 },
            }}
          >
            <LazyBoxImage
              src={coaching_center_headerImage}
              alt="Coaching Center Header Image"
              sx={{
                height: { sm: 370, lg: 400 },
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
          mt: { xs: 5, sm: 0, md: 5 },
          "@media (min-width: 1996px)": {
            px: 60,
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Scale Academic Impact with Smart, Seamless Management
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{ textAlign: "center", mt: 3 }}
        >
          In today’s highly competitive academic landscape, coaching institutes
          and tuition centers must balance academic rigor, operational
          efficiency, and student outcomes — all while adapting to hybrid
          learning models. Edumaat equips you with a robust digital platform to
          manage batches, streamline content delivery, track student
          performance, and boost admissions — whether you run a single branch or
          a growing network.
        </Typography>
      </Box>

      <Box
        sx={{
          mx: { xs: 2, md: 8 },
          overflow: "hidden",
          "@media (min-width: 1996px)": {
            px: 40,
          },
        }}
      >
        <Box sx={{ mt: { xs: 2, sm: 10 }, mb: 2, px: { xs: 1, sm: 4, lg: 8 } }}>
          <Grid container alignItems={"center"} spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }} className="coaching_GridImage1bg">
              <Box
                component={"img"}
                src={GridImage1}
                alt="Grid Image 1"
                sx={{ height: { xs: 300 }, width: "100%" }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box sx={{ pl: { sm: 1 } }}>
                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
                  Lead Management & CRM Tools
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 600, my: 3 }}>
                  You’re never alone — our support team is always here to help.
                </Typography>
                {GridPoints.Grid1Points.map((point: any, idx: number) => (
                  <CustomPoint point={point} key={`${point.id}_${idx}`} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{ mt: { xs: 2, sm: 10 }, mb: 2, px: { xs: 1, sm: 4, lg: 12 } }}
        >
          <Grid container alignItems={"center"} spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
                  Batch Scheduling & Management
                </Typography>
                <Box sx={{ my: 3 }}>
                  {GridPoints.Grid2Points.map((point: any, idx: number) => (
                    <CustomPoint point={point} key={`${point.id}_${idx}`} />
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} className="coaching_GridImage2bg">
              <LazyBoxImage
                src={GridImage2}
                alt="Grid Image 2"
                sx={{ height: { xs: 300 }, width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{ mt: { xs: 2, sm: 10 }, mb: 2, px: { xs: 1, sm: 4, lg: 12 } }}
        >
          <Grid container alignItems={"center"} spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }} className="coaching_GridImage3bg">
              <LazyBoxImage
                src={GridImage3}
                alt="Grid Image 3"
                sx={{ height: { xs: 300 }, width: "100%" }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ pl: { sm: 5 } }}>
                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
                  Class Recording & Content Integration
                </Typography>
                <Box sx={{ my: 3 }}>
                  {GridPoints.Grid3Points.map((point: any, idx: number) => (
                    <CustomPoint point={point} key={`${point.id}_${idx}`} />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{ mt: { xs: 2, sm: 10 }, mb: 2, px: { xs: 1, sm: 4, lg: 12 } }}
        >
          <Grid container alignItems={"center"} spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
                  Online Tests & Student Evaluation
                </Typography>
                <Box sx={{ my: 3 }}>
                  {GridPoints.Grid4Points.map((point: any, idx: number) => (
                    <CustomPoint point={point} key={`${point.label}_${idx}`} />
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} className="coaching_GridImage4bg">
              <LazyBoxImage
                src={GridImage4}
                alt="Grid Image 4"
                sx={{ height: { xs: 300 }, width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: 5,
          my: { xs: 1, sm: 5 },
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
            Why Coaching & Tuition Centers Choose Edumaat
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

export default CoachingCenter;
