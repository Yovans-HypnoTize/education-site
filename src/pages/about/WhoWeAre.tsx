import { Box, Grid, Typography } from "@mui/material";
import missionWomenImage from "../../assets/missionwomanimg.png";
import visionBgImage from "../../assets/visionbgimg.png";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";
import { useNavigate } from "react-router-dom";
import who_we_are_banner from "../../assets/about/who_we_are_banner.png";
import who_we_are_card_img from "../../assets/about/who_we_are_card_img.png";
import CircleIcon from "@mui/icons-material/Circle";

import who_we_are_icon1 from "../../assets/about/who_we_are_icon1.png";
import who_we_are_icon2 from "../../assets/about/who_we_are_icon2.png";
import who_we_are_icon3 from "../../assets/about/who_we_are_icon3.png";

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
    id: "mission-vision",
    title: "Mission & Vision",
    content:
      "Empower institutions with smart, scalable, and intuitive digital solutions.",
    variant: "women-card",
    bgImg: missionWomenImage,
  },
  {
    id: "leadership-team",
    title: "Leadership Team",
    content: "Meet the experienced minds driving innovation in education ERP.",
    variant: "globe-card",
    bgImg: visionBgImage,
  },
  {
    id: "our-journey",
    title: "Our Journey",
    content:
      "From a simple idea to a global education platform — explore our growth story.",
    variant: "women-card",
    bgImg: missionWomenImage,
  },
];

const Card = ({ children }) => (
  <Box
    sx={{
      border: 1,
      borderColor: "rgba(124, 141, 184, 0.3)",
      background:
        "transparent linear-gradient(181deg, #FFFFFF 0%, #F3F5FF 100%) 0% 0% no-repeat padding-box",
      borderRadius: "1rem",
      boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",
    }}
  >
    {children}
  </Box>
);

