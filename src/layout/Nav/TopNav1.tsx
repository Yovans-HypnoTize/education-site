import React, { useRef, useState } from "react";
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
  Popover,
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

import AcademicImage from "../../assets/solutions-spotlight/icons/Academic.png";
import AdmissionImage from "../../assets/solutions-spotlight/icons/Admission.png";
import ApprovalsImage from "../../assets/solutions-spotlight/icons/Approvals.png";
import AttendanceImage from "../../assets/solutions-spotlight/icons/Attendance.png";
import Backup_RecoveryImage from "../../assets/solutions-spotlight/icons/Backup_Recovery.png";
import CalendarImage from "../../assets/solutions-spotlight/icons/Calendar.png";
import CommunicationImage from "../../assets/solutions-spotlight/icons/Communication.png";
import ComplaintsImage from "../../assets/solutions-spotlight/icons/Complaints.png";
import ExaminationImage from "../../assets/solutions-spotlight/icons/Examination.png";
import Form_BuilderImage from "../../assets/solutions-spotlight/icons/Form_Builder.png";
import GalleryImage from "../../assets/solutions-spotlight/icons/Gallery.png";
import InventoryImage from "../../assets/solutions-spotlight/icons/Inventory.png";
import QuizImage from "../../assets/solutions-spotlight/icons/Quiz.png";
import RBACImage from "../../assets/solutions-spotlight/icons/RBAC.png";
import Reminder_HubImage from "../../assets/solutions-spotlight/icons/Reminder_Hub.png";
import ReportsImage from "../../assets/solutions-spotlight/icons/Reports.png";
import RequisitionsImage from "../../assets/solutions-spotlight/icons/Requisitions.png";
import Sick_RoomImage from "../../assets/solutions-spotlight/icons/Sick_Room.png";
import StaffImage from "../../assets/solutions-spotlight/icons/Staff.png";
import StudentImage from "../../assets/solutions-spotlight/icons/Student.png";
import Time_TableImage from "../../assets/solutions-spotlight/icons/Time_Table.png";
import TransportImage from "../../assets/solutions-spotlight/icons/Transport.png";

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
            icon: StudentImage,
          },
          {
            id: "admission-management",
            title: "Admission Management",
            img: featuresForYourInstitutionCardImage2,
            icon: AdmissionImage,
          },
          {
            id: "attendance-management",
            title: "Attendance Management",
            img: featuresForYourInstitutionCardImage4,
            icon: AttendanceImage,
          },
          {
            id: "timetable-management",
            title: "Timetable Management",
            img: featuresForYourInstitutionCardImage5,
            icon: Time_TableImage,
          },
          {
            id: "examination-or-assessment-management",
            title: "Examination or Assessment Management",
            img: featuresForYourInstitutionCardImage6,
            icon: ExaminationImage,
          },
          {
            id: "assignment-management",
            title: "Assignment Management",
            img: featuresForYourInstitutionCardImage7,
            icon: ApprovalsImage,
          },
          {
            id: "academic-calendar",
            title: "Academic Calendar",
            img: featuresForYourInstitutionCardImage7,
            icon: AcademicImage,
          },
          {
            id: "pta-parent-teacher-association",
            title: "PTA (Parent-Teacher Association)",
            icon: RBACImage,
          },
          {
            id: "placement",
            title: "Placement",
            img: featuresForYourInstitutionCardImage7,
            icon: CalendarImage,
          },
          {
            id: "alumni-management",
            title: "Alumni Management",
            img: featuresForYourInstitutionCardImage7,
            icon: AcademicImage,
          },
          {
            id: "lms-quiz-course-interactive-meeting",
            title: "LMS (Quiz, Course, Interactive Meeting)",
            icon: QuizImage,
          },
          {
            id: "research-and-publication-management",
            title: "Research and Publication Management",
            img: featuresForYourInstitutionCardImage7,
            icon: InventoryImage,
          },
          {
            id: "student-and-staff-appraisal-management",
            title: "Student and Staff Appraisal Management",
            icon: StaffImage,
          },
          {
            id: "student-and-staff-behaviour-management",
            title: "Student and Staff Behaviour Management",
            icon: StudentImage,
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
          {
            id: "staff-management",
            title: "Staff Management",
            icon: StaffImage,
          },
          {
            id: "payroll-management",
            title: "Payroll Management",
            icon: InventoryImage,
          },
          {
            id: "job-recruitment-management",
            title: "Job/Recruitment Management",
            icon: Form_BuilderImage,
          },
          {
            id: "requisition-and-approval-management",
            title: "Requisition and Approval Management",
            icon: RequisitionsImage,
          },
          {
            id: "role-and-privilege-management",
            title: "Role and Privilege Management",
            icon: RBACImage,
          },
          {
            id: "role-wise-dashboard",
            title: "Role Wise Dashboard",
            icon: ReportsImage,
          },
          {
            id: "custom-letter-and-id-card-generation",
            title: "Custom Letter and ID Card Generation",
            icon: InventoryImage,
          },
          {
            id: "backup-restore-management",
            title: "Backup/Restore Management",
            icon: Backup_RecoveryImage,
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
          {
            id: "fees-management",
            title: "Fees Management",
            icon: InventoryImage,
          },
          {
            id: "accounting-management",
            title: "Accounting Management",
            icon: AdmissionImage,
          },
          {
            id: "hostel-management",
            title: "Hostel Management",
            icon: Sick_RoomImage,
          },
          {
            id: "transport-management",
            title: "Transport Management",
            icon: TransportImage,
          },
          {
            id: "inventory-and-asset-management",
            title: "Inventory and Asset Management",
            icon: InventoryImage,
          },
          {
            id: "canteen-management",
            title: "Canteen Management",
            icon: AdmissionImage,
          },
          {
            id: "utility-management",
            title: "Utility Management",
            icon: ApprovalsImage,
          },
          {
            id: "booking-management",
            title: "Booking Management",
            icon: CalendarImage,
          },
        ],
      },
      {
        title: "Communication & Engagement",
        id: "communication",
        icon: <ApartmentIcon sx={{ color: "#B2BEB5" }} />,
        tagline:
          "Handles interaction with students, staff, parents, and the community. ",
        items: [
          {
            id: "communication-management",
            title: "Communication Management",
            icon: CommunicationImage,
          },
          {
            id: "notification-and-reminder-management",
            title: "Notification and Reminder Management",
            icon: Reminder_HubImage,
          },
          {
            id: "event-management",
            title: "Event Management",
            icon: AdmissionImage,
          },
          {
            id: "complaint-and-feedback-management",
            title: "Complaint and Feedback Management",
            icon: ComplaintsImage,
          },
          {
            id: "visitor-gate-pass-sickroom-management",
            title: "Visitor/Gate pass/Sickroom Management",
            icon: RBACImage,
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
          {
            id: "document-management",
            title: "Document Management",
            icon: ApprovalsImage,
          },
          {
            id: "library-management",
            title: "Library Management",
            icon: InventoryImage,
          },
          {
            id: "task-and-to-do-management",
            title: "Task and To-Do Management",
            icon: AdmissionImage,
          },
          {
            id: "custom-report-builder",
            title: "Custom Report Builder",
            icon: ReportsImage,
          },
          {
            id: "form-builder",
            title: "Form Builder",
            icon: Form_BuilderImage,
          },
          {
            id: "integration-payment-gateway-whatsapp-email",
            title: "Integration (Payment Gateway, WhatsApp, Email)",
            icon: RequisitionsImage,
          },
          { id: "edumaat-ai", title: "EDUMAAT AI", icon: RBACImage },
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

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const [activeOnHoverSubmenu, setActiveOnHoverSubmenu] = useState(null);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openSubmenuItem, setOpenSubmenuItem] = useState<any | null>(null);
  const [activeItem, setActiveItem] = useState<any | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (
  event: React.MouseEvent<HTMLElement>,
  item: any
) => {
  clearTimeout(closeTimeout.current as NodeJS.Timeout);

  // If you're hovering a different item, switch instantly
  if (activeItem?.label !== item.label) {
    setAnchorEl(event.currentTarget);
    setActiveItem(item);
  }
};

const handleMouseLeave = () => {
  closeTimeout.current = setTimeout(() => {
    setAnchorEl(null);
    setActiveItem(null);
  }, 200); // or 150ms for faster transition
};


  const handleSubmenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    item: any
  ) => {
    setAnchorEl(event.currentTarget);
    setOpenSubmenuItem(item);
  };

  const handleSubmenuClose = () => {
    setAnchorEl(null);
    setOpenSubmenuItem(null);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleOnHoverSubMenu = (value: any) => {
    setActiveOnHoverSubmenu(value);
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
      <Toolbar
        disableGutters
        sx={{
          width: "100%",
          px: { sm: 5 },
          display: { xl: "flex" },
          justifyContent: { xs: "flex-start", xl: "center" },
        }}
      >
        <>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Box sx={{ display: { xs: "flex", sm: "none" } }}>
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
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  justifyContent: "space-around",
                  border: { sm: "1.5px solid  #C1BABA" },
                  borderRadius: { sm: 3.5 },
                  overflow: "hidden",
                  boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
                  gap: 2,
                  mt: { lg: 2 },
                  // bgcolor:"red",
                  width: { sm: 270, lg: "auto" },
                }}
              >
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ display: { lg: "none" } }}
                >
                  <MenuIcon sx={{ color: "#000", display: { lg: "none" } }} />
                </IconButton>

                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    alignItems: "center",
                    justifyContent: "flex-end",
                    // width: 110,
                    pl: { md: 2 },
                  }}
                >
                  <Link
                    href="/"
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <LazyBoxImage
                      src={edumaatLogo}
                      alt="Edumaat Logo"
                      sx={{ height: "100%", width: 38 }}
                    />
                  </Link>
                </Box>
                <Box
                  sx={{
                    height: 38,
                    width: 3,
                    bgcolor: "#949292ff",

                    mr: 0.1,
                    display: { xs: "none", sm: "block" },
                  }}
                />
                <Box
                  sx={{
                    width: "100%",
                    display: { xs: "none", sm: "block" },
                    pr: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: { xs: 12, lg: 14 },
                      py: 0.5,
                    }}
                  >
                    One Solution, <br />
                    Endless Possibilities...
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Menu Items - Desktop Only */}
            {/* ----------------------------------------------------------------------------- */}

            {/* <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: 2,
                ml: 4,
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
                  sx={{ zIndex: 70, px: accessToken ? 2 : 1 }}
                >
                  <div
                  
                    // onMouseEnter={() => handleToggleSubmenu(item.label)}
                    style={{ position: "relative" }}
                  >
                    <HeaderButton item={item} key={item.label} handleSubmenuOpen={handleSubmenuOpen}/>
                    {(item?.type === "dropDownMenu" ||
                      item.type === "dropDown") && (
                      <>
                        <Popover
                          open={openSubmenuItem?.label === item.label}
                          anchorEl={anchorEl}
                          onClose={handleSubmenuClose}
                          disableScrollLock
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          PaperProps={{
                            onMouseEnter: () =>
                              clearTimeout(closeTimeout.current),
                            onMouseLeave: handleSubmenuClose,
                            sx: { mt: 1.5, boxShadow: 3 },
                          }}
                        >
                          {item.label === "Solutions Spotlight" ? (
                            <SolutionSpotlightMenuCard
                              item={item}
                              handleToggleSubmenu={() =>
                                setOpenSubmenuItem(null)
                              }
                              handleOnHoverSubMenu={() => {}}
                            />
                          ) : (
                            <DropDownMenuCard
                              item={item}
                              handleToggleSubmenu={() =>
                                setOpenSubmenuItem(null)
                              }
                              handleOnHoverSubMenu={() => {}}
                            />
                          )}
                        </Popover>
                      </>
                    )}

                    {(item?.type === "dropDownMenu" ||
                      item.type === "dropDown") && (
                      <Card
                        className="submenu-card"
                        style={{
                          display:
                            activeSubmenuLabel === item.label
                              ? "block"
                              : "none",
                        }}
                      >
                        {item.label === "Solutions Spotlight" ? (
                          <SolutionSpotlightMenuCard
                            item={item}
                            key={`${item.label}_${item.type}`}
                            handleToggleSubmenu={handleToggleSubmenu}
                            handleOnHoverSubMenu={handleOnHoverSubMenu}
                          />
                        ) : (
                          <DropDownMenuCard
                            item={item}
                            key={`${item.label}_${item.type}`}
                            handleToggleSubmenu={handleToggleSubmenu}
                            handleOnHoverSubMenu={handleOnHoverSubMenu}
                          />
                        )}
                      </Card>
                    )}
                  </div>
                </Box>
              ))}
            </Box> */}

            {/* <Box
              onMouseEnter={() =>
                clearTimeout(closeTimeout.current as NodeJS.Timeout)
              }
              onMouseLeave={handleMouseLeave}
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: 2,
                ml: 4,
                border: 1.5,
                borderColor: " #C1BABA",
                borderRadius: 3.5,
                boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
                mt: 2,
                py: 0.5,
                px: 2,
                position: "relative", // ensures positioning context
              }}
            >
              {menuItems.map((item: any) => (
                <Box
                  key={item.label}
                  onMouseEnter={(e) => {
                    if (activeItem?.label !== item.label) {
                      setAnchorEl(e.currentTarget);
                      setActiveItem(item);
                    }
                  }}
                  sx={{ zIndex: 70, px: accessToken ? 2 : 1 }}
                >
                  <HeaderButton item={item} />
                </Box>
              ))}

              <Popover
                open={Boolean(anchorEl && activeItem)}
                anchorEl={anchorEl}
                disableRestoreFocus
                onClose={() => {
                  setAnchorEl(null);
                  setActiveItem(null);
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                disableScrollLock
                slotProps={{
                  paper: {
                    onMouseEnter: () =>
                      clearTimeout(closeTimeout.current as NodeJS.Timeout),
                    onMouseLeave: handleMouseLeave,
                    sx: {
                      mt: 1,
                      boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
                      borderRadius: 2,
                      overflow: "visible",
                    },
                  },
                }}
              >
                {activeItem?.type === "dropDownMenu" ||
                activeItem?.type === "dropDown" ? (
                  activeItem.label === "Solutions Spotlight" ? (
                    <SolutionSpotlightMenuCard
                      item={activeItem}
                      handleToggleSubmenu={() => setActiveItem(null)}
                      handleOnHoverSubMenu={() => {}}
                    />
                  ) : (
                    <DropDownMenuCard
                      item={activeItem}
                      handleToggleSubmenu={() => setActiveItem(null)}
                      handleOnHoverSubMenu={() => {}}
                    />
                  )
                ) : null}
              </Popover>
            </Box> */}
           <Box
  onMouseLeave={handleMouseLeave}
  onMouseEnter={() => clearTimeout(closeTimeout.current as NodeJS.Timeout)}
  sx={{
    display: { xs: "none", lg: "flex" },
    gap: 2,
    ml: 4,
    border: 1.5,
    borderColor: "#C1BABA",
    borderRadius: 3.5,
    boxShadow: "1px 3px 3px rgba(0,0,0,0.3)",
    mt: 2,
    py: 0.5,
    px: 2,
    position: "relative",
  }}
