import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import plansPricingChartImage from "../../assets/plans-pricing/plansPricingChartImage.png";
import ReuPlanCards from "../../components/common-reusable-components/ReuPlanCards";
import { useNavigate } from "react-router-dom";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { useState } from "react";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

const starterAccordionItems = [
  {
    id: 1,
    title: "The Essentials, Done Right",
    content: "",
    points: [
      "Core modules: Admissions, Attendance, Exams, Fees, Timetables",
      "Student, teacher & parent dashboards",
      "Secure AWS cloud hosting",
      "Web portal for administrators and staff",
      "Basic reporting tools",
      "Role-based access for secure management",
    ],
    subTitle: "Handle day-to-day academic and administrative tasks with ease.",
  },
  {
    id: 2,
    title: "Built for Simplicity & Speed",
    content: "",
    points: [
      "Fast setup with guided onboarding",
      "Free installation & staff training",
      "Easy-to-use interface for all users",
      "Data upload via Excel sheets",
      "Integrated communication via SMS & email",
    ],
    subTitle: "Everything you need to get started without complexity.",
  },
  {
    id: 3,
    title: "Designed for Growing Institutions",
    content: "",
    points: [
      "Flexible student data management",
      "Basic mobile app for communication",
      "Integration-ready: Biometric, RFID, and Payment Gateway support",
      "Website integration for admission forms, notices, and results",
    ],
    subTitle:
      "Whether you're a primary school or a growing institution, Edumaat Starter scales with your evolving needs.",
  },
  {
    id: 4,
    title: "Always Supported",
    content: "",
    points: [
      "24/7 multi-channel support (Email, WhatsApp, Phone, Skype)",
      "Access to knowledge base and product guides",
      "Periodic product updates and feature enhancements",
    ],
    subTitle: "You’re never alone — our support team is always here to help.",
  },
  // {
  //   id: 5,
  //   title: "Start with the Basics. Grow with Confidence.",
  //   content:
  //     "Experience streamlined operations and better control, right from the start.",
  //   points: [],
  //   subTitle: "",
  // },
];

const essentialAccordionItems = [
  {
    id: 1,
    title: "Everything You Need. All in One Place.",
    content: "",
    points: [
      "Full access to advanced modules (hostel, transport, finance, etc.) ",
      "Personalized dashboards for staff, students, and parents ",
      "Smart scheduling and automated timetables ",
      "Customizable report generation ",
      "Seamless integration with biometric, RFID, SMS, email, payment gateways, and more ",
      "Priority onboarding and dedicated support ",
    ],
    subTitle:
      "Edumaat Essential gives you access to an advanced suite of tools for academic and administrative excellence.",
  },
  {
    id: 2,
    title: "Designed for Growing Institutions ",
    content: "",
    points: [
      "Automate repetitive tasks",
      "Improve transparency and communication ",
      "Track performance and attendance in real time ",
      "Reduce administrative overload ",
    ],
    subTitle:
      "Whether you're expanding your student base, managing multiple campuses, or need deeper insights, Edumaat Essential scales with you.",
  },
  {
    id: 3,
    title: "Your Brand. Your Rules. ",
    content: "",
    points: [
      "Add your school logo, colors, and themes ",
      "Customize forms, workflows, and certificates ",
      "Build your own data views and permission structures ",
    ],
    subTitle: "Make your institution’s system truly yours.",
  },
  {
    id: 4,
    title: "Smart Support, Whenever You Need It ",
    content:
      "Enjoy 24/7 expert support across email, chat, phone, and WhatsApp — plus access to training and onboarding resources to keep your team empowered. ",
    points: [],
    subTitle: "",
  },
  // {
  //   id: 5,
  //   title: "Make the Switch to Smarter Administration ",
  //   content:
  //     "Join leading institutions that rely on Edumaat Essential to simplify management and elevate learning experiences.",
  //   points: [],
  //   subTitle: "",
  // },
];

