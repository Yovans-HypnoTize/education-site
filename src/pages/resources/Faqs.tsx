import { Box, Grid, Typography } from "@mui/material";
import QueriesAccordion from "../../components/plans-pricing-components/QueriesAccordion";
import faqPersonImage from "../../assets/plans-pricing/faqPersonImage.png";
import LazyBoxImage from "../../components/LazyBoxImage";

const Faqs = () => {
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
    title: "What is EDUMAAT ERP, and how does it benefit our institution?",
    content:
      "EDUMAAT ERP is an all-in-one digital management system designed to streamline school/college operations, including admissions, attendance, exams, fees, and communication. It enhances efficiency, reduces paperwork, and provides real-time insights for better decision-making.",
 points: [],
      subTitle: "",
    },
  {
    id: 2,
    title: "How secure is the data stored in EDUMAAT ERP?",
    content:
      "Data security is our top priority. EDUMAAT uses bank-grade encryption, role-based access control, and regular backups to ensure sensitive student, staff, and financial information remains protected.",
      points: [],
      subTitle: "",
  },
  {
    id: 3,
    title: "Can EDUMAAT ERP integrate with our existing systems?",
    content:
      "Yes! EDUMAAT is designed for seamless integration with learning management systems (LMS), payment gateways, biometric devices, and other third-party tools to ensure a unified workflow.",
      points: [],
      subTitle: "",
  },
  {
    id: 4,
    title:
      "How does the ERP improve communication between teachers, parents, and admin?",
    content:
      "The system offers automated notifications, SMS/email alerts, parent portals, and mobile apps to keep all stakeholders updated on attendance, exams, fees, and announcements in real time.",
      points: [],
      subTitle: "",
  },
  {
    id: 5,
    title: "What kind of reports and analytics does EDUMAAT provide?",
    content:
      "Leadership gets customizable dashboards with insights on student performance, fee collection, staff productivity, and institutional growth trends—helping in data-driven decision-making.",
      points: [],
      subTitle: "",
  },
  {
    id: 6,
    title: "How does EDUMAAT handle fee management and financial tracking?",
    content:
      "The ERP automates fee collection, receipts, due reminders, and reconciliation, reducing errors and delays. It also generates financial reports for audits and budget planning.",
      points: [],
      subTitle: "",
  },
  {
    id: 7,
    title: "Is training provided for staff to use EDUMAAT ERP effectively?",
    content:
      "Absolutely! We offer onboarding sessions, video tutorials, and 24/7 support to ensure smooth adoption by teachers, admin staff, and management.",
      points: [],
      subTitle: "",
  },
  {
    id: 8,
    title: "Can EDUMAAT be accessed remotely?",
    content:
      "Yes, it’s a cloud-based system accessible via web and mobile apps, allowing admins, teachers, and parents to stay connected from anywhere.",
      points: [],
      subTitle: "",
  },
  {
    id: 9,
    title: "How does the ERP assist in exam and grading management?",
    content:
      "EDUMAAT automates timetable generation, grading, report cards, and performance analysis, reducing manual workload and improving accuracy.",
      points: [],
      subTitle: "",
  },
  {
    id: 10,
    title: "What if we need custom features for our institution?",
    content:
      "We provide customizable modules tailored to your needs, whether it’s transport management, library systems, or alumni tracking.",
      points: [],
      subTitle: "",
  },
  {
    id: 11,
    title:
      "How does EDUMAAT support regulatory compliance (e.g., board exams, accreditation)?",
    content:
      "The system maintains audit-ready records, generates compliance reports, and ensures adherence to education board requirements effortlessly.",
      points: [],
      subTitle: "",
  },
  {
    id: 12,
    title:
      "What’s the cost structure, and is it scalable for growing institutions?",
    content:
      "EDUMAAT offers flexible pricing plans (subscription-based or one-time) and scales seamlessly as your student/staff numbers increase.",
      points: [],
      subTitle: "",
  },
];

  return (
    <Box>
      <title>FAQs – Edumaat | Your Questions Answered</title>
      <meta
        name="description"
        content="Find answers to frequently asked questions about Edumaat's features, security, customization, and support. Learn how Edumaat can benefit your institution."
      />
      <meta
        name="keywords"
        content="Edumaat FAQs, school ERP questions, education software help, Edumaat support, Edumaat integration, data security Edumaat"
      />
      <meta name="author" content="Edumaat" />

      <Box sx={{ px: { xs: 1, md: 11 }, mt: { xs: 2, sm: 5 }, mb: 10 }}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ px: {sm: 4, xs: 2 }, my: 8 }}>
            <Grid container>
              <Grid size={4} sx={{ display: { xs: "none", sm: "block" } }}>
                <LazyBoxImage src={faqPersonImage}
                  alt="essentialPlanFeaturedImage"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "12px",
                    objectFit: "contain",
                  }}/>
              </Grid>
              <Grid size={{ xs: 12, sm: 8 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, textAlign: "right", mb: 4 }}
                >
                  FAQ
                </Typography>

                <QueriesAccordion
                  accordionItems={edumaatFaqData}
                  bgColor="#fff"
                  isShadowed={true}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Faqs;