>
  {menuItems.map((item: any, index:number) => (
    <Box
      key={`${item.label}_${index}`}
      onMouseEnter={(e) => {
  if (
    item.type === "dropDownMenu" ||
    item.type === "dropDown"
  ) {
    if (activeItem?.label !== item.label) {
      setAnchorEl(e.currentTarget);
      setActiveItem(item);
    }
  } else {
    setAnchorEl(null);
    setActiveItem(null);
  }
}}
onMouseLeave={(e) => {
  if (
    item.type === "dropDownMenu" ||
    item.type === "dropDown"
  ) {
    setAnchorEl(null);
    setActiveItem(null);
  }
}}
      sx={{ zIndex: 70, px: accessToken ? 2 : 1, "&:hover": {cursor:"pointer"} }}
    >
      <HeaderButton item={item} />
    </Box>
  ))}

  {(activeItem?.type === "dropDownMenu" || activeItem?.type === "dropDown") && (
  <Popover
    open={Boolean(anchorEl)}
    anchorEl={anchorEl}
    onClose={() => {
      setAnchorEl(null);
      setActiveItem(null);
    }}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    transformOrigin={{ vertical: "top", horizontal: "left" }}
    disableRestoreFocus
    disableScrollLock
    slotProps={{
      paper: {
        onMouseEnter: () =>
          clearTimeout(closeTimeout.current as NodeJS.Timeout),
        onMouseLeave: handleMouseLeave,
        sx: {
          mt: 1,
          boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
          borderRadius: 2,
          overflow: "visible",
        },
      },
    }}
  >
    {activeItem.label === "Solutions Spotlight" ? (
      <SolutionSpotlightMenuCard
        item={activeItem}
        handleToggleSubmenu={() => setActiveItem(null)}
        handleOnHoverSubMenu={() => {}}
      />
    ) : (
      <DropDownMenuCard
        item={activeItem}
        handleToggleSubmenu={() => setActiveItem(null)}
        handleOnHoverSubMenu={() => {}}
      />
    )}
  </Popover>
)}

  {/* <Popover
    open={Boolean(anchorEl && activeItem)}
    anchorEl={anchorEl}
    onClose={() => {
      setAnchorEl(null);
      setActiveItem(null);
    }}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    transformOrigin={{ vertical: "top", horizontal: "left" }}
    disableRestoreFocus
    disableScrollLock
    slotProps={{
      paper: {
        onMouseEnter: () =>
          clearTimeout(closeTimeout.current as NodeJS.Timeout),
        onMouseLeave: handleMouseLeave,
        sx: {
          mt: 1,
          boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
          borderRadius: 2,
          overflow: "visible",
        },
      },
    }}
  >
    {activeItem?.type === "dropDownMenu" || activeItem?.type === "dropDown" ? (
      activeItem.label === "Solutions Spotlight" ? (
        <SolutionSpotlightMenuCard
          item={activeItem}
          handleToggleSubmenu={() => setActiveItem(null)}
          handleOnHoverSubMenu={() => {}}
        />
      ) : (
        <DropDownMenuCard
          item={activeItem}
          handleToggleSubmenu={() => setActiveItem(null)}
          handleOnHoverSubMenu={() => {}}
        />
      )
    ) : <></>}
  </Popover> */}