const WhoWeAre = () => {
  const navigate = useNavigate();
  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };
  return (
    <Box>
      <title>Who We Are | Edumaat</title>
      <meta
        name="description"
        content="Discover Edumaat's mission, vision, leadership, and journey. Learn how we’re transforming education management through innovation."
      />
      <meta
        name="keywords"
        content="Edumaat mission, Edumaat vision, leadership team, education ERP company, about Edumaat"
      />
      <meta name="author" content="Edumaat Team" />
      <link rel="canonical" href="https://edumaat.com/who-we-are" />

      <Box sx={{ px: { xs: 2, md: 4, lg: 22 }, mb: 10 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 25, sm: 34, md: 45 },
              mb: 3,
              mt: 5,
            }}
          >
            <Box component={"span"} sx={{ color: "#2F5DF5" }}>
              Driven by Innovation,
            </Box>{" "}
            <br /> Empowering your Digital Journey
          </Typography>

          <Typography sx={{ fontSize: { xs: 16, sm: 18 } }}>
            NextGen EDUMAAT , powered by AI, simplifies the way institutions
            manage <br /> learning, operations, and success.
          </Typography>
          <Box sx={{ mt: { xs: 3 } }}>
            <ReuOutlineBorderedButton
              variant="outlined"
              sx={{
                width: 270,
                height: 60,
                transition: "transform 0.4s ease,  0.4s ease, 0.4s ease",
                willChange: "transform",
                color: "#ffffff",
                // bgcolor: "#1976d2",
                borderColor: "#1976d2",
                background:
                  "transparent linear-gradient(180deg, #5580FF 70%, #9AAFFF 100%) 0% 0% no-repeat padding-box",
              }}
              onClick={handleBookFreeDemo}
            >
              Book Now
            </ReuOutlineBorderedButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 5, pb: 15, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: { xs: "100%", sm: 450 },
            background: "linear-gradient(to top, #E8EDFF, rgba(232,237,255,0))",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        <Box
          component={"img"}
          src={who_we_are_banner}
          alt="Who We Are banner"
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Grid
        container
        sx={{
          mt: { sm: 5 },
          px: { xs: 4, md: 18 },
          "@media (min-width: 1996px)": {
            mx: 60,
          },
        }}
        spacing={14}
      >
        <Grid size={{ xs: 12, md: 6 }} sx={{ pt: 6 }}>
          <Typography sx={{ fontSize: 25, fontWeight: 700, mb: 5 }}>
            Who We Are
          </Typography>
          <Typography sx={{ mb: 3 }}>
            <b>EDUMAAT</b> is an education technology company started in{" "}
            <b>2016</b> by <b>Joel Pandian</b>. Our main goal is simple – to
            help schools and colleges manage everything in a smart and easy way
            using technology.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            We believe that education becomes better when institutions are
            well-organized. That’s why we created EDUMAAT – a complete ERP
            software designed especially for schools, colleges, and
            universities. It helps manage daily tasks like admissions,
            attendance, timetable, fees, exams, communication, library, hostel,
            and more – all in one place.
          </Typography>
          <Typography>
            Over the years, EDUMAAT has helped many institutions save time,
            reduce manual work, and improve student success. We are proud to
            support educators and help them focus more on teaching and learning,
            while our software takes care of the rest.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component={"img"}
            src={who_we_are_card_img}
            alt="Who we are card"
            sx={{ height: { sm: 400, lg: 500 }, width: "100%" }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          my: 5,
          px: { xs: 4, md: 14 },
          mt: 8,
          "@media (min-width: 1996px)": {
            mx: 60,
          },
        }}
      >
        <Card>
          <Grid container spacing={4} alignItems={"center"} sx={{ p: 4 }}>
            <Grid size={2} sx={{ height: 80, width: 100 }}>
              <Box
                sx={{
                  bgcolor: "rgba(154, 175, 255, 0.2)",
                  height: "100%",
                  width: "100%",
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component={"img"}
                  src={who_we_are_icon1}
                  alt="Vision Icon"
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 9 }}>
              <Typography sx={{ fontSize: 23, fontWeight: 700 }}>
                Our Vision
              </Typography>
              <Typography sx={{ mt: 1 }}>
                To become the most trusted education ERP company that helps
                schools and colleges grow with the power of smart technology.
              </Typography>
            </Grid>
          </Grid>
        </Card>

        <Grid container spacing={8} sx={{ mt: 5 }}>
          {[
            {
              id: "Our Mission",
              icon: who_we_are_icon2,
              title: "Our Mission",
              subTitle:
                "Our mission is to make education management simple & smart.",
              pointsTitle: "We do this by:",

              points: [
                {
                  id: "Giving schools and colleges the tools they need to run smoothly.",
                  label:
                    "Giving schools and colleges the tools they need to run smoothly.",
                },
                {
                  id: "Making sure our software is easy to use and fits the real needs of educators.",
                  label:
                    "Making sure our software is easy to use and fits the real needs of educators.",
                },
                {
                  id: "Updating our system with the latest features and technology.",
                  label:
                    "Updating our system with the latest features and technology.",
                },
                {
                  id: "Offering full support and training to help our users every step of the way.",
                  label:
                    "Offering full support and training to help our users every step of the way.",
                },
              ],
            },
            {
              id: "What Makes Us Special",
              icon: who_we_are_icon3,
              title: "What Makes Us Special",
              subTitle: "At EDUMAAT, we follow strong values",
              pointsTitle: "",
              points: [
                {
                  id: "Honesty – We always stay true and transparent with our clients.",
                  label:
                    "<b>Honesty</b> – We always stay true and transparent with our clients.",
                },
                {
                  id: "Quality – We deliver software that is reliable and really works. ",
                  label:
                    "<b>Quality</b> – We deliver software that is reliable and really works. ",
                },
                {
                  id: "Innovation – We use the latest technologies like AI and cloud computing to improve education. ",
                  label:
                    "<b>Innovation</b> – We use the latest technologies like AI and cloud computing to improve education. ",
                },
                {
                  id: "Support – We care about our customers and always stand by them with help and training.",
                  label:
                    "<b>Support</b> – We care about our customers and always stand by them with help and training.",
                },
              ],
            },
          ].map((item) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.id}>
              <Card>
                <Box
                  sx={{
                    p: 4,
                    height: { md: 550, lg: 420 },
                    "@media (min-width: 1336px)": {
                      height: 350,
                    },
                  }}
                >
                  <Grid
                    container
                    spacing={{ xs: 2, sm: 4 }}
                    alignItems={"center"}
                  >
                    <Grid
                      size={{ xs: 6, sm: 3, md: 5, lg: 3 }}
                      sx={{ height: 80 }}
                    >
                      <Box
                        sx={{
                          bgcolor: "rgba(154, 175, 255, 0.2)",
                          height: "100%",
                          width: { xs: 100, sm: "100%" },
                          borderRadius: 2,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component={"img"}
                          src={item.icon}
                          alt={`${item.title}_Icon`}
                          sx={{ height: 50, width: 50 }}
                        />
                      </Box>
                    </Grid>
                    <Grid size={{ sm: 9, md: 12, lg: 9 }}>
                      <Typography sx={{ fontSize: 23, fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ mt: 1, fontWeight: 600 }}>
                        {item.subTitle}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Box>
                    {item.pointsTitle && (
                      <Typography sx={{ mt: 2 }}>{item.pointsTitle}</Typography>
                    )}
                    {item.points.map((point) => (
                      <Box
                        component={"p"}
                        key={point.id}
                        sx={{ display: "flex", mb: 1.5 }}
                      >
                        <CircleIcon
                          sx={{
                            height: 12,
                            width: 12,
                            color: "#707070",
                            mt: 0.5,
                          }}
                        />
                        <Typography
                          sx={{ pl: 1.8 }}
                          fontSize={14}
                          component="span"
                          dangerouslySetInnerHTML={{ __html: point.label }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
