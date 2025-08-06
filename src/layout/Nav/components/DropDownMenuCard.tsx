import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface DropDownMenuCardProps {
  item: any;
  handleToggleSubmenu: (value: string | null) => void;
  // handleOnHoverSubMenu: (value:any) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DropDownMenuCard: React.FC<DropDownMenuCardProps> = ({
  item,
  handleToggleSubmenu,
  // handleOnHoverSubMenu,
  onMouseEnter,
  onMouseLeave
}) => {
  const navigate = useNavigate();
  //  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  //  const handleMouseLeave = () => {
  //   hoverTimeout.current = setTimeout(() => {
  //     // handleOnHoverSubMenu(null)
  //     handleToggleSubmenu(null);
  //   }, 150);
  // };

  return (
    <Box display="flex" gap={1} flexDirection="column" bgcolor="#ffffff" sx={{p:"15px", width:"230px"}} 
    // onMouseEnter={() => {
    //     clearTimeout(hoverTimeout.current as NodeJS.Timeout);
    //   }}
    //   onMouseLeave={handleMouseLeave}
    onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}
    >
      {item?.content?.map((section: any) => {
        const isActive = location.pathname.endsWith(
          `/${section.id.toLowerCase()}`
        );
        return (
          <Box key={section.title} sx={{mb:1}}>
            <Typography
              key={section.id}
              variant="body2"
              sx={{
                fontSize:14,
                cursor: "pointer",
                fontWeight: 500,
                bgcolor: isActive ? "f2f4f9":"#ffffff",
                color: isActive ? "primary.main" : "#707070",
                "&:hover": { color: "primary.main" },
              }}
              onClick={() => {
                navigate(`${item.path}/${section.id}`);
                handleToggleSubmenu(null);
              }}
            >
              {section.title}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default DropDownMenuCard;
