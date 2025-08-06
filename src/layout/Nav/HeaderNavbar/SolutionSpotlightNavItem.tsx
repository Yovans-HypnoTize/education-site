import React, { useMemo, useRef, useState } from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LazyBoxImage from "../../../components/LazyBoxImage";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useLocation, useNavigate } from "react-router-dom";

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

const SolutionSpotlightNavItem: React.FC<NavItemProps> = ({
  label,
  menuItem,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);

  const [subMenuItems, setSubMenuItems] = useState<any | null>(
    menuItem.content[0]
  );
  const [activeParentId, setActiveParentId] = useState<string | null>(
    "academic"
  );

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleHover = (section: any, event: React.MouseEvent<HTMLElement>) => {
    clearTimeout(hoverTimeout.current as NodeJS.Timeout);
    setSubMenuItems(section);
    setActiveParentId(section.id);
  };

  const isActive = useMemo(() => {
    if (menuItem.content && Array.isArray(menuItem.content)) {
      return menuItem.content.some((subItem: any) =>
        location.pathname.includes(subItem.id)
      );
    }

    if (menuItem.path && location.pathname.includes(menuItem.path)) {
      return true;
    }

    return false;
  }, [menuItem, location.pathname]);

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{ position: "relative" }}
    >
      <Typography
        sx={{
          display: "flex",
          textTransform: "none",
          px: { lg: 1 },
          py: 1,
          bgcolor: "#ffffff",
          ...(isActive && isActive ? gradientStyle : { color: "#000" }),
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
          borderRadius: "10px",
        }}
      >
        {label}{" "}
        {(menuItem?.type === "dropDownMenu" ||
          menuItem?.type == "dropDown") && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <KeyboardArrowDownIcon fontSize="inherit" sx={{ color: "#000" }} />
          </Box>
        )}
      </Typography>

      {menuItem && hovered && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: -5,
            width: 800,
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
              p: 2,
            }}
          >
            <Grid container spacing={2}>
              <Grid size={4}>
                {menuItem.content.map((item, index) => {
                  const isActive = location.pathname.endsWith(
                    `/${item.id.toLowerCase()}`
                  );

                  return (
                    <Grid
                      container
                      alignItems={"center"}
                      sx={{
                        cursor: "pointer",
                        fontWeight: 500,
                        px: 1,
                        py: 1,
                        borderRadius: 2,
                        color: isActive ? "primary.main" : "#707070",
                        fontSize: 12,
                        bgcolor:
                          activeParentId === item.id ? "#f2f4f9" : "#ffffff",
                        "&:hover": {
                          color: "#000000",
                          bgcolor: "#f2f4f9",
                        },
                      }}
                      onMouseEnter={(event) => handleHover(item, event)}
                    >
                      <Grid size={11} key={index}>
                        {item.title}
                      </Grid>
                      <Grid size={1}>
                        <KeyboardArrowRightIcon
                          sx={{ mt: 1, color: "#000000" }}
                        />
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid size={8}>
                <Grid
                  container
                  columnSpacing={1}
                  rowSpacing={2}
                  sx={{
                    mt: 2,
                    mb: 3,
                  }}
                >
                  {activeParentId !== null &&
                    subMenuItems?.items?.map((item: any, index: number) => {
                      const isActiveSubmenu = location.pathname.endsWith(
                        `/${item.id.toLowerCase()}`
                      );

                      return (
                        <Grid size={6} key={`${index}_${item.title}`}>
                          <Box sx={{ display: "flex" }}>
                            <LazyBoxImage
                              src={item.icon || ""}
                              alt={`${item.title}_${index}`}
                              sx={{ height: 20, width: 20, mr: 0.5 }}
                            />
                            <Typography
                              onClick={() => {
                                navigate(`/${activeParentId}/${item.id}`);
                                setHovered(false);
                              }}
                              sx={{
                                fontSize: 12,
                                color: isActiveSubmenu ? "blue" : "#000000",
                                "&:hover": {
                                  color: "blue",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SolutionSpotlightNavItem;