const professionalAccordionItems = [
  {
    id: 1,
    title: "Power Collaboration Across Your Institution",
    content: "",
    points: [
      "Unified platform for all departments  ",
      "Role-based access for principals, teachers, students, and parents ",
      "Shared calendars, announcements, and reports  ",
      "Assign and manage tasks across departments ",
    ],
    subTitle:
      "From academic heads to administrative staff, everyone can work together smoothly in one connected system.",
  },
  {
    id: 2,
    title: "All the Control You Need ",
    content: "",
    points: [
      "Define user roles and access levels ",
      "Track changes and approvals with version history ",
      "Set up secure workflows for finance, academics, and HR ",
      "Manage multi-institution networks from one dashboard ",
    ],
    subTitle:
      "Get complete control over your institution’s data and workflows with advanced permission settings and audit trails.",
  },
  {
    id: 3,
    title: "Consistent Branding Across All Campuses ",
    content: "",
    points: [
      "Custom branding (logos, certificates, ID cards) ",
      "Branded portals and mobile apps ",
      "Reusable templates for reports, circulars, and documents ",
    ],
    subTitle:
      "Maintain a consistent identity across schools or departments with: ",
  },
  {
    id: 4,
    title: "Advanced Tools for High-Impact Outcomes ",
    content: "",
    points: [
      "Real-time analytics and dashboards ",
      "AI-powered insights and automation ",
      "Seamless integration with ERP, LMS, biometric, and payment gateways ",
      "Data migration and custom module support ",
    ],
    subTitle: "Unlock features that help your institution scale with ease: ",
  },
  // {
  //   id: 5,
  //   title: "Support You Can Count On ",
  //   content: "",
  //   points: [
  //     "24/7 premium support ",
  //     "Dedicated account manager ",
  //     "Hands-on implementation and training ",
  //     "Regular updates and personalized consultations",
  //   ],
  //   subTitle:
  //     "Get priority access to our expert support team — anytime, anywhere.  ",
  // },
  // {
  //   id: 6,
  //   title: "Edumaat Professional: One Platform. Endless Possibilities. ",
  //   content:
  //     "Elevate how your institution operates — from the classroom to the boardroom. ",
  //   points: [],
  //   subTitle: "",
  // },
];

const enterpriseAccordionItems = [
  {
    id: 1,
    title: "Tailored to Fit How You Work",
    content: "",
    points: [
      "Tailored pricing  ",
      "Fully customized modules and workflows ",
      "Personalized dashboards for different departments  ",
      "Institution-specific reports and insights ",
      "End-to-end configuration aligned with your goals ",
    ],
    subTitle:
      "No two institutions are the same. Edumaat Enterprise adapts to your unique structure, policies, and processes. ",
  },
  {
    id: 2,
    title: "Integrate Seamlessly With Your Ecosystem ",
    content: "",
    points: [
      "API integrations with third-party tools (ERP, LMS, Finance, HRMS, etc.) ",
      "Single sign-on (SSO) and secure access controls ",
      "Scalable architecture for multi-institution management ",
      "On-premise or cloud hosting — your choice ",
    ],
    subTitle:
      "We make sure Edumaat fits into your existing systems, not the other way around. ",
  },
  {
    id: 3,
    title: "Control, Compliance & Security ",
    content: "",
    points: [
      "Custom permission structures and data policies ",
      "Detailed audit logs and compliance-ready reporting ",
      "Secure infrastructure with full ownership of your data",
      "Localization support for language, region, and regulations ",
    ],
    subTitle:
      "Meet your institution’s governance, data security, and operational standards with confidence. ",
  },
  {
    id: 4,
    title: "Hands-On Partnership ",
    content: "",
    points: [
      "Dedicated project team ",
      "White-glove implementation support ",
      "Staff training across departments ",
      "Ongoing optimization based on feedback ",
    ],
    subTitle:
      "From planning to launch — and beyond — we’re with you every step of the way. ",
  },
  // {
  //   id: 5,
  //   title: "Let’s Build Edumaat Your Way ",
  //   content:
  //     "If you have a vision, we’ll help bring it to life.Custom-built for scale, flexibility, and long-term impact. ",
  //   points: [],
  //   subTitle: "",
  // },
];

