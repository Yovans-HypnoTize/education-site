import TopNav from "./Nav/TopNav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { CardProvider } from "../context/AuthCardContext";
import { Box, Divider, IconButton } from "@mui/material";
import whatsapp_icon from "../assets/whatsapp.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import announcementImage from "../assets/announcementImage.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import LazyBoxImage from "../components/LazyBoxImage";
import BackdropLoader from "../components/BackdropLoader";
import { useAppSelector } from "../hooks";

const whatsapp_icon_style = {
  position: "fixed",
  bottom: { xs: 20, sm: 32 },
  left: { xs: 8, sm: 15, md: 25 },
  zIndex: 9999,
  borderRadius: "50%",
  padding: 0.5,
  boxShadow: { xs: "none", md: 3 },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const goto_top_icon_style = {
  position: "fixed",
  bottom: { xs: "15%", sm: "17%", md: "17%", xl: "15%" },
  backgroundColor: "#000",
  left: { xs: 13, sm: 20, md: 30 },
  zIndex: 9999,
  borderRadius: "50%",
  padding: 1,
  boxShadow: 1,
  border: "1px solid #000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "rgb(52, 113, 173)",
    border: "1px solid rgb(52, 113, 173)",
    transform: "translateY(-5px)",
  },
};

const PublicLayout = () => {
  const [showAnnouncement, setShowAnnouncement] = useState<boolean>(true);
  const backdrop = useAppSelector((state) => state.auth.backdrop);
  return (
    <CardProvider>
      {showAnnouncement && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            bgcolor: "rgba(0,0,0,0.8)",
            zIndex: 9998,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component="a"
            href="/launch"
            // target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: -5,
                right: -10,
                color: "#fff",
                zIndex: 9999,
                bgcolor: "#fff",
                "&:hover": {
                  bgcolor: "#d0d0d0",
                },
              }}
              onClick={(e) => {
                e.preventDefault();
                setShowAnnouncement(false);
              }}
            >
              <CloseIcon fontSize="small" sx={{ color: "#000" }} />
            </IconButton>
            <LazyBoxImage
              src={announcementImage}
              alt="announcement-overlay-img"
              sx={{
                maxHeight: "80vh",
                maxWidth: "90vw",
                borderRadius: 5,
                boxShadow: 5,
              }}
            />
          </Box>
        </Box>
      )}
      <BackdropLoader open={backdrop} />
      <TopNav />
      <Box sx={{ paddingTop: 10 }}>
        <Outlet />
      </Box>
      <Divider />
      <Footer />
      <Box
        className="float"
        sx={goto_top_icon_style}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpwardIcon
          sx={{
            height: { xs: 15, md: 35 },
            width: { xs: 15, md: 35 },
            color: "#fff",
          }}
        />
      </Box>

      <Box
        component={"a"}
        href="https://wa.me/9360293602"
        className="float"
        target="_blank"
        rel="noopener noreferrer"
        sx={whatsapp_icon_style}
      >
        <Box
          component={"img"}
          sx={{ height: { xs: 35, md: 55 }, width: { xs: 35, md: 55 } }}
          src={whatsapp_icon}
          alt="Connect with me"
        />
      </Box>
    </CardProvider>
  );
};

export default PublicLayout;
