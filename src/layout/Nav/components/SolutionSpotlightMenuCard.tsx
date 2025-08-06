import {
  Box,
  Grid,
  Link,
  Typography
} from "@mui/material";
import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LazyBoxImage from "../../../components/LazyBoxImage";
import AdmissionImage from "../../../assets/Admission.png";

interface SolutionSpotlightMenuCardProps {
  item: any;
  handleToggleSubmenu: (value: string | null) => void;
  handleOnHoverSubMenu: (value:any) => void; 
}

const SolutionSpotlightMenuCard: React.FC<SolutionSpotlightMenuCardProps> = ({
  item,
  handleToggleSubmenu,
  handleOnHoverSubMenu
}) => {
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState<any | null>(item.content[0]);
  const [activeParentId, setActiveParentId] = useState<string | null>("academic");

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleHover = (section: any, event: React.MouseEvent<HTMLElement>) => {
    clearTimeout(hoverTimeout.current as NodeJS.Timeout);
    setSubMenuItems(section);
    setActiveParentId(section.id);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setOpen(false);
      // handleOnHoverSubMenu(null)
      handleToggleSubmenu(null);
    }, 150);
  };

  return (
    <Box
      display="flex"
      
      flexDirection="row"
      bgcolor="#fff"
      // onMouseEnter={() => {
      //   clearTimeout(hoverTimeout.current as NodeJS.Timeout);
      //   setOpen(true);
      // }}
      // onMouseLeave={handleMouseLeave}
      width={1000}
      sx={{ minHeight:100, px:1,  }}
    >
      <Grid container spacing={2}>
        {/* Left Side Menu */}
        <Grid size={4} >
          <Box
            display="flex"
            flexDirection="column"
            sx={{ p: 1 }}
          >
            {item?.content?.map((section: any) => {
              const isActive = location.pathname.endsWith(
                `/${section.id.toLowerCase()}`
              );

              return (
                <Box
                  key={section.title}
                  onMouseEnter={(event) => handleHover(section, event)}
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    p: 1,
                    borderRadius: 2,
                    color: isActive ? "primary.main" : "#707070",
                    bgcolor: activeParentId === section.id ? "#f2f4f9":"#ffffff",
                    "&:hover": {
                      color: "#000000",
                      bgcolor: "#f2f4f9",
                     
                    },
                  }}
                >
                  <Grid container alignItems={"center"}>
                    <Grid size={11}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize:14,
                          fontWeight:activeParentId === section.id ? 600:500,
                          color: location.pathname.includes(section.id)
                            ? "#000"
                            : "#000",
                        }}
                      >
                        {section.title}
                      </Typography>
                    </Grid>
                    <Grid size={1}>
                      <KeyboardArrowRightIcon sx={{mt:1}}/>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Box>
        </Grid>

        {/* Right Side Submenu */}
        <Grid size={8}>
          <Grid
            container
            columnSpacing={1}
            rowSpacing={3}
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
                      <Link
                        underline="none"
                        href={`/${activeParentId}/${item.id}`}
                        sx={{
                          fontSize: 14,
                          color: isActiveSubmenu ? "blue" : "#000000",
                          "&:hover": {
                            color:"blue"
                          }
                        }}
                      >
                        {item.title}
                      </Link>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SolutionSpotlightMenuCard;
