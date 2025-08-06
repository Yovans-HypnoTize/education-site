import ReuButton from "../components/ReuButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Card, Typography, Grid, IconButton, Avatar } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { SmartCampusCards } from "./about/Testimonials";
import ReuGradientButton from "../components/common-reusable-components/ReuGradientButton";
import ReuPlanCards from "../components/common-reusable-components/ReuPlanCards";
import PartnersSlider from "../components/PartnersSlider";
import StatesCount from "../components/StatesCount";
import ReuOutlineBorderedButton from "../components/common-reusable-components/ReuOutlineBorderedButton";

import overallImages from "../assets/Group 68.png";
import mainImage4 from "../assets/home/university_image.svg";
import testimonial_Islamic_Welfare_Society from "../assets/testimonial/Islamic-Welfare-Society.jpg";
import testimonial_Jaya_Vasavi_Mstriculation from "../assets/testimonial/Jaya-Vasavi-Mstriculation-School.png";
import testimonial_Reserve_Bank_School from "../assets/testimonial/Reserve-Bank-Schoo,..png";
import testimonial_tirukkoilur_college from "../assets/testimonial/tirukkoilur-college-of-arts-science-villupuram.jpg";
import admmissionImage from "../assets/home/admission_management.jpg";
import stafftImage from "../assets/home/staff_management.jpg";
import requisitionImage from "../assets/home/requisition_approval.jpg";
import learningImage from "../assets/home/learning_management_system.jpg";
import feesImage from "../assets/home/fees_management.jpg";
import attendanceImage from "../assets/home/attendance_management.jpg";
import custom_core_image from "../assets/home/Customizable_Core_icon.png";
import aws_image from "../assets/home/aws_icon.png";
import saas_image from "../assets/home/saas_icon.png";
import Available_100_Languages from "../assets/home/Available_100_Languages_icon.png";
import green_valley_public_school_dindigul_logo from "../assets/home/green_valley_public_school_dindigul_logo.jpg";
import Actionable_Insights_Image from "../assets/home/RobotImages/ActionableInsightOneClickImage.png";
import AI_powered_education_platform from "../assets/home/RobotImages/CreatewithAIImage.png";
import Make_Informed_Decisions_Faster from "../assets/home/RobotImages/MakeInformedAndDecisionFasterImage.png";
import download_our_app_image from "../assets/home/download_app_image.png";
import cardImage_1 from "../assets/resource/cardImages/cardImage_1.png";
import cardImage_2 from "../assets/resource/cardImages/cardImage_2.png";
import cardImage_3 from "../assets/resource/cardImages/cardImage_3.png";
import cardImage_4 from "../assets/resource/cardImages/cardImage_4.png";
import QueriesAccordion from "../components/plans-pricing-components/QueriesAccordion";
import faqPersonImage from "../assets/plans-pricing/faqPersonImage.png";
import LazyImage from "../components/LazyImage";
import LazyBoxImage from "../components/LazyBoxImage";
import HomeCard from "../components/HomeCard";

import Home_page_day_attendance from "../assets/home/Home_page_day_attendance.png";
import HomeFeatureGrid from "../components/HomeFeatureGrid";
import ReuAccordion from "../components/plans-pricing-components/ReuAccordion";
import { blogCardImage } from "../utils/ImageContainer";

const cards = [
  {
    path: "/academic/admission-management",
    parentId: "academic",
    title: "Admission Management",
    imgSrc: admmissionImage,
    alt: "Illustration showing admission management",
    containerColor: "linear-gradient(135deg,rgb(244, 82, 82), #FDB469)",
  },
  {
    path: "/human-resource-administration/staff-management",
    parentId: "human-resource-administration",
    title: "Staff Management",
    imgSrc: stafftImage,
    alt: "Illustration showing staff management",
    containerColor:
      "linear-gradient(135deg,rgb(247, 70, 140),rgb(168, 63, 225))",
  },
  {
    path: "/human-resource-administration/requisition-and-approval-management",
    parentId: "human-resource-administration",
    title: "Requisition & Approval",
    imgSrc: requisitionImage,
    alt: "Illustration showing requistion and approval",
    containerColor:
      "linear-gradient(135deg,rgb(154, 190, 225),rgb(160, 62, 246))",
  },
  {
    path: "/finance/fees-management",
    parentId: "finance",
    title: "Fees Management",
    imgSrc: feesImage,
    alt: "Illustration showing fees management",
    containerColor: "linear-gradient(135deg,rgb(243, 74, 141), #C04DFF)",
  },
  {
    path: "/academic/lms-quiz-course-interactive-meeting",
    parentId: "academic",
    title: "Learning Management System",
    imgSrc: learningImage,
    alt: "Illustration showing learning management",
    containerColor:
      "linear-gradient(135deg,rgb(88, 152, 217),rgb(127, 80, 167))",
  },
  {
    path: "/academic/attendance-management",
    parentId: "academic",
    title: "Attendance  Management",
    imgSrc: attendanceImage,
    alt: "Illustration showing attendance management",
    containerColor:
      "linear-gradient(135deg,rgb(137, 178, 220),rgb(122, 46, 188))",
  },
];