</Box>



            {/* ----------------------------------------------------------------------------- */}

            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                ml: 3,
                mt: 2,
                alignItems: "flex-end",
              }}
            >
              <LazyBoxImage
                src={launch_robot}
                alt="Launch Robot"
                sx={{
                  height: 40,
                  width: 40,
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
                  fontSize: 16,
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
                    px: 2,
                  }}
                >
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
                        mr: 1,
                        py: { xs: 0, sm: 0.8 },
                        borderRadius: 2.5,
                        // bgcolor:"red",
                        height: 39,
                        "&:hover": {
                          bgcolor:
                            activeAuth === "login" ? "#1976d2" : "#ffffff",
                        },
                        fontSize: 16,
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
                        width: 100,
                        py: { sm: 1, xs: 0.3 },
                        borderRadius: 2.5,
                        height: 39,
                        "&:hover": {
                          bgcolor:
                            activeAuth === "signup" ? "#1976d2" : "#ffffff",
                        },
                        fontSize: 16,
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
            ) : (
              <Box sx={{ mt: 2, ml: 3, display: { xs: "none", lg: "flex" } }}>
                <ProfileMenu />
              </Box>
            )}
          </Box>

          <Box
            sx={{
              display: { xs: "flex", lg: "none" },
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
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
                            bgcolor:
                              activeAuth === "login" ? "#1976d2" : "#ffffff",
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
                            bgcolor:
                              activeAuth === "signup" ? "#1976d2" : "#ffffff",
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: { sm: 2 },
                  mr: { xs: 2, sm: 0 },
                }}
              >
                <ProfileMenu />
              </Box>
            )}
          </Box>
        </>

        {/* Hamburger Icon - Mobile Only */}
      </Toolbar>

      <Container>
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
