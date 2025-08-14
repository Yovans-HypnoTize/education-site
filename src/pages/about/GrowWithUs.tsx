import { Box, Grid, Typography } from "@mui/material";
import missionWomenImage from "../../assets/missionwomanimg.png";
import visionBgImage from "../../assets/visionbgimg.png";
import grow_with_us_benefits_img from "../../assets/about/grow_with_us_benefits_img.png";
import React from "react";
import whoGrowWithUsImg1 from "../../assets/about/whoGrowWithUsImg1.png";
import whoGrowWithUsImg2 from "../../assets/about/whoGrowWithUsImg2.png";
import whoGrowWithUsImg3 from "../../assets/about/whoGrowWithUsImg3.png";
import whoGrowWithUsImg4 from "../../assets/about/whoGrowWithUsImg4.png";

import whyGrowWithUsImg1 from "../../assets/about/whyGrowWithUsImg1.png";
import whyGrowWithUsImg2 from "../../assets/about/whyGrowWithUsImg2.png";
import whyGrowWithUsImg3 from "../../assets/about/whyGrowWithUsImg3.png";
import whyGrowWithUsImg4 from "../../assets/about/whyGrowWithUsImg4.png";
import whyGrowWithUsImg5 from "../../assets/about/whyGrowWithUsImg5.png";
import whyGrowWithUsImg6 from "../../assets/about/whyGrowWithUsImg6.png";
import LazyBoxImage from "../../components/LazyBoxImage";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";
import grow_with_us_header_img from "../../assets/about/grow_with_us_header_img.png";
import { useNavigate } from "react-router-dom";
import check_mark_green_icon from "../../assets/about/check-mark green-icon.png";

type cardVariant = "women-card" | "globe-card";

interface CardItems {
  id: string | number;
  title: string | number;
  content: string | number;
  variant: cardVariant;
  bgImg: string;
}

const cardItems: CardItems[] = [
  {
    id: "partnership-opportunities",
    title: "Partnership Opportunities",
    content: "Reseller & System Integrator models",
    variant: "women-card",
    bgImg: missionWomenImage,
  },
  {
    id: "careers-edumaat",
    title: "Careers @ Edumaat",
    content: "Join our fast-growing team in product, support, and consulting",
    variant: "globe-card",
    bgImg: visionBgImage,
  },
  {
    id: "collaborate-on-innovation",
    title: "Collaborate on Innovation",
    content:
      "Co-create with us on AI, analytics, and next-gen learning solutions",
    variant: "women-card",
    bgImg: missionWomenImage,
  },
];

const whoGrowWithUsItems = [
  {
    id: "Schools that want to simplify daily operations",
    img: whoGrowWithUsImg1,
    content: "Schools that want to simplify daily operations",
  },
  {
    id: "Colleges looking to streamline academics and administration",
    img: whoGrowWithUsImg2,
    content: "Colleges looking to streamline academics and administration",
  },
  {
    id: "Universities that need a powerful, centralized ERP",
    img: whoGrowWithUsImg3,
    content: "Universities that need a powerful, centralized ERP",
  },
  {
    id: "Training institutes that manage batches, students, and resource",
    img: whoGrowWithUsImg4,
    content: "Training institutes that manage batches, students, and resource",
  },
];

const whyGrowWithUsItems = [
  {
    id: "All-in-One Education ERP",
    title: "All-in-One Education ERP",
    img: whyGrowWithUsImg1,
    content:
      "Manage all operations including admissions, attendance, exams, fees, timetable, communication, HR, library, transport, and hostel through a single platform.",
  },
  {
    id: "Save Time and Reduce Manual Work",
    title: "Save Time and Reduce Manual Work",
    img: whyGrowWithUsImg2,
    content:
      "EDUMAAT helps you move away from paperwork and repetitive tasks, giving your staff more time to focus on teaching and student success.",
  },
  {
    id: "Real-Time Data and AI Insights",
    title: "Real-Time Data and AI Insights",
    img: whyGrowWithUsImg3,
    content:
      "Make smarter decisions with clear reports and AI-powered tools that give you insights on performance, attendance, fees, and more.",
  },
  {
    id: "Accessible Anytime, Anywhere",
    title: "Accessible Anytime, Anywhere",
    img: whyGrowWithUsImg4,
    content:
      "Our cloud-based system and mobile apps allow students, parents, teachers, and admin teams to access and manage information from any device, at any time.",
  },
  {
    id: "Customized for Your Institution",
    title: "Customized for Your Institution",
    img: whyGrowWithUsImg5,
    content:
      "Every institution is different. EDUMAAT offers customizable modules and flexible workflows to match your exact needs and processes.",
  },
  {
    id: "Ongoing Support and Training",
    title: "Ongoing Support and Training",
    img: whyGrowWithUsImg6,
    content:
      "Our team provides full onboarding, user training, and fast technical support. We are with you every step of the way.",
  },
];

