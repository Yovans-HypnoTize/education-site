import { Box, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import QueriesAccordion, {
  AccordionItem,
} from "../../components/plans-pricing-components/QueriesAccordion";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";
import school_k12 from "../../assets/education/schools_k12.png";
import coaching_image from "../../assets/education/coaching.png";
import collage_image from "../../assets/education/college.png";
import education_boards_image from "../../assets/education/education_boards.png";
import university_image from "../../assets/education/university.png";
import header1_image from "../../assets/education/header1.png";
import header2_image from "../../assets/education/header2.png";
import header3_image from "../../assets/education/header3.png";
import header4_image from "../../assets/education/header4.png";
import header5_image from "../../assets/education/header5.png";

interface whyChooseEdumaatContent {
  id: string | number;
  title: string;
  content: string;
  buttonText: string;
}

const bannerContent = [
  {
    id: "schools-k12",
    title: "Edumaat for Education Powering every type of learning environment.",
    content:
      "From schools and colleges to coaching centres and vocational institutes — Edumaat adapts to your unique academic needs with smart, scalable solutions. ",
    img: header1_image,
  },
  {
    id: "college",
    title: "Edumaat for Education Powering every type of learning environment.",
    content:
      "From schools and colleges to coaching centres and vocational institutes — Edumaat adapts to your unique academic needs with smart, scalable solutions. ",
    img: header2_image,
  },
  {
    id: "university",
    title: "Edumaat for Education Powering every type of learning environment.",
    content:
      "From schools and colleges to coaching centres and vocational institutes — Edumaat adapts to your unique academic needs with smart, scalable solutions. ",
    img: header3_image,
  },
  {
    id: "education-boards",
    title: "Edumaat for Education Powering every type of learning environment.",
    content:
      "From schools and colleges to coaching centres and vocational institutes — Edumaat adapts to your unique academic needs with smart, scalable solutions. ",
    img: header4_image,
  },
  {
    id: "coaching",
    title: "Edumaat for Education Powering every type of learning environment.",
    content:
      "From schools and colleges to coaching centres and vocational institutes — Edumaat adapts to your unique academic needs with smart, scalable solutions. ",
    img: header5_image,
  },
];

const cardContentHeader = [
  {
    id: "schools-k12",
    title:
      "Build a connected, efficient, and parent-friendly school ecosystem ",
    content:
      "Empower your school to operate smarter, communicate better, and teach more effectively with Edumaat’s unified school management platform. Designed specifically for K–12 institutions, our system simplifies daily administration, enhances teaching effectiveness, and strengthens parent engagement — all from a single, easy-to-use platform. .",
  },
  {
    id: "college",
    title: "Streamline operations and empower student achievement ",
    content:
      "Colleges require systems that can adapt to their specific administrative and academic workflows. Edumaat simplifies institutional management by supporting multi-department coordination, internal evaluations, and career-focused initiatives — all in one integrated platform. ",
  },
  {
    id: "higher-education",
    title: "Manage autonomy, scale operations, and foster innovation ",
    content:
      "Institutions offering advanced and specialized education need robust tools to manage academic diversity, compliance, and career development. Edumaat enables smooth academic operations, efficient administration, and future-ready learning environments. ",
  },
  {
    id: "university",
    title:
      "Support complex academic ecosystems and drive institutional excellence ",
    content:
      "Universities need systems that scale with their multi-faculty structures, research programs, and global collaborations. Edumaat offers a comprehensive solution that empowers academic autonomy, fosters student outcomes, and delivers actionable insights across the university ecosystem. ",
  },
  {
    id: "education-boards",
    title: "Standardize Oversight and Empower Schools with Digital Governance ",
    content:
      "Education boards oversee complex academic ecosystems comprising affiliated schools, diverse curricula, and regulatory compliance. Edumaat enables boards to digitize affiliation management, streamline curriculum enforcement, centralize assessments, and generate actionable insights — all from a unified platform. ",
  },
  {
    id: "coaching",
    title: "Scale Academic Impact with Smart, Seamless Management ",
    content:
      "In today’s highly competitive academic landscape, coaching institutes and tuition centers must balance academic rigor, operational efficiency, and student outcomes — all while adapting to hybrid learning models. Edumaat equips you with a robust digital platform to manage batches, streamline content delivery, track student performance, and boost admissions — whether you run a single branch or a growing network. ",
  },
  {
    id: "online-education",
    title: "Power Scalable Learning Platforms with Academic Intelligence ",
    content:
      "Online education platforms require agility, learner engagement, and robust content delivery to succeed at scale. Edumaat supports online educators with integrated tools for curriculum planning, content hosting, learner analytics, and automated certification — whether you're offering short courses or full academic programs.  ",
  },
  {
    id: "research-institutes",
    title: "Digitize Research Workflows and Amplify Institutional Impact ",
    content:
      "Research institutions need more than academic management — they require tools for project tracking, publication logging, resource allocation, and research evaluation. Edumaat provides a specialized platform to manage research operations, track grants, and support faculty and scholar development. ",
  },
];

const whyChooseEdumaatContent: whyChooseEdumaatContent[] = [
  {
    id: "ai-powered-admission-management",
    title: "Why Choose EDUMAAT ERP’s AI Admission System? ",
    content:
      "With EDUMAAT, institutions gain more than just automation—they gain a strategic partner in enrollment success. Our AI-powered admission system brings intelligence, efficiency, and personalization to the forefront of your student recruitment strategy. ",
    buttonText:
      "Let EDUMAAT simplify your admissions and amplify your success. ",
  },
  {
    id: "staff-management",
    title: "Why EDUMAAT’s Staff Management System? ",
    content:
      "EDUMAAT’s ERP platform brings structure, clarity, and control to your institution’s staff management processes. Whether managing a small faculty or a large campus workforce, our system ensures that your HR operations are seamless, compliant, and aligned with institutional goals. ",
    buttonText:
      "Manage your people better—with EDUMAAT, it’s simple, reliable, and efficient.",
  },
  {
    id: "fees-management",
    title: "Why Choose EDUMAAT’s Fees Management System? ",
    content:
      "Managing institutional finances shouldn't be a burden. EDUMAAT delivers a smart, scalable, and secure Fees Management solution that supports your operational needs while improving the fee payment experience for everyone involved.  ",
    buttonText:
      "Digitize your fee process with EDUMAAT—and bring clarity, control, and convenience to your institution’s finances. ",
  },
  {
    id: "payroll-management",
    title: "Why Choose EDUMAAT’s Payroll Management System?",
    content:
      "Payroll is more than just salary—it’s about trust, accuracy, and compliance. EDUMAAT’s Payroll Management System gives your institution the tools to handle every aspect of payroll effortlessly, while ensuring employees are paid correctly and on time, every time.",
    buttonText:
      "Empower your HR team. Delight your staff. Simplify payroll with EDUMAAT. ",
  },
  {
    id: "accounts,-inventory,-invoice-&-asset-management",
    title:
      "EDUMAAT ERP – Complete Back-Office Control with Accounts, Inventory, Invoice & Asset Management ",
    content:
      "EDUMAAT ERP provides a unified platform for managing your institution’s financial and operational backend. With dedicated modules for Accounts, Inventory, Invoicing, and Asset Management, EDUMAAT ensures transparency, efficiency, and control across all non-academic functions.",
    buttonText: "",
  },
  {
    id: "ai-powered-placement",
    title: "Why Choose EDUMAAT’s Placement Management System? ",
    content:
      "EDUMAAT simplifies the most critical outcome of academic life—career readiness. With seamless tools to connect students with the right opportunities and data-driven insights to track success, EDUMAAT supports your institution’s commitment to employability and excellence. ",
    buttonText: "Turn potential into placement—with EDUMAAT ERP. ",
  },
  {
    id: "ai",
    title:
      "AI-Powered Admission Management System Transforming Student Enrollments with EDUMAAT ERP",
    content:
      "Streamline your institution’s admissions process with EDUMAAT’s intelligent Admission Management System, powered by AI. Designed to simplify, accelerate, and enhance the entire admission lifecycle, this module ensures institutions can manage applications efficiently while offering a seamless experience to prospective students.",
    buttonText: "",
  },
  {
    id: "ai-powered-timetable-management",
    title: "Why EDUMAAT’s AI Timetable & Chatbot Solutions? ",
    content:
      "At EDUMAAT, we believe in intelligent automation that makes campus life smoother for everyone. With our AI Timetable and Conversational Chatbot, institutions gain time-saving tools that boost efficiency, reduce overhead, and enhance the academic experience. ",
    buttonText: "Smarter Schedules. Smarter Support. Only with EDUMAAT ERP. ",
  },
];

interface AccordionItems {
  id: string | number;
  items: AccordionItem[];
  [keyof: string]: any;
}

const AccordionItems: AccordionItems[] = [
  {
    id: "schools-k12",
    img: school_k12,
    items: [
      {
        id: 1,
        title: "Student Lifecycle Management ",
        content: "",
        points: [
          "Streamline onboarding with customizable admission workflows ",
          "Track academic and extracurricular progress across terms and years ",
          "Automate promotions, transfers, and graduation certifications ",
          "Maintain comprehensive digital student profiles ",
        ],
        subTitle:
          "From admissions to graduation, Edumaat ensures a smooth journey for every student. ",
      },
      {
        id: 2,
        title: "Teacher Allocation & Workload Optimization ",
        content: "",
        points: [
          "Auto-assign teachers based on availability, subject proficiency, and class schedules ",
          "Balance teacher workloads across classes and grades",
          "Monitor teaching hours and adjust in real-time",
          "Enable substitute planning for leaves or absences",
        ],
        subTitle:
          "Make staffing decisions that benefit both educators and students. ",
      },
      {
        id: 3,
        title: "Parent Communication Tools ",
        content: "",
        points: [
          "Notify parents instantly via mobile app, SMS, or email",
          "Share daily attendance, academic performance, and behavioral records",
          "Broadcast school-wide announcements, circulars, and emergency alerts ",
          "Offer a parent portal for fee payments, feedback, and support tickets ",
        ],
        subTitle:
          "Bridge the gap between school and home with real-time updates. ",
      },
      {
        id: 4,
        title: "Assessments & Homework Management ",
        content: "",
        points: [
          "Assign and track homework with submission deadlines and grading ",
          "Schedule, conduct, and evaluate online and offline assessments ",
          "Generate digital report cards with customizable grading systems ",
          "Provide parents and students with timely academic feedback",
        ],
        subTitle:
          "Create a structured, transparent academic evaluation system.",
      },
    ],
    cardTitle: "Why Choose Edumaat for K–12 School Management",
    cards: [
      {
        title: "Customizable to Your School’s Needs",
        description: "Every school is unique — and so is Edumaat.",
        featuresList: [
          {
            id: 1,
            content:
              "Configure features to align with your academic calendar, language preferences, and school policies",
          },
          {
            id: 2,
            content:
              "Support for local and international curricula (CBSE, ICSE, IGCSE, IB, State Boards)",
          },
          {
            id: 3,
            content:
              "Scalable to accommodate growing student populations and evolving administrative needs",
          },
        ],
      },
      {
        title: "Data Security & Compliance",
        description: "We understand how sensitive school data can be.",
        featuresList: [
          {
            id: 1,
            content:
              "Secure cloud-based infrastructure with role-based access controls",
          },
          {
            id: 2,
            content:
              "Compliant with data protection regulations (FERPA, GDPR, etc.)",
          },
          {
            id: 3,
            content:
              "Regular backups, encrypted communication, and audit trails",
          },
        ],
      },
      {
        title: "Remote-Ready for Hybrid Learning Environments",
        description:
          "Be future-proof with tools that support both in-person and virtual education.",
        featuresList: [
          {
            id: 1,
            content:
              "Integrated virtual classroom tools (video conferencing, chat, screen sharing)",
          },
          {
            id: 2,
            content:
              "Digital assignment submissions and online exam capabilities",
          },
          {
            id: 3,
            content:
              "Track attendance for physical and online sessions in one place",
          },
        ],
      },
    ],
  },
  {
    id: "college",
    img: collage_image,
    items: [
      {
        id: 1,
        title: "Credit System Support ",
        content: "",
        points: [
          "Track course completions, electives, and credit hours semester-wise ",
          "Automated GPA/CGPA calculations aligned with college grading policies ",
          "Manage diploma and undergraduate programs with distinct credit requirements ",
          "Enable cross-department elective enrollments ",
        ],
        subTitle: "",
      },
      {
        id: 2,
        title: "Internal & External Exam Management ",
        content: "",
        points: [
          "Plan and execute internal assessments, unit tests, and final exams ",
          "Support for various grading methods: marks, grades, and credits ",
          "Automate invigilation rosters, hall tickets, and seating plans ",
          "Consolidate internal results with external board exam outcomes ",
        ],
        subTitle: "",
      },
      {
        id: 3,
        title: "Placement Module ",
        content: "",
        points: [
          "Coordinate campus interviews and internship drives",
          "Maintain company databases and student application records",
          "Host online aptitude tests and evaluate candidate fit",
          "Track offers, generate reports, and collect recruiter feedback",
        ],
        subTitle: "",
      },
      {
        id: 4,
        title: "Alumni Engagement ",
        content: "",
        points: [
          "Maintain alumni records with academic and career data ",
          "Host alumni meetups, webinars, and mentoring initiatives",
          "Support donation tracking and fundraising campaigns ",
          "Facilitate alumni networking and knowledge-sharing platforms ",
        ],
        subTitle:
          "You’re never alone — our support team is always here to help.",
      },
    ],
    cardTitle: "Why Colleges Choose Edumaat",
    cards: [
      {
        title: "Purpose-built for College Administration",
        featuresList: [
          {
            id: 1,
            content: "Handles multi-course and multi-stream environments",
          },
          {
            id: 2,
            content: "Adapts to autonomous or affiliated college frameworks",
          },
          {
            id: 3,
            content:
              "Supports department-level customization of evaluation and operations",
          },
        ],
      },
      {
        title: "Real-Time Analytics",
        featuresList: [
          {
            id: 1,
            content: "Course- and department-wise performance dashboards",
          },
          {
            id: 2,
            content: "Generate reports for NAAC, UGC, and other bodies",
          },
          {
            id: 3,
            content:
              "Export-ready formats for internal use and regulatory needs",
          },
        ],
      },
      {
        title: "Real-Time Analytics",
        featuresList: [
          {
            id: 1,
            content: "Course- and department-wise performance dashboards",
          },
          {
            id: 2,
            content: "Generate reports for NAAC, UGC, and other bodies",
          },
          {
            id: 3,
            content:
              "Export-ready formats for internal use and regulatory needs",
          },
        ],
      },
      {
        title: "Data Security & Compliance",
        featuresList: [
          {
            id: 1,
            content: "Role-based access and secure cloud infrastructure",
          },
          { id: 2, content: "FERPA and UGC guidelines adherence" },
          { id: 3, content: "Comprehensive audit logs and encrypted backups" },
        ],
      },
      {
        title: "Hybrid Learning Support",
        featuresList: [
          { id: 1, content: "Built-in LMS and virtual classroom tools" },
          { id: 2, content: "Digital exam and assignment handling" },
          {
            id: 3,
            content: "Unified attendance for on-campus and online students",
          },
        ],
      },
    ],
  },
  // {
  //   id: "higher-education",
  //    img: education_boards_image,
  //   items: [
  //     {
  //       id: 1,
  //       title: "Credit-Based Program Management ",
  //       content: "",
  //       points: [
  //         "Track credit-based academic structures across UG/PG/Integrated programs ",
  //         "Configure flexible grading systems and credit transfers ",
  //         "Manage cross-disciplinary enrollments and elective mapping ",
  //         "Ensure compliance with NAAC/NBA/UGC credit norms ",
  //       ],
  //       subTitle: "",
  //     },
  //     {
  //       id: 2,
  //       title: "Internal Assessments & Evaluations ",
  //       content: "",
  //       points: [
  //         "Automate scheduling of internal exams, assignments, and project reviews ",
  //         "Support multiple evaluation formats – grade points, marks, or relative grading ",
  //         "Capture continuous assessment (CIE) and final evaluation data ",
  //         "Generate academic progress reports and audit trails ",
  //       ],
  //       subTitle: "",
  //     },
  //     {
  //       id: 3,
  //       title: "Student Development & Placement Support ",
  //       content: "",
  //       points: [
  //         "Enable student registration for career services and skill workshops ",
  //         "Organize company drives, aptitude tests, and interview schedules",
  //         "Automate resume bank, eligibility filters, and offer tracking ",
  //         "Generate placement performance dashboards ",
  //       ],
  //       subTitle: "",
  //     },
  //     {
  //       id: 4,
  //       title: "Alumni & Mentorship Programs ",
  //       content: "",
  //       points: [
  //         "Maintain detailed alumni profiles and career progression ",
  //         "Manage mentorship programs, alumni lectures, and networking events ",
  //         "Track donations, fundraising campaigns, and participation metrics ",
  //         "Create a sustainable alumni-institution ecosystem ",
  //       ],
  //       subTitle: "",
  //     },
  //   ],
  //   cardTitle: "Why Higher Education Institutions Choose Edumaat",
  //   cards: [
  //     {
  //       title: "Designed for Institutional Autonomy & Complexity",
  //       featuresList: [
  //         {
  //           id: 1,
  //           content: "Supports diverse academic programs and governance models",
  //         },
  //         {
  //           id: 2,
  //           content: "Flexible academic calendars and role-based access",
  //         },
  //         {
  //           id: 3,
  //           content: "Departmental and cell-level workflow customizations",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Data-Driven Insights",
  //       featuresList: [
  //         {
  //           id: 1,
  //           content: "Advanced analytics for departments and leadership",
  //         },
  //         {
  //           id: 2,
  //           content: "Generate reports for NBA, NAAC, and accreditation bodies",
  //         },
  //         {
  //           id: 3,
  //           content: "Real-time dashboards for student and faculty performance",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Security and Regulatory Compliance",
  //       featuresList: [
  //         {
  //           id: 1,
  //           content: "Fully compliant with UGC and other statutory guidelines",
  //         },
  //         { id: 2, content: "Secure cloud hosting and encrypted storage" },
  //         { id: 3, content: "Role-based access control and full auditability" },
  //       ],
  //     },
  //     {
  //       title: "Hybrid Learning Infrastructure",
  //       featuresList: [
  //         {
  //           id: 1,
  //           content: "Integrated with LMS platforms and video classrooms",
  //         },
  //         { id: 2, content: "Online exam modules and e-submission workflows" },
  //         {
  //           id: 3,
  //           content: "Unified monitoring for remote and in-person learners",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: "university",
    img: university_image,
    items: [
      {
        id: 1,
        title: "Academic Governance & Curriculum Design ",
        content: "",
        points: [
          "Define and manage curricula, academic policies, and syllabi across faculties ",
          "Automate workflows for Board of Studies, Academic Council, and regulatory compliance ",
          "Configure custom academic calendars, regulations, and credit schemes ",
          "Publish and control circulars, guidelines, and academic notifications ",
        ],
        subTitle: "",
      },
      {
        id: 2,
        title: "Centralized Examination & Certification ",
        content: "",
        points: [
          "Automate exam registration, hall tickets, evaluation, and revaluation ",
          "Conduct semester-end, external, and supplementary exams centrally ",
          "Track answer script logistics, digital evaluations, and results processing ",
          "Generate degree certificates, transcripts, and verifiable records with QR codes",
        ],
        subTitle: "",
      },
      {
        id: 3,
        title: "Affiliated College Management ",
        content: "",
        points: [
          "Onboard and manage affiliated, constituent, and research colleges ",
          "Track college accreditation data, inspections, and academic audits ",
          "Monitor college-wise performance, exam submissions, and affiliation status ",
          "Enable two-way data sync with college ERP instances (e.g., internal marks, attendance) ",
        ],
        subTitle: "",
      },
      {
        id: 4,
        title: "Research & PhD Program Oversight ",
        content: "",
        points: [
          "Administer PhD scholar lifecycle – registration, coursework, and thesis submission ",
          "Track supervisor allotments, publications, and plagiarism reports ",
          "Manage funded research projects, grants, patents, and publications ",
          "Generate reports for UGC, NAAC, RUSA, and other research bodies ",
        ],
        subTitle:
          "You’re never alone — our support team is always here to help.",
      },
    ],
    cardTitle: "Why Universities Choose Edumaat",
    cards: [
      {
        title: "Scalable for University-Level Operations",
        featuresList: [
          {
            id: 1,
            content:
              "Manage multiple campuses, faculties, and research centers",
          },
          {
            id: 2,
            content: "Customize academic processes per department or school",
          },
          {
            id: 3,
            content:
              "Configure academic boards, approval hierarchies, and research workflows",
          },
        ],
      },
      {
        title: "Strategic Insights for Leadership",
        featuresList: [
          {
            id: 1,
            content: "Role-specific dashboards for deans, registrars, and HODs",
          },
          {
            id: 2,
            content:
              "Export-ready reports for NAAC, UGC, and international accreditations",
          },
          {
            id: 3,
            content:
              "KPIs and trends for decision-making and continuous improvement",
          },
        ],
      },
      {
        title: "Compliance & Cloud Security",
        featuresList: [
          {
            id: 1,
            content:
              "Built-in support for FERPA, UGC, and international data guidelines",
          },
          {
            id: 2,
            content: "Secure cloud infrastructure with real-time backups",
          },
          {
            id: 3,
            content: "Full visibility via access controls and audit tracking",
          },
        ],
      },
      {
        title: "Ready for Blended Education",
        featuresList: [
          {
            id: 1,
            content: "Advanced LMS integration with digital classroom tools",
          },
          {
            id: 2,
            content:
              "E-evaluations, remote project assessments, and hybrid attendance",
          },
          {
            id: 3,
            content:
              "Seamless management of online, offline, and hybrid programs",
          },
        ],
      },
    ],
  },
  {
    id: "education-boards",
    img: education_boards_image,
    items: [
      {
        id: 1,
        title: "Affiliation & Institution Management ",
        content: "",
        points: [
          "Manage school registrations, inspections, and renewals ",
          "Define and enforce affiliation criteria, fee structures, and compliance workflows",
          "Track institution profiles, academic offerings, and performance metrics ",
          "Automate renewal alerts, inspection logs, and approval cycles ",
        ],
        subTitle: "",
      },
      {
        id: 2,
        title: "Curriculum Standardization & Circulars ",
        content: "",
        points: [
          "Define curricula, subject hierarchies, and academic calendars centrally ",
          "Publish official notices, circulars, and updates with acknowledgment tracking ",
          "Share guidelines, training materials, and documentation across schools ",
          "Maintain version control and historical audit of syllabus revisions ",
        ],
        subTitle: "",
      },
      {
        id: 3,
        title: "Centralized Examination & Assessment ",
        content: "",
        points: [
          "Design board-level assessments and distribute across affiliated schools ",
          "Enable question paper generation, exam scheduling, and answer sheet tracking ",
          "Collect, validate, and publish results with consolidated reports ",
          "Monitor performance across institutions, regions, and categories ",
        ],
        subTitle: "",
      },
      {
        id: 4,
        title: "Policy Analytics & Governance Reporting ",
        content: "",
        points: [
          "Generate reports aligned with national education policy (NEP), RTE, or board standards ",
          "Analyze enrollment, dropouts, academic outcomes, and infrastructure stats ",
          "Provide insights for curriculum planning, resource allocation, and school ranking ",
          "Export data in formats suited for regulatory and government reporting  ",
        ],
        subTitle: "",
      },
    ],
    cardTitle: "Why Education Boards Choose Edumaat",
    cards: [
      {
        title: "Built for Multi-Institution Oversight",
        featuresList: [
          {
            id: 1,
            content:
              "Support for thousands of affiliated schools with real-time data access",
          },
          {
            id: 2,
            content:
              "Region-wise, zone-wise, and type-wise institution segmentation",
          },
          {
            id: 3,
            content: "Centralized control with local-level flexibility",
          },
        ],
      },
      {
        title: "Governance-Grade Compliance",
        featuresList: [
          {
            id: 1,
            content:
              "Custom workflows for approvals, inspections, and academic audits",
          },
          {
            id: 2,
            content: "Aligned with CBSE, ICSE, State Board, and NEP frameworks",
          },
          {
            id: 3,
            content:
              "Secure and traceable digital recordkeeping for institutional operations",
          },
        ],
      },
      {
        title: "Scalable, Secure, and Cloud-Based",
        featuresList: [
          {
            id: 1,
            content:
              "Central dashboard for board officials, inspectors, and coordinators",
          },
          {
            id: 2,
            content:
              "Scalable for state, regional, or national education boards",
          },
          {
            id: 3,
            content:
              "Secure cloud infrastructure with user-level access controls",
          },
        ],
      },
    ],
  },
  {
    id: "coaching",
    img: coaching_image,
    items: [
      {
        id: 1,
        title: "Batch Scheduling & Management ",
        content: "",
        points: [
          "Organize teaching operations with precision and flexibility. ",
          "Create and manage multiple batches by subject, grade, or faculty ",
          "Auto-generate and customize timetables with teacher availability ",
          "Monitor attendance and easily reschedule missed sessions ",
          "Reassign faculty and track class substitutions in real time",
        ],
        subTitle: "",
      },
      {
        id: 2,
        title: "Class Recording & Content Integration ",
        content: "",
        points: [
          "Extend learning beyond classroom boundaries. ",
          "Upload or link recorded lectures (YouTube, Google Drive, etc.) ",
          "Categorize content by subject, topic, or batch",
          "Enable students to access missed classes and revision materials ",
          "Track video engagement to identify weak learning areas ",
        ],
        subTitle: "",
      },
      {
        id: 3,
        title: "Online Tests & Student Evaluation",
        content: "",
        points: [
          "Boost exam readiness and track academic progress. ",
          "Conduct online mock tests, timed quizzes, and practice exams",
          "Auto-evaluate objective questions with instant feedback",
          "Provide topic-wise analytics to improve learning outcomes ",
          "Share reports and insights with students and parents ",
        ],
        subTitle: "",
      },
      {
        id: 4,
        title: "Lead Management & CRM Tools ",
        content: "",
        points: [
          "Convert inquiries into enrollments with ease",
          "Capture leads from walk-ins, calls, and online forms ",
          "Track counselor follow-ups and interaction histories ",
          "Automate SMS/email campaigns for lead nurturing  ",
          "Access conversion dashboards to analyze performance and ROI ",
        ],
        subTitle: "",
      },
    ],
    cardTitle: "Why Coaching & Tuition Centers Choose Edumaat",
    cards: [
      {
        title: "Purpose-Built for Rapid Delivery and Scale",
        featuresList: [
          {
            id: 1,
            content:
              "Supports academic, competitive exam prep, and subject-specific tutoring",
          },
          {
            id: 2,
            content: "Daily/weekly planner for fast-paced batch scheduling",
          },
          {
            id: 3,
            content:
              "Multi-center and multi-course management from a single dashboard",
          },
        ],
      },
      {
        title: "Data-Driven Performance Tracking",
        featuresList: [
          {
            id: 1,
            content:
              "Real-time insights on attendance, test results, and learning engagement",
          },
          {
            id: 2,
            content: "Compare performance by student, batch, or subject",
          },
          {
            id: 3,
            content:
              "Provide progress reports and alerts to parents when applicable",
          },
        ],
      },
      {
        title: "Hybrid Learning Ready",
        featuresList: [
          {
            id: 1,
            content: "Integrated virtual classrooms and live-streaming support",
          },
          {
            id: 2,
            content:
              "Unified content and test access for both in-person and online students",
          },
          {
            id: 3,
            content: "Mobile-responsive portals for learning on the go",
          },
        ],
      },
      {
        title: "Secure, Centralized, and Scalable",
        featuresList: [
          {
            id: 1,
            content:
              "Role-based access control for teachers, admins, and counselors",
          },
          {
            id: 2,
            content:
              "Centralized academic content, results, and student records",
          },
          {
            id: 3,
            content: "Easily scalable from one branch to a franchise network",
          },
        ],
      },
    ],
  },

  // {
  //   id: "online-education",
  //   items: [
  //     {
  //       id: 1,
  //       title: "Course Creation & Modular Learning Paths ",
  //       content: "",
  //       points: [
  //         "Design self-paced or instructor-led course structures ",
  //         "Build modular learning units with video, text, and assessments ",
  //         "Define learning objectives, prerequisites, and skill outcomes ",
  //         "Group courses into programs or specializations",
  //       ],
  //       subTitle: "",
  //     },
  //     {
  //       id: 2,
  //       title: "Content Hosting & Delivery ",
  //       content: "",
  //       points: [
  //         "Upload video lectures, PDFs, quizzes, and assignments ",
  //         "Integrate with video platforms (Zoom, YouTube, Vimeo, etc.)",
  //         "Support multi-device learning with mobile-first UX ",
  //         "Enable adaptive content delivery based on learner engagement ",
  //       ],
  //       subTitle: "",
  //     },
  //     {
  //       id: 3,
  //       title: "Learner Assessment & Feedback ",
  //       content: "",
  //       points: [
  //         "Conduct interactive quizzes, timed exams, and peer-reviewed projects ",
  //         "Auto-evaluate objective assessments and generate analytics ",
  //         "Share instant feedback and progress reports with learners ",
  //         "Issue badges or certificates on course completion ",
  //       ],
  //       subTitle: "",
  //     },
  //     {
  //       id: 4,
  //       title: "Learner Analytics & Retention",
  //       content: "",
  //       points: [
  //         "Track course engagement, drop-offs, and completion rates ",
  //         "Identify learner patterns to personalize interventions ",
  //         "Run feedback surveys and engagement campaigns ",
  //         "Integrate with marketing automation for re-engagement ",
  //       ],
  //       subTitle: "",
  //     },
  //   ],
  //   cardTitle: "Why Online Educators Choose Edumaat",
  //   cards: [
  //     {
  //       title: "Designed for Online Scale",
  //       featuresList: [
  //         { id: 1, content: "Support for 10 to 10,000+ concurrent learners" },
  //         {
  //           id: 2,
  //           content: "No-code tools to build and launch new courses quickly",
  //         },
  //         {
  //           id: 3,
  //           content:
  //             "Integrates with payment gateways and third-party LMS tools",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Content-Centric and Outcome-Focused",
  //       featuresList: [
  //         {
  //           id: 1,
  //           content:
  //             "Prioritize learner outcomes through structured learning journeys",
  //         },
  //         {
  //           id: 2,
  //           content:
  //             "Enable quizzes, projects, and peer assessments to drive mastery",
  //         },
  //         {
  //           id: 3,
  //           content:
  //             "Align content delivery with certification or employment goals",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Secure, Reliable, and Mobile-Optimized",
  //       featuresList: [
  //         {
  //           id: 1,
  //           content: "Cloud-hosted with 24x7 uptime for learners worldwide",
  //         },
  //         {
  //           id: 2,
  //           content:
  //             "End-to-end encryption and access control for content protection",
  //         },
  //         {
  //           id: 3,
  //           content: "Optimized for Android, iOS, and desktop environments",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "research-institutes",
  //   items: [
  //     {
  //       id: 1,
  //       title: "Research Project Management ",
  //       content: "",
  //       points: [
  //         "Create and manage individual or collaborative research projects ",
  //         "Define objectives, milestones, funding sources, and timelines ",
  //         "Track project deliverables, team roles, and resource allocation",
  //         "Monitor progress with research dashboards and audit trails",
  //       ],
  //       subTitle: "",
  //     },
  //     {
  //       id: 2,
  //       title: "Publication & IP Management ",
  //       content: "",
  //       points: [
  //         "Log journal publications, conference papers, and citations ",
  //         "Track patents filed, granted, or under review ",
  //         "Manage documentation for IP rights, ethics approvals, and peer reviews",
  //         "Generate researcher profiles and publication portfolios ",
  //       ],
  //       subTitle: "",
  //     },
  //     {
  //       id: 3,
  //       title: "Grant & Funding Tracking ",
  //       content: "",
  //       points: [
  //         "Manage grant applications, approvals, and fund disbursement ",
  //         "Track utilization, expenditures, and compliance documents ",
  //         "Automate reporting for grant bodies, sponsors, and auditors ",
  //         "Enable multi-funder and multi-cycle tracking ",
  //       ],
  //       subTitle: "",
  //     },
  //     {
  //       id: 4,
  //       title: "Research Performance Analytics ",
  //       content: "",
  //       points: [
  //         "Analyze publications by department, domain, or funding cycle ",
  //         "Track impact factors, h-indexes, and researcher contributions ",
  //         "Generate custom reports for academic ranking and accreditation ",
  //         "Visualize interdisciplinary collaboration and institutional impact ",
  //       ],
  //       subTitle: "",
  //     },
  //   ],
  //   cardTitle: "Why Research Institutes Choose Edumaat",
  //   cards: [
  //     {
  //       title: "Built for Research Workflows",
  //       featuresList: [
  //         {
  //           id: 1,
  //           content:
  //             "Tailored modules for scientific, social, technical, and cross-disciplinary projects",
  //         },
  //         {
  //           id: 2,
  //           content:
  //             "Manage fellowships, internships, and collaborative research partnerships",
  //         },
  //         {
  //           id: 3,
  //           content:
  //             "Integrates with journal indexes, DOI repositories, and external databases",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Compliance & Visibility",
  //       featuresList: [
  //         {
  //           id: 1,
  //           content:
  //             "Supports UGC CARE, Scopus, IEEE, and other indexing frameworks",
  //         },
  //         {
  //           id: 2,
  //           content:
  //             "Maintain data for internal reviews, funding audits, and institutional rankings",
  //         },
  //         {
  //           id: 3,
  //           content: "Provide researcher dashboards with personalized KPIs",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Secure, Centralized, and Future-Ready",
  //       featuresList: [
  //         {
  //           id: 1,
  //           content:
  //             "Encrypted cloud storage for sensitive project data and documents",
  //         },
  //         { id: 2, content: "Centralized database for all research output" },
  //         {
  //           id: 3,
  //           content:
  //             "Scalable from single departments to national-level institutes",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

const EducationManagement = () => {
  const navigate = useNavigate();

  const { educationId } = useParams();
  const [currentAccordionItems, setCurrentAccordionItems] = useState<any>([]);

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };

  useEffect(() => {
    const accordionCardItem = AccordionItems.filter((item) => {
      return item.id === educationId;
    });
    setCurrentAccordionItems(accordionCardItem[0]);
  }, [educationId]);

  return (
    <Box>
      <title>School ERP Software | Edumaat for K-12 Institutions</title>
      <meta
        name="description"
        content="Edumaat simplifies K-12 school management with tools for attendance, fee tracking, academics, transport, and parent engagement."
      />
      <meta
        name="keywords"
        content="school ERP, K-12 management, student attendance, parent portal, school automation"
      />
      <link rel="canonical" href="https://edumaat.com/education/schools-k12" />

      <Box
        sx={{
          pl: { lg: 14, xs: 4 },
          pr: { lg: 0, xs: 4 },
          mt: { xs: 10, lg: 10 },
        }}
      >
        <Grid container spacing={4}>
          <Grid
            size={{ sm: 5, xs: 12 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 25, md: 35, lg: 50 },
                }}
              >
                {bannerContent.find((item) => item.id === educationId)?.title}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ my: { xs: 2, lg: 5 } }}
              >
                {bannerContent.find((item) => item.id === educationId)?.content}
              </Typography>
              <Box sx={{ mt: { xs: 2, lg: 7 } }}>
                <ReuOutlineBorderedButton
                  variant="outlined"
                  sx={{
                    width: 250,
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
          <Grid size={{ sm: 7, xs: 12 }}>
            <Box
              component={"img"}
              src={bannerContent.find((item) => item.id === educationId)?.img}
              alt="solutionSpotlightBannerImage "
              sx={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          pl: { lg: 14, xs: 4 },
          pr: { lg: 14, xs: 4 },
          mt: { xs: 2, lg: 0 },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          {cardContentHeader
            .filter((item) => {
              return item.id === educationId;
            })
            .map((item, idx) => (
              <React.Fragment key={`${idx}_${item.title}`}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    fontSize: { xs: 20, lg: 28 },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography>{item.content}</Typography>
              </React.Fragment>
            ))}
        </Box>
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={{ xs: 2, lg: 8 }} px={{ lg: 10 }}>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Box
                component={"img"}
                src={currentAccordionItems.img}
                alt="plansPricingEssentialsImage "
                height={{ sm: 300, lg: 500 }}
                width={"100%"}
              />
            </Grid>
            <Grid
              size={{ sm: 6, xs: 12 }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box>
                <QueriesAccordion
                  accordionItems={currentAccordionItems.items ?? []}
                  bgColor=""
                  isShadowed={false}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ px: { lg: 14, xs: 4 }, my: 7 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            {currentAccordionItems.cardTitle}
          </Typography>

          <Grid container spacing={{ xs: 4, lg: 8 }} justifyContent={"center"}>
            {currentAccordionItems?.cards?.map((item: any, idx: any) => (
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box
                  className="about-vision-card"
                  sx={{
                    boxShadow: "0px 6px 12px #5580FF33",
                    borderRadius: 2,
                  }}
                >
                  <Box
                    key={idx}
                    sx={{
                      boxShadow: "0px 6px 12px #5580FF33",
                      borderRadius: 2,
                      p: 2,
                      height: "100%",
                      minHeight: 250,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(225, 245, 250, 0.692)",
                    }}
                  >
                    <Typography fontWeight="bold" mb={2}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default EducationManagement;
