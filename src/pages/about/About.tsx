import { Box, Grid, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import mainImage from "../../assets/aboutusMainImg.png";
import path_image from "../../assets/Path 48.png";
import timetableIcon from "../../assets/calendaricon.png";
import settingsIcon from "../../assets/equalizericon.png";
import excelIcon from "../../assets/xlsicon.png";
import reportIcon from "../../assets/reporticon.png";
import ReuButton from "../../components/ReuButton";
import GlobeMap from "../../components/GlobeMap";
import whyEdumaatImg from "../../assets/whyEdumaatImg.png";
import freeAdsValueImg from "../../assets/freeAdsValueImg.png";
import serviceImg_1 from "../../assets/serviceImg_1.png";
import serviceImg_2 from "../../assets/serviceImg_2.png";
import serviceImg_3 from "../../assets/serviceImg_3.png";
import serviceImg_4 from "../../assets/serviceImg_4.png";
import ReuGradientButton from "../../components/common-reusable-components/ReuGradientButton";
import { useNavigate } from "react-router-dom";
import StatesCount from "../../components/StatesCount";

const features = [
  {
    icon: timetableIcon,
    title: "Automated Timetables",
    description: "Effortlessly create and manage class schedules.​",
  },
  {
    icon: settingsIcon,
    title: "User-Friendly Interface",
    description: "Navigate with ease, ensuring accessibility for all users.​",
  },
  {
    icon: excelIcon,
    title: "Customizable Dashboards",
    description: "Personalize your dashboard to display relevant information.​",
  },
  {
    icon: reportIcon,
    title: "Multi-Institution Support",
    description:
      "Manage multiple campuses or institutions from a single platform.",
  },
  {
    icon: timetableIcon,
    title: "Excel Data Upload",
    description: "Quickly import data to streamline processes.​ ",
  },
  {
    icon: settingsIcon,
    title: "Google Sign-In Integration",
    description: "Simplify login processes with Google authentication.",
  },
  {
    icon: excelIcon,
    title: "Free Login for Staff",
    description:
      "Enables staff to access the system without incurring additional user licensing costs.",
  },
  {
    icon: reportIcon,
    title: "Third Party Integration",
    description:
      "Seamlessly connects with external tools and platforms like payment gateways, biometrics, and more.",
  },
  {
    icon: timetableIcon,
    title: "Completely Customisable",
    description:
      "Allows full flexibility to adapt modules and workflows to your institution’s unique needs.",
  },
  {
    icon: settingsIcon,
    title: "Tailormade Reports",
    description:
      "Generate dynamic, institution-specific reports for faster insights and decision-making.",
  },
  {
    icon: excelIcon,
    title: "In Built Accounts",
    description:
      "Features integrated accounting to manage fees, expenses, and financial records within the platform. ",
  },
  {
    icon: reportIcon,
    title: "Use in Any Device",
    description:
      "Access the platform securely from desktops, tablets, or smartphones anytime, anywhere. ",
  },
];

const serviceCardItems = [
  {
    id: 1,
    img: serviceImg_1,
    content: {
      heading: "Data Encryption",
      textContent: "End-to-end protection for student and institutional data.",
    },
  },
  {
    id: 2,
    img: serviceImg_2,
    content: {
      heading: "GDPR Compliance",
      textContent: "Designed to meet global data privacy standards. ",
    },
  },
  {
    id: 3,
    img: serviceImg_3,
    content: {
      heading: "ISO Certifications",
      textContent: "Quality and information security processes you can trust.",
    },
  },
  {
    id: 4,
    img: serviceImg_4,
    content: {
      heading: "Cloud Hosting Standards",
      textContent:
        "Deployed on secure, scalable infrastructure like AWS and Azure.",
    },
  },
];

const countries = [
  { name: "India", code: "IN", lat: 20.5937, lng: 78.9629, clientCount: "38" },
  {
    name: "South Africa",
    code: "ZA",
    lat: -30.5595,
    lng: 22.9375,
    clientCount: "8",
  },
  { name: "Germany", code: "DE", lat: 51.1657, lng: 10.4515, clientCount: "1" },
  {
    name: "Canada",
    code: "CA",
    lat: 56.1304,
    lng: -106.3468,
    clientCount: "1",
  },
  { name: "Italy", code: "IT", lat: 41.8719, lng: 12.5674, clientCount: "1" },
];

const complementaryServicesItems = [
  {
    id: 1,
    title: "Server Maintenance",
    content: "Our experts handle server upkeep, ensuring optimal performance.",
  },
  {
    id: 2,
    title: "Training",
    content: "Receive personalized training sessions for staff.",
  },
  {
    id: 3,
    title: "Implementation",
    content: "Benefit from free implementation on robust AWS servers.",
  },
  {
    id: 4,
    title: "24/7 Support",
    content:
      " Access round-the-clock assistance via email, ticket portal, WhatsApp, Skype, or phone.",
  },
  {
    id: 5,
    title: "Payment Gateway Provision",
    content: "Obtain POS machines and payment gateways at no additional cost.",
  },
];

const About = () => {
  const navigate = useNavigate();
  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };
  return (
    <div>
      <title>About Edumaat | Empowering Education Management</title>
      <meta
        name="description"
        content="Discover Edumaat’s mission to transform education management. Learn about our features, integrations, and global impact on educational institutions."
      />
      <meta
        name="keywords"
        content="Edumaat, About Edumaat, education ERP, school management software, digital education, education automation"
      />
      <meta name="author" content="Edumaat Team" />
      <link rel="canonical" href="https://yourdomain.com/about" />

      <Box className="" sx={{ px: { xs: 4, lg: 12 }, mt: 6 }}>
        <div className="about-container">
          {/* Left Text Section */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 25, sm: "50px" },
                fontWeight: "bolder",
                mt: { xs: 2, xl: 12 },
              }}
            >
              Edumaat for your Management
            </Typography>
            <Box sx={{ fontSize: "16px" }}>
              <Box sx={{ fontWeight: "bold", mb: 0.6 }}>
                Trusted. Proven. Purpose-built for education.
              </Box>
              Discover why thousands of institutions choose Edumaat to
              streamline operations, enhance learning outcomes, and drive
              digital transformation in education.
            </Box>
            <Box mt={3} display="flex" gap={2}>
              <ReuGradientButton
                key={"sign up"}
                variant="contained"
                sx={{ px: { sm: 14, xs: 2 }, py: { sm: 1.5, xs: 0.3 } }}
                type="button"
                onClick={handleBookFreeDemo}
              >
                Book Now
              </ReuGradientButton>
            </Box>
          </Box>

          {/* Right Image Section */}
          <Box>
            <Box
              component="img"
              src={mainImage}
              alt="Team"
              sx={{ height: "100%", width: "100%" }}
            />
          </Box>
        </div>
        <Typography
          sx={{ fontWeight: "bold", fontSize: 35, textAlign: "center" }}
        >
          Empowering Educational Excellence with Edumaat
        </Typography>
        <Typography
          sx={{
            px: { xs: 3, md: 6 },
            textAlign: "center",
            mt: 1,
            mb: { xs: 10, md: 15, lg: 0 },
          }}
        >
          At Edumaat, we provide a comprehensive suite of tools designed to
          streamline educational administration and enhance learning
          experiences. Our solutions are tailored to meet the unique needs of
          institutions, ensuring efficiency, customization, and seamless
          integration.
        </Typography>
      </Box>

      <Box sx={{ position: "relative", height: { xs: 200, sm: 450, lg: 500 } }}>
        <Box
          component={"img"}
          src={path_image}
          alt="education excellence "
          // className="full-width-wire"
          sx={{ marginBottom: 30, height: "100%", width: "100%" }}
        />
        <Box
          sx={{
            position: "absolute",
            borderRadius: "10px",
            overflow: "hidden",
            top: { xs: "-10%", sm: 0, lg: "10%" },
            left: "20%",
            width: "60%",
            height: { xs: 300, sm: 500 },
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=0SylZKBg_FM"
            controls
            width="100%"
            height="100%"
          />
        </Box>
      </Box>

      <Box sx={{ mt: 15 }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: 28, mb: 5 }}
          style={{ textAlign: "center" }}
        >
          Key Features
        </Typography>

        <div className="features-section">
          <div className="features-grid">
            {features.map((item, index) => (
              <div className="feature-card" key={index}>
                <div className="card-inner">
                  <div className="card-front">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={`feature-icon_${index}`}
                    />
                    <p className="feature-title">{item.title}</p>
                  </div>
                  <div className="card-back">
                    <p className="feature-title">{item.title}</p>
                    <p className="feature-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Box>

      <Box sx={{ px: { xs: 4, lg: 14 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: "20px",
            overflow: "hidden",
            bgcolor: "#fff",
            mt: 4,
          }}
        >
          {/* Left Image Block */}
          <Box
            sx={{
              flex: 1,
              textAlign: "left",
              margin: "3%",
            }}
          >
            <h2>Seamless Integrations</h2>

            {[
              {
                label: "Payment Gateway",
                text: "Facilitate secure and efficient fee transactions.",
              },
              {
                label: "Tally Integration",
                text: "Synchronize financial data seamlessly.",
              },
              {
                label: "Biometric Systems",
                text: "Enhance security and attendance tracking.",
              },
              {
                label: "SMS/Email Gateway",
                text: "Ensure effective communication with students and parents.",
              },
              {
                label: "Learning Management System (LMS) Integration",
                text: "Integrate with existing LMS platforms for a cohesive learning experience.",
              },
              {
                label: "RFID Integration",
                text: "Streamline library and asset management.",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontSize: "16px",
                  maxWidth: "100%",
                  width: "500px",
                  lineHeight: "30px",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{item.label}:</span>{" "}
                {item.text}
              </Box>
            ))}

            <Box sx={{ textAlign: "left" }}>
              <ReuButton
                variant="outlined"
                sx={{
                  padding: "8px",
                  minWidth: { xs: "100%", sm: "50%", md: "35%" },
                  mt: { xs: 2, lg: 5 },
                }}
              >
                Start Free Trial
              </ReuButton>
            </Box>
          </Box>

          {/* Right Text Block */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              p: 2,
            }}
          >
            <Box
              component="img"
              src={whyEdumaatImg}
              alt="Team Discussion"
              sx={{
                width: "100%",
                height: { xs: 200, sm: "380px" },
                borderRadius: "16px",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 7,
          textAlign: "center",
          background: "linear-gradient(to top, #F6F7F9F5, #F6F7F900)",
          pb: 8,
        }}
      >
        <StatesCount />
      </Box>

      <Box sx={{ px: 5, mt: 10, pb: 3 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 8, lg: 9 }}>
            <GlobeMap countries={countries} />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <Box
              sx={{
                boxShadow: " 0 4px 12px rgba(0, 0, 0, 0.3)",
                p: 4,
                borderRadius: 5,
              }}
            >
              <h3 className="globe-title">
                Clients Across <br />
                <span className="globe-highlight">GLOBE</span>
              </h3>

              <ul className="globe-country-list">
                {countries.map((c) => (
                  <li key={c.name} className="globe-country-item">
                    <img
                      src={`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`}
                      alt={c.name}
                      className="globe-flag"
                    />
                    <span className="globe-country-name">{c.name}</span> -{" "}
                    <span className="globe-client-count">{c.clientCount}</span>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          bgcolor: "#f6f7f9",
          px: { xs: 4, sm: 12, md: 8, lg: 18 },
          py: { xs: 8, sm: 12, md: 8, lg: 12 },
        }}
      >
        <Grid container spacing={{ md: 6, lg: 6 }} sx={{}}>
          <Grid size={{ md: 6 }}>
            <Box
              component="img"
              src={freeAdsValueImg}
              alt="Team Discussion"
              sx={{ height: "100%", width: "100%" }}
            />
          </Grid>
          <Grid size={6}>
            <Typography sx={{ fontWeight: 500, fontSize: 24, mt: 2 }}>
              Complimentary Services{" "}
            </Typography>
            {complementaryServicesItems.map((service, idx) => {
              return (
                <Typography
                  sx={{
                    fontSize: "16px",
                    mt: 1.3,
                  }}
                  key={`${service.title}_${idx}`}
                >
                  <span style={{ fontWeight: "bold" }}>{service.title}:</span>{" "}
                  {service.content}
                </Typography>
              );
            })}
            <Box sx={{ mt: 3 }}>
              <ReuButton
                variant="outlined"
                className="free-value-button"
                onClick={() => {
                  navigate("/enquiry");
                }}
              >
                Start Free Trial
              </ReuButton>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box sx={{ pl: { lg: 20, xs: 4 }, pr: { lg: 20, xs: 4 }, my: 8 }}>
          <Box sx={{ textAlign: "center" }}>
            <h1 style={{ marginTop: "5%" }}>Security & Compliance</h1>
            <Typography>
              Your data, protected by enterprise-grade standards. Security and
              compliance are at the core of everything we do.
            </Typography>
          </Box>
          <Grid container mt={8} spacing={8}>
            {serviceCardItems.map((item, idx) => (
              <Grid
                size={{ xs: 12, sm: 6 }}
                sx={{
                  bgcolor: "#F9FAFF",
                  borderRadius: 3,
                  boxShadow: "0px 4px 12px #00000029",
                }}
              >
                <Grid container sx={{ p: 3 }}>
                  <Grid size={10} pr={1}>
                    <Typography fontSize={18} fontWeight={"bold"}>
                      {item.content.heading}
                    </Typography>
                    <Typography mt={1}>{item.content.textContent}</Typography>
                  </Grid>
                  <Grid
                    size={2}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box>
                      <img
                        src={item.img}
                        alt={`${item.img}_${idx}`}
                        height={50}
                        width={50}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box className="about-section-container" sx={{ px: { xs: 3, lg: 0 } }}>
        <div className="about-card-last about-last-card-left">
          <div className="about-card-content">
            <h2 className="about-card-title" style={{ color: "white" }}>
              We Expo - Chennai
            </h2>
          </div>
        </div>

        <div className="about-card-last about-last-card-right">
          <div className="about-card-content">
            <h2 className="about-card-title" style={{ color: "white" }}>
              Eldrok Bangalore
            </h2>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default About;
