import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";

import Cloud_Based_Icon from "../../assets/education/k12Images/Cloud_Based_Icon.png";
import Governance_Grade_Compliance from "../../assets/education/k12Images/Governance_Grade_Compliance.png";
import Multi_Institution_Oversight from "../../assets/education/k12Images/Multi_Institution_Oversight.png";
import LazyBoxImage from "../../components/LazyBoxImage";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowForwardIcon from "@mui/icons-material/ChevronRight";
import { useCarouselProgress } from "./hooks/useCarouselProgress";

import university_headerImage from "../../assets/education/university/university_headerImage.png";
import tabImage1 from "../../assets/education/university/tabImage1.jpg";
import tabImage2 from "../../assets/education/university/tabImage2.jpg";
import tabImage3 from "../../assets/education/university/tabImage3.jpg";
import tabImage4 from "../../assets/education/university/tabImage4.jpg";
import LazyImage from "../../components/LazyImage";

import whyChooseIcon1 from "../../assets/education/university/universityWhyChooseIcon1.png";
import whyChooseIcon2 from "../../assets/education/university/universityWhyChooseIcon2.png";
import whyChooseIcon3 from "../../assets/education/university/universityWhyChooseIcon3.png";
import whyChooseIcon4 from "../../assets/education/university/universityWhyChooseIcon4.png";
import React from "react";

const carouselItems = [
  {
    id: 1,
    title: "Research & PhD Program Oversight ",
    content: {
      id: "slide1",
      subTitle: "You’re never alone — our support team is always here to help.",
      points: [
        {
          id: 1,
          label:
            "Administer PhD scholar lifecycle – registration, coursework, and thesis submission",
        },
        {
          id: 2,
          label:
            "Track supervisor allotments, publications, and plagiarism reports",
        },
        {
          id: 3,
          label:
            "Manage funded research projects, grants, patents, and publications",
        },
        {
          id: 4,
          label:
            "Generate reports for UGC, NAAC, RUSA, and other research bodies",
        },
      ],
    },
    image: tabImage1,
    color: "#008CFF",
  },
  {
    id: 2,
    title: "Affiliated College Management ",
    content: {
      id: "slide2",
      subTitle: "",
      points: [
        {
          id: 1,
          label:
            "Onboard and manage affiliated, constituent, and research colleges",
        },
        {
          id: 2,
          label:
            "Track college accreditation data, inspections, and academic audits",
        },
        {
          id: 3,
          label:
            "Monitor college-wise performance, exam submissions, and affiliation status",
        },
        {
          id: 4,
          label:
            "Enable two-way data sync with college ERP instances (e.g., internal marks, attendance)",
        },
      ],
    },
    image: tabImage2,
    color: "#008CFF",
  },
  {
    id: 3,
    title: "Centralized Examination & Certification ",
    content: {
      id: "slide3",
      subTitle: "",
      points: [
        {
          id: 1,
          label:
            "Automate exam registration, hall tickets, evaluation, and revaluation",
        },
        {
          id: 2,
          label:
            "Conduct semester-end, external, and supplementary exams centrally",
        },
        {
          id: 3,
          label:
            "Track answer script logistics, digital evaluations, and results processing",
        },
        {
          id: 4,
          label:
            "Generate degree certificates, transcripts, and verifiable records with QR codes",
        },
      ],
    },
    image: tabImage3,
    color: "#008CFF",
  },
  {
    id: 4,
    title: "Academic Governance & Curriculum Design",
    content: {
      id: "slide3",
      subTitle: "",
      points: [
        {
          id: 1,
          label:
            "Define and manage curricula, academic policies, and syllabi across faculties",
        },
        {
          id: 2,
          label:
            "Automate workflows for Board of Studies, Academic Council, and regulatory compliance",
        },
        {
          id: 3,
          label:
            "Configure custom academic calendars, regulations, and credit schemes",
        },
        {
          id: 4,
          label:
            "Publish and control circulars, guidelines, and academic notifications",
        },
      ],
    },
    image: tabImage4,
    color: "#008CFF",
  },
];

