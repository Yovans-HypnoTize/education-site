import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Card,
  Avatar,
  Typography,
  Link,
} from "@mui/material";
import edumaatLogo from "../../assets/logo/edumaatLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import VerifyOtp from "../../components/auth/VerifyOtp";
import Cookies from "js-cookie";
import { useCardContext } from "../../context/AuthCardContext";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../../components/user/ProfileMenu";
import MobileDrawer from "./components/MobileDrawer";
import ReuGradientButton from "../../components/common-reusable-components/ReuGradientButton";
import HeaderButton from "./components/HeaderButton";
import DropDownMenuCard from "./components/DropDownMenuCard";
import SolutionSpotlightMenuCard from "./components/SolutionSpotlightMenuCard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import featuresForYourInstitutionCardImage1 from "../../assets/solutions-spotlight/featuresForYourInstitution/admissionManagement.png";
import featuresForYourInstitutionCardImage2 from "../../assets/solutions-spotlight/featuresForYourInstitution/team-management.png";
import featuresForYourInstitutionCardImage4 from "../../assets/solutions-spotlight/featuresForYourInstitution/payroll.png";
import featuresForYourInstitutionCardImage5 from "../../assets/solutions-spotlight/featuresForYourInstitution/order-fulfillment.png";
import featuresForYourInstitutionCardImage6 from "../../assets/solutions-spotlight/featuresForYourInstitution/hiring.png";
import featuresForYourInstitutionCardImage7 from "../../assets/solutions-spotlight/featuresForYourInstitution/ai.png";
import ForgotPassword from "../../components/auth/ForgotPassword";
import call_center_icon from "../../assets/logo/call_center_icon.png";
import LazyBoxImage from "../../components/LazyBoxImage";
import LazyImage from "../../components/LazyImage";
import ReuButton from "../../components/ReuButton";
import launch_robot from "../../assets/launch_robot.jpeg";
import { keyframes } from "@emotion/react";

// 0% { background-color: rgba(59, 242, 59, 1); }
// const backgroundAnimation = keyframes`
//   0% { background-color: rgba(0, 102, 255, 1); color:rgb(255,255,255) }   // Blue
//   100% { background-color: #ffffff; border:1px solid #ec008b  }              // White
// `;
const backgroundAnimation = keyframes`
  0% { 
    background-color: rgba(0, 102, 255, 1); 
    border-color: rgba(0, 102, 255, 1); 
    color: #ffffff
  }
  50% { 
    background-color: #ffffff; 
    border-color: #ec008b; 
    color: #000000
  }
  100% { 
    background-color: rgba(0, 102, 255, 1); 
    border-color: rgba(0, 102, 255, 1); 
    color: #ffffff
  }
`;

