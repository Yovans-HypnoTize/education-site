import React, { useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface NavItemProps {
  label: string;
  menuItem?: any;
}

const gradientStyle = {
  background: "linear-gradient(115deg, #00B9F1 0%, #EC008B 56%, #FFCB05 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

const NavItem: React.FC<NavItemProps> = ({ label, menuItem }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);

  const isDirect = menuItem?.type === "directMenu";
  const isDropdown =
    menuItem?.type === "dropDown" || menuItem?.type === "dropDownMenu";

  const isActive = isDirect
    ? location.pathname.endsWith(menuItem.path)
    : isDropdown &&
      menuItem?.content?.some((item: any) =>
        location.pathname.includes(`${item.id}`)
      );

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{ position: "relative" }}
    >
      <Typography
        sx={{
          display: "flex",
          bgcolor: "#ffffff",
          ...(isActive ? gradientStyle : { color: "#000" }),
          textTransform: "none", 
          px: { lg: 1 },
          borderRadius: "10px",
          py: 1,
          fontSize: "15px",
          cursor: "pointer",

          "@media (max-width: 1440px)": {
            fontSize: "14px",
            px: { xl: 0.5 },
            py: 0.9,
          },
          "@media (max-width: 1336px)": {
            fontSize: "13px",
            px: { xl: 0.5 },
            py: 0.9,
          },
          "@media (max-width: 1280px)": {
            fontSize: "12px",
          },
        }}
        onClick={() => {
          if (isDirect) {
            navigate(`${menuItem.path}`);
          }
        }}
      >
        {label}{" "}
        {(menuItem?.type === "dropDownMenu" ||
          menuItem?.type == "dropDown") && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <KeyboardArrowDownIcon
              fontSize="inherit"
              sx={{ color: isActive ? "#EC008B" : "#000" }}
            />
          </Box>
        )}
      </Typography>

      {!isDirect && menuItem && hovered && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: -15,
            width: 180,
            zIndex: 10,
          }}
        >
          <Box sx={{ background: "transparent", mt: 1.5 }} />
          <Box
            sx={{
              backgroundColor: "#fff",
              boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              overflow: "hidden",
              py: 1,
            }}
          >
            {menuItem.content.map((item, index) => {
              const isSubmenuActive = location.pathname.endsWith(item.id);
              console.log(
                "submenu active",
                location.pathname.endsWith(item.id)
              );
              return (
                <Box
                  key={index}
                  sx={{
                    pl: 2,
                    py: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="body2"
                    onClick={() => {
                      navigate(`${menuItem.path}/${item.id}`);
                      setHovered(false);
                    }}
                    sx={{
                      fontSize: 12,
                      bgcolor: "#ffffff",
                      cursor: "pointer",
                      color: isSubmenuActive ? "#1976d2" : "#707070",
                      "&:hover": {
                        color: "#1976d2",
                      },
                      textTransform: "none",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NavItem;
