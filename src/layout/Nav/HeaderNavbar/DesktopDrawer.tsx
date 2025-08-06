// import { Box, Popover, Typography } from "@mui/material";
// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// const DesktopDrawer = ({ menuItems }) => {
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
//   const [activeItem, setActiveItem] = useState<any | null>(null);
//   const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   return (
//     <Box
//       sx={{
//         display: { xs: "none", lg: "flex" },
//         gap: 2,
//         ml: 4,
//         border: 1.5,
//         borderColor: "#C1BABA",
//         borderRadius: 3.5,
//         boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
//         mt: 2,
//         py: 0.5,
//         px: 2,
//         position: "relative",
//       }}
//     >
//       {menuItems.map((item: any, index: number) => (
//         <Box
//           key={`${item.label}_${index}`}
//           sx={{
//             zIndex: 70,
//             px: 1,
//             py: 1,
//             "&:hover": { cursor: "pointer" },
//             bgcolor: "red",
//           }}

//         >
//             <Typography onMouseEnter={(e) => {
//             setAnchorEl(e.currentTarget);
//             setActiveItem(item);
//           }}
//         //   onMouseLeave={() => {
//         //       setActiveItem(null);
//         //       setAnchorEl(null);

//         //   }}
//           onClick={() => {
//             if (item?.type === "directMenu") {
//               navigate(item.path);
//             }
//           }}>
//             {item.label}
//           {(item?.type === "dropDownMenu" || item?.type == "dropDown") && (
//             <Box sx={{ mt: 0.6 }} component={"span"}>
//               <KeyboardArrowDownIcon
//                 fontSize="inherit"
//                 sx={{ color: "#000" }}
//               />
//             </Box>
//           )}
//           </Typography>

//         </Box>
//       ))}

//       {(activeItem?.type === "dropDownMenu" ||
//         activeItem?.type === "dropDown") && (
//         <Popover
//           open={Boolean(anchorEl)}
//           anchorEl={anchorEl}
//           onClose={() => {
//             setAnchorEl(null);
//             setActiveItem(null);
//           }}
//           anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//           transformOrigin={{ vertical: "top", horizontal: "left" }}
//           disableRestoreFocus
//           disableScrollLock
//           onMouseEnter={() => {
//             if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
//           }}
//           onMouseLeave={() => {
//             setAnchorEl(null);
//             setActiveItem(null);
//           }}
//         >
//           {activeItem.label === "Solutions Spotlight" ? (
//             <Box>
//               {activeItem?.content?.map((section: any, index: number) => (
//                 <Typography key={`${section.title}_${index}`}>
//                   {section.title}
//                 </Typography>
//               ))}
//             </Box>
//           ) : (
//             <Box>
//               {activeItem?.content?.map((section: any, index: number) => (
//                 <Typography key={`${index}_${section.title}`}>
//                   {section.title}
//                 </Typography>
//               ))}
//             </Box>
//           )}
//         </Popover>
//       )}
//     </Box>
//   );
// };

// export default DesktopDrawer;

// import React from "react";
// import { Box, Container } from "@mui/material";
// import NavItem from "./NavItem";

// const DesktopDrawer = ({menuItems}) => {
//   return (
//     <Box
//       component="header"
//       sx={{
//         display: { xs: "none", lg: "flex" },
//         gap: 2,
//         ml: 4,
//         border: 1.5,
//         borderColor: "#C1BABA",
//         borderRadius: 3.5,
//         boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
//         mt: 2,
//         py: 0.5,
//         px: 2,
//         position: "relative",
//         backgroundColor: "#fff",
//       }}
//     >
//       <Container
//         maxWidth="lg"
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Box sx={{ display: "flex", gap: 4 }}>
//           <NavItem label="Features" submenuItems={["Material", "Bootstrap", "Tailwind"]} />
//           <NavItem label="Terminator" submenuItems={["season 1", "season 2", "season 3"]} />
//           <NavItem label="Loki" />
//           <NavItem label="Japan" />
//           <NavItem label="China" />
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default DesktopDrawer;

import { Box, Container } from "@mui/material";
import NavItem from "./NavItem";
import SolutionSpotlightNavItem from "./SolutionSpotlightNavItem";

const DesktopDrawer = ({ menuItems }) => {
  return (
    <Box
      component="header"
      sx={{
        display: { xs: "none", lg: "flex" },
        gap: {xl:2},
        ml: 4,
        border: 1.5,
        borderColor: "#C1BABA",
        borderRadius: 3.5,
        boxShadow: "0px 6px 18px rgb(223 0 255 / 24%)",
        // boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
        mt: 2,
        py: 0.5,
        // px: 2,
        position: "relative",
        backgroundColor: "#fff",

      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "&.MuiContainer-root": {
            paddingLeft:0,
            paddingRight:0,
          },
        }}
      >
        <Box sx={{ display: "flex", gap: {xl:2.5} }}>
          {menuItems.map((item) => {
            const isSolutionSpotlight = item.label === "Solutions Spotlight";
            
            return isSolutionSpotlight ? (
              <SolutionSpotlightNavItem key={item.id}
                label={item.label}
                menuItem={item}/>
            ) : (
              <NavItem
                key={item.id}
                label={item.label}
                menuItem={item}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default DesktopDrawer;