const menuItems = [
  {
    id: 1,
    label: "Solutions Spotlight",
    type: "dropDownMenu",
    path: "/solutions-spotlight",
    content: [
      {
        title: "Academic & Learning Management",
        id: "academic",
        icon: <ApartmentIcon sx={{ color: "#B2BEB5" }} />,
        tagline:
          "Focuses on student lifecycle, academic operations, and learning delivery.",
        items: [
          {
            id: "student-management",
            title: "Student Management",
            img: featuresForYourInstitutionCardImage1,
          },
          {
            id: "admission-management",
            title: "Admission Management",
            img: featuresForYourInstitutionCardImage2,
          },
          {
            id: "attendance-management",
            title: "Attendance Management",
            img: featuresForYourInstitutionCardImage4,
          },
          {
            id: "timetable-management",
            title: "Timetable Management",
            img: featuresForYourInstitutionCardImage5,
          },
          {
            id: "examination-or-assessment-management",
            title: "Examination or Assessment Management",
            img: featuresForYourInstitutionCardImage6,
          },
          {
            id: "assignment-management",
            title: "Assignment Management",
            img: featuresForYourInstitutionCardImage7,
          },
          {
            id: "academic-calendar",
            title: "Academic Calendar",
            img: featuresForYourInstitutionCardImage7,
          },
          {
            id: "pta-parent-teacher-association",
            title: "PTA (Parent-Teacher Association)",
            img: featuresForYourInstitutionCardImage7,
          },
          {
            id: "placement",
            title: "Placement",
            img: featuresForYourInstitutionCardImage7,
          },
          {
            id: "alumni-management",
            title: "Alumni Management",
            img: featuresForYourInstitutionCardImage7,
          },
          {
            id: "lms-quiz-course-interactive-meeting",
            title: "LMS (Quiz, Course, Interactive Meeting)",
            img: featuresForYourInstitutionCardImage7,
          },
          {
            id: "research-and-publication-management",
            title: "Research and Publication Management",
            img: featuresForYourInstitutionCardImage7,
          },
          {
            id: "student-and-staff-appraisal-management",
            title: "Student and Staff Appraisal Management",
            img: featuresForYourInstitutionCardImage7,
          },
          {
            id: "student-and-staff-behaviour-management",
            title: "Student and Staff Behaviour Management",
            img: featuresForYourInstitutionCardImage7,
          },
        ],
      },

      {
        title: "Human Resource & Administration",
        id: "human-resource-administration",
        icon: <PersonOutlineIcon sx={{ color: "#B2BEB5" }} />,
        tagline:
          "Manages staff lifecycle, payroll, roles, privileges, and internal governance.",
        items: [
          { id: "staff-management", title: "Staff Management" },
          { id: "payroll-management", title: "Payroll Management" },
          {
            id: "job-recruitment-management",
            title: "Job/Recruitment Management",
          },
          {
            id: "requisition-and-approval-management",
            title: "Requisition and Approval Management",
          },
          {
            id: "role-and-privilege-management",
            title: "Role and Privilege Management",
          },
          { id: "role-wise-dashboard", title: "Role Wise Dashboard" },
          {
            id: "custom-letter-and-id-card-generation",
            title: "Custom Letter and ID Card Generation",
          },
          {
            id: "backup-restore-management",
            title: "Backup/Restore Management",
          },
        ],
      },
      {
        title: "Finance & Infrastructure Management ",
        id: "finance",
        icon: <PeopleAltIcon sx={{ color: "#B2BEB5" }} />,
        tagline:
          "Covers monetary processes, logistics, and campus facilities. ",
        items: [
          { id: "fees-management", title: "Fees Management" },
          { id: "accounting-management", title: "Accounting Management" },
          { id: "hostel-management", title: "Hostel Management" },
          { id: "transport-management", title: "Transport Management" },
          {
            id: "inventory-and-asset-management",
            title: "Inventory and Asset Management",
          },
          { id: "canteen-management", title: "Canteen Management" },
          { id: "utility-management", title: "Utility Management" },
          { id: "booking-management", title: "Booking Management" },
        ],
      },
      {
        title: "Communication & Engagement",
        id: "communication",
        icon: <ApartmentIcon sx={{ color: "#B2BEB5" }} />,
        tagline:
          "Handles interaction with students, staff, parents, and the community. ",
        items: [
          { id: "communication-management", title: "Communication Management" },
          {
            id: "notification-and-reminder-management",
            title: "Notification and Reminder Management",
          },
          { id: "event-management", title: "Event Management" },
          {
            id: "complaint-and-feedback-management",
            title: "Complaint and Feedback Management",
          },
          {
            id: "visitor-gate-pass-sickroom-management",
            title: "Visitor/Gate pass/Sickroom Management",
          },
        ],
      },
      {
        title: "Tools, Customization & Integration ",
        id: "ai-automation",
        icon: <ApartmentIcon sx={{ color: "#B2BEB5" }} />,
        tagline:
          "Supports advanced functionality, integrations, and system-wide tools. ",
        items: [
          { id: "document-management", title: "Document Management" },
          { id: "library-management", title: "Library Management" },
          {
            id: "task-and-to-do-management",
            title: "Task and To-Do Management",
          },
          { id: "custom-report-builder", title: "Custom Report Builder" },
          { id: "form-builder", title: "Form Builder" },
          {
            id: "integration-payment-gateway-whatsapp-email",
            title: "Integration (Payment Gateway, WhatsApp, Email)",
          },
          { id: "edumaat-ai", title: "EDUMAAT AI" },
        ],
      },
    ],
  },

  {
    id: 2,
    label: "Education",
    type: "dropDown",
    path: "/education",
    content: [
      { title: "Schools (K12)", id: "schools-k12" },
      { title: "College", id: "college" },
      { title: "University", id: "university" },
      { title: "Education Boards", id: "education-boards" },
      { title: "Coaching Center", id: "coaching" },
    ],
  },
  {
    id: 3,
    label: "Plans and Pricing",
    type: "directMenu",
    path: "plans-pricing",
    content: [],
  },
  {
    id: 4,
    label: "Mobile Apps",
    type: "directMenu",
    path: "/mobile-apps",
    content: [
      { title: "School Portal", id: "school-portal" },
      { title: "Parent Portal", id: "parent-portal" },
      { title: "Teacher’s Portal", id: "teachers-portal" },
    ],
  },
  {
    id: 5,
    label: "Resources",
    type: "dropDown",
    path: "",
    content: [
      { title: "Blogs", id: "blogs" },
      { title: "Latest Updates", id: "latest-updates" },
      { title: "Features", id: "features" },
      { title: "FAQs", id: "faqs" },
    ],
  },
  // {
  //   id: 6,
  //   label: "Launch",
  //   type: "directMenu",
  //   path: "launch",
  // },
];

