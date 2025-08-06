import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";

import k12_headerImage from "../../assets/education/k12Images/k12_headerImage.png";
import tickWhiteIcon from "../../assets/education/k12Images/tickWhiteIcon.png";
import studentsImage from "../../assets/education/k12Images/studentsImage.png";
import Cloud_Based_Icon from "../../assets/education/k12Images/Cloud_Based_Icon.png";
import Governance_Grade_Compliance from "../../assets/education/k12Images/Governance_Grade_Compliance.png";
import Multi_Institution_Oversight from "../../assets/education/k12Images/Multi_Institution_Oversight.png";

import k12WhyChooseIcon1 from "../../assets/education/k12Images/k12WhyChooseIcon1.png";
import k12WhyChooseIcon2 from "../../assets/education/k12Images/k12WhyChooseIcon2.png";
import k12WhyChooseIcon3 from "../../assets/education/k12Images/k12WhyChooseIcon3.png";

import LazyBoxImage from "../../components/LazyBoxImage";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowForwardIcon from "@mui/icons-material/ChevronRight";
import { useCarouselProgress } from "./hooks/useCarouselProgress";
import tabImage1 from "../../assets/education/k12Images/a11.png";
import tabImage2 from "../../assets/education/k12Images/a22.png";
import tabImage3 from "../../assets/education/k12Images/a33.png";
import tabImage4 from "../../assets/education/k12Images/a44.png";

const whyChoosItems = [
  {
    id: 1,
    label: "Built for Multi-Institution Oversight",
    icon: k12WhyChooseIcon1,
  },
  {
    id: 2,
    label: "Governance-Grade Compliance",
    icon: k12WhyChooseIcon2,
  },
  {
    id: 3,
    label: "Scalable, Secure, and Cloud-Based",
    icon: k12WhyChooseIcon3,
  },
];

const carouselItems = [
  {
    id: 1,
    title: "Student Lifecycle",
    content: {
      id: "slide1",
      title: "Student Lifecycle Management",
      subTitle:
        "An AI-powered student lifecycle management system for schools – from admission to graduation.",
      pointsHeading:
        "EDUMAAT uses advanced AI tools to help schools manage every step of a student’s journey in one platform, saving time and ensuring accuracy.",
      points: [
        {
          id: 1,
          label:
            "Our student lifecycle management system for schools provides a smooth, customizable admission process with step-by-step workflows.",
        },
        {
          id: 2,
          label:
            "With AI support, you can easily track student progress from admission to graduation, including academics, attendance, and co-curricular records.",
        },
        {
          id: 3,
          label:
            "EDUMAAT is the best school ERP for student journey tracking, giving you full visibility into student performance over the years.",
        },
        {
          id: 4,
          label:
            "A smart digital solution for student academic and activity monitoring that keeps all student data safe, organized, and easy to access.",
        },
        // {
        //   id: 5,
        //   label:
        //     "Automate student promotions and graduation process using AI, reducing manual tasks and minimizing errors for your staff.",
        // },
      ],
    },
    image: tabImage1,
    color: "#008CFF",
  },
  {
    id: 2,
    title: "Teacher & Workload",
    content: {
      id: "slide1",
      title: "Teacher Allocation & Workload Optimization ",
      subTitle:
        "AI-powered teacher allocation and workload management system for better classroom planning.",
      pointsHeading:
        "EDUMAAT uses smart AI tools to help schools assign teachers, balance workloads, and manage schedules with ease and accuracy.",
      points: [
        {
          id: 1,
          label:
            "Our teacher allocation and workload management system uses AI to auto-assign teachers based on their subject skills, availability, and timetable.",
        },
        {
          id: 2,
          label:
            "Easily balance teacher workloads in schools by distributing classes fairly across grades, ensuring no one is overloaded.",
        },
        {
          id: 3,
          label:
            "With real-time monitoring of teaching hours, schools can track teaching schedules and quickly make adjustments whenever needed.",
        },
        {
          id: 4,
          label:
            "The best school ERP for teacher workload tracking uses AI to ensure that every teacher has a fair and efficient schedule, improving classroom quality.",
        },
        // { id: 5, label: "EDUMAAT’s substitute teacher planning software for schools helps manage leaves and assigns backup teachers without delay, powered by intelligent automation." },
      ],
    },
    image: tabImage2,
    color: "#008CFF",
  },
  {
    id: 3,
    title: "Parent Communication",
    content: {
      id: "slide2",
      title: "Parent Communication Tools",
      subTitle:
        "AI-powered, real-time parent communication tools for schools that keep families informed and connected.",
      pointsHeading:
        "EDUMAAT uses smart technology and AI to help schools stay in touch with parents by sharing updates, records, and alerts all in one place.",
      points: [
        {
          id: 1,
          label:
            "Our school management system with parent notifications sends real-time alerts through mobile app, SMS, and email so parents never miss important updates.",
        },
        {
          id: 2,
          label:
            "AI helps share student attendance, marks, and behavior records daily, making it easier for parents to follow their child’s academic journey.",
        },
        {
          id: 3,
          label:
            "A complete digital platform for school announcements and alerts allows schools to send circulars, news, and emergency messages instantly.",
        },
        {
          id: 4,
          label:
            "EDUMAAT offers a secure parent portal for school fee payment and support, making it simple for parents to pay fees, share feedback, or raise support requests.",
        },
        // {
        //   id: 5,
        //   label:
        //     "As the best ERP for school-parent communication, EDUMAAT uses AI to ensure smooth, fast, and two-way communication between school and home.",
        // },
      ],
    },
    image: tabImage3,
    color: "#008CFF",
  },
  {
    id: 4,
    title: "Assessments",
    content: {
      id: "slide3",
      title: "Assessments & Homework Management ",
      subTitle:
        "An AI-powered assessments and homework management system for schools to simplify teaching and improve learning.",
      pointsHeading:
        "EDUMAAT uses smart tools and AI to help teachers manage tests, homework, report cards, and feedback with speed and accuracy.",
      points: [
        {
          id: 1,
          label:
            "Our AI-based assessments and homework management system for schools allows teachers to assign tasks, set deadlines, and track submissions efficiently.",
        },
        {
          id: 2,
          label:
            "Plan exams easily with online and offline exam scheduling for students, supported by AI-driven scheduling and evaluation tools.",
        },
        {
          id: 3,
          label:
            "Create marksheets using digital report card generation with custom grading, tailored to your school's academic structure.",
        },
        {
          id: 4,
          label:
            "With AI support, schools can give real-time academic feedback for parents and students, helping them track performance and take action quickly.",
        },
        // {
        //   id: 5,
        //   label: "EDUMAAT is the best ERP for school exam and homework tracking, offering AI-powered tools for smarter, faster academic management.",
        // },
      ],
    },
    image: tabImage4,
    color: "#008CFF",
  },
];

