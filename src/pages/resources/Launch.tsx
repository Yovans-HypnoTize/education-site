import { Box, Grid, Link, Modal, Stack, Typography } from "@mui/material";
import LazyImage from "../../components/LazyImage";
import ReuButton from "../../components/ReuButton";
import LazyBoxImage from "../../components/LazyBoxImage";
import launchEdumaatImage from "../../assets/launchEdumaatImage.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LaunchEdumaatForm from "./LaunchEdumaatForm";
import edumaat_logo from "../../assets/logo/edumaatLogo.png";

import benefitsLogo1 from "../../assets/launchImages/Early_Access.png";
import benefitsLogo2 from "../../assets/launchImages/Founders_Advantage.png";
import benefitsLogo3 from "../../assets/launchImages/Priority_Support.png";
import benefitsLogo4 from "../../assets/launchImages/Special_Pricing.png";
import benefitsLogo5 from "../../assets/launchImages/Exclusive_Training.png";
import benefitsLogo6 from "../../assets/launchImages/Recognition.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

type CardProps = {
  id: string | number;
  label: string;
  subLabel: string;
  icon: React.ReactNode;
};

type BenefitsCardProps = {
  id: string | number;
  img: string;
  title: string;
  description: string;
};

const cardItems: CardProps[] = [
  {
    id: "where",
    label: "Where",
    subLabel: "Yashobhoomi (IICC), New Delhi",
    icon: <LocationOnIcon sx={{ width: 40, height: 40, color: "#ffd54f" }} />,
  },
  {
    id: "when",
    label: "When",
    subLabel: "9AM, November 18-20, 2025",
    icon: (
      <CalendarTodayIcon sx={{ width: 40, height: 40, color: "#ffd54f" }} />
    ),
  },
  {
    id: "booth",
    label: "Booth",
    subLabel: "M14, M15, M16, M17",
    icon: (
      <CalendarTodayIcon sx={{ width: 40, height: 40, color: "#ffd54f" }} />
    ),
  },
];

const benefitsCardItems: BenefitsCardProps[] = [
  {
    id: "early-access",
    title: "Early Access",
    description:
      "Get exclusive early access to the platform before the public launch.",
    img: benefitsLogo1,
  },
  {
    id: "founders-advantage",
    title: "Founders’ Advantage",
    description:
      "Enjoy premium features and updates at no additional cost for a limited time.",
    img: benefitsLogo2,
  },
  {
    id: "priority-support",
    title: "Priority Support",
    description:
      "Receive priority onboarding and dedicated support during setup and launch.",
    img: benefitsLogo3,
  },
  {
    id: "special-pricing",
    title: "Special Pricing",
    description:
      "Lock in discounted pricing available only during the pre-booking phase.",
    img: benefitsLogo4,
  },
  {
    id: "exclusive-training",
    title: "Exclusive Training",
    description:
      "Access free webinars and training sessions with our product experts.",
    img: benefitsLogo5,
  },
  {
    id: "recognition",
    title: "Recognition",
    description:
      "Be featured as one of our early adopters and pioneers in transforming education management.",
    img: benefitsLogo6,
  },
];

const footerIcons = [
  {
    id: "linkedIn",
    icon: <LinkedInIcon className="launchFooterIcons" />,
    href: "https://www.linkedin.com/company/edumaat-imagine-greatness/",
  },
  {
    id: "facebook",
    icon: <FacebookRoundedIcon className="launchFooterIcons" />,
    href: "https://www.facebook.com/edumaat.jdsoft",
  },
  {
    id: "instagram",
    icon: <InstagramIcon className="launchFooterIcons" />,
    href: "https://www.instagram.com/edumaat_jdsoft/?igsh=MTExYjRzbndrbnRneg%3D%3D#",
  },
  {
    id: "twitter",
    icon: <XIcon className="launchFooterIcons" />,
    href: "https://x.com/Edumaat_jdsoft",
  },
];

const Card = ({ label, subLabel, id, icon }: CardProps) => {
  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.125)",
        borderRadius: "15px",
        padding: "25px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        transition: "background 0.3s ease",
        height: { xs: 200, md: 220 },
        "&:hover": {
          background: "rgba(255, 255, 255, 0.2)",
        },
      }}
      aria-label="Event date and time"
      key={id}
    >
      <Box>{icon}</Box>
      <Typography
        sx={{ fontSize: { xs: "1.2em", md: "1.4em" }, color: "#ffffff" }}
      >
        <strong>{label}</strong>
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "1em", md: "1.2em" }, color: "#ffffff" }}
      >
        {subLabel}
      </Typography>
    </Box>
  );
};