export const solutionsSpotlightMenuItems = menuItems[0].content;

const TopNav: React.FC<any> = () => {
  const [activeAuth, setActiveAuth] = useState("signup");
  const [activeDrawerMenu, setActiveDrawerMenu] = useState<string | null>(null);
  const [selectedDropDownMenu, setSelectedDropDownMenu] = useState(null);
  const [showHarmburgerSubmenu, setShowHarmburgerSubmenu] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cardState, setCardState } = useCardContext();
  const navigate = useNavigate();
  const accessToken = Cookies.get("access_token");
  // const accessToken = localStorage.getItem("access_token");

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleHumburgerSubMenuClose = () => {
    setShowHarmburgerSubmenu(false);
  };

  const handleCardState = (value: any) => {
    setCardState(value);
  };

  const handleActiveDrawerMenu = (value: any) => {
    setActiveDrawerMenu((prev) => (prev === value.label ? null : value.label));
  };

  const handleToggleHumburgerSubMenu = () => {
    setShowHarmburgerSubmenu(!showHarmburgerSubmenu);
  };

  const handleSelectedDropdownMenu = (value: any) => {
    setSelectedDropDownMenu(value?.id);
  };

  const [activeSubmenuLabel, setActiveSubmenuLabel] = useState<string | null>(
    null
  );
  const handleToggleSubmenu = (label: string | null) => {
    setActiveSubmenuLabel(label);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "white", paddingBottom: "15px" }}
      elevation={0}
    >
      <Container maxWidth={"xl"} sx={{}}>
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            justifyContent: { xs: "space-between", lg: "space-evenly" },
            // bgcolor:"red"
            // mx:{lg:2}
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon sx={{ color: "#000", display: { lg: "none" } }} />
                </IconButton>
                <Box
                  className="home-top-nav-logo-container"
                  sx={{ display: { xs: "block", lg: "none" } }}
                >
                  <Box
                    component={"img"}
                    src={edumaatLogo}
                    alt="Edumaat Logo"
                    sx={{ height: 40, width: 40, marginTop: 1, ml: 1 }}
                    onClick={() => navigate("/")}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: { lg: "1.5px solid  #C1BABA" },
                  borderRadius: { lg: 3.5 },
                  overflow: "hidden",
                  boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", lg: "block" },
                    alignItems: "center",
                    justifyContent: "center",
                    width: 110,
                  }}
                >
                  <Link
                    href="/"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <LazyBoxImage
                      src={edumaatLogo}
                      alt="Edumaat Logo"
                      sx={{ height: 38, width: 38 }}
                    />
                  </Link>
                </Box>
                <Box
                  sx={{
                    height: 40,
                    width: 2,
                    bgcolor: "#949292ff",
                    mx: 1,
                    display: { xs: "none", lg: "block" },
                  }}
                />
                <Box
                  sx={{ width: "100%", display: { xs: "none", lg: "block" } }}
                >
                  <Typography sx={{ color: "#000000", fontSize: 12 }}>
                    One Solution, <br />
                    Endless Possibilities...
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Menu Items - Desktop Only */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: 2,
                ml: 3,
                border: 1.5,
                borderColor: " #C1BABA",
                borderRadius: 3.5,

                boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
                mt: 2,
                py: 0.5,
                px: 2,
              }}
            >
              {menuItems.map((item: any, idx) => (
                <Box
                  key={item.label}
                  className="menu-item-wrapper"
                  onMouseEnter={() => handleToggleSubmenu(item.label)}
                  onMouseLeave={() => handleToggleSubmenu(null)}
                  sx={{ zIndex: 70 }}
                >
                  <HeaderButton item={item} key={item.label} />
                  {(item?.type === "dropDownMenu" ||
                    item.type === "dropDown") && (
                    <Card
                      className="submenu-card"
                      style={{
                        padding: item.type === "dropDown" ? " 15px" : "",
                        left: item.type === "dropDown" ? "-10px" : "",
                        width: item.type === "dropDown" ? "200px" : "",
                        display:
                          activeSubmenuLabel === item.label ? "block" : "none",
                      }}
                      key={idx}
                    >
                      {item.label === "Solutions Spotlight" ? (
                        <SolutionSpotlightMenuCard
                          item={item}
                          key={`${item.label}_${item.type}`}
                          handleToggleSubmenu={handleToggleSubmenu}
                        />
                      ) : (
                        <DropDownMenuCard
                          item={item}
                          key={`${item.label}_${item.type}`}
                          handleToggleSubmenu={handleToggleSubmenu}
                        />
                      )}
                    </Card>
                  )}
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                ml: 2,
                mt: 2,
                alignItems: "flex-end",
              }}
            >
              <LazyBoxImage
                src={launch_robot}
                alt="Launch Robot"
                sx={{
                  height: 38,
                  width: 38,
                  mx: 1,
                  display: { xs: "none", lg: "block" },
                }}
              />
              <ReuButton
                onClick={() => navigate("/launch")}
                sx={{
                  animation: `${backgroundAnimation} 4s ease-in-out infinite`,
                  boxShadow: "1px 3px 3px rgba(66, 65, 65, 0.3)",
                  color: "#000000",
                  height: 46,
                  border: 1,
                  borderColor: "#fdfdfd",
                  borderRadius: 3.5,
                  fontSize: 12,
                  px: 1.5,
                  transition:
                    "background-color 2s ease-in-out, border-color 2s ease-in-out",
                }}
              >
                Nextgen Launch
              </ReuButton>
            </Box>
            {/* Auth Buttons - Desktop Only */}
            {!accessToken ? (
              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  border: 1.5,
                  borderColor: " #C1BABA",
                  borderRadius: 3.5,
                  boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                  width: 200,
                  py: 0.5,
                  mt: 2,
                  ml: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <Box sx={{ mr: 2, display: { xs: "none", sm: 2 } }}>
                  <Avatar
                    onClick={() => {
                      window.location.href = "tel:+91 93602 93602";
                    }}
                    src={call_center_icon}
                    sx={{
                      height: 45,
                      width: 45,
                      mx: "auto",
                      mr: 2,
                      "&:hover": { cursor: "pointer" },
                    }}
                  />
                </Box> */}
                  <Box>
                    <ReuGradientButton
                      onClick={() => {
                        setActiveAuth("login");
                        setCardState("login");
                      }}
                      variant={activeAuth === "login" ? "contained" : "text"}
                      // variant="outlined"
                      sx={{
                        width: { sm: 80 },
                        mr: 2,
                        py: { xs: 0, sm: 0.8 },
                        borderRadius: 2.5,
                        height: 35,
                        "&:hover": {
                          bgcolor: "#ffffff",
                        },
                        fontSize: 12,
                      }}
                    >
                      Login
                    </ReuGradientButton>
                  </Box>
                  <Box>
                    <ReuGradientButton
                      key={"sign up"}
                      variant={activeAuth === "signup" ? "contained" : "text"}
                      sx={{
                        width: 80,
                        py: { sm: 1, xs: 0.3 },
                        borderRadius: 2.5,
                        height: 35,
                        "&:hover": {
                          bgcolor: "#ffffff",
                        },
                        fontSize: 12,
                      }}
                      onClick={() => {
                        setActiveAuth("signup");
                        setCardState("signup");
                      }}
                    >
                      Sign up
                    </ReuGradientButton>
                  </Box>
                </Box>
                {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ mr: 2, display: { xs: "none", sm: 2 } }}>
                  <Avatar
                    onClick={() => {
                      window.location.href = "tel:+91 93602 93602";
                    }}
                    src={call_center_icon}
                    sx={{
                      height: 45,
                      width: 45,
                      mx: "auto",
                      mr: 2,
                      "&:hover": { cursor: "pointer" },
                    }}
                  />
                </Box>
                <Box>
                  <ReuGradientButton
                    onClick={() => setCardState("login")}
                    variant="outlined"
                    sx={{ width: { sm: 100 }, mr: 2, py: { xs: 0, sm: 0.8 } }}
                  >
                    Login
                  </ReuGradientButton>
                </Box>
                <Box>
                  <ReuGradientButton
                    key={"sign up"}
                    variant="contained"
                    sx={{
                      width: 100,
                      py: { sm: 1, xs: 0.3 },
                    }}
                    onClick={() => setCardState("signup")}
                  >
                    Sign up
                  </ReuGradientButton>
                </Box>
              </Box> */}
              </Box>
            ) : (
              <Box>
                <ProfileMenu />
              </Box>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                ml: 2,
                mt: 0,
                alignItems: "flex-end",
              }}
            >
              <LazyBoxImage
                src={launch_robot}
                alt="Launch Robot"
                sx={{
                  height: 38,
                  width: 38,
                  mx: 1,
                  display: { xs: "block", xl: "none" },
                }}
              />
              <ReuButton
                onClick={() => navigate("/launch")}
                sx={{
                  animation: `${backgroundAnimation} 3s ease-in-out infinite`,
                  boxShadow: "1px 3px 3px rgba(66, 65, 65, 0.3)",
                  color: "#000000",
                  height: 46,
                  border: 1,
                  borderColor: "#fdfdfd",
                  borderRadius: 3.5,
                  fontSize: 12,
                  px: 1.5,
                  transition:
                    "background-color 2s ease-in-out, border-color 2s ease-in-out",
                }}
              >
                Nextgen Launch
              </ReuButton>
            </Box>

            {/* Auth Buttons - Desktop Only  */}
            {!accessToken ? (
              <>
                <Box
                  sx={{
                    border: 1.5,
                    borderColor: " #C1BABA",
                    borderRadius: 3.5,
                    boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
                    overflow: "hidden",
                    width: 190,
                    py: 0.5,
                    mt: 0,
                    ml: 3,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <ReuGradientButton
                        onClick={() => {
                          setActiveAuth("login");
                          setCardState("login");
                        }}
                        variant={activeAuth === "login" ? "contained" : "text"}
                        sx={{
                          width: { sm: 80 },
                          mr: 2,
                          py: { xs: 0, sm: 0.8 },
                          borderRadius: 2.5,
                          height: 35,
                          "&:hover": {
                            bgcolor: "#ffffff",
                          },
                          fontSize: 12,
                        }}
                      >
                        Login
                      </ReuGradientButton>
                    </Box>
                    <Box>
                      <ReuGradientButton
                        key={"sign up"}
                        variant={activeAuth === "signup" ? "contained" : "text"}
                        sx={{
                          width: 80,
                          py: { sm: 1, xs: 0.3 },
                          borderRadius: 2.5,
                          height: 35,
                          "&:hover": {
                            bgcolor: "#ffffff",
                          },
                          fontSize: 12,
                        }}
                        onClick={() => {
                          setActiveAuth("signup");
                          setCardState("signup");
                        }}
                      >
                        Sign up
                      </ReuGradientButton>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: { xs: "flex", sm: "none" },
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ mr: 2, display: { xs: "none", sm: 2 } }}>
                    <Avatar
                      onClick={() => {
                        window.location.href = "tel:+91 93602 93602";
                      }}
                      src={call_center_icon}
                      sx={{
                        height: 45,
                        width: 45,
                        mx: "auto",
                        mr: 2,
                        "&:hover": { cursor: "pointer" },
                      }}
                    />
                  </Box>
                  <Box>
                    <ReuGradientButton
                      onClick={() => setCardState("login")}
                      variant="outlined"
                      sx={{ width: { sm: 100 }, mr: 2, py: { xs: 0, sm: 0.8 } }}
                    >
                      Login
                    </ReuGradientButton>
                  </Box>
                  <Box>
                    <ReuGradientButton
                      key={"sign up"}
                      variant="contained"
                      sx={{
                        width: 100,
                        py: { sm: 1, xs: 0.3 },
                      }}
                      onClick={() => setCardState("signup")}
                    >
                      Sign up
                    </ReuGradientButton>
                  </Box>
                </Box>
              </>
            ) : (
              <Box>
                <ProfileMenu />
              </Box>
            )}
          </Box>

          {/* Hamburger Icon - Mobile Only */}
        </Toolbar>

        {/* Mobile Drawer Menu */}
        <MobileDrawer
          drawerOpen={drawerOpen}
          handleDrawerClose={handleDrawerClose}
          showHarmburgerSubmenu={showHarmburgerSubmenu}
          menuItems={menuItems}
          handleHumburgerSubMenuClose={handleHumburgerSubMenuClose}
          selectedDropDownMenu={selectedDropDownMenu}
          handleCardState={handleCardState}
          activeDrawerMenu={activeDrawerMenu}
          handleActiveDrawerMenu={handleActiveDrawerMenu}
          handleSelectedDropdownMenu={handleSelectedDropdownMenu}
          handleToggleHumburgerSubMenu={handleToggleHumburgerSubMenu}
        />
      </Container>

      {cardState === "login" && (
        <Login
          setCardStateToDefault={() => setCardState("")}
          setCardStateToForgotPassword={() => setCardState("forgotPassword")}
          setCardStateToSignup={() => setCardState("signup")}
        />
      )}

      {cardState === "signup" && (
        <Register
          setCardStateToDefault={() => setCardState("")}
          setCardStateToVerifyOtp={() => setCardState("verifyOtp")}
          setCardStateToLogin={() => setCardState("login")}
        />
      )}

      {cardState === "verifyOtp" && (
        <VerifyOtp
          setCardStateToDefault={() => setCardState("")}
          setCardStateToLogin={() => setCardState("login")}
        />
      )}

      {cardState === "forgotPassword" && (
        <ForgotPassword
          setCardStateToDefault={() => setCardState("")}
          setCardStateToLogin={() => setCardState("login")}
        />
      )}
    </AppBar>
  );
};

export default TopNav;