const whyChooseItems = [
  {
    id: "Scalable-for-University-Level-Operations",
    label: "Scalable for University-Level Operations",
    icon: whyChooseIcon1,
    color: "#FF3EA0",
  },
  {
    id: "Compliance-Cloud-Security",
    label: "Compliance & Cloud Security",
    icon: whyChooseIcon2,
    color: "#5CACE9",
  },
  {
    id: "Strategic-Insights-for-Leadership",
    label: "Strategic Insights for Leadership",
    icon: whyChooseIcon3,
    color: "#FBB249",
  },
  {
    id: "Ready-for-Blended-Education",
    label: "Ready for Blended Education",
    icon: whyChooseIcon4,
    color: "#A080CC",
  },
];

const autoplayInterval = 5000;

const University = () => {
  const navigate = useNavigate();

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };
  const { activeIndex, progress, prevSlide, nextSlide } = useCarouselProgress(
    carouselItems,
    autoplayInterval
  );

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

      {/* <Box
        sx={{
          mt: { xs: 3, lg: 3 },
        }}
      >
        <Box className={"university_header_bg"} sx={{ mx: 8, borderRadius: 5 }}>
          <Grid container spacing={3}>
            <Grid size={6} sx={{ pl: 7, mb: 7 }}>
              <Box sx={{ mt: 5 }}>
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
                  sx={{ my: { xs: 2, lg: 4 } }}
                >
                  From schools and colleges to coaching centres and vocational
                  institutes — Edumaat adapts to your unique academic needs with
                  smart, scalable solutions.
                </Typography>
                <Box sx={{ mt: { xs: 2 } }}>
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
              size={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            ></Grid>
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
          <Grid size={{ xs: 12, sm: 6 }} sx={{ pl: { xs: 5, lg: 10 } }}>
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
              mt: { xs: 5, sm: 0 },
            }}
          >
            <LazyBoxImage
              src={university_headerImage}
              alt="University Header Image"
              sx={{
                height: { sm: 370, lg: 400 },
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ px: { xs: 2, md: 8 }, mt: 5 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Support complex academic ecosystems and drive institutional excellence
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{ textAlign: "center", mt: 3 }}
        >
          Universities need systems that scale with their multi-faculty
          structures, research programs, and global collaborations. Edumaat
          offers a comprehensive solution that empowers academic autonomy,
          fosters student outcomes, and delivers actionable insights across the
          university ecosystem.
        </Typography>
      </Box>

      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            overflow: "hidden",
            mx: { sm: 4 },
            my: { sm: 4 },
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
              height: { md: 600, lg: 450 },
              "@media (max-width: 768px)": {
                height: 770,
              },
              "@media (max-width: 425px)": {
                height: 790,
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
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 4,
                  px: { sm: 4 },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 5,
                    width: { xs: "100%", sm: "94%" },
                    height: "80%",
                    boxShadow: "1px 1px 3px rgba(0,0,0, 0.3)",
                    overflow: "hidden",
                    px: 4,
                  }}
                  className="university_carousel_bg"
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Box
                      sx={{
                        pl: { sm: 5 },
                        pr: { sm: 5 },
                        pt: { xs: 3, md: 5 },
                        // pb:{1},
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        pb: 1,
                        cursor: "pointer",
                        fontWeight: i === activeIndex ? 600 : 500,
                        color: i === activeIndex ? slideItem.color : "#555",
                        fontSize: 16,
                        position: "relative",
                        // mx: 1,
                      }}
                      className="university_carousel_img_bg"
                    >
                      <Box
                        sx={{
                          width: { xs: 200, sm: 340 },
                          height: { xs: 170, sm: 270 },
                          borderRadius: "12px",
                          position: "relative",
                          overflow: "visible",
                          border: "3px solid #D7D7D7",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          px: 2,
                        }}
                      >
                        {/* IMAGE */}
                        <LazyBoxImage
                          src={slideItem.image}
                          alt={slideItem.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                          }}
                        />

                        {/* PROGRESS BARS */}
                        {/* Top */}
                        {i === 0 && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: "-3px",
                              left: "5%",
                              width: "90%",
                              height: "4px",
                              backgroundColor: "#D7D7D7",
                              borderRadius: "2px",
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: "100%",
                                width: i === 0 ? `${progress}%` : "0%",
                                backgroundColor: "#A080CC",
                                borderRadius: "2px",
                                transition: "width 0.1s linear",
                              },
                            }}
                          />
                        )}

                        {/* Bottom */}
                        {i === 2 && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: "-3px",
                              left: "5%",
                              width: "90%",
                              height: "4px",
                              backgroundColor: "#D7D7D7",
                              borderRadius: "2px",
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                height: "100%",
                                width: i === 2 ? `${progress}%` : "0%",
                                backgroundColor: "#A080CC",
                                borderRadius: "2px",
                                transition: "width 0.1s linear",
                              }}
                            />
                          </Box>
                        )}

                        {/* Left */}
                        {i === 3 && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: "5%",
                              left: "-3px",
                              width: "4px",
                              height: "90%",
                              backgroundColor: "#D7D7D7",
                              borderRadius: "2px",
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                height: i === 3 ? `${progress}%` : "0%",
                                backgroundColor: "#A080CC",
                                borderRadius: "2px",
                                transition: "height 0.1s linear",
                              },
                            }}
                          />
                        )}

                        {/* Right */}
                        {i === 1 && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: "10%",
                              right: "-3px",
                              width: "4px",
                              height: "80%",
                              backgroundColor: "#D7D7D7",
                              borderRadius: "2px",
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: "100%",
                                height: i === 1 ? `${progress}%` : "0%",
                                backgroundColor: "#A080CC",
                                borderRadius: "2px",
                                transition: "height 0.1s linear",
                              },
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        pl: { sm: 5, xl: 10 },
                        pt: { xs: 3, sm: 5 },
                      }}
                    >
                      <Typography fontSize={20} fontWeight={600} mb={2}>
                        {slideItem.title}
                      </Typography>
                      {slideItem.content.subTitle.length > 0 && (
                        <Typography fontSize={16} fontWeight={500} mb={2}>
                          {slideItem.content.subTitle}
                        </Typography>
                      )}
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
                                color: "#6F66EF",
                                mt: 0.9,
                              }}
                            />
                            <Typography
                              sx={{
                                pl: 1.5,
                                fontSize: { xs: 12, sm: 14 },
                                lineHeight: 1.8,
                              }}
                            >
                              {point.label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      <Box sx={{ mt: { xs: 2, md: 5 }, ml: 1 }}>
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
              bgcolor: "#FFFFFF",
              border: 2,
              borderColor: "#D7D7D7",
              boxShadow: " 0px 10px 36px #00000029",
              // bgcolor: "rgba(0,0,0,0.3)",
              borderRadius: 50,
              p: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowBackIcon
              sx={{
                color: "#2F5DF5",
                height: { xs: 15, sm: 25 },
                width: { xs: 15, sm: 25 },
              }}
            />
          </Box>

          <Box
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: "2%",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              bgcolor: "#FFFFFF",
              border: 2,
              borderColor: "#D7D7D7",
              boxShadow: " 0px 10px 36px #00000029",
              // bgcolor: "rgba(0,0,0,0.3)",
              borderRadius: 50,
              p: 1,
              display: "flex",
              alignItems: "center",
              "@media (min-width: 768px)": {
                right: "0.5%",
              },
              "@media (min-width: 1026px)": {
                right: "2.2%",
              },
              "@media (min-width: 1996px)": {
                right: "3%",
              },

              "@media (min-width: 2156px)": {
                right: "4%",
              },
            }}
          >
            <ArrowForwardIcon
              sx={{
                color: "#2F5DF5",
                height: { xs: 15, sm: 25 },
                width: { xs: 15, sm: 25 },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 2, sm: 12 }, pb: 10 }}>
        <Box>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", mb: 6, fontSize: 25, fontWeight: 600 }}
          >
            Why Universities Choose Edumaat
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, lg: 8 }}
          sx={{ pt: { xs: 2, sm: 3 }, pb: { xs: 2, sm: 6 } }}
        >
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
                      px: 2,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>

        {/* <Grid container spacing={8}>
          {whyChooseItems.map((item, idx) => {
            return (
              <Grid
                size={3}
                key={`${idx}_${item.id}`}
                sx={{ borderRadius: 3, bgcolor: "#F6F7F9" }}
              >
                <Box
                  sx={{
                    bgcolor: item.color,
                    height: 130,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: 17,
                    borderTopRightRadius: 17,
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
                    sx={{
                      textAlign: "center",
                      py: 3,
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid> */}
      </Box>
    </Box>
  );
};

export default University;