export interface PlanContentAccordionItem {
  id: number;
  title: string;
  content: string;
  points: string[];
  subTitle: string;
}

interface PlanContent {
  id: string;
  title: string;
  whyEdumaatSubtitle: string;
  whyEdumaatSubtitleContent: string;
  accordionItems: PlanContentAccordionItem[];
  accordionBottomTitle: string;
  accordionBottomText: string;
}

const PlanContent: PlanContent[] = [
  {
    id: "starter",
    title: "EDUMAAT Starter",
    whyEdumaatSubtitle: "Start Smart with Edumaat Starter",
    whyEdumaatSubtitleContent:
      "The Edumaat Starter Plan is perfect for schools and institutions that are just beginning their digital transformation. Get essential tools to simplify your daily operations — all in one place.",
    accordionItems: starterAccordionItems,
    accordionBottomTitle: "Start with the Basics. Grow with Confidence",
    accordionBottomText:
      "Experience streamlined operations and better control, right from the start.",
  },
  {
    id: "smarter",
    title: " EDUMAAT Smarter",
    whyEdumaatSubtitle:
      "Take Learning Management to the Next Level with Edumaat Essential",
    whyEdumaatSubtitleContent:
      "Unlock powerful features that help your institution run smarter, faster, and more efficiently — all in one connected platform.",
    accordionItems: essentialAccordionItems,
    accordionBottomTitle: "Make the Switch to Smarter Administration",
    accordionBottomText:
      "Join leading institutions that rely on Edumaat Essential to simplify management and elevate learning experiences.",
  },
  {
    id: "ultimate",
    title: "EDUMAAT Ultimate",
    whyEdumaatSubtitle: "Built for Institutions That Think Big",
    whyEdumaatSubtitleContent:
      "Edumaat professional is designed for large schools, colleges, universities, and multi-campus institutions that need deep functionality, advanced controls, and seamless collaboration.",
    accordionItems: professionalAccordionItems,
    accordionBottomTitle:
      "Edumaat Professional: One Platform. Endless Possibilities",
    accordionBottomText:
      "Elevate how your institution operates — from the classroom to the boardroom.",
  },
  {
    id: "custom",
    title: "EDUMAAT Custom",
    whyEdumaatSubtitle: "Built Around Your Institution ",
    whyEdumaatSubtitleContent:
      "Edumaat Enterprise is for institutions that need tailor-made solutions. Whether you're a large university, an education group, or a complex campus system — we design the platform around you. ",
    accordionItems: enterpriseAccordionItems,
    accordionBottomTitle: "Let’s Build Edumaat Your Way ",
    accordionBottomText:
      "If you have a vision, we’ll help bring it to life.​Custom-built for scale, flexibility, and long-term impact.",
  },
];

const plansSample = [
  { name: "EDUMAAT Starter", priceDollar: 25, priceInr: 2140.96 },
  { name: "EDUMAAT Smarter", priceDollar: 100, priceInr: 8563.85 },
  { name: "EDUMAAT Ultimate", priceDollar: 165, priceInr: 14130.35 },
  { name: "EDUMAAT Custom", priceDollar: 330, priceInr: 28260.71 },
];