const smartCampusCards: SmartCampusCards[] = [
  {
    id: 1,
    title: "Reserve Bank Staff Quarters School",
    content:
      "As a school administrator, I found EDUMAAT extremely helpful in streamlining our daily operations. The system is user-friendly and covers everything from attendance to report generation. Highly recommended for institutions looking for efficiency and transparency.",
    img: testimonial_Reserve_Bank_School,
  },
  {
    id: 2,
    title: "Jaya Vasavi Matriculation School",
    content:
      "Our institution was struggling with manual data entry and inconsistent reporting before we adopted EDUMAAT. The platform provided a comprehensive solution for managing student information, fees, and academic records.",
    img: testimonial_Jaya_Vasavi_Mstriculation,
  },
  {
    id: 3,
    title: "Tirukkoilur College of Arts & Science",
    content:
      "What really sets EDUMAAT apart is their customer support. Whenever we had a question or needed customization, their team responded quickly and professionally. The implementation was smooth, and our staff was up to speed in no time.",
    img: testimonial_tirukkoilur_college,
  },
  {
    id: 4,
    title: "Green Valley School",
    content:
      "EDUMAAT has been a game-changer for our school. One of the standout features is the ability to customize modules according to our unique workflow. Whether it's fee structures, exam formats, or transport management, everything is adaptable. We finally feel in control of our data.",
    img: green_valley_public_school_dindigul_logo,
  },
  {
    id: 5,
    title: "Islamic Welfare Society",
    content:
      "Managing a large school used to be a logistical nightmare, but EDUMAAT has simplified things immensely. The dashboard gives me real-time insights into attendance, performance, and finance—all in one place. It's become an essential part of our operations.",
    img: testimonial_Islamic_Welfare_Society,
  },
  // {
  //   id: 6,
  //   title: "Indian Institute of Food Processing Technology",
  //   content:
  //     "Before EDUMAAT, we spent hours every week compiling attendance and preparing reports manually. Now, it's all automated. The time we've saved is now spent on improving education quality. It's a smart investment for any institution.",
  //   img: testimonial_Indian_Institute,
  // },
  // {
  //   id: 7,
  //   title: "Carmel High School",
  //   content:
  //     "As an IT coordinator, I’ve worked with multiple ERP systems, and EDUMAAT stands out in terms of simplicity and stability. The cloud access is secure and reliable, and system updates are smooth. Integration with our existing infrastructure was easy.",
  //   img: testimonial_carmel_high_school,
  // },
  // {
  //   id: 8,
  //   title: "Modern High School",
  //   content:
  //     "We’ve received great feedback from parents since implementing EDUMAAT. The parent portal and mobile app give them real-time access to their child’s attendance, marks, and fees. It’s improved transparency and trust in our institution.",
  //   img: testimonial_Modern_High_School,
  // },
  // {
  //   id: 9,
  //   title: "Mount Litera Zee School",
  //   content:
  //     "We recently started using EDUMAAT, and the onboarding process was seamless. The support team guided us through every step. Even our less tech-savvy staff were comfortable using the system within a week.",
  //   img: testimonial_Mount_Litera_zee,
  // },
  // {
  //   id: 10,
  //   title: "Alraneem Private School",
  //   content:
  //     "We’ve been using EDUMAAT for over seven years now, and it continues to evolve with our needs. From academic planning to library management, the platform handles it all efficiently. Their commitment to continuous improvement is commendable.",
  //   img: testimonial_Al_Raneem_Logo,
  // },
];

const discoverDifference = [
  {
    id: "student-information-system-what-it-is-how-it-helps-schools",
    imgSrc: blogCardImage.cardImage_1,
    title: "Student Information System: What It Is & How It Helps Schools",
    subtilte:
      "Imagine a school day where everything runs seamlessly. Parents are instantly notified of ...",
  },
  {
    id: "the-impact-of-multilingual-erp-software-on-international-schools",
    imgSrc: blogCardImage.cardImage_2,
    title: "The Impact of Multilingual ERP Software on International Schools",
    subtilte:
      "Is language diversity creating challenges in your school’s management? In international ...",
  },
  {
    id: "the-role-of-fee-and-financial-management-in-school-success",
    imgSrc: blogCardImage.cardImage_3,
    title: "The Role of Fee and Financial Management in School Success",
    subtilte:
      "How well does your school manage its finances, and how does this impact ...",
  },
  {
    id: "why-your-school-needs-a-student-performance-tracking-system",
    imgSrc: blogCardImage.cardImage_4,
    title: "Why Your School Needs a Student Performance Tracking System",
    subtilte:
      "Is your school equipped to truly understand each student’s progress and challenges ...",
  },
];

const features = [
  {
    imgSrc: Available_100_Languages,
    alt: "available-100-languages",
    title: "Available in 100+ Languages",
    subTitle: "Speak the language of your learners.",
    description:
      "From Hindi to Hausa, Tamil to Thai — Edumaat supports over 100 regional and global languages so your campus can connect with everyone, everywhere.",
  },
  {
    imgSrc: custom_core_image,
    alt: "customizable-core",
    title: "Customizable to the Core",
    subTitle:
      "One size doesn’t fit all. Good thing Edumaat doesn’t believe in one size.",
    description:
      "Tailor workflows, modules, and experiences to fit your unique institution — whether you’re a school, college, or vocational hub.",
  },
  {
    imgSrc: aws_image,
    alt: "powered-aws-core",
    title: "Powered by AWS",
    subTitle: "Run your campus on one of the world’s fastest clouds.",
    description:
      "Hosted securely on Amazon Web Services, Edumaat ensures reliability, speed, and scalability at your fingertips — 24/7.",
  },
  {
    imgSrc: saas_image,
    alt: "flexible-pricing-data",
    title: "Flexible Pricing",
    subTitle: "We flex, so your budget doesn’t have to.",
    description:
      "Choose from one-time licenses, monthly SaaS models, annual subscriptions, or even pay-per-module. Your plan, your pace.",
  },
];

