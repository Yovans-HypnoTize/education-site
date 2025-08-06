import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LazyBoxImage from "../../components/LazyBoxImage";
import CustomizedTabs from "./components/CustomizedTabs";
import whyChooseIcon1 from "../../assets/education/education_boards/whyChooseIcon1.png";
import whyChooseIcon2 from "../../assets/education/education_boards/whyChooseIcon2.png";
import whyChooseIcon3 from "../../assets/education/education_boards/whyChooseIcon3.png";
import cardImage1 from "../../assets/education/education_boards/cardImage1.png";
import cardImage2 from "../../assets/education/education_boards/cardImage2.png";
import cardImage3 from "../../assets/education/education_boards/cardImage3.png";
import cardImage4 from "../../assets/education/education_boards/cardImage4.png";
import Students_map from "../../assets/education/education_boards/Students_map.png";
import LazyImage from "../../components/LazyImage";

const tabData = [
  {
    id: "Alumini",
    label: "Alumni",
    content: {
      title: "Alumni Engagement",
      subTitle: "You’re never alone — our support team is always here to help.",
      img: cardImage1,
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
      img: cardImage2,
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
      img: cardImage3,
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
      img: cardImage4,
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
    icon: whyChooseIcon1,
  },
  {
    id: "Real-Time-Analytics",
    label: "Real-Time Analytics",
    icon: whyChooseIcon2,
  },
  {
    id: "Data-Security-Compliance",
    label: "Data Security & Compliance",
    icon: whyChooseIcon3,
  },
];

const EducationBoards = () => {
  const navigate = useNavigate();

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
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
          mt: { xs: 3, lg: 3 },
          mx: { xs: 8 },
        }}
      >
        <Box
          className={"education_boards_header_bg"}
          sx={{ px: 5, pt: 5, borderRadius: 14 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: 25, md: 30 },
                textAlign: "center",
                pb: 3,
              }}
              className="textWhite"
            >
              Edumaat for Education Powering every <br /> type of learning
              environment
            </Typography>
            <Typography
              sx={{ fontSize: 14, lineHeight: 2.2, mt: 0.5, pb: 3 }}
              className="textWhite"
            >
              From schools and colleges to coaching centres and vocational
              institutes — Edumaat adapts to your unique academic needs with
              smart, scalable solutions.
            </Typography>
            <Box
              className={"education_board_header_btn"}
              sx={{
                width: 220,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 5,
              }}
              onClick={handleBookFreeDemo}
            >
              <Typography sx={{ color: "#ffffff" }}>Book Now</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ py: 5, px: 8, position: "relative" }}>
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
            Education boards oversee complex academic ecosystems comprising
            affiliated schools, diverse curricula, and regulatory compliance.
            Edumaat enables boards to digitize affiliation management,
            streamline curriculum enforcement, centralize assessments, and
            generate actionable insights — all from a unified platform.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: 8, mt: 5, mb: 7 }}>
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

      <Box sx={{ my: 4, px: 12 }}>
        <Box
          sx={{
            borderRadius: 3,
            boxShadow: "1px 1px 3px rgba(0,0,0, 0.3)",
            overflow: "hidden",
          }}
        >
          <CustomizedTabs tabData={tabData} />
        </Box>
      </Box>

      <Box className={"college_whyChooseBgImage"} sx={{ px: 12, py: 5, my: 8 }}>
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
      </Box>
    </Box>
  );
};

export default EducationBoards;