const featuresSample = [
  {
    id: 1,
    name: "Student Management ",
    availability: [true, true, true, true],
  },
  {
    id: 2,
    name: "Staff Management",
    availability: [true, true, true, true],
  },
  {
    id: 3,
    name: "Admission Management",
    availability: [true, true, true, true],
  },
  {
    id: 4,
    name: "Attendance Management",
    availability: [true, true, true, true],
  },
  {
    id: 5,
    name: "Timetable Management",
    availability: [true, true, true, true],
  },
  {
    id: 6,
    name: "Fees Management",
    availability: [true, true, true, true],
  },
  {
    id: 7,
    name: "Accounting Management",
    availability: [true, false, true, true],
  },
  {
    id: 8,
    name: "Payroll Management",
    availability: [true, false, true, true],
  },
  {
    id: 9,
    name: "Communication Management",
    availability: [true, true, true, true],
  },
  {
    id: 10,
    name: "Examination/Assessment Management",
    availability: [true, true, true, true],
  },
  {
    id: 11,
    name: "Assignment Management",
    availability: [true, false, true, true],
  },
  {
    id: 12,
    name: "Hostel Management",
    availability: [true, false, true, true],
  },
  {
    id: 13,
    name: "Transport Management",
    availability: [true, false, true, true],
  },
  {
    id: 14,
    name: "Role and Privilege Management",
    availability: [true, true, true, true],
  },
  {
    id: 15,
    name: "Student & Staff Appraisal Management",
    availability: [true, true, true, true],
  },
  {
    id: 16,
    name: "Student & Staff Behaviour Management",
    availability: [true, true, true, true],
  },
  {
    id: 17,
    name: "Library Management",
    availability: [true, false, true, true],
  },
  {
    id: 18,
    name: "Inventory and Asset Management",
    availability: [true, false, true, true],
  },
  {
    id: 19,
    name: "Job/Recruitment Management",
    availability: [true, false, true, true],
  },
  {
    id: 20,
    name: "Alumni Management",
    availability: [true, false, true, true],
  },
  {
    id: 21,
    name: "LMS (Quiz, Course, Interactive Meeting)",
    availability: [true, false, true, true],
  },
  {
    id: 22,
    name: "Canteen Management",
    availability: [true, false, true, true],
  },
  {
    id: 23,
    name: "Event Management",
    availability: [true, false, true, true],
  },
  {
    id: 24,
    name: "Utility Management",
    availability: [true, false, true, true],
  },
  {
    id: 25,
    name: "Task and To-Do Management",
    availability: [true, false, true, true],
  },
  {
    id: 26,
    name: "Visitor/Gatepass/Sickroom Management",
    availability: [true, true, true, true],
  },
  {
    id: 27,
    name: "Complaint and Feedback Management",
    availability: [true, true, true, true],
  },
  {
    id: 28,
    name: "Notification and Reminder Management",
    availability: [true, true, true, true],
  },
  {
    id: 29,
    name: "Document Management",
    availability: [true, false, true, true],
  },
  {
    id: 30,
    name: "Custom Letter and ID Card Generation",
    availability: [true, false, true, true],
  },
  {
    id: 31,
    name: "Role-Wise Dashboard",
    availability: [true, false, true, true],
  },
  {
    id: 32,
    name: "Academic Calendar",
    availability: [true, true, true, true],
  },
  {
    id: 33,
    name: "Integration (Payment, WhatsApp, Email)",
    availability: [true, false, true, true],
  },
  {
    id: 34,
    name: "Placement",
    availability: [true, false, true, true],
  },
  {
    id: 35,
    name: "Custom Report Builder",
    availability: [true, false, true, true],
  },
  {
    id: 36,
    name: "EDUMAAT AI",
    availability: [true, true, true, true],
  },
  {
    id: 37,
    name: "Booking Management",
    availability: [true, false, true, true],
  },
  {
    id: 38,
    name: "Research and Publication Management",
    availability: [true, false, true, true],
  },
  {
    id: 39,
    name: "PTA (Parent-Teacher Association)",
    availability: [true, false, true, true],
  },
  {
    id: 40,
    name: "Form Builder",
    availability: [true, false, true, true],
  },
  {
    id: 41,
    name: "Requisition and Approval Management",
    availability: [true, false, true, true],
  },
  {
    id: 42,
    name: "Backup/Restore Management",
    availability: [true, true, true, true],
  },
];

// const currencyOptions = [
//   { label: "US Dollar (USD)", value: "US Dollar (USD)" },
//   { label: "Indian Rupee (INR)", value: "Indian Rupee (INR)" },
// ];