const responsive = {
  bigDesktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1439, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const responsiveCardCarousel = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsiveCardCarouselForDiscoverDifference = {
  bigDesktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1439, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const faqAccordionItems = [
  {
    id: 1,
    title: "What is Edumaat and how can it help our school or college?",
    content:
      "Edumaat is a software that helps manage school or college work like attendance, exams, fees, and more. It saves time and makes everything easier and faster.",
    points: [],
    subTitle: "",
  },
  {
    id: 2,
    title: "Can we change Edumaat to match how our school works?",
    content:
      "Yes, Edumaat can be changed to fit your school’s rules and way of working.",
    points: [],
    subTitle: "",
  },
  {
    id: 3,
    title: "Is our data safe in Edumaat?",
    content:
      "Yes, your data is safe. Edumaat uses strong security to keep your information private and protected.",
    points: [],
    subTitle: "",
  },
  {
    id: 4,
    title:
      "Can Edumaat work with other systems like fingerprint attendance or online payments?",
    content:
      "Yes, Edumaat can connect with systems like fingerprint machines, online payment apps, and more.",
    points: [],
    subTitle: "",
  },
  {
    id: 5,
    title: "Will we get help in using Edumaat?",
    content:
      "Yes, Edumaat gives full training and support to help you and your team use the system easily.",
    points: [],
    subTitle: "",
  },
];

const edumaatFaqData = [
  {
    id: 1,
    question: "What is EDUMAAT ERP, and how does it benefit our institution?",
    answer:
      "EDUMAAT ERP is an all-in-one digital management system designed to streamline school/college operations, including admissions, attendance, exams, fees, and communication. It enhances efficiency, reduces paperwork, and provides real-time insights for better decision-making.",
  },
  {
    id: 2,
    question: "How secure is the data stored in EDUMAAT ERP?",
    answer:
      "Data security is our top priority. EDUMAAT uses bank-grade encryption, role-based access control, and regular backups to ensure sensitive student, staff, and financial information remains protected.",
  },
  {
    id: 3,
    question: "Can EDUMAAT ERP integrate with our existing systems?",
    answer:
      "Yes! EDUMAAT is designed for seamless integration with learning management systems (LMS), payment gateways, biometric devices, and other third-party tools to ensure a unified workflow.",
  },
  {
    id: 4,
    question:
      "How does the ERP improve communication between teachers, parents, and admin?",
    answer:
      "The system offers automated notifications, SMS/email alerts, parent portals, and mobile apps to keep all stakeholders updated on attendance, exams, fees, and announcements in real time.",
  },
  {
    id: 5,
    question: "What kind of reports and analytics does EDUMAAT provide?",
    answer:
      "Leadership gets customizable dashboards with insights on student performance, fee collection, staff productivity, and institutional growth trends—helping in data-driven decision-making.",
  },
  {
    id: 6,
    question: "How does EDUMAAT handle fee management and financial tracking?",
    answer:
      "The ERP automates fee collection, receipts, due reminders, and reconciliation, reducing errors and delays. It also generates financial reports for audits and budget planning.",
  },
  {
    id: 7,
    question: "Is training provided for staff to use EDUMAAT ERP effectively?",
    answer:
      "Absolutely! We offer onboarding sessions, video tutorials, and 24/7 support to ensure smooth adoption by teachers, admin staff, and management.",
  },
  {
    id: 8,
    question: "Can EDUMAAT be accessed remotely?",
    answer:
      "Yes, it’s a cloud-based system accessible via web and mobile apps, allowing admins, teachers, and parents to stay connected from anywhere.",
  },
  {
    id: 9,
    question: "How does the ERP assist in exam and grading management?",
    answer:
      "EDUMAAT automates timetable generation, grading, report cards, and performance analysis, reducing manual workload and improving accuracy.",
  },
  {
    id: 10,
    question: "What if we need custom features for our institution?",
    answer:
      "We provide customizable modules tailored to your needs, whether it’s transport management, library systems, or alumni tracking.",
  },
  {
    id: 11,
    question:
      "How does EDUMAAT support regulatory compliance (e.g., board exams, accreditation)?",
    answer:
      "The system maintains audit-ready records, generates compliance reports, and ensures adherence to education board requirements effortlessly.",
  },
  {
    id: 12,
    question:
      "What’s the cost structure, and is it scalable for growing institutions?",
    answer:
      "EDUMAAT offers flexible pricing plans (subscription-based or one-time) and scales seamlessly as your student/staff numbers increase.",
  },
];

const SmartCampusCardItem = ({ card, idx }: { card: any; idx: number }) => {
  return (
    <Box
      key={`smart_${idx}`}
      sx={{
        p: { xs: 1, sm: 2 },
        bgcolor: "#fff",
        mx: { xs: 0, sm: 2 },
        borderRadius: 5,
        height: { xs: 240, sm: 250, md: 200 },
      }}
    >
      <Box sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "20%",
          }}
        >
          <Avatar
            src={`${card.img}` || card.title}
            alt={card.title}
            sx={{
              border: 1,
              borderColor: "gray",
              width: { xs: 40, sm: 40 },
              height: { xs: 40, sm: 40 },
              boxShadow: "1px 2px 6px rgb(73, 71, 71)",
            }}
          />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700,
              ml: { xs: 1, sm: 1.8 },
            }}
          >
            {card.title}
          </Typography>
        </Box>
        <Box
          sx={{
            height: "80%",
            display: "flex",
            pt: 3,
          }}
        >
          <Typography sx={{ fontSize: 12 }}>{card.content}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const handlePlansNavigation = (path: string, parentId: string) => {
    navigate(path, { state: parentId });
  };

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
                  onClick={() =>
                    handlePlansNavigation(
                      "/ai-automation/integration-payment-gateway-whatsapp-email",
                      "ai-automation"
                    )
                  }
                >
                  <OpenInNewIcon
                    sx={{
                      height: 14,
                      width: 14,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
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
                  onClick={() => handlePlansNavigation("/", "")}
                >
                  <OpenInNewIcon
                    sx={{
                      height: 14,
                      width: 14,
                      ml: 0.5,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
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
                  onClick={() => handlePlansNavigation("/", "")}
                >
                  <OpenInNewIcon
                    sx={{
                      height: 14,
                      width: 14,
                      ml: 0.5,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
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
                  onClick={() =>
                    handlePlansNavigation(
                      "/ai-automation/integration-payment-gateway-whatsapp-email",
                      "ai-automation"
                    )
                  }
                >
                  <OpenInNewIcon
                    sx={{
                      height: 14,
                      width: 14,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
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
                  onClick={() => handlePlansNavigation("/", "")}
                >
                  <OpenInNewIcon
                    sx={{
                      height: 14,
                      width: 14,
                      ml: 0.5,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
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
                  onClick={() => handlePlansNavigation("/", "")}
                >
                  <OpenInNewIcon
                    sx={{
                      height: 14,
                      width: 14,
                      ml: 0.5,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
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
                  onClick={() =>
                    handlePlansNavigation(
                      "/ai-automation/integration-payment-gateway-whatsapp-email",
                      "ai-automation"
                    )
                  }
                >
                  <OpenInNewIcon
                    sx={{
                      height: 14,
                      width: 14,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
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
                  onClick={() => handlePlansNavigation("/", "")}
                >
                  <OpenInNewIcon
                    sx={{
                      height: 14,
                      width: 14,
                      ml: 0.5,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
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
                  onClick={() => handlePlansNavigation("/", "")}
                >
                  <OpenInNewIcon
                    sx={{
                      height: 14,
                      width: 14,
                      ml: 0.5,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
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
    <div>
      <title>Edumaat ERP </title>
      <meta
        name="description"
        content="Streamline your educational institution with Edumaat ERP. Explore smart academic workflows, flexible pricing plans, success stories, and insightful blogs."
      />
      <meta
        name="keywords"
        content="school ERP software, college management system, education ERP, pricing plans, customer testimonials, Edumaat blogs"
      />
      <meta name="author" content="Edumaat" />

      <div className="home-intro-container">
        <Box sx={{ mt: { xs: 5, sm: 0, lg: 4 } }}>
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 55 },
              mb: { xs: 2, sm: 0 },
              fontWeight: 700,
            }}
          >
            Future of Education Management
          </Typography>
        </Box>
        {/* <Box sx={{ mt: { xs: 5, sm: 0, lg: 4 } }}>
          <Typography
            sx={{ fontSize: { xs: 32, sm: 50 }, mb: { xs: 2, sm: 0 } }}
          >
            Future of{" "}
            <span className="home-welcome-text-spcl">Education Management</span>
          </Typography>
        </Box> */}

        <Box
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          sx={{ width: "100%", marginBottom: "30px" }}
        >
          <Typography
            sx={{
              width: { xs: "85%", md: "65%" },
              fontSize: 16,
            }}
          >
            NextGen EDUMAAT , powered by AI, empowers institutions, elevates
            education, and helps you evolve into the future of intelligent
            learning and management.
          </Typography>
        </Box>

        {/* <Box
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          sx={{ width: "100%", marginBottom: "30px" }}
        >
          <Typography
            component={"i"}
            sx={{
              width: { xs: "85%", md: "65%" },
              fontSize: 20,
            }}
          >
            NextGen <span className="home-welcome-text-spcl"> EDUMAAT </span>,
            powered by AI, empowers institutions, elevates education, and helps
            you evolve into the future of intelligent learning and management.
          </Typography>
        </Box> */}

        {/* <ReuGradientButton
          key={"get starter plan"}
          variant="contained"
          sx={{ px: { sm: 8, xs: 2 }, py: { sm: 1.5, xs: 0.3 } }}
          onClick={handleBookFreeDemo}
        >
          Book Now
        </ReuGradientButton> */}

        {/* <Box
          sx={{
            marginTop: "50px",
            px: { sm: 5 },
          }}
        >
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlay={true}
            partialVisible={true}
            autoPlaySpeed={3000}
            arrows={true}
            customLeftArrow={
              <IconButton
                sx={{
                  position: "absolute",
                  left: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  backgroundColor: "rgba(0,0,0,0.33)",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#000",
                  },
                }}
                key={"arrow-left"}
              >
                <ArrowBackIos
                  sx={{ ml: 0.5, color: "#fff" }}
                  key={"arrow-left-icon"}
                />
              </IconButton>
            }
            customRightArrow={
              <IconButton
                sx={{
                  position: "absolute",
                  right: 17,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  backgroundColor: "rgba(0,0,0,0.33) ",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#000",
                  },
                }}
                key={"arrow-right"}
              >
                <ArrowForwardIos
                  sx={{ ml: 0.5, color: "#fff" }}
                  key={"arrow-right-icon"}
                />
              </IconButton>
            }
            keyBoardControl
            pauseOnHover={false}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {cards.map((card, idx) => (
              <Box
                sx={{
                  width: "93%",
                  ml: 7,
                  p: 0,
                  my: 1,
                  boxShadow: "0px 3px 12px #00000040",
                  borderRadius: 3,
                  background: card.containerColor ?? "",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  height: 280,
                }}
                onClick={() => {
                  navigate(card.path, { state: card.parentId });
                }}
                key={`Illustration_${idx}`}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    py: 2,
                    fontSize: 16,
                    fontWeight: 700,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                >
                  {card.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    pb: 5,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    pl: 5,
                  }}
                >
                  <LazyImage
                    src={card.imgSrc}
                    alt={card.alt}
                    style={{
                      width: "100%",
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      height: "180px",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>

        <h1 style={{ marginTop: "5%" }}>A Perfect Fit for All</h1>

        <Box sx={{ px: { lg: 12, sm: 6, xs: 4 } }}>
          <ReuPlanCards plans={plans} showBody={false} />
        </Box> */}

        <Box>
          <HomeFeatureGrid />
        </Box>

        {/* <Box sx={{ position: "relative", mb: 55 }}>
          <Box sx={{ zIndex: 1 }}>
            <HomeFeatureGrid />
          </Box>
          <Box sx={{ position: "absolute", top: "43%", zIndex: -1 }}>
            <LazyBoxImage
              src={Home_page_day_attendance}
              alt="Home Attendence Service"
              sx={{ height: "100%", width: "100vw" }}
            />
          </Box>
        </Box> */}

        <Box
          sx={{
            mt: { xs: 12, sm: 40, md: 58, lg: 12 },
            textAlign: "center",
            pb: 8,
            "@media (min-width: 1556px)": {
              mt: 60,
            },
            "@media (min-width: 1936px)": {
              mt: 80,
            },
            "@media (min-width: 2262px)": {
              mt: 100,
            },
            "@media (min-width: 2500px)": {
              mt: 120,
            },
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 38, mb: 5 }}>
              Our{" "}
              <Box
                component={"span"}
                sx={{
                  color: "#db0082",
                }}
              >
                Impact & Reach
              </Box>
            </Typography>
          </Box>
          <StatesCount />
        </Box>

        <Box
          sx={{
            background: `radial-gradient(closest-side at 50% 50%, #FFFFFF40 0%, #9AAFFF40 100%)`,
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 0%",
            backgroundOrigin: "padding-box",
          }}
        >
          <Box sx={{ pt: 8, mx: { xs: 2, sm: 0 } }}>
            <Typography
              sx={{
                fontSize: { xs: 25, sm: 30 },
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              Templates for Every Academic and Administrative Need
            </Typography>
            <Typography sx={{ fontSize: 14, my: 3 }}>
              Easily customize templates for report cards, attendance,
              timetables, event invites, and more. Whether it’s for <br />{" "}
              teaching or admin work, Edumaat helps you get it done faster and
              better.
            </Typography>
          </Box>
          <HomeCard />
        </Box>

        {/* <div>
          <h1>Templates for Every Academic and Administrative Need</h1>
          <p
            className="home-welcome-sub-text"
            style={{ width: "65%", margin: "0 auto", color: "#707070" }}
          >
            Easily customize templates for report cards, attendance, timetables,
            event invites, and more. Whether it’s for teaching or admin work,
            Edumaat helps you get it done faster and better.
          </p>

          <Box sx={{ px: 8, mt: 5 }}>
            <LazyImage
              src={overallImages}
              alt="Custom Plan Illustration"
              className="home-dashboard-samples-img"
              style={{ width: "100%", height: 500 }}
            />
          </Box>

          <div className="templates-btns-container"></div>
          <ReuOutlineBorderedButton
            variant="outlined"
            sx={{ width: 200 }}
            onClick={handleBookFreeDemo}
          >
            Book Now
          </ReuOutlineBorderedButton>
        </div> */}

        <Box sx={{ backgroundColor: "#f6f7f9", p: { xs: 0, sm: 3 } }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 30,
              mb: 3,
              textAlign: "center",
            }}
          >
            Trusted by
          </Typography>
          <PartnersSlider />
        </Box>

        <div className="alternative-section-container-1">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: "20px",
              overflow: "hidden",
              bgcolor: "#fff",
            }}
          >
            {/* Left Image Block */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                p: 2,
              }}
            >
              <LazyBoxImage
                src={AI_powered_education_platform}
                alt="Team Discussion"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  height: "auto",
                  // height: { xs: 200, sm: 250, lg: "380px" },
                  borderRadius: "16px",
                }}
              />
              {/* <Box
                component="img"
                src={AI_powered_education_platform}
                alt="Team Discussion"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  height: "auto",
                  // height: { xs: 200, sm: 250, lg: "380px" },
                  borderRadius: "16px",
                }}
              /> */}
            </Box>

            {/* Right Text Block */}
            <Box
              sx={{
                flex: 1,
                textAlign: "left",
                margin: "3%",
              }}
            >
              <h2>Create with AI using EDUMAAT</h2>
              <Typography sx={{ lineHeight: 1.8, fontSize: "1.115rem" }}>
                Unlock the future of education with EDUMAAT's AI-powered
                platform. Designed to simplify and supercharge campus
                operations, our intelligent tools help institutions streamline
                processes, improve decision-making, and personalize learning
                experiences.
              </Typography>

              <div style={{ textAlign: "left", marginTop: 25 }}>
                <ReuGradientButton
                  variant="contained"
                  sx={{
                    borderRadius: 2.3,
                    height: 50,
                    backgroundColor: "#1976d2",
                  }}
                  onClick={() => {
                    navigate("/ai-automation/edumaat-ai", {
                      state: "ai-automation",
                    });
                  }}
                >
                  Explore now
                </ReuGradientButton>
              </div>
            </Box>
          </Box>
        </div>

        <div className="alternative-section-container-1">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: "20px",
              overflow: "hidden",
              bgcolor: "#fff",
            }}
          >
            {/* Left Image Block */}
            <Box
              sx={{
                flex: 1,
                textAlign: "left",
                margin: "3%",
              }}
            >
              <h2>Make Informed Decisions Faster</h2>
              <Typography sx={{ lineHeight: 1.8, fontSize: "1.115rem" }}>
                EDUMAAT combines AI-driven insights with real-time data to help
                education leaders act with confidence. From academic performance
                to financial forecasting, our intelligent dashboards put the
                right information at your fingertips — when it matters most.
              </Typography>

              <div style={{ textAlign: "left", marginTop: 25 }}>
                <ReuGradientButton
                  variant="contained"
                  sx={{
                    borderRadius: 2.3,
                    height: 50,
                    backgroundColor: "#1D70BC",
                  }}
                  onClick={() => {
                    navigate("/plans-pricing");
                  }}
                >
                  Explore now
                </ReuGradientButton>
              </div>
            </Box>

            {/* Right Text Block */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                p: 2,
              }}
            >
              <LazyBoxImage
                src={Make_Informed_Decisions_Faster}
                alt="Team Discussion"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  height: "auto",
                  // height: { xs: 200, sm: 250, lg: "380px" },
                  borderRadius: "16px",
                }}
              />
              {/* <Box
                component="img"
                src={Make_Informed_Decisions_Faster}
                alt="Team Discussion"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  height: "auto",
                  // height: { xs: 200, sm: 250, lg: "380px" },
                  borderRadius: "16px",
                }}
              /> */}
            </Box>
          </Box>
        </div>

        <div className="alternative-section-container-1">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: "20px",
              overflow: "hidden",
              bgcolor: "#fff",
            }}
          >
            {/* Left Image Block */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                p: 2,
              }}
            >
              <LazyBoxImage
                src={Actionable_Insights_Image}
                alt="Team Discussion"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  height: "auto",
                  // height: { xs: 200, sm: 250, lg: "380px" },
                  borderRadius: "16px",
                }}
              />
              {/* <Box
                component="img"
                src={Actionable_Insights_Image}
                alt="Team Discussion"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  height: "auto",
                  // height: { xs: 200, sm: 250, lg: "380px" },
                  borderRadius: "16px",
                }}
              /> */}
            </Box>

            {/* Right Text Block */}
            <Box
              sx={{
                flex: 1,
                textAlign: "left",
                margin: { lg: "3%" },
              }}
            >
              <h2>Actionable Insights in One Click</h2>
              <h3>Stay Connected. Stay Informed. Always.</h3>
              <Typography sx={{ lineHeight: 1.8, fontSize: "1.115rem" }}>
                With EDUMAAT’s AI-powered platform, complex data becomes clear,
                actionable insight — available at the speed of a single click.
                No more digging through spreadsheets or waiting on reports. Just
                instant clarity, built for smarter educational outcomes.
              </Typography>

              <div style={{ textAlign: "left", marginTop: 25 }}>
                <ReuGradientButton
                  variant="contained"
                  sx={{
                    borderRadius: 2.3,
                    height: 50,
                    backgroundColor: "#1D70BC",
                  }}
                  onClick={() => {
                    navigate("/plans-pricing");
                  }}
                >
                  Explore now
                </ReuGradientButton>
              </div>
            </Box>
          </Box>
        </div>

        <div className="hero-section">
          <div className="hero-content">
            <Typography
              className="hero-title"
              sx={{ fontSize: 25, fontWeight: 700, px: { xs: 2, md: 0 } }}
            >
              Smarter campuses start with Edumaat
            </Typography>

            <Box sx={{ p: { xs: 1, sm: 2 } }}>
              <Carousel
                responsive={responsiveCardCarousel}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                autoPlay={true}
                partialVisible={true}
                autoPlaySpeed={2000}
                arrows={false}
                pauseOnHover={false}
                keyBoardControl
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
              >
                {smartCampusCards.map((card, idx) => (
                  <SmartCampusCardItem
                    card={card}
                    key={`smart_card_${idx}`}
                    idx={idx}
                  />
                  // <Box
                  //   key={idx}
                  //   sx={{
                  //     p: { xs: 1, sm: 2 },
                  //     bgcolor: "#fff",
                  //     mx: { xs: 0, sm: 2 },
                  //     borderRadius: 5,
                  //     height: { xs: 240, sm: 250, md: 200 },
                  //   }}
                  // >
                  //   <Box sx={{ height: "100%" }}>
                  //     <Box
                  //       sx={{
                  //         display: "flex",
                  //         alignItems: "center",
                  //         justifyContent: "center",
                  //         height: "20%",
                  //       }}
                  //     >
                  //       <Avatar
                  //         src={`${card.img}` || card.title}
                  //         alt={card.title}
                  //         sx={{
                  //           border: 1,
                  //           borderColor: "gray",
                  //           width: { xs: 40, sm: 40 },
                  //           height: { xs: 40, sm: 40 },
                  //           boxShadow: "1px 2px 6px rgb(73, 71, 71)",
                  //         }}
                  //       />
                  //       <Typography
                  //         sx={{
                  //           fontSize: 12,
                  //           fontWeight: 700,
                  //           ml: { xs: 1, sm: 1.8 },
                  //         }}
                  //       >
                  //         {card.title}
                  //       </Typography>
                  //     </Box>
                  //     <Box
                  //       sx={{
                  //         height: "80%",
                  //         display: "flex",
                  //         pt: 3,
                  //       }}
                  //     >
                  //       <Typography sx={{ fontSize: 12 }}>
                  //         {card.content}
                  //       </Typography>
                  //     </Box>
                  //   </Box>
                  // </Box>
                ))}
              </Carousel>

              <ReuButton
                variant="contained"
                sx={{
                  padding: "2px",
                  minWidth: "10%",
                  margin: "2%",
                  backgroundColor: "#FFFFFF",
                  color: "#111111",
                  mt: { xs: 2, md: 3 },
                  mb: { xs: 2, md: 1 },
                }}
                onClick={() => {
                  navigate("/testimonials");
                }}
              >
                View More
              </ReuButton>
            </Box>
          </div>
        </div>

        <h1
          style={{ marginTop: "5%", paddingRight: "20px", paddingLeft: "20px" }}
        >
          Yes! We Help Your Institution Stand Out & Succeed
        </h1>

        <Box sx={{ px: { xs: 4, sm: 6, lg: 14 }, mb: 8 }}>
          <Grid container spacing={2} alignItems={"stretch"}>
            {features.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
                <Card
                  key={index}
                  elevation={0}
                  sx={{
                    backgroundColor: "#F2F3F5",
                    borderRadius: 5,
                    textAlign: "left",
                    padding: 2,
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <LazyImage
                      src={item.imgSrc}
                      alt={`features_${item.alt}`}
                      style={{ height: 150, width: 150 }}
                    />
                    {/* <img
                      src={item.imgSrc}
                      height={150}
                      width={150}
                      alt={`features_${item.alt}`}
                    /> */}
                  </Box>
                  <Box sx={{ px: 3 }}>
                    <Typography
                      fontWeight={800}
                      gutterBottom
                      sx={{ marginTop: "20%", fontSize: "12px" }}
                    >
                      {item.title}
                    </Typography>
                    <Box sx={{ pb: 2 }}>
                      <Typography sx={{ color: "#333333", fontSize: 14 }}>
                        {" "}
                        {item.subTitle}
                      </Typography>
                      <Typography sx={{ color: "#333333", fontSize: 14 }}>
                        {" "}
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Typography
          component={"h1"}
          sx={{ fontWeight: "bold", fontSize: 32, px: { xs: 2, lg: 0 } }}
        >
          The plan that powers your institution
        </Typography>
        <Typography sx={{ width: "65%", margin: "0 auto", color: "#707070" }}>
          Give teachers, admins, and management the tools to work smarter — all
          in one platform.
        </Typography>

        <div className="institution-plans-section">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: "20px",
              overflow: "hidden",
              bgcolor: "#fff",
              mt: 4,
            }}
          >
            {/* Left Image Block */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                p: 2,
              }}
            >
              <LazyBoxImage
                src={mainImage4}
                alt="Team Discussion"
                sx={{
                  width: "100%",
                  height: { xs: "440px", md: "520px", lg: "440px" },
                  borderRadius: "16px",
                }}
              />
              {/* <Box
                component="img"
                src={mainImage4}
                alt="Team Discussion"
                sx={{
                  width: "100%",
                  height: "550px",
                  borderRadius: "16px",
                }}
              /> */}
            </Box>

            {/* Right Text Block */}
            <Box
              sx={{
                flex: 1,
                textAlign: "left",
                margin: "3%",
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                AI that works for education
              </Typography>
              <p style={{ fontSize: "1.115rem" }}>
                Use AI to generate reports, suggest personalized learning paths,
                and automate repetitive admin tasks.
              </p>
              <Typography variant="h6" fontWeight={700}>
                Keep your school’s identity consistent
              </Typography>
              <p style={{ fontSize: "1.115rem" }}>
                Create and reuse branded templates for certificates, reports,
                and communications across departments.
              </p>
              <Typography variant="h6" fontWeight={700}>
                Smart workflows, simplified
              </Typography>
              <p style={{ fontSize: "1.115rem" }}>
                Manage permissions, assign academic or admin tasks, and
                streamline approvals — all from your dashboard.
              </p>

              <div style={{ textAlign: "center" }}>
                <ReuGradientButton
                  key={"get starter plan"}
                  variant="contained"
                  sx={{ px: { sm: 8, xs: 2 }, py: { sm: 1, xs: 0.3 } }}
                  onClick={() => {
                    navigate("/plans-pricing");
                  }}
                >
                  Explore Edumaat Plans
                </ReuGradientButton>
              </div>
            </Box>
          </Box>
        </div>

        <h1>Explore Our Blogs</h1>
        <Typography
          className="home-welcome-sub-text"
          sx={{ mb: 2, color: "#707070" }}
        >
          From automation to insights, Edumaat is full of features designed to
          surprise you.
        </Typography>
        <Box sx={{ px: 4, mb: 8 }}>
          <Carousel
            responsive={responsiveCardCarouselForDiscoverDifference}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlay={true}
            arrows={false}
            pauseOnHover={false}
            partialVisible={true}
            autoPlaySpeed={6000}
            keyBoardControl
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {discoverDifference.reverse().map((card, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    bgcolor: "#f2f2f2",
                    borderRadius: 5,
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  navigate(`blogs/${card.id}`);
                }}
              >
                <Box
                  sx={{
                    margin: "7%",
                  }}
                >
                  <LazyBoxImage
                    sx={{
                      width: { xs: "200px", sm: "100%" },
                      marginTop: "3%",
                      userSelect: "none",
                      pointerEvents: "none",
                      borderRadius: 5,
                    }}
                    src={card?.imgSrc}
                    alt={`${card?.imgSrc}_${idx}`}
                  />
                  {/* <Box
                    component={"img"}
                    sx={{
                      width: { xs: "200px", sm: "300px" },
                      marginTop: "3%",
                      userSelect: "none",
                      pointerEvents: "none",
                      borderRadius: 10,
                    }}
                    src={card?.imgSrc}
                    alt={`${card?.imgSrc}_${idx}`}
                  /> */}
                  <div style={{ textAlign: "left" }}>
                    <h5>{card?.title}</h5>
                    <p
                      className="home-welcome-sub-text"
                      style={{ margin: "0 auto", color: "#707070" }}
                    >
                      {card?.subtilte}
                    </p>
                  </div>
                </Box>
              </Box>
            ))}
          </Carousel>
          <ReuGradientButton
            key={"get starter plan"}
            variant="contained"
            sx={{ px: { sm: 8, xs: 2 }, py: { sm: 1, xs: 0.3 }, mt: 2 }}
            onClick={() => {
              navigate("/blogs");
            }}
          >
            View Our Blogs
          </ReuGradientButton>
        </Box>

        <Box
          sx={{
            padding: { xs: 5, lg: "50px" },
            margin: "1%",
            background: "linear-gradient(to right, #12BAF8, #FF5AB9)",
            minHeight: { xl: "350px" },
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: 30, lg: "50px" },
              mb: { xs: 3, lg: 0 },
            }}
          >
            Get Started with Edumaat
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: 18,
              mb: { xs: 3, lg: 5 },
              mt: { xs: 0, lg: 3 },
              lineHeight: 1.8,
            }}
          >
            Smart Learning Begins with Smart Systems - EDUMAAT Makes Education
            Management Seamless & Efficient
          </Typography>

          <ReuButton
            variant="contained"
            sx={{
              fontWeight: 300,
              backgroundColor: "#FFFFFF",
              color: "#111111",
              padding: "10px",
              width: { sm: "300px" },
            }}
            onClick={handleBookFreeDemo}
          >
            Book Now
          </ReuButton>
        </Box>

        <Box>
          <LazyBoxImage
            src={download_our_app_image}
            alt="download app"
            sx={{
              width: { xs: "100%", sm: "70%" },
              height: "70%",
              borderRadius: 3,
            }}
          />
          {/* <Box
            component={"img"}
            src={download_our_app_image}
            alt="download app"
            sx={{
              width: { xs: "100%", sm: "70%" },
              height: "70%",
              borderRadius: 3,
            }}
          /> */}
        </Box>

        <Box
          sx={{
            px: { xs: 1, md: 18 },
            mt: { xs: 2 },

            background: `radial-gradient(closest-side at 50% 50%, #FFFFFF40 0%, #9AAFFF40 100%)`,
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 0%",
            backgroundOrigin: "padding-box",
            pt: 5,
            pb: 8,
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              component={"h1"}
              sx={{ fontWeight: "bold", fontSize: 32, px: { xs: 2, lg: 0 } }}
            >
              Frequently Asked Questions
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              border: 2,
              borderColor: "#ffffff",
              bgcolor: "rgba(255,255,255,0.15)",
              borderRadius: 5,
            }}
          >
            <Box sx={{ p: { md: 5 }, bgcolor: "", borderRadius: 5 }}>
              <ReuAccordion
                accordionItems={edumaatFaqData}
                bgColor="rgba(255,255,255,0.4)"
              />
            </Box>
          </Box>
        </Box>

        {/* <Box sx={{ px: { xs: 1, md: 11 }, mt: { xs: 2 }, mb: 8 }}>
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ px: { lg: 14, sm: 4, xs: 2 }, my: 4 }}>
              <Grid container>
                <Grid size={4} sx={{ display: { xs: "none", sm: "block" } }}>
                  <LazyBoxImage
                    src={faqPersonImage}
                    alt="essentialPlanFeaturedImage"
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 8 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, textAlign: "right", mb: 4 }}
                  >
                    FAQ
                  </Typography>

                  <QueriesAccordion
                    accordionItems={faqAccordionItems}
                    bgColor="#fff"
                    isShadowed={true}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box> */}
      </div>
    </div>
  );
};

export default Home;
