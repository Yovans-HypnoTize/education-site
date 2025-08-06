import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReuTabs from "../../components/common-reusable-components/ReuTabs";

const tabCollection = [
  {
    id: "academic",
    title: "Academic & Learning Management",
    children: {
      left: {
        img: "",
      },
      right: {
        heading: "",
        points: [
          {
            id: "student-management",
            title: "Student Management",
          },
          {
            id: "admission-management",
            title: "Admission Management",
          },

          {
            id: "attendance-management",
            title: "Attendance Management",
          },
          {
            id: "timetable-management",
            title: "Timetable Management",
          },
          {
            id: "examination-or-assessment-management",
            title: "Examination or Assessment Management",
          },
          {
            id: "assignment-management",
            title: "Assignment Management",
          },
          {
            id: "academic-calendar",
            title: "Academic Calendar",
          },
          {
            id: "pta-parent-teacher-association",
            title: "PTA (Parent-Teacher Association)",
          },
          {
            id: "placement",
            title: "Placement",
          },
          {
            id: "alumni-management",
            title: "Alumni Management",
          },
          {
            id: "lms-quiz-course-interactive-meeting",
            title: "LMS (Quiz, Course, Interactive Meeting)",
          },
          {
            id: "research-and-publication-management",
            title: "Research and Publication Management",
          },
          {
            id: "student-and-staff-appraisal-management",
            title: "Student and Staff Appraisal Management",
          },
          {
            id: "student-and-staff-behaviour-management",
            title: "Student and Staff Behaviour Management",
          },
        ],
      },
    },
  },
  {
    id: "human-resource-administration",
    title: "Human Resource & Administration",
    children: {
      left: {
        img: "",
      },
      right: {
        heading: "",
        points: [
          {
            id: "staff-management",
            title: "Staff Management",
          },
          {
            id: "payroll-management",
            title: "Payroll Management",
          },
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
          {
            id: "role-wise-dashboard",
            title: "Role Wise Dashboard",
          },
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
    },
  },
  {
    id: "finance",
    title: "Finance & Infrastructure Management ",
    children: {
      left: {
        img: "",
      },
      right: {
        heading: "",
        points: [
          {
            id: "fees-management",
            title: "Fees Management",
          },
          {
            id: "accounting-management",
            title: "Accounting Management",
          },
          {
            id: "hostel-management",
            title: "Hostel Management",
          },
          {
            id: "transport-management",
            title: "Transport Management",
          },
          {
            id: "inventory-and-asset-management",
            title: "Inventory and Asset Management",
          },
          {
            id: "canteen-management",
            title: "Canteen Management",
          },
          {
            id: "utility-management",
            title: "Utility Management",
          },
          {
            id: "booking-management",
            title: "Booking Management",
          },
        ],
      },
    },
  },
  {
    id: "communication",
    title: "Communication & Engagement ",
    children: {
      left: {
        img: "",
      },
      right: {
        heading: "",
        points: [
          {
            id: "communication-management",
            title: "Communication Management",
          },
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
    },
  },
  {
    id: "ai-automation",
    title: "Tools, Customization & Integration",
    children: {
      left: {
        img: "",
      },
      right: {
        heading: "",
        points: [
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
            title: "Integration (Payment Gateway/WhatsApp/Email)",
          },
          { id: "edumaat-ai", title: "EDUMAAT AI" },
        ],
      },
    },
  },
];

const Features = () => {
  const navigate = useNavigate();

  const handlePointClick = (id: string, parentID: string) => {
    navigate(`/${parentID}/${id}`, { state: parentID });
  };

  const tabItemsWithHandlers = tabCollection.map((tab) => ({
    ...tab,
    children: {
      ...tab.children,
      right: {
        ...tab.children.right,
        points: tab.children.right.points.map((point) => ({
          ...point,
          onClick: () => handlePointClick(point.id, tab.id),
        })),
      },
    },
  }));

  return (
    <Box>
      <title>
        Features – Edumaat | All-in-One ERP for Educational Institutions
      </title>
      <meta
        name="description"
        content="Explore the full range of features offered by Edumaat ERP including automation, integration, data management, and smart decision-making tools for schools and colleges."
      />
      <meta
        name="keywords"
        content="Edumaat features, education ERP, school management software, college ERP, institutional automation, Edumaat modules"
      />
      <meta name="author" content="Edumaat" />

      <Box sx={{ px: { xs: 3, sm: 5, lg: 22 }, mt: 3, mb: 3 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
            Features
          </Typography>
        </Box>
      </Box>
      <Box sx={{ px: { xs: 3, sm: 4 } }}>
        <ReuTabs
          tabItems={tabItemsWithHandlers}
          variant="custom-card-box"
          showClickableCursor={true}
        />
      </Box>
    </Box>
  );
};

export default Features;
