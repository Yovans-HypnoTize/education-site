import { Box, Grid, Card, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import template_card_img from "../assets/home/template_card_img.svg";
// import template_card_img from "../assets/home/template_card_img.png";
import { edumaat_home_page_icons } from "../utils/ImageContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import edumaat_robot_gif from "../assets/home/RobotImages/edumaat-robot-gif.gif";

interface CardData {
  parentId: string;
  id: string;
  title: string;
  blueIcon: string;
  blackIcon: string;
}

const cardData: CardData[] = [
  {
    parentId: "academic",
    id: "admission-management",
    title: "Admission Management",
    blueIcon: edumaat_home_page_icons.blueIcons.AdmissionBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Admission,
  },
  {
    parentId: "academic",
    id: "attendance-management",
    title: "Attendance Management",
    blueIcon: edumaat_home_page_icons.blueIcons.AttendanceBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Attendance,
  },
  {
    parentId: "academic",
    id: "timetable-management",
    title: "Timetable Management",
    blueIcon: edumaat_home_page_icons.blueIcons.Time_TableBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Time_Table,
  },
  {
    parentId: "academic",
    id: "examination-or-assessment-management",
    title: "Examination or Assessment Management",
    blueIcon: edumaat_home_page_icons.blueIcons.ExaminationBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Examination,
  },
  {
    parentId: "academic",
    id: "assignment-management",
    title: "Assignment Management",
    blueIcon: edumaat_home_page_icons.blueIcons.ReportsBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Reports,
  },
  {
    parentId: "academic",
    id: "academic-calendar",
    title: "Academic Calendar",
    blueIcon: edumaat_home_page_icons.blueIcons.CalendarBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Calendar,
  },
  {
    parentId: "academic",
    id: "pta-parent-teacher-association",
    title: "PTA (Parent-Teacher Association)",
    blueIcon: edumaat_home_page_icons.blueIcons.StaffBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Staff,
  },
  {
    parentId: "academic",
    id: "placement",
    title: "Placement",
    blueIcon: edumaat_home_page_icons.blueIcons.AttendanceBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Attendance,
  },
  {
    parentId: "academic",
    id: "alumni-management",
    title: "Alumni Management",
    blueIcon: edumaat_home_page_icons.blueIcons.StudentBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Student,
  },
  {
    parentId: "academic",
    id: "lms-quiz-course-interactive-meeting",
    title: "LMS (Quiz, Course, Interactive Meeting)",
    blueIcon: edumaat_home_page_icons.blueIcons.QuizBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Quiz,
  },
  {
    parentId: "academic",
    id: "research-and-publication-management",
    title: "Research and Publication Management",
    blueIcon: edumaat_home_page_icons.blueIcons.ReportsBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Reports,
  },
  {
    parentId: "academic",
    id: "student-and-staff-appraisal-management",
    title: "Student and Staff Appraisal Management",
    blueIcon: edumaat_home_page_icons.blueIcons.StaffBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Staff,
  },
  {
    parentId: "academic",
    id: "student-and-staff-behaviour-management",
    title: "Student and Staff Behaviour Management",
    blueIcon: edumaat_home_page_icons.blueIcons.Staff_1BlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Staff_1,
  },
  {
    parentId: "human-resource-administration",
    id: "role-wise-dashboard",
    title: "Role Wise Dashboard",
    blueIcon: edumaat_home_page_icons.blueIcons.ReportsBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Reports,
  },
  {
    parentId: "human-resource-administration",
    id: "custom-letter-and-id-card-generation",
    title: "Custom Letter and ID Card Generation",
    blueIcon: edumaat_home_page_icons.blueIcons.ExaminationBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Examination,
  },
  {
    parentId: "finance",
    id: "hostel-management",
    title: "Hostel Management",
    blueIcon: edumaat_home_page_icons.blueIcons.Sick_RoomBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Sick_Room,
  },
  {
    parentId: "human-resource-administration",
    id: "payroll-management",
    title: "Payroll Management",
    blueIcon: edumaat_home_page_icons.blueIcons.ApprovalsBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Approvals,
  },
  {
    parentId: "finance",
    id: "accounting-management",
    title: "Accounting Management",
    blueIcon: edumaat_home_page_icons.blueIcons.RBACBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.RBAC,
  },
  {
    parentId: "academic",
    id: "student-management",
    title: "Student Management",
    blueIcon: edumaat_home_page_icons.blueIcons.StudentBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Student,
  },
  {
    parentId: "finance",
    id: "inventory-and-asset-management",
    title: "Inventory and Asset Management",
    blueIcon: edumaat_home_page_icons.blueIcons.ApprovalsBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Approvals,
  },
  {
    parentId: "finance",
    id: "canteen-management",
    title: "Canteen Management",
    blueIcon: edumaat_home_page_icons.blueIcons.AdmissionBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Admission,
  },
  {
    parentId: "finance",
    id: "utility-management",
    title: "Utility Management",
    blueIcon: edumaat_home_page_icons.blueIcons.ReportsBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Reports,
  },
  {
    parentId: "finance",
    id: "booking-management",
    title: "Booking Management",
    blueIcon: edumaat_home_page_icons.blueIcons.AdmissionBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Admission,
  },
  {
    parentId: "communication",
    id: "communication-management",
    title: "Communication Management",
    blueIcon: edumaat_home_page_icons.blueIcons.CommunicationBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Communication,
  },
];

const leftCardData: CardData[] = [
  {
    parentId: "academic",
    id: "student-and-staff-behaviour-management",
    title: "Student and Staff Behaviour Management",
    blueIcon: edumaat_home_page_icons.blueIcons.StudentBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Student,
  },
  {
    parentId: "human-resource-administration",
    id: "requisition-and-approval-management",
    title: "Requisition and Approval Management",
    blueIcon: edumaat_home_page_icons.blueIcons.RequisitionsBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Requisitions,
  },
  {
    parentId: "human-resource-administration",
    id: "backup-restore-management",
    title: "Backup/Restore Management",
    blueIcon: edumaat_home_page_icons.blueIcons.Backup_RecoveryBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Backup_Recovery,
  },
  {
    parentId: "ai-automation",
    id: "document-management",
    title: "Document Management",
    blueIcon: edumaat_home_page_icons.blueIcons.ApprovalsBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Approvals,
  },
  {
    parentId: "ai-automation",
    id: "library-management",
    title: "Library Management",
    blueIcon: edumaat_home_page_icons.blueIcons.QuizBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Quiz,
  },
  {
    parentId: "ai-automation",
    id: "task-and-to-do-management",
    title: "Task and To-Do Management",
    blueIcon: edumaat_home_page_icons.blueIcons.AdmissionBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Admission,
  },
  //   { id: "custom-report-builder", title: "Custom Report Builder" },
  //   { id: "form-builder", title: "Form Builder" },
  //   {
  //     id: "integration-payment-gateway-whatsapp-email",
  //     title: "Integration (Payment Gateway, WhatsApp, Email)",
  //   },
  //   { id: "edumaat-ai", title: "EDUMAAT AI" },

  //   {
  //     id: "payroll-management",
  //     title: "Payroll Management",
  //   },
  //   { id: "accounting-management", title: "Accounting Management" },
];

const rightCardData: CardData[] = [
  {
    parentId: "human-resource-administration",
    id: "staff-management",
    title: "Staff Management",
    blueIcon: edumaat_home_page_icons.blueIcons.StaffBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Staff,
  },
  {
    parentId: "human-resource-administration",
    id: "role-and-privilege-management",
    title: "Role and Privilege Management",
    blueIcon: edumaat_home_page_icons.blueIcons.RBACBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.RBAC,
  },
  {
    parentId: "finance",
    id: "fees-management",
    title: "Fees Management",
    blueIcon: edumaat_home_page_icons.blueIcons.AdmissionBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Admission,
  },

  {
    parentId: "human-resource-administration",
    id: "job-recruitment-management",
    title: "Job/Recruitment Management",
    blueIcon: edumaat_home_page_icons.blueIcons.RequisitionsBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Requisitions,
  },
  {
    parentId: "finance",
    id: "accounting-management",
    title: "Accounting Management",
    blueIcon: edumaat_home_page_icons.blueIcons.RequisitionsBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Requisitions,
  },
  {
    parentId: "finance",
    id: "transport-management",
    title: "Transport Management",
    blueIcon: edumaat_home_page_icons.blueIcons.AdmissionBlueIcon,
    blackIcon: edumaat_home_page_icons.blackIcons.Admission,
  },
];

export default function HomeCard() {
  const theme = useTheme();
  const islg = useMediaQuery(theme.breakpoints.down("lg"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const renderCard = (label: any, index: number) => {
    return (
      <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
        <Card
          onClick={() => {
            navigate(`/${label.parentId}/${label.id}`);
          }}
          onMouseEnter={() => setHoveredCardId(label.id)}
          onMouseLeave={() => setHoveredCardId(null)}
          sx={{
            height: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 2,
            cursor: "pointer",
            borderRadius: 3,
            border: "2px solid transparent",
            transition: "border-color 0.3s ease",
            "&:hover": {
              borderColor: "#1976d2",
            },
          }}
        >
          <Box
            component={"img"}
            src={label.id === hoveredCardId ? label.blueIcon : label.blackIcon}
            alt={`${label.id}_${label.title}`}
            sx={{ height: 30, width: 30 }}
          />
          <Typography variant="body2" sx={{ mt: 1, fontSize: 12 }}>
            {label.title}
          </Typography>
        </Card>
      </Grid>
    );
  };

  const renderLeftRightCard = (label: any, index: number) => {
    return (
      <Grid size={{ xs: 12, lg: 6 }} key={`${label.id}_${index}`}>
        <Card
          onClick={() => {
            navigate(`/${label.parentId}/${label.id}`);
          }}
          onMouseEnter={() => setHoveredCardId(label.id)}
          onMouseLeave={() => setHoveredCardId(null)}
          sx={{
            height: { xs: 142, sm: 100, md: 140, lg: 130 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 2,
            cursor: "pointer",
            borderRadius: 3,
            border: "2px solid transparent",
            transition: "border-color 0.3s ease",
            "&:hover": {
              borderColor: "#1976d2",
            },
            "@media (min-width: 1336px)": {
              height: 255,
            },
            "@media (min-width: 1426px)": {
              height: 150,
            },
            "@media (min-width: 1506px)": {
              height: 200,
            },
            "@media (min-width: 1928px)": {
              height: 245,
            },
            "@media (min-width: 2448px)": {
              height: 275,
            },
          }}
        >
          <Box
            component={"img"}
            src={label.id === hoveredCardId ? label.blueIcon : label.blackIcon}
            alt={`${label.id}_${label.title}`}
            sx={{ height: 30, width: 30 }}
          />
          <Typography variant="body2" sx={{ mt: 1, fontSize: 12 }}>
            {label.title}
          </Typography>
        </Card>
      </Grid>
    );
  };

  const renderEmptyCard = (label: any, index: number) => (
    <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
      <Card
        sx={{
          height: 120,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: 2,
          cursor: "pointer",
          borderRadius: 3,
          border: "2px solid transparent",
          transition: "border-color 0.3s ease",
          "&:hover": {
            borderColor: "#1976d2",
          },
        }}
      ></Card>
    </Grid>
  );

  return (
    <Box sx={{ flexGrow: 1, px: 2, pb: 10, position: "relative" }}>
      {/* Gradient Overlays */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 70,
          background:
            "linear-gradient(to bottom, #E8EDFF, rgba(232,237,255,0))",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to top, #E8EDFF, rgba(232,237,255,0))",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: { xs: 0, sm: 200 },
          background: "linear-gradient(to right, #E8EDFF, rgba(232,237,255,0))",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: { xs: 0, sm: 200 },
          background: "linear-gradient(to left, #E8EDFF, rgba(232,237,255,0))",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          position: "relative", // ensure it's below gradients
          zIndex: 1,
        }}
      >
        {/* {isSm
          ? cardData.slice(0, 2).map((item, i) => renderEmptyCard(item, i))
          : cardData.slice(0, 6).map((item, i) => renderEmptyCard(item, i))} */}

        {isSm
          ? cardData.slice(0, 4).map((item, i) => renderCard(item, i))
          : cardData.slice(0, 12).map((item, i) => renderCard(item, i))}

        {/* Center image with hover effect */}
        <Grid size={{ xs: 12 }}>
          <Grid container>
            <Grid size={{ xs: 2, lg: 3 }}>
              {!isSm && (
                <Grid container spacing={2}>
                  {islg
                    ? leftCardData
                        .slice(3)
                        .map((item, i) => renderLeftRightCard(item, i))
                    : leftCardData.map((item, i) =>
                        renderLeftRightCard(item, i)
                      )}
                </Grid>
              )}
            </Grid>
            <Grid size={{ sm: 8, lg: 6 }}>
              <Box
                sx={{
                  mx: 1,
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  // border: "2px solid transparent",
                  transition: "border-color 0.3s ease",
                  "&:hover": {
                    // boxShadow: "0px 1px 10px rgba(0,0,0,0.1)",
                  },
                  // bgcolor:"red"
                }}
              >
                <Box
                  component="img"
                  src={template_card_img}
                  alt="Edumaat AI"
                  sx={{
                    width: "97%",
                    height: "100%",

                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <Box
                  component={"img"}
                  src={edumaat_robot_gif}
                  alt="Robot GIF"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-52%, -50%)",
                    height: { xs: 80, sm: 150 },
                    width: { xs: 80, sm: 150 },
                    zIndex: 2,
                  }}
                />
              </Box>
            </Grid>
            {!isSm && (
              <Grid size={{ xs: 2, lg: 3 }}>
                <Grid container spacing={2}>
                  {islg
                    ? rightCardData
                        .slice(3)
                        .map((item, i) => renderLeftRightCard(item, i))
                    : rightCardData.map((item, i) =>
                        renderLeftRightCard(item, i)
                      )}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>

        {isSm
          ? cardData.slice(14).map((item, i) => renderCard(item, i + 12))
          : cardData.slice(12).map((item, i) => renderCard(item, i + 12))}
        {/* {isSm
          ? cardData.slice(0, 2).map((item, i) => renderEmptyCard(item, i))
          : cardData.slice(0, 6).map((item, i) => renderEmptyCard(item, i))} */}
      </Grid>
    </Box>
  );
}
