import {
  Box,
  Divider,
  Drawer,
  keyframes,
  Link,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReuButton from "../../../components/ReuButton";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../../utils/Utils";
import { useState } from "react";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const MobileDrawer = ({
  drawerOpen,
  handleDrawerClose,
  showHarmburgerSubmenu,
  menuItems,
  handleHumburgerSubMenuClose,
  selectedDropDownMenu,
  handleCardState,
  activeDrawerMenu,
  handleActiveDrawerMenu,
  handleSelectedDropdownMenu,
  handleToggleHumburgerSubMenu,
}: any) => {
  const navigate = useNavigate();
  const [spotLightChildMenus, setSpotlightChildMenus] = useState<any>(null);
  const [spotLightChildMenuId, setSpotlightChildMenuId] = useState<any>(null);
  return (
    <>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        className="top-nav-hamburger"
      >
        {!showHarmburgerSubmenu ? (
          <Box
            sx={{
              width: 250,
              p: 2,
              animation: drawerOpen ? `${slideOut} 0.3s ease-out` : "none",
            }}
          >
            {menuItems.map((item: any) => (
              <Box key={item.label}>
                <Typography
                  sx={{
                    my: 2,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    if (item.type === "directMenu") {
                      navigate(item.path);
                      handleDrawerClose();
                    } else {
                      handleToggleHumburgerSubMenu();
                      handleSelectedDropdownMenu(item);
                      handleActiveDrawerMenu(item);
                    }
                  }}
                >
                  {item.label}
                  {(item.type === "dropDownMenu" ||
                    item.type == "dropDown") && (
                    <KeyboardArrowDownIcon
                      sx={{
                        transform:
                          activeDrawerMenu === item.label
                            ? "rotate(-90deg)"
                            : "rotate(-90deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  )}
                  {item.type === "dropDownMenuImg" && (
                    <KeyboardArrowDownIcon
                      sx={{
                        transform:
                          activeDrawerMenu === item.label
                            ? "rotate(-90deg)"
                            : "rotate(-90deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  )}
                </Typography>
              </Box>
            ))}
            <Link href={"/launch"} underline="none" color="#000000">Launch</Link>
            <Divider sx={{ my: 2 }} />

            {getToken() === null && (
              <>
                <ReuButton
                  variant="contained"
                  fullWidth
                  className="home-side-nav-btn signup"
                  sx={{ mb: 2 }}
                  onClick={() => {
                    handleCardState("signup");
                    handleDrawerClose();
                  }}
                >
                  Sign up
                </ReuButton>
                <ReuButton
                  variant="outlined"
                  fullWidth
                  className="home-side-nav-btn login"
                  onClick={() => {
                    handleCardState("login");
                    handleDrawerClose();
                  }}
                >
                  Login
                </ReuButton>
              </>
            )}
          </Box>
        ) : (
          <Box sx={{ width: 250, p: 2, animation: `${slideIn} 0.3s ease-out` }}>
            {(() => {
              const selectedMenu = menuItems.find(
                (item: any) => item.id === selectedDropDownMenu
              );

              if (!selectedMenu) return null;

              return (
                <>
                  {/* Centered label */}
                  <Typography
                    sx={{
                      position: "relative",
                      textAlign: "center",
                      mb: 2,
                      cursor: "pointer",
                      fontSize: "18px",
                    }}
                  >
                    {/* Back icon on the left */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: "60%",
                        transform: "translateY(-50%)",
                        pl: 1,
                      }}
                      onClick={() => {
                        setSpotlightChildMenus(null);
                        setSpotlightChildMenuId(null);
                        handleHumburgerSubMenuClose();
                      }}
                    >
                      <KeyboardArrowLeftIcon fontSize="inherit" />
                    </Box>

                    {/* Label centered */}
                    {selectedMenu.label}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  {/* Submenu content */}
                  {selectedMenu.content?.map((section: any, index: number) => {
                    const isExpanded = spotLightChildMenuId === section.id;

                    return (
                      <Box key={`${section.title}_${index}`} sx={{ mb: 2 }}>
                        <Box
                          onClick={() => {
                            if (selectedMenu.path === "/solutions-spotlight") {
                              if (isExpanded) {
                                // Collapse if already open
                                setSpotlightChildMenus(null);
                                setSpotlightChildMenuId(null);
                              } else {
                                setSpotlightChildMenus(section);
                                setSpotlightChildMenuId(section.id);
                              }
                            } else {
                              navigate(`${selectedMenu.path}/${section.id}`);
                              handleDrawerClose();
                            }
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: "pointer",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            fontWeight="bold"
                            sx={{ mb: 1 }}
                          >
                            {section.title}
                          </Typography>
                          {selectedMenu.path === "/solutions-spotlight" && (
                            <KeyboardArrowDownIcon />
                          )}
                        </Box>

                        {isExpanded &&
                          spotLightChildMenus?.items?.map(
                            (item: any) => (
                              <Box
                                key={item.id}
                                sx={{
                                  display: "flex",
                                  mb: 0.6,
                                  pl: 1,
                                }}
                              >
                                <LabelImportantIcon
                                  sx={{ color: "gray", fontSize: 12, mr: 1, mt:0.6 }}
                                />
                                <Typography
                                  sx={{ cursor: "pointer", color: "#696868" }}
                                  onClick={() => {
                                    navigate(
                                      `${spotLightChildMenuId}/${item.id}`,
                                      {
                                        state: spotLightChildMenuId,
                                      }
                                    );
                                    handleDrawerClose();
                                  }}
                                >
                                  {item.title}
                                </Typography>
                              </Box>
                            )
                          )}
                      </Box>
                    );
                  })}
                </>
              );
            })()}
          </Box>
        )}
      </Drawer>
    </>
  );
};

export default MobileDrawer;