const GrowWithUs = () => {
  const navigate = useNavigate();
  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };
  return (
    <Box>
      <title>Grow With Us | Edumaat</title>
      <meta
        name="description"
        content="Explore partnership, career, and collaboration opportunities with Edumaat."
      />
      <meta
        name="keywords"
        content="Edumaat, careers, resellers, AI education, EdTech, partnership"
      />
      <meta name="author" content="Edumaat Team" />
      <link rel="canonical" href="https://edumaat.com/grow-with-us" />

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
                Grow With EDUMAAT
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ my: { xs: 2 }, fontWeight: 600 }}
              >
                Partner with EDUMAAT to Transform Your Institution
              </Typography>
              <Typography sx={{ my: { xs: 2 }, fontSize: 14 }}>
                Education is evolving, and institutions need smart solutions to
                stay ahead. EDUMAAT is here to help schools, colleges, and
                training centers move forward with powerful ERP software that
                simplifies, automates, and improves every part of education
                management.
                <br />
                <br />
                Founded in 2016, EDUMAAT is now trusted by more than 1000
                institutions around the world. Our clients are not only in India
                but also in Africa, the United States, Dubai, and Australia. We
                are proud to support education across countries with our
                reliable and scalable ERP solution.
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
                  Get Started
                </ReuOutlineBorderedButton>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <LazyBoxImage
              src={grow_with_us_header_img}
              alt="grow with us header"
              sx={{ height: { sm: 370, md: 450 }, width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          borderRadius: 5,
          my: 5,
          mx: { xs: 2, sm: 8, xl:14  },
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
            Why Choose EDUMAAT for Growth
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            With EDUMAAT, you get a complete technology partner who helps your
            institution work better, grow faster, and manage everything in one
            place.
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, lg: 4 }} sx={{ pt: 5, pb: 5 }}>
          {whyGrowWithUsItems.map((item, index) => (
            <React.Fragment key={`${item.content}_${index}`}>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  background:
                    "transparent linear-gradient(0deg, #FFFFFF 0%, #F3F5FF 100%) 0% 0% no-repeat padding-box",
                  boxShadow: " 0px 4px 12px #00000029",
                  border: "0.25px solid rgba(112, 112, 112, 0.3)",
                  borderRadius: 4,
                  py: 1,
                }}
              >
                <Grid container>
                  <Grid size={{ xs: 12, sm: 3 }}>
                    <Box
                      sx={{
                        my: 2,
                        mx: 4,
                        borderRadius: 3,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "rgba(178, 253, 170, 0.2)",
                        height: 70,
                        width: 70,
                      }}
                    >
                      <Box
                        component={"img"}
                        src={item.img}
                        alt={`${item.content}`}
                        sx={{ height: 35, width: 35 }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 9 }} sx={{ px: { xs: 2, sm: 0 } }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        mt: 3,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        my: 2,
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          borderRadius: 5,
          my: 5,
          mx: { xs: 2, sm: 8, xl:14 },
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
            Who Can Grow With Us
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            EDUMAAT is designed for all types of educational institutions:
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, lg: 4 }} sx={{ pt: 5, pb: 8 }}>
          {whoGrowWithUsItems.map((item, index) => (
            <React.Fragment key={`${item.content}_${index}`}>
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  background:
                    " transparent linear-gradient(0deg, #FFFFFF 0%, #F3F5FF 100%) 0% 0% no-repeat padding-box",
                  boxShadow: " 0px 4px 12px #00000029",
                  border: "0.25px solid rgba(112, 112, 112, 0.3)",
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    mx: 2,
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    pt: 2,
                  }}
                >
                  <Box
                    component={"img"}
                    src={item.img}
                    alt={`${item.content}`}
                    sx={{ height: "100%", width: "100%" }}
                  />
                </Box>

                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: 14,
                    my: 3,
                    px: { sm: 3, md: 0 },
                  }}
                >
                  <Box
                    component="span"
                    sx={{ bgcolor: "#B2FDAA", px: 0.5, borderRadius: 1 }}
                  >
                    {item.content.split(" ")[0]}
                  </Box>{" "}
                  {item.content.split(" ").slice(1).join(" ")}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          background:
            "transparent linear-gradient(to bottom, #2F5DF5 50%, #9AAFFF 100%) 0% 0% no-repeat padding-box",
          px: { xs: 2, sm: 6, lg: 22 },
          py: 6,
          mb: 10,
          "@media (min-width: 1996px)": {
            px: 60,
          },
        }}
      >
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: 30,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Trusted by 1000+ Institutions Worldwide
        </Typography>
        <Typography
          sx={{ color: "rgba(255,255,255,0.9)", mt: 4, textAlign: "center" }}
        >
          Today, EDUMAAT supports the growth of institutions across multiple
          countries. Our clients trust us to manage their daily tasks, academic
          processes, and long-term goals. Whether you are in India or abroad, we
          are ready to be your technology partner.
        </Typography>
      </Box>

      <Box
        sx={{
          px: { xs: 2, sm: 6, lg: 14 },
          mb: 10,
          "@media (min-width: 1996px)": {
            mx: 40,
          },
        }}
      >
        <Box
          sx={{
            background:
              "transparent linear-gradient(0deg, #FFFFFF 0%, #F3F5FF 100%) 0% 0% no-repeat padding-box",
            border: "0.25px solid rgba(124, 141, 184, 0.5)",
            borderRadius: "20px",
            boxShadow: "2px 2px 14px rgba(0, 0, 0,0.2)",
          }}
        >
          <Grid container spacing={4} alignItems={"center"}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={"img"}
                src={grow_with_us_benefits_img}
                alt="Grow with us benefits"
                sx={{ height: "100%", width: "100%" }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ py: 5, px: { xs: 2, md: 0 } }}>
              <Typography sx={{ fontSize: 25, fontWeight: 700, mb: 2 }}>
                How Your Institution Benefits
              </Typography>
              <Typography sx={{ fontWeight: 600, mb: 2 }}>
                By choosing EDUMAAT, you can:
              </Typography>

              {[
                {
                  id: "Improve operational efficiency and reduce workload ",
                  label: "Improve operational efficiency and reduce workload ",
                },
                {
                  id: "Strengthen communication with students and parents  ",
                  label: "Strengthen communication with students and parents  ",
                },
                {
                  id: "Improve academic planning and student outcomes  ",
                  label: "Improve academic planning and student outcomes  ",
                },
                {
                  id: "Go paperless and reduce operational costs",
                  label: "Go paperless and reduce operational costs",
                },
                {
                  id: "Get instant access to important reports and data  ",
                  label: "Get instant access to important reports and data  ",
                },
                {
                  id: "Be ready for future technology trends in education",
                  label: "Be ready for future technology trends in education",
                },
              ].map((benefits, index) => (
                <Box
                  key={benefits.id}
                  sx={{ display: "flex", alignItems: "center", pb: 1 }}
                >
                  <Box>
                    <Box
                      component={"img"}
                      src={check_mark_green_icon}
                      alt={`check mark green_${index}`}
                      sx={{ height: 20, width: 20 }}
                    />
                  </Box>
                  <Typography sx={{ fontSize: 14, ml: 1 }}>
                    {benefits.label}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#000000",
          px: { xs: 2, sm: 6, lg: 14 },
          py: 6,
          "@media (min-width: 1996px)": {
            px: 60,
          },
        }}
      >
        <Typography sx={{ color: "#ffffff", fontSize: 30, fontWeight: 700 }}>
          Ready to Grow With EDUMAAT
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.9)", mt: 2 }}>
          Let us help your institution move to the next level with simple,
          smart, and powerful ERP solutions. Join the growing number of schools
          and colleges who are transforming education with EDUMAAT. Contact us
          today to schedule a free demo and explore how EDUMAAT can support your
          success.
        </Typography>
      </Box>
    </Box>
  );
};

export default GrowWithUs;
