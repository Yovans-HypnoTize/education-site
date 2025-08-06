import { useState } from "react";
import TopNav from "./Nav/TopNav1";
import { Outlet } from "react-router-dom";
import { CardProvider } from "../context/AuthCardContext";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import AuthenticateMenu from "./AuthenticateMenu";

const AuthenticateLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <CardProvider>
      <TopNav />

      <Box sx={{ display: "flex", px: 3, py: 2 }}>
        {/* Sidebar for md and up */}
        {!isMobile && (
          <Box
            sx={{
              width: { md: "250px" },
              flexShrink: 0,
              mr: { md: 2 },
              position: "sticky",
              top: "20px",
              alignSelf: "flex-start",
              height: "fit-content",
            }}
          >
            <AuthenticateMenu />
          </Box>
        )}

        {/* Right-side content */}
        <Box
          sx={{
            flexGrow: 1,
            marginTop: { xs: 5, md: "5%" },
            pl: { xs: 2, md: 0 },
            pr: { xs: 0, lg: 2 },
          }}
        >
          <Outlet />
        </Box>
      </Box>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: "80%" } }}
      >
        <Box sx={{ p: 2 }}>
          <AuthenticateMenu />
        </Box>
      </Drawer>
    </CardProvider>
  );
};

export default AuthenticateLayout;
