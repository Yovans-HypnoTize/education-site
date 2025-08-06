import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { showBackdrop } from "../../../features/auth/authSlice";

interface SubMenuItemsProps {
  parentId: string | null | undefined;
  items: any[];
  path: string | null | undefined;
  handleToggleSubmenu: (value: string | null) => void;
}

const SubMenuItems: React.FC<SubMenuItemsProps> = ({
  parentId,
  items,
  path,
  handleToggleSubmenu,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Box
      display="flex"
      gap={1}
      flexDirection="column"
      bgcolor="#fff"
      sx={{
        minWidth: 250,
        p: 2,
        borderRadius: 3,
      }}
    >
      {items.map((section) => {
        const isActive = location.pathname.endsWith(
          `/${section.id.toLowerCase()}`
        );
        return (
          <Box key={section.id}>
            <a
              href={`/${path}/${section.id}`}
              // style={{
              //   cursor: "pointer",
              //   fontWeight: "500",
              //   color: isActive ? "primary.main" : "#707070",
              //   "&:hover": { color: "primary.main" },
              // }}
              className={isActive? "active-nav-link" : "nav-link"}
            >
              {section.title}
            </a>
            {/* <Typography
              variant="body2"
              sx={{
                cursor: "pointer",
                fontWeight: "500",
                color: isActive ? "primary.main" : "#707070",
                "&:hover": { color: "primary.main" },
              }}
              onClick={() => {
                navigate(`${path}/${section.id}`, {state:parentId});
               
                handleToggleSubmenu(null);
  //                setTimeout(() => {
  //                  window.location.reload(); // force reload after submenu closes
  //   navigate(`${path}/${section.id}`, { state: parentId });
  // }, 100);
                // if(location.pathname.includes(section.id)){
                //   return;
                // } else {
                //   dispatch(showBackdrop())

                // }
              }}
            >
              {section.title}
            </Typography> */}
          </Box>
        );
      })}
    </Box>
  );
};

export default SubMenuItems;