const BenefitsCard = (item: BenefitsCardProps) => {
  return (
    <Box
      sx={{
        bgcolor: "#f8fafc",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        height: { xs: 230, md: 270 },
        gap: "10px",
      }}
      key={item.id}
    >
      <LazyBoxImage
        src={item.img}
        alt={`${item.img} ${item.id}`}
        sx={{ height: { xs: 60, md: 70 }, width: { xs: 60, md: 70 } }}
      />
      <Typography sx={{ textAlign: "center", fontWeight: 600, fontSize: 18 }}>
        {item.title}
      </Typography>
      <Typography
        sx={{ textAlign: "center", px: { xs: 1, md: 5 }, fontSize: 14 }}
      >
        {item.description}
      </Typography>
    </Box>
  );
};

const Launch = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownloadFile = () => {
    const fileUrl = "/Edumaat_launch_invitation.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <Box>
      <title>Latest Updates – Edumaat ERP News & Announcements</title>
      <meta
        name="description"
        content="Stay informed with the latest news, product updates, and feature releases from Edumaat. See what's new in the world of education ERP solutions."
      />
      <meta
        name="keywords"
        content="Edumaat updates, new features, ERP announcements, education technology news, Edumaat latest news"
      />
      <meta name="author" content="Edumaat" />

      <Box
        sx={{
          borderRadius: 100,
          py: 2,
          px: 3,
          bgcolor: "#f8fafc",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          mx: { xs: 2, md: 5 },
        }}
        id="home"
      >
        <Box>
          <a href="/">
            <LazyImage
              src={edumaat_logo}
              alt="Edumaat Logo Latest Upadate"
              style={{ height: 80, width: 80, borderRadius: 2 }}
            />
          </a>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Stack direction="row" spacing={2.5} component="nav">
            <Link
              href="#home"
              underline="none"
              sx={{ fontWeight: 500, color: "#0D3C74", fontSize: 16 }}
            >
              Home
            </Link>
            <Link
              href="#event-detail"
              underline="none"
              sx={{ fontWeight: 500, color: "#0D3C74", fontSize: 16 }}
            >
              When & Where
            </Link>
            <Link
              href="#pre-book-benefits"
              underline="none"
              sx={{ fontWeight: 500, color: "#0D3C74", fontSize: 16 }}
            >
              Pre-Booking Benefits
            </Link>
            <Link
              href="#pre-book-now"
              underline="none"
              sx={{ fontWeight: 500, color: "#0D3C74", fontSize: 16 }}
            >
              Register Now
            </Link>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <ReuButton
            sx={{
              height: 50,
              width: 170,
              bgcolor: "#1f7cec",
              color: "#ffffff",
              borderRadius: "100px",
              padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
              fontWeight: 500,
            }}
          >
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: 500, color: "#ffffff", fontSize: 14 }}
            >
              +91 93602 93602
            </Typography>
          </ReuButton>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }} onClick={handleOpen}>
          <DensityMediumIcon sx={{ width: 20, height: 20, color: "#000000" }} />
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            pt: 10,
            position: "relative",
          }}
        >
          <CloseIcon
            sx={{
              width: 30,
              height: 30,
              color: "#000000",
              position: "absolute",
              right: 20,
              top: 20,
            }}
            onClick={handleClose}
          />
          <Stack direction="column" spacing={1} component="nav">
            <Link
              href="#home"
              underline="none"
              sx={{
                fontWeight: 500,
                color: "#0D3C74",
                fontSize: 16,
                textAlign: "center",
              }}
              onClick={handleClose}
            >
              Home
            </Link>
            <Link
              href="#event-detail"
              underline="none"
              sx={{
                fontWeight: 500,
                color: "#0D3C74",
                fontSize: 16,
                textAlign: "center",
              }}
              onClick={handleClose}
            >
              When & Where
            </Link>
            <Link
              href="#pre-book-benefits"
              underline="none"
              sx={{
                fontWeight: 500,
                color: "#0D3C74",
                fontSize: 16,
                textAlign: "center",
              }}
              onClick={handleClose}
            >
              Pre-Booking Benefits
            </Link>
            <Link
              href="#pre-book-now"
              underline="none"
              sx={{
                fontWeight: 500,
                color: "#0D3C74",
                fontSize: 16,
                textAlign: "center",
              }}
              onClick={handleClose}
            >
              Register Now
            </Link>
          </Stack>
        </Box>
      </Modal>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 4, md: 10 },
          px: { xs: 3, md: 0 },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "55%" } }}>
          <Typography
            sx={{
              fontWeight: { xs: 600, md: 500 },
              fontSize: { xs: "32px", md: "58px" },
              letterSpacing: 1,
              color: "#0d3c74",
              textAlign: "center",
            }}
          >
            <Box component={"span"} sx={{ color: "#3993ff" }}>
              EDUMAAT
            </Box>{" "}
            NextGen Revolutionizing Education with{" "}
            <Box component={"span"} sx={{ color: "#fcb900" }}>
              AI
            </Box>
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography
              sx={{
                maxWidth: { xs: "95%", md: "580px" },
                lineHeight: 1.55,
                color: "#64748b",
                textAlign: "center",
                fontSize: { xs: 14, md: 16 },
              }}
            >
              Get ready to experience{" "}
              <Box component={"span"} sx={{ fontWeight: 600 }}>
                EDUMAAT Nextgen
              </Box>
              , a{" "}
              <Box component={"span"} sx={{ fontWeight: 600 }}>
                cutting-edge Education ERP
              </Box>{" "}
              built for the institutions of tomorrow. Packed with{" "}
              <Box component={"span"} sx={{ fontWeight: 600 }}>
                AI-powered features
              </Box>
              , deep insights, smart automation, and intuitive interfaces —
              Nextgen is the evolution your institution has been waiting for.
            </Typography>
          </Box>

          <Box sx={{ mt: { xs: 3, md: 5 }, justifySelf: "center" }}>
            <ReuButton
              sx={{
                height: { xs: 50, md: 60 },
                width: { xs: 190, md: 220 },
                bgcolor: "#1f7cec",
                color: "#ffffff",
                borderRadius: "100px",
                padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                fontWeight: 500,
              }}
              component={"a"}
              href="#pre-book-now"
            >
              <Typography
                variant="body1"
                component="span"
                sx={{
                  fontWeight: 500,
                  color: "#ffffff",
                  fontSize: { xs: 14, md: 16 },
                }}
              >
                Mark Your Presence
              </Typography>
            </ReuButton>
          </Box>
        </Box>
      </Box>

      <Box
        id="event-detail"
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 5, md: 10 },
        }}
      >
        <LazyBoxImage
          src={launchEdumaatImage}
          alt="India Dedatics Association"
          sx={{ height: 110, width: 210 }}
        />
      </Box>

      <Box
        sx={{
          mt: "50px",
          mb: "25px",
          background: "linear-gradient(135deg, #0d47a1, #1976d2)",
          py: 5,
          mx: { md: 12 },
          borderRadius: 5,
          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Box sx={{ mb: "20px" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: "#ffffff",
              textAlign: "center",
              fontSize: { xs: 28, md: 48 },
            }}
          >
            DIDAC India 2025
          </Typography>
          <Box
            sx={{
              mt: 1,
              fontSize: { xs: 14, md: "1.3em" },
              color: "#ffffff",
              opacity: 0.8,
              textAlign: "center",
            }}
          >
            Join us at the Launch
          </Box>
        </Box>
        <Box sx={{ px: 4 }}>
          <Grid container spacing={3}>
            {cardItems.map(({ icon, label, subLabel, id }) => (
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{ height: "100%" }}
                key={`cardItems_${label}_${id}`}
              >
                <Card icon={icon} id={id} label={label} subLabel={subLabel} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ height: 2, width: 100, bgcolor: "#000000" }} />
      </Box>

      <Box
        id="pre-book-benefits"
        sx={{ display: "flex", justifyContent: "center", mt: 5 }}
      >
        <Box sx={{ textAlign: "center", width: { xs: "90%", md: "65%" } }}>
          <Typography
            sx={{
              color: "#1f7cec",
              fontWeight: 600,
              fontSize: { xs: 16, md: 18 },
            }}
          >
            Pre-Booking Benefits for NexGen EDUMAAT
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: "30px", md: "45px" },
              letterSpacing: 0.2,
              color: "#0d3c74",
              textAlign: "center",
              mt: 1,
            }}
          >
            What You Can Expect
          </Typography>
          <Typography
            sx={{
              color: "#64748b",
              mt: 2,
              fontSize: { xs: 14, md: 16 },
              px: { xs: 2, md: 0 },
            }}
          >
            Be among the first to experience the future of education management.
            Pre-booking NexGen EDUMAAT not only secures your access to our
            revolutionary AI-powered ERP platform but also unlocks exclusive
            early-bird advantages designed to empower your institution from day
            one.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: 5, my: 5 }}>
        <Grid container columnSpacing={3} rowSpacing={{ xs: 5, md: 10 }}>
          {benefitsCardItems.map(({ id, description, img, title }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`benefits-${id}`}>
              <BenefitsCard
                description={description}
                id={id}
                img={img}
                title={title}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box id="pre-book-now">
        <LaunchEdumaatForm />
      </Box>

      <Box className="launch_fill_image">
        <Box
          sx={{
            bgcolor: "#ffffff",
            height: { xs: 500, sm: 380, md: 480, lg: 430 },
            width: { md: "53%" },
            my: "auto",
            mx: { xs: 3, md: "auto" },
            borderRadius: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            pt: { xs: 3, md: 7 },
          }}
        >
          <Typography sx={{ color: "#1f7cec", fontSize: 18, fontWeight: 600 }}>
            Limited slots available!
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "clamp(32px, 2rem + ((1vw - 3.2px) * 1.818), 45px)",
              lineHeight: 1.3,
              color: "#0d3c74",
              textAlign: "center",
              width: { xs: "80%", md: "70%" },
            }}
          >
            Register Now for an Exclusive Preview
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              width: "85%",
              fontSize: { xs: 14, md: 16 },
            }}
            className="launchTextGray"
          >
            Don’t miss your chance to get <strong>early access</strong>,{" "}
            <strong>exclusive launch offers</strong>, and a{" "}
            <strong>1-on-1 walkthrough</strong> with our product experts during
            DIDAC.
            <br />
          </Typography>
          <Box sx={{ mx: { xs: 1, md: 0 } }}>
            <ReuButton
              sx={{
                width: { xs: 120, sm: 180 },
                height: 60,
                border: 1,
                borderRadius: "100px",
                padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                fontWeight: 500,
                borderColor: "rgba(0,0,0, 0.1)",
                bgcolor: "transparent",
                py: "0.667em",
                px: "1.33em",
              }}
              onClick={handleDownloadFile}
            >
              <Typography
                variant="body1"
                component="span"
                sx={{
                  fontWeight: 500,
                  color: "#0d3c74",
                  fontSize: { xs: 12, md: 16 },
                  overflow: "hidden",
                }}
              >
                Download Invite
              </Typography>
            </ReuButton>

            <ReuButton
              sx={{
                height: 60,
                width: { xs: 120, sm: 180 },
                bgcolor: "#1f7cec",
                color: "#ffffff",
                borderRadius: "100px",
                padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                fontWeight: 500,
                ml: 2,
              }}
              component={"a"}
              href="#pre-book-now"
            >
              <Typography
                variant="body1"
                component="span"
                sx={{
                  fontWeight: 500,
                  color: "#ffffff",
                  fontSize: { xs: 12, md: 16 },
                  textAlign: "center",
                }}
              >
                Pre Book Now
              </Typography>
            </ReuButton>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#0A284B",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            pr: { md: 15 },
            pt: 5,
          }}
        >
          <Box>
            <Grid container spacing={2}>
              {footerIcons.map((item) => (
                <Grid size={3} key={item.id}>
                  <a href={item.href} target="_blank">
                    {item.icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box sx={{ py: 5 }}>
          <Box
            sx={{
              bgcolor: "#0d3c74",
              p: 2.3,
              mx: { xs: 2, md: 5 },
              borderRadius: 2,
              fontSize: { xs: 14, md: 16 },
            }}
          >
            <Typography
              sx={{ color: "#ffffff", fontSize: 16, textAlign: "center" }}
            >
              Copyrights © 2025 EDUMAAT. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Launch;
