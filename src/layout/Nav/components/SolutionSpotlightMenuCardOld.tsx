import { Box, Fade, Grid, Paper, Popper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SubMenuItems from "./SubMenuItems";

interface SolutionSpotlightMenuCardProps {
  item: any;
  handleToggleSubmenu: (value: string | null) => void;
}

const SolutionSpotlightMenuCard: React.FC<SolutionSpotlightMenuCardProps> = ({
  item,
  handleToggleSubmenu,
}) => {
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState<any | null>(null);
  const [activeParentId, setActiveParentId] = useState<string | null>(null);

  const handleHover = (section: any, event: React.MouseEvent<HTMLElement>) => {
    setSubMenuItems(section);
    setActiveParentId(section.id);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      bgcolor="#fff"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        handleToggleSubmenu(null);
      }}
    >
      {/* Left Menu */}
      <Box
        display="flex"
        gap={1}
        flexDirection="column"
        sx={{ minWidth: 350, p: 2 }}
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
                fontWeight: "500",
                color: isActive ? "primary.main" : "#707070",
                "&:hover": { color: "primary.main" },
              }}
            >
              <Grid container spacing={2}>
                <Grid size={10}>
                  <Typography variant="body2" sx={{color:location.pathname.includes(section.id) ? "primary.main":"#000"}}>{section.title}</Typography>
                </Grid>
                <Grid size={2}>
                  <Box>
                    <KeyboardArrowRightIcon />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Box>

      {/* Submenu */}
      {open && anchorEl && subMenuItems && (
        <Popper
          sx={{ zIndex: 1200, pl: 2 }}
          open={open}
          anchorEl={anchorEl}
          placement="right-start"
          transition
          disablePortal={false}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper elevation={3}>
                <SubMenuItems
                  parentId={activeParentId}
                  items={subMenuItems.items}
                  path={activeParentId}
                  handleToggleSubmenu={handleToggleSubmenu}
                />
              </Paper>
            </Fade>
          )}
        </Popper>
      )}
    </Box>
  );
};

export default SolutionSpotlightMenuCard;