const autoplayInterval = 5000;

const K12Schools = () => {
  const navigate = useNavigate();

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };
  const { activeIndex, progress, goToSlide, prevSlide, nextSlide } =
    useCarouselProgress(carouselItems, autoplayInterval);

  return (
    <Box>
      <title>School ERP Software | Edumaat for K-12 Institutions</title>
      <meta
        name="description"
        content="Edumaat simplifies K-12 school management with tools for attendance, fee tracking, academics, transport, and parent engagement."
      />
      <meta
        name="keywords"
        content="school ERP, K-12 management, student attendance, parent portal, school automation"
      />
      <link rel="canonical" href="https://edumaat.com/education/schools-k12" />

      <Box
        sx={{
          mt: { sm: 3, lg: 3 },
          "@media (min-width: 1996px)": {
            px: 50,
          },
        }}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ pl: { xs: 5, lg: 10 } }}>
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
              src={k12_headerImage}
              alt="solutionSpotlightBannerImage "
              sx={{ height: { sm: 370, md: 450 }, width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* <Box
        className="k12_student_lifecycle_bg"
        sx={{
          py: 4,
          px: { xs: 5, lg: 10 },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            "@media (min-width: 1996px)": {
              mx: 50,
            },
          }}
        >
          <Grid size={4}>
            <LazyBoxImage
              src={studentsImage}
              alt="Students"
              sx={{ height: { xs: 255, lg: "100%" }, width: "100%" }}
            />
          </Grid>
          <Grid size={8}>
            <Box sx={{ ml: { xs: 5, lg: 10 }, mt: 1.5 }}>
              <Typography
                className="textWhite"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 16, lg: 20 },
                }}
              >
                Student Lifecycle Management
              </Typography>
              <Typography
                className="textWhite"
                sx={{ mt: 3, fontSize: { xs: 14, lg: 16 } }}
              >
                From admissions to graduation, <br /> Edumaat ensures a smooth
                journey for every student.
              </Typography>

              <Box sx={{ mt: 3 }}>
                {[
                  {
                    id: 1,
                    label:
                      "Streamline onboarding with customizable admission workflows",
                  },
                  {
                    id: 2,
                    label:
                      "Track academic and extracurricular progress across terms and years",
                  },
                  {
                    id: 3,
                    label:
                      "Automate promotions, transfers, and graduation certifications",
                  },
                  {
                    id: 4,
                    label: "Maintain comprehensive digital student profiles",
                  },
                ].map((item, index) => (
                  <Box sx={{ display: "flex" }} key={`${item.label}_${index}`}>
                    <LazyBoxImage
                      src={tickWhiteIcon}
                      alt={`${item.label}`}
                      sx={{ height: 20, width: 20, mr: 1 }}
                    />
                    <Typography
                      className="textWhite"
                      sx={{ fontSize: { xs: 12, lg: 14 } }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box> */}

      <Box
        sx={{
          background:
            "transparent linear-gradient(180deg, #9AAFFF40 0%, #D3DCFF40 68%, #9AAFFF1A 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <Box
          sx={{
            px: { xs: 2, md: 8 },
            mb: 7,
            mt: 5,
            pt: 5,
            "@media (min-width: 1996px)": {
              pl: 60,
              pr: 50,
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
            Edumaat for Education Powering every type of learning environment.
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            sx={{ textAlign: "center", mt: 3 }}
          >
            Empower your school to operate smarter, communicate better, and
            teach more effectively with Edumaat’s unified school management
            platform. Designed specifically for K–12 institutions, our system
            simplifies daily administration, enhances teaching effectiveness,
            and strengthens parent engagement — all from a single, easy-to-use
            platform.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 10,
            position: "relative",
            "@media (min-width: 1996px)": {
              mx: 50,
            },
          }}
        >
          {/* Tabs */}
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent={{ md: "space-between", xs: "center" }}
            // flexDirection={{ xs: "column", sm: "column", md: "row" }}
            alignItems={{ xs: "center", md: "center", lg: "stretch" }}
            sx={{ mt: 5, px: { xs: 3, sm: 2, lg: 10 } }}
          >
            {carouselItems.map((item, i) => (
              <Box key={i} sx={{ flex: 1, mx: { sm: 2 } }}>
                <Box
                  onClick={() => goToSlide(i)}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    textAlign: "center",
                    pb: 1,
                    my: { xs: 2, md: 0 },
                    cursor: "pointer",
                    fontWeight: 600,
                    // fontWeight: i === activeIndex ? 600 : 500,
                    color: "#0D0D0D",
                    // color: i === activeIndex ? item.color : "#555",
                    fontSize: 16,
                    position: "relative",
                    mx: 1,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: "-3px",
                      left: 0,
                      height: "5px",
                      width: "100%",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "2px",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-3px",
                      left: 0,
                      height: "5px",
                      width: i === activeIndex ? `${progress}%` : "0%",
                      background: "#2F5DF5",
                      borderRadius: "2px",
                      transition: "width 0.1s linear",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      width: 200,
                      textAlign: "center",
                      fontSize: { sm: 12, md: 16 },
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              overflow: "hidden",
              mx: { lg: 4 },
              py: 4,
              borderRadius: 4,
              position: "relative",
              minHeight: 300,
            }}
          >
            <Box
              sx={{
                display: "flex",
                transition: "transform 1s ease-in-out",
                transform: `translateX(-${activeIndex * 100}%)`,
                width: "100vw",
                // width: `${carouselItems.length * 100}%`,
                height: { sm: 520, md: 400, lg: 430 },
                "@media (max-width: 525px)": {
                  height: 780,
                },
                "@media (max-width: 375px)": {
                  height: 820,
                },
              }}
            >
              {carouselItems.map((slideItem, i) => (
                <Box
                  key={i}
                  sx={{
                    flex: "0 0 100%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 4,
                    px: { lg: 4 },
                    // py:2
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 5,
                      width: "94%",
                      height: { xs: "100%" },
                      boxShadow: "1px 1px 3px rgba(0,0,0, 0.1)",
                      // boxShadow: "1px 1px 3px rgba(0,0,0, 0.3)",
                      overflow: "hidden",
                      py: 2,
                      px: 3,
                      ml: { md: 3, lg: 0 },
                      bgcolor: "#FFFFFF",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      <Box>
                        <LazyBoxImage
                          src={slideItem.image}
                          alt={slideItem.title}
                          sx={{
                            width: { xs: "100%", sm: 350, lg: 350 },
                            height: { sm: 350, md: 270, lg: 330 },
                            borderRadius: "10px",
                            mt: { xs: 0, sm: 5, md: 2, xl: 1 },
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          pl: { sm: 2, md: 8 },
                          pt: { xs: 1, lg: 3 },
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: 14, lg: 18 },
                          }}
                        >
                          {slideItem.content.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            mb: 4,
                            fontSize: { xs: 14 },
                            letterSpacing: 0.5,
                          }}
                        >
                          {slideItem.content.subTitle}
                        </Typography>
                        <Box style={{ paddingLeft: 3 }}>
                          {slideItem.content.points.map((point, idx) => (
                            <Box
                              key={`${point.label}_${idx}`}
                              sx={{ display: "flex", mt: 0.5 }}
                            >
                              <CircleIcon
                                sx={{
                                  height: 12,
                                  width: 12,
                                  color: "#5CACE9",
                                  mt: 0.5,
                                }}
                              />
                              <Typography
                                sx={{ pl: 1.8, fontSize: { xs: 12, lg: 14 } }}
                              >
                                {point.label}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                        <Box
                          sx={{
                            mt: 3,
                            ml: 1,
                            display: { xs: "flex" },
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: { xs: "center", sm: "flex-start" },
                          }}
                        >
                          <ReuOutlineBorderedButton
                            variant="outlined"
                            sx={{
                              width: 200,
                              transition:
                                "transform 0.4s ease,  0.4s ease, 0.4s ease",
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
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box
              onClick={prevSlide}
              sx={{
                position: "absolute",
                left: "1%",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                bgcolor: "rgba(0,0,0,0.3)",
                borderRadius: 50,
                p: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowBackIcon sx={{ color: "#ffffff", height: 20, width: 20 }} />
            </Box>

            <Box
              onClick={nextSlide}
              sx={{
                position: "absolute",
                right: "2%",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                bgcolor: "rgba(0,0,0,0.3)",
                borderRadius: 50,
                p: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowForwardIcon
                sx={{ color: "#ffffff", height: 20, width: 20 }}
              />
            </Box>
          </Box>
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
            Why Choose Edumaat for K–12 School Management
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, lg: 8 }} sx={{ pt: 5, pb: 8 }}>
          {whyChoosItems.map((item, index) => (
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
                    my: 2,
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

                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: 14,
                    mb: 6,
                  }}
                >
                  {item.label}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>

      {/* <Box
        sx={{
          borderRadius: 5,
          my: 5,
          mx: 8,
          overflow: "hidden",
          "@media (min-width: 1996px)": {
            mx: 60,
          },
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(115deg, #00B9F1 0%, #EC008B 56%, #FFCB05 100%)",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
              py: 3,
            }}
            className="textWhite"
          >
            Why Choose Edumaat for K–12 School Management
          </Typography>
        </Box>
        <Grid
          container
          sx={{ bgcolor: "#DDF0FC", pt: 5, pb: 8 }}
          alignItems={"center"}
          justifyContent="center"
        >
          {whyChoosItems.map((item, index) => (
            <React.Fragment key={`${item.label}_${index}`}>
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  mb: { xs: 5, lg: 0 },
                }}
              >
                <Box
                  sx={{
                    py: 3,
                    px: 4,
                    borderRadius: "100%",
                    bgcolor: "#ffffff",
                  }}
                >
                  <LazyBoxImage
                    src={item.icon}
                    alt={`${item.label}`}
                    sx={{ height: 50, width: 50 }}
                  />
                </Box>
                <Typography
                  sx={{ textAlign: "center", fontWeight: 600, fontSize: 14 }}
                >
                  {item.label}
                </Typography>
              </Grid>

            
              {index !== whyChoosItems.length - 1 && (
                <Grid
                  size={1}
                  sx={{
                    display: { xs: "none", md: "block" },
                    mx: 5,
                    height: "150px",
                    width: "2px",
                    backgroundColor: "#ffffff",
                    alignSelf: "center",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Box> */}
    </Box>
  );
};

export default K12Schools;