const Plan = () => {
  const navigate = useNavigate();
  // const [currencyValue, setCurrencyValue] = useState(currencyOptions[0].value);

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };

  const plans = [
    {
      id: 1,
      title: "EDUMAAT Starter",
      description:
        "Designed for small institutions to begin their digital journey",
      description2: "Offer:  30 Days Free Access",
      buttonText: "Get Free Access",
      highlight: false,
      cardBodyContent: {
        heading: "",
        points: [
          { id: 1, renderContent: "Free Demo" },
          { id: 2, renderContent: "Free Access to all  Modules" },
          { id: 3, renderContent: "AWS Cloud Hosting" },
          { id: 4, renderContent: "Mobile App (Starter)" },
          { id: 5, renderContent: "Free Installation" },
        ],
      },
    },
    {
      id: 2,
      title: "EDUMAAT Smarter",
      description:
        "For institutions looking to automate and integrate key systems",
      description2: "Everything in Starter, plus:",
      buttonText: "Get Smarter Quote",
      highlight: true,
      cardBodyContent: {
        heading: "Access to All Basic Modules +",
        points: [
          {
            id: 1,
            renderContent: (
              <Box>
                Integration with Biometric, RFID, Email, SMS, Payment Gateway{" "}
                <Box
                  component={"span"}
                  // onClick={() =>
                  //   handlePlansNavigation(
                  //     "/ai-automation/integration-payment-gateway-whatsapp-email",
                  //     "ai-automation"
                  //   )
                  // }
                >
                  <Tooltip
                    title="Integration with Biometric, RFID, Email, SMS, Payment Gateway"
                    arrow
                    placement="top"
                  >
                    <InfoOutlineIcon
                      sx={{
                        height: 14,
                        width: 14,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
            ),
          },
          {
            id: 2,
            renderContent: (
              <Box>
                Website Integration
                <Box
                  component={"span"}
                  // onClick={() => handlePlansNavigation("/", "")}
                >
                  <Tooltip title={"Website Integration"} arrow placement="top">
                    <InfoOutlineIcon
                      sx={{
                        height: 14,
                        width: 14,
                        ml: 0.5,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
            ),
          },
          {
            id: 3,
            renderContent: (
              <Box>
                Data Migration
                <Box
                  component={"span"}
                  // onClick={() => handlePlansNavigation("/", "")}
                >
                  <Tooltip title="Data Migration" arrow placement="top">
                    <InfoOutlineIcon
                      sx={{
                        height: 14,
                        width: 14,
                        ml: 0.5,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
            ),
          },

          { id: 4, renderContent: "End-to-End Training" },
          { id: 5, renderContent: "Free Installation" },
          { id: 6, renderContent: "Mobile App (Smarter)" },
          { id: 7, renderContent: "Free Backup & Server Maintenance" },
          { id: 8, renderContent: "24x7 Support" },
        ],
      },
    },
    {
      id: 3,
      title: "EDUMAAT Ultimate",
      description:
        "Built for large institutions needing complete digital control",
      description2: "Everything in Smarter, plus:",
      buttonText: "Get a Ultimate Quote",
      highlight: true,
      cardBodyContent: {
        heading: "Full Access to All 42 Modules +",
        points: [
          { id: 1, renderContent: "Access to All Modules" },
          {
            id: 2,
            renderContent: (
              <Box>
                Integration with Biometric, RFID, Email, SMS, Payment Gateway{" "}
                <Box
                  component={"span"}
                  // onClick={() =>
                  //   handlePlansNavigation(
                  //     "/ai-automation/integration-payment-gateway-whatsapp-email",
                  //     "ai-automation"
                  //   )
                  // }
                >
                  <Tooltip
                    title="Integration with Biometric, RFID, Email, SMS, Payment Gateway"
                    arrow
                    placement="top"
                  >
                    <InfoOutlineIcon
                      sx={{
                        height: 14,
                        width: 14,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
            ),
          },
          {
            id: 3,
            renderContent: (
              <Box>
                Website Integration
                <Box
                  component={"span"}
                  // onClick={() => handlePlansNavigation("/", "")}
                >
                  <Tooltip title="Website Integration" arrow placement="top">
                    <InfoOutlineIcon
                      sx={{
                        height: 14,
                        width: 14,
                        ml: 0.5,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
            ),
          },
          {
            id: 4,
            renderContent: (
              <Box>
                Data Migration
                <Box
                  component={"span"}
                  // onClick={() => handlePlansNavigation("/", "")}
                >
                  <Tooltip title="Data Migration" arrow placement="top">
                    <InfoOutlineIcon
                      sx={{
                        height: 14,
                        width: 14,
                        ml: 0.5,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
            ),
          },

          { id: 5, renderContent: "Mobile App (Ultimate)" },
          { id: 6, renderContent: "Free Data Migration" },
          { id: 7, renderContent: "Free Backup & Server Maintenance" },
          { id: 8, renderContent: "End-to-End Training" },
          { id: 9, renderContent: "Free Installation" },
          { id: 10, renderContent: "24x7 Support" },
        ],
      },
    },
    {
      title: "EDUMAAT Custom",
      description:
        "A fully personalized ERP built around your institution's unique needs",
      description2: "Everything in Ultimate, plus:",
      buttonText: "Get Free Quote",
      highlight: true,
      cardBodyContent: {
        heading: "",
        points: [
          { id: 1, renderContent: "Custom Modules and Features" },
          {
            id: 2,
            renderContent: (
              <Box>
                Integration with Biometric, RFID, Email, SMS, Payment Gateway{" "}
                <Box
                  component={"span"}
                  // onClick={() =>
                  //   handlePlansNavigation(
                  //     "/ai-automation/integration-payment-gateway-whatsapp-email",
                  //     "ai-automation"
                  //   )
                  // }
                >
                  <Tooltip
                    title="Integration with Biometric, RFID, Email, SMS, Payment Gateway"
                    arrow
                    placement="top"
                  >
                    <InfoOutlineIcon
                      sx={{
                        height: 14,
                        width: 14,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
            ),
          },
          {
            id: 3,
            renderContent: (
              <Box>
                Website Integration
                <Box
                  component={"span"}
                  // onClick={() => handlePlansNavigation("/", "")}
                >
                  <Tooltip title="Website Integration" arrow placement="top">
                    <InfoOutlineIcon
                      sx={{
                        height: 14,
                        width: 14,
                        ml: 0.5,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
            ),
          },
          {
            id: 4,
            renderContent: (
              <Box>
                Data Migration
                <Box
                  component={"span"}
                  // onClick={() => handlePlansNavigation("/", "")}
                >
                  <Tooltip title="Data Migration" arrow placement="top">
                    <InfoOutlineIcon
                      sx={{
                        height: 14,
                        width: 14,
                        ml: 0.5,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
            ),
          },

          { id: 5, renderContent: "Mobile App (Ultimate)" },
          { id: 6, renderContent: "Free Data Migration" },
          { id: 7, renderContent: "Free Backup & Server Maintenance" },
          { id: 8, renderContent: "End-to-End Training" },
          { id: 9, renderContent: "Personalized Workflow Setup" },
          { id: 10, renderContent: "Scalable to Fit Your Future Growth" },
          { id: 11, renderContent: "24x7 Support" },
        ],
      },
    },
  ];

  return (
    <Box>
      <title>
        Edumaat ERP Pricing Plans | Starter, Smarter, Ultimate & Custom
      </title>
      <meta
        name="description"
        content="Explore Edumaat ERP pricing plans: Starter for small institutions, Smarter for growing needs, Ultimate for complete control, and Custom for personalized solutions."
      />
      <meta
        name="keywords"
        content="Edumaat ERP plans, Starter plan, Smarter plan, Ultimate plan, Custom ERP solution, education ERP pricing, school ERP software, ERP for colleges, pricing comparison, education management software"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://edumaat.com/plans-pricing" />

      {/* Banner */}
      <Box sx={{ pl: { xs: 4, lg: 14 }, pr: { xs: 4, lg: 0 }, mt:5 }}>
        <Grid container spacing={{ xs: 1, lg: 4 }}>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{ fontWeight: "bold", fontSize: { xs: 25, md: 50 } }}
              >
                Unleash effortless control with Edumaat’s super plans for
                smarter management.
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ my: { xs: 2, lg: 5 } }}
              >
                Edumaat is more than software—it’s your partner in growth.
                Manage everything from admissions to alumni, customize
                dashboards for every user, stay connected with built-in
                communication, and make smart decisions with powerful insights.
              </Typography>
              <Box sx={{ mt: { xs: 3, lg: 7 } }}>
                <ReuOutlineBorderedButton
                  variant="outlined"
                  sx={{
                    width: 250,
                    // ml: 3,
                    transition: "transform 0.4s ease,  0.4s ease, 0.4s ease",
                    willChange: "transform",
                    "&:hover": {
                      color: "#ffffff",
                      bgcolor: "#1976d2",
                      borderColor: "#1976d2",
                      boxShadow: "none",
                      transform: "scale(1.10)",
                      cursor: "pointer",
                    },
                  }}
                  onClick={handleBookFreeDemo}
                >
                  Book Now
                </ReuOutlineBorderedButton>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ sm: 6, xs: 12 }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Box
              component={"img"}
              src={plansPricingChartImage}
              alt="plansPricingChartImage "
              sx={{ height: "100%", width: { xs: "100%", lg: "90%" } }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Plans */}
      <Box
        sx={{
          mb: 8,
          background:
            "transparent linear-gradient(180deg, #F6F7F900 0%, #F6F7F9F5 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: { xs: 4, lg: 8 },
            textAlign: "center",
            mt: { xs: 5, lg: 0 },
          }}
        >
          Check Other Plans
        </Typography>
        <Box sx={{ px: { lg: 10, xs: 4 }, pb: 8 }}>
          <ReuPlanCards plans={plans} />
          <Box sx={{ mt: 7, textAlign: "center" }}>
            <ReuOutlineBorderedButton
              variant="outlined"
              sx={{
                width: 200,
                ml: 3,
                transition: "transform 0.4s ease,  0.4s ease, 0.4s ease",
                willChange: "transform",
                "&:hover": {
                  color: "#ffffff",
                  bgcolor: "#1976d2",
                  borderColor: "#1976d2",
                  boxShadow: "none",
                  transform: "scale(1.10)",
                  cursor: "pointer",
                },
              }}
              onClick={handleBookFreeDemo}
            >
              Book Now
            </ReuOutlineBorderedButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 2, sm: 8 }, mt: 5, mb: 8 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: 700, fontSize: 38, mb: 5 }}>
            Explore{" "}
            <Box
              component={"span"}
              sx={{
                color: "#db0082",
              }}
            >
              Our Offering
            </Box>
          </Typography>
        </Box>

        <Box sx={{ overflowX: "auto", borderRadius: 2, boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                    Features
                  </Typography>
                </TableCell>
                {plansSample.map((plan) => (
                  <TableCell key={plan.name} align="center" width={200}>
                    <Box
                      sx={{ px: 1, py: 2, bgcolor: "#eef2ff", borderRadius: 2 }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {plan.name}
                      </Typography>
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {featuresSample.map((feature) => (
                <TableRow
                  key={feature.name}
                  sx={{
                    "&:hover": {
                      bgcolor: "#FAF9F6",
                    },
                  }}
                >
                  <TableCell sx={{ width: 350 }}>{feature.name}</TableCell>
                  {feature.availability.map((available, idx) => (
                    <TableCell key={idx} align="center">
                      {available === true ? (
                        <CheckCircleIcon sx={{ color: "#4CBB17" }} />
                      ) : available === false ? (
                        "--"
                      ) : (
                        <Typography variant="caption">{available}</Typography>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default Plan;
