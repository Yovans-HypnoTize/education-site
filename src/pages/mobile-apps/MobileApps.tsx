import SptLightCard, {
  SpotlightCardItem,
} from "../../components/solutionSpotlight/SptLightCard";
// import sptLightRightHorizontalCard from "../../assets/solutions-spotlight/spt-light-cardImages/sptLightRightHorizontalCard.png";
// import sptLightTopCardImg1 from "../../assets/solutions-spotlight/spt-light-cardImages/sptLightTopCardImg1.png";
// import sptLightTopCardImg2 from "../../assets/solutions-spotlight/spt-light-cardImages/sptLightTopCardImg2.png";
// import sptLightTopCardImg3 from "../../assets/solutions-spotlight/spt-light-cardImages/sptLightTopCardImg3.png";
import benefitsToYourInstitutionCardImage1 from "../../assets/solutions-spotlight/benefits-to-your-institution/Rates.png";
import benefitsToYourInstitutionCardImage2 from "../../assets/solutions-spotlight/benefits-to-your-institution/applicant.png";
import benefitsToYourInstitutionCardImage3 from "../../assets/solutions-spotlight/benefits-to-your-institution/data.png";
import benefitsToYourInstitutionCardImage4 from "../../assets/solutions-spotlight/benefits-to-your-institution/error.png";
import benefitsToYourInstitutionCardImage5 from "../../assets/solutions-spotlight/benefits-to-your-institution/scalable.png";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ReuGradientButton from "../../components/common-reusable-components/ReuGradientButton";
// import admissionSystemImage from "../../assets/solutions-spotlight/admissionSystem.png";
import { useNavigate } from "react-router-dom";

import stuentCard_1 from "../../assets/mobile-apps/student/stuentCard_1.png";
import stuentCard_2 from "../../assets/mobile-apps/student/stuentCard_2.png";
import stuentCard_3 from "../../assets/mobile-apps/student/stuentCard_3.png";
import stuentCard_4 from "../../assets/mobile-apps/student/stuentCard_4.png";
import stuentCard_5 from "../../assets/mobile-apps/student/stuentCard_5.png";
import stuentCard_6 from "../../assets/mobile-apps/student/stuentCard_6.png";
import stuentCard_7 from "../../assets/mobile-apps/student/stuentCard_7.png";
import stuentCard_8 from "../../assets/mobile-apps/student/stuentCard_8.png";

import parentCard_1 from "../../assets/mobile-apps/parent/parentCard_1.png";
import parentCard_2 from "../../assets/mobile-apps/parent/parentCard_2.png";
import parentCard_3 from "../../assets/mobile-apps/parent/parentCard_3.png";
import parentCard_4 from "../../assets/mobile-apps/parent/parentCard_4.png";
import parentCard_5 from "../../assets/mobile-apps/parent/parentCard_5.png";
import parentCard_6 from "../../assets/mobile-apps/parent/parentCard_6.png";
import parentCard_7 from "../../assets/mobile-apps/parent/parentCard_7.png";

import teacherCard_1 from "../../assets/mobile-apps/teacher/teacherCard_1.png";
import teacherCard_2 from "../../assets/mobile-apps/teacher/teacherCard_2.png";
import teacherCard_3 from "../../assets/mobile-apps/teacher/teacherCard_3.png";
import teacherCard_4 from "../../assets/mobile-apps/teacher/teacherCard_4.png";
import teacherCard_5 from "../../assets/mobile-apps/teacher/teacherCard_5.png";
import teacherCard_6 from "../../assets/mobile-apps/teacher/teacherCard_6.png";
import teacherCard_7 from "../../assets/mobile-apps/teacher/teacherCard_7.png";

import adminCard_1 from "../../assets/mobile-apps/admin/adminCard_1.png";
import adminCard_2 from "../../assets/mobile-apps/admin/adminCard_2.png";
import adminCard_3 from "../../assets/mobile-apps/admin/adminCard_3.png";
import adminCard_4 from "../../assets/mobile-apps/admin/adminCard_4.png";
import adminCard_5 from "../../assets/mobile-apps/admin/adminCard_5.png";
import adminCard_6 from "../../assets/mobile-apps/admin/adminCard_6.png";
import adminCard_7 from "../../assets/mobile-apps/admin/adminCard_7.png";
import adminCard_8 from "../../assets/mobile-apps/admin/adminCard_8.png";

import whyChooseEdumaat_1 from "../../assets/mobile-apps/studentBanner.png";
import whyChooseEdumaat_2 from "../../assets/mobile-apps/teacherBanner.png";
import whyChooseEdumaat_3 from "../../assets/mobile-apps/parentBanner.png";
import whyChooseEdumaat_4 from "../../assets/mobile-apps/adminBanner.png";

interface SpotLightCardItems {
  id: string | number;
  items: SpotlightCardItem[];
}

interface whyChooseEdumaatContent {
  id: string | number;
  title: string;
  content: string;
  buttonText: string;
  img?: string;
}

const cardContentHeader = [
  {
    id: "student",
    title: "Your Campus in Your Pocket.",
    content:
      "The EDUMAAT Student Mobile Application offers a seamless, anytime-anywhere connection to your academic life. Whether you're at home, on campus, or commuting, this app puts everything you need at your fingertips — from class schedules and assignments to direct communication with faculty and instant updates.",
  },
  {
    id: "teacher",
    title:
      "Empower Your Teaching Experience. Stay Connected. Manage Your Classroom Effortlessly.",
    content:
      "The EDUMAAT Teacher Mobile Application is designed to streamline classroom management, improve communication, and help you stay organized in your teaching duties. Whether you're tracking assignments, managing student performance, or communicating with parents, the app puts all the tools you need right in the palm of your hand—ensuring that you can focus more on teaching and less on administrative tasks.",
  },
  {
    id: "parent",
    title: "Stay Informed. Stay Connected. Empower Your Child’s Education.",
    content:
      "The EDUMAAT Parent Mobile Application puts the power of communication and academic monitoring in your hands. As a parent, you can stay connected to your child’s academic journey, track their performance, and communicate with school staff—all through a simple, intuitive mobile app. With EDUMAAT’s Parent Mobile App, you can actively support your child’s educational progress, keep track of school events, and ensure their well-being, no matter where you are.",
  },
  {
    id: "admin",
    title:
      "Streamline Administration. Enhance Efficiency. Empower Your Institution.",
    content:
      "The EDUMAAT Admin Mobile Application is designed to provide school administrators with complete control and seamless management of all institutional operations, right at their fingertips. Whether you're managing student data, monitoring staff performance, tracking attendance, or communicating with parents and faculty, the EDUMAAT Admin Mobile App simplifies administrative tasks, enhances productivity, and improves institutional efficiency.",
  },
];

const sptLightCardItems: SpotLightCardItems[] = [
  {
    id: "student",
    items: [
      {
        id: 1,
        title: "Personalized Dashboard",
        content: "",
        points: [
          "Centralized Information: Get a personalized overview of your academic journey, including upcoming assignments, exam schedules, grades, attendance, and notifications. Your academic world is streamlined in a single, easy-to-navigate dashboard.",
          "Real-Time Updates: Stay in the loop with real-time notifications for class changes, new assignments, exam results, and campus events, all directly on your mobile device.",
        ],
        img: stuentCard_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Course & Class Management",
        content: "",
        points: [
          "View & Manage Timetables: Access your course schedules, classroom locations, and instructors with ease. Receive automatic notifications of any schedule changes or class cancellations, ensuring you’re always on top of your academic commitments.",
          "Assignment Tracking: Track your assignments, see due dates, and receive reminders. You can even submit assignments directly through the app and track the status of your submissions, ensuring a smooth academic experience.",
        ],
        img: stuentCard_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Instant Communication",
        content: "",
        points: [
          "Message Faculty & Peers: Communicate instantly with your instructors and classmates via direct messaging. Whether it’s for clarification on a lecture or collaboration on a group project, the mobile app makes it easy to stay in touch.",
          "Group Chats & Discussions: Participate in class discussions, group study sessions, or campus events. Stay connected to your academic community with in-app group messaging.",
        ],
        img: stuentCard_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: " Exam & Result Notifications",
        content: "",
        points: [
          "Exam Schedules: Never miss an exam! The app provides you with access to your exam dates and times. Get timely reminders and updates about upcoming exams to help you prepare effectively.",
          "Instant Result Updates: Get notified as soon as exam results are published, view your scores, and receive detailed feedback, all directly through the mobile app.",
        ],
        img: stuentCard_4,
        variant: "vertical",
      },
      {
        id: 5,
        title: "Document Access & Sharing",
        content: "",
        points: [
          "Access Study Materials: Download lecture notes, syllabi, reading materials, and other important documents from your courses, all through the app. No need to carry heavy notebooks around—everything you need is accessible at all times.",
          "Upload & Share Files: Upload assignments, project files, or documents to share with faculty and peers. The app simplifies sharing and collaborating on academic materials.",
        ],
        img: stuentCard_5,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 6,
        title: "Campus Event Notifications",
        content: "",
        points: [
          "Stay Updated on Campus Activities: Receive notifications about upcoming campus events like seminars, workshops, cultural programs, and more. You can register for events directly from the app and add them to your calendar for easy tracking.",
          "Event Reminders: Get reminders for registered events, ensuring you don’t miss out on any important campus activities.",
        ],
        img: stuentCard_6,
        variant: "vertical",
      },
      {
        id: 7,
        title: "Fee Management",
        content: "",
        points: [
          "Track Fee Payments: View your fee details, track pending payments, and get automated reminders for upcoming fee deadlines. You can even make payments directly from the app via integrated payment gateways.",
          "Receipts & History: Access receipts for previous payments and maintain a record of your financial transactions, making fee management straightforward and transparent.",
        ],
        img: stuentCard_7,
        variant: "vertical",
      },
      {
        id: 8,
        title: "Notification Preferences",
        content: "",
        points: [
          "Personalized Alerts: Customize your notification preferences. Choose what you want to be alerted about—whether it’s assignments, exam schedules, campus news, or fee payments. Tailor the app experience to suit your needs.",
        ],
        img: stuentCard_8,
        variant: "vertical",
      },
    ],
  },
  {
    id: "teacher",
    items: [
      {
        id: 1,
        title: "Class & Student Management",
        content: "",
        points: [
          "View Class Rosters: Access your class schedules and rosters, with detailed information on each student. Quickly view student profiles, including performance history, attendance, and behavior reports.",
          "Student Performance Tracking: Keep track of student progress in real time. Easily monitor grades, assignments, and exam results. View overall academic performance, making it easier to identify areas that may need additional attention.",
          "Assignments & Grading: Create, assign, and grade assignments directly from the app. You can review, grade, and provide feedback on assignments in a few simple clicks, allowing for a streamlined grading process.",
        ],
        img: teacherCard_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Attendance & Behavior Tracking",
        content: "",
        points: [
          "Record Attendance: Take attendance quickly and easily with just a few taps. The app allows you to mark attendance directly from your mobile device, even for large classes, ensuring accuracy and efficiency.",
          "Monitor Student Behavior: Track student behavior in and outside the classroom. Leave detailed notes about student behavior, performance, and participation, helping you provide valuable insights to parents and administrators.",
        ],
        img: teacherCard_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Communication with Students and Parents",
        content: "",
        points: [
          "Instant Messaging: Send direct messages to students and parents, ensuring fast and efficient communication. Share important updates, answer queries, or discuss academic progress—all within the app.",
          "Parent-Teacher Interaction: Initiate conversations with parents regarding their child’s performance, behavior, or attendance. The app ensures that communication with parents is seamless and private, facilitating strong partnerships in supporting student success.",
          "Notifications & Alerts: Send instant notifications for assignments, tests, project deadlines, and school events. You can also set reminders for upcoming tasks to keep students on track.",
        ],
        img: teacherCard_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Course & Content Management",
        content: "",
        points: [
          "Upload Learning Materials: Share course content, study materials, notes, and resources with your students.Students can download materials directly from the app, ensuring they have access to all necessary resources.",
          "Create & Share Assignments: Create assignments, quizzes, and tests, and assign them to your students directly through the app. Set deadlines, manage submissions, and track completion rates all in one place.",
          //   "Digital Classroom Setup: Organize and structure your digital classroom with ease. Share class agendas, learning plans, and weekly schedules, keeping students informed and engaged with the course content.",
        ],
        img: teacherCard_4,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 5,
        title: "Calendar & Scheduling",
        content: "",
        points: [
          "Manage Class Schedules: View your class timetable, upcoming lessons, and school events with ease. The app’s calendar integrates with your class schedule, making it easy to stay organized.",
          "Track Deadlines & Events: Keep track of assignment deadlines, exam schedules, and school events. Set up reminders for important dates to ensure nothing slips through the cracks.",
        ],
        img: teacherCard_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "Reporting & Insights",
        content: "",
        points: [
          "Generate Reports: Create and view detailed reports on student performance, attendance, and behavior. These reports provide valuable insights into trends, helping you better support your students’ learning.",
          "AI-Driven Performance Insights: The app leverages AI to provide performance trends and predictive analytics based on students’ academic data. Use these insights to tailor teaching strategies and enhance student engagement.",
        ],
        img: teacherCard_6,
        variant: "vertical",
      },
      {
        id: 7,
        title: " Exam & Assessment Management",
        content: "",
        points: [
          "Create & Grade Exams: Create online exams and quizzes, set time limits, and automatically grade them. The app allows you to grade assessments, provide feedback, and track student performance in real-time.",
          "View Exam Results: Easily access and review student exam results. The app provides instant insights into student performance, highlighting strengths and areas for improvement.",
        ],
        img: teacherCard_7,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "parent",
    items: [
      {
        id: 1,
        title: "Real-Time Academic Monitoring",
        content: "",
        points: [
          "Track Academic Progress: Stay updated on your child’s performance with access to grades, exam results, attendance, and assignment submissions. You can easily monitor how they are doing in various subjects, ensuring they remain on track.",
          "View Report Cards:Access your child’s report cards in real-time, whenever they’re published. Review their grades, comments, and academic performance to support their growth and learning.",
          "Assignment and Exam Updates: Receive notifications about your child’s assignments, exam schedules, and deadlines. You can ensure they stay prepared and never miss important deadlines.",
        ],
        img: parentCard_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Attendance and Behavior Monitoring",
        content: "",
        points: [
          "Track Attendance: View your child’s daily attendance record and receive alerts if they miss school or are marked absent. Stay informed about any school-related absences and communicate directly with school staff when necessary.",
          "Behavioral Insights: Monitor behavioral reports from teachers, including comments about class participation, behavior, and overall attitude toward learning. Stay informed about your child’s classroom interactions and help them improve where needed.",
        ],
        img: parentCard_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Fee Management",
        content: "",
        points: [
          "Track Fee Status: Stay on top of your child’s school fees with the app’s fee tracking feature. View pending payments, make payments securely through integrated gateways, and access receipts and transaction history all within the app.",
          "Payment Reminders: Receive reminders about fee deadlines, helping you ensure that payments are made on time, and avoid late charges.",
        ],
        img: parentCard_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "School Events & Notifications",
        content: "",
        points: [
          "Receive Event Updates: Stay informed about school events, extracurricular activities, parent-teacher meetings, and workshops. Receive notifications of upcoming events and register for them directly through the app.",
          "Important Announcements: Receive timely updates from the school about changes in schedules, holidays, special notices, or other important announcements. This ensures you’re always in the loop regarding school activities.",
        ],
        img: parentCard_4,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 5,
        title: "Health and Well-Being Monitoring",
        content: "",
        points: [
          "Track Health-Related Notifications: Get notified if your child reports illness or requires medical attention during school hours. In case of emergencies, the app ensures you are immediately informed about your child's health status.",
          "Wellness Updates: Receive updates about your child’s overall well-being, including participation in physical education, mental health support, and wellness programs offered by the school.",
        ],
        img: parentCard_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "Calendar & Schedule Access",
        content: "",
        points: [
          "Access School Calendar: View the school’s academic calendar with key dates such as holidays, exams, parent-teacher meetings, and school breaks. Stay organized and plan ahead with important dates right at your fingertips.",
          "Personalized Event Calendar: Your child’s events, exam schedules, and school activities are automatically added to your calendar, allowing you to stay on top of important milestones and commitments.",
        ],
        img: parentCard_6,
        variant: "vertical",
      },
      {
        id: 7,
        title: "Communication with Teachers and School Staff",
        content: "",
        points: [
          "Direct Messaging: Communicate directly with your child’s teachers and school staff through secure in-app messaging. You can discuss your child’s progress, raise concerns, or simply stay informed about their academic journey.",
          "Parent-Teacher Interaction: Schedule appointments or participate in parent-teacher meetings directly via the app. ",
        ],
        img: parentCard_7,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "admin",
    items: [
      {
        id: 1,
        title: "Real-Time Student Management",
        content: "",
        points: [
          "Track Student Data: Access comprehensive student profiles, including academic history, attendance records, exam results, and behavior reports. Easily monitor and update student information on the go.",
          "Admissions & Enrollment Management: Manage student applications, admissions, and enrollments seamlessly. Review documents, approve applications, and track the enrollment status of new students directly from the mobile app.",
          "Student Communication: Instantly communicate with students, parents, and staff regarding academic updates, events, or administrative matters. The app supports secure messaging, ensuring smooth communication between all stakeholders.",
        ],
        img: adminCard_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Attendance & Behavior Tracking",
        content: "",
        points: [
          "Monitor Attendance: Keep track of student attendance in real time. Review daily attendance reports and receive alerts about student absences, tardiness, or frequent leave, ensuring timely follow-up actions.",
          "Behavior Reports: Access detailed reports on student behavior, including discipline records, class participation, and teacher comments. Ensure proactive management of student well-being and development.",
        ],
        img: adminCard_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Staff & Faculty Management",
        content: "",
        points: [
          "Staff Profiles & Schedules: View faculty and staff profiles, including their teaching schedules, contact information, and performance data. Admins can easily update staff details and schedules as required.",
          "Staff Attendance: Track attendance and leave records of all staff members. Approve or reject leave requests, and manage staff working hours, ensuring operational efficiency.",
          "Performance Evaluation: Access faculty performance evaluations and feedback from students and peers. Use these insights to improve teaching quality and faculty development initiatives.",
        ],
        img: adminCard_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Fee Management",
        content: "",
        points: [
          "Track Fee Payments: Monitor student fee payments, track overdue payments, and send reminders to parents. The app allows you to review fee history, generate invoices, and manage fee collection seamlessly.",
          "Fee Collection & Reports: Admins can view and manage payment transactions, generate financial reports, and access payment history directly from the mobile app.",
        ],
        img: adminCard_4,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 5,
        title: "School Event Management",
        content: "",
        points: [
          "Create & Manage Events: Plan and organize school events such as parent-teacher meetings, extracurricular activities, seminars, and workshops. Manage event registrations and track participation.",
          "Event Notifications: Send event notifications to students, parents, and staff via the app. Ensure that everyone stays informed about important school events, activities, and deadlines.",
        ],
        img: adminCard_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "Communication with Parents and Students",
        content: "",
        points: [
          "Send Alerts & Notifications: Instantly communicate with parents and students regarding academic progress, attendance issues, fee reminders, upcoming events, or any important announcements.",
          "Personalized Messages: Send personalized notifications to parents or students based on their academic performance, attendance, or any other specific school-related matter.",
        ],
        img: adminCard_6,
        variant: "vertical",
      },
      {
        id: 7,
        title: "Real-Time Reports & Analytics",
        content: "",
        points: [
          "Instant Data Access: View real-time reports on student performance, attendance, fee status, staff evaluations, and more. Generate custom reports for deeper insights into school performance and trends.",
          "Data-Driven Insights: Utilize data analytics to track key metrics, such as student performance, staff effectiveness, and fee collection efficiency. ",
        ],
        img: adminCard_7,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 8,
        title: "Document Management",
        content: "",
        points: [
          "Access & Share Documents: Upload and manage important school documents such as reports, notices, circulars, and student records. Share these documents securely with teachers, students, and parents.",
          "Document Signing: Admins can request signatures for official documents, such as permission slips, school policies, and more, directly within the app, reducing the need for physical paperwork.",
        ],
        img: adminCard_8,
        variant: "vertical",
      },
    ],
  },
];

const benefitsToYourInstitutionCardItems = [
  {
    id: "student",
    items: [
      {
        title: "Convenience & Accessibility",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Real-Time Updates & Alerts",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Seamless Communication",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Efficient Time Management",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Secure Transactions",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  {
    id: "teacher",
    items: [
      {
        title: "Efficient Classroom Management",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Stay Organized & On Track",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Foster Student Growth",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Enhanced Communication",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Save Time with Automation",
        img: benefitsToYourInstitutionCardImage5,
      },
      {
        title: "Access Everything on the Go",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "parent",
    items: [
      {
        title: "Stay Connected Anytime, Anywhere",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Proactive Involvement in Their Education",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Seamless Communication with the School",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Effortless Fee Management",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Peace of Mind",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  {
    id: "admin",
    items: [
      {
        title: "Complete Control at Your Fingertips ",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Streamlined Operations",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Data-Driven Decision Making",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Improved Communication",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Efficient Event Management",
        img: benefitsToYourInstitutionCardImage5,
      },
      {
        title: "Reduced Paperwork",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
];

const AI_Powered_Features = [
  {
    id: "student",
    renderContent: [
      {
        title: "Smart Assignment Reminders",
        content:
          "The app uses AI to analyze your academic workload and sends personalized reminders based on your assignment due dates and exam schedules, ensuring you never miss a deadline. ",
      },
      {
        title: "Instant Academic Support",
        content:
          "Have a question? EDUMAAT's AI assistant can answer common academic queries and guide you through the app's features, helping you get the most out of the platform. ",
      },
      {
        title: "Performance Analysis",
        content:
          "Track your performance with AI-driven insights. The app provides personalized suggestions and resources based on your academic progress to help you improve and succeed.",
      },
    ],
  },
  {
    id: "teacher",
    renderContent: [
      {
        title: "Smart Grading Assistance",
        content:
          "The app’s AI assistant can help with grading assignments by offering automated suggestions based on grading criteria, reducing your workload and ensuring consistency in evaluations.",
      },
      {
        title: "Performance Recommendations",
        content:
          "Based on student data, the AI assistant suggests personalized teaching strategies, resources, and tools to help struggling students and push high performers to excel further.",
      },
      {
        title: "Automated Feedback Generation",
        content:
          "The app’s AI helps generate feedback on student assignments and exams, offering constructive criticism or praise based on pre-defined rubrics, saving you time while providing personalized feedback.",
      },
    ],
  },
  {
    id: "parent",
    renderContent: [
      {
        title: "Performance Insights",
        content:
          "EDUMAAT’s AI analyzes your child’s academic data to provide personalized insights and recommendations, helping you identify areas for improvement or additional support.",
      },
      {
        title: "Instant Alerts",
        content:
          "The app uses AI to send smart alerts based on your child’s behavior, academic progress, and attendance. Whether it’s an upcoming exam or a behavioral concern, the AI assistant keeps you informed and helps you respond proactively.",
      },
      {
        title: "Predictive Analysis for Success",
        content:
          "Based on your child’s academic performance, EDUMAAT’s AI assistant provides predictions on future performance, highlighting strengths and areas where additional focus may be needed.",
      },
    ],
  },
  {
    id: "admin",
    renderContent: [
      {
        title: "Predictive Insights",
        content:
          "The app’s AI-driven analytics provide predictive insights into student performance, attendance patterns, and fee payments. Use these insights to proactively address issues and support student success.",
      },
      {
        title: "Automated Reminders & Alerts",
        content:
          "The AI Assistant automatically sends reminders for pending tasks, such as fee payments, attendance follow-ups, and upcoming events, ensuring timely actions.",
      },
      {
        title: "Performance Recommendations",
        content:
          "Based on institutional data, the AI Assistant provides recommendations for improving student engagement, faculty development, and operational efficiency.",
      },
    ],
  },
];

const whyChooseEdumaatContent: whyChooseEdumaatContent[] = [
  {
    id: "student",
    title: "",
    content:
      "EDUMAAT Student Mobile App is designed to simplify your academic life, making it easier to manage your studies, stay connected with your community, and achieve success. Whether you're at home or on the go, EDUMAAT puts the power of education in your hands. ",
    buttonText: "",
    img: whyChooseEdumaat_1,
  },
  {
    id: "teacher",
    title: "",
    content:
      "EDUMAAT Teacher Mobile Application simplifies the way you manage your classroom, interact with students and parents, and track student progress. With its easy-to-use interface and powerful features, the app empowers you to be more organized, efficient, and effective in your teaching role. ",
    buttonText: "",
    img: whyChooseEdumaat_2,
  },
  {
    id: "parent",
    title: "",
    content:
      "EDUMAAT Parent Mobile Application empowers you to be a key partner in your child’s educational journey. Stay informed, get involved, and support their growth—all from the convenience of your mobile device. ",
    buttonText: "",
    img: whyChooseEdumaat_3,
  },
  {
    id: "admin",
    title: "",
    content:
      "EDUMAAT Admin Mobile Application is a powerful tool that brings all the administrative functions of your institution into one convenient mobile platform. From managing student records to tracking fee payments and overseeing staff performance, this app ensures that all aspects of your institution run smoothly, efficiently, and in real time. ",
    buttonText: "",
    img: whyChooseEdumaat_4,
  },
];

const MobileApps = () => {
  const navigate = useNavigate();
  const getSectionDataById = (id: string) => {
    const header = cardContentHeader.find((item) => item.id === id) || null;
    const keyFeaturesItems =
      sptLightCardItems.find((section) => section.id === id)?.items ?? [];
    const benefitsItems =
      benefitsToYourInstitutionCardItems.find((section) => section.id === id)
        ?.items ?? [];
    const whyChooseEdumaat =
      whyChooseEdumaatContent.find((item) => item.id === id) || null;

    const AIPoweredContent =
      AI_Powered_Features.find((item) => item.id === id) || null;

    return {
      header,
      keyFeaturesItems,
      benefitsItems,
      whyChooseEdumaat,
      AIPoweredContent,
    };
  };

  const HeaderContent = (id: string) => {
    return (
      <React.Fragment key={`${id}`}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: 20, sm: 28 },
          }}
        >
          {getSectionDataById(id).header?.title}
        </Typography>
        <Typography>{getSectionDataById(id).header?.content}</Typography>
      </React.Fragment>
    );
  };

  const benefitsContent = (id: string) => {
    return (
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
        >
          Benefits to Your Institution
        </Typography>
        <Box>
          <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent={"center"}>
            {getSectionDataById(id).benefitsItems.map((item, idx) => {
              return (
                <Grid
                  size={{ xs: 12, sm: 4, lg: 2 }}
                  key={idx}
                  sx={{
                    boxShadow: "0px 6px 12px #5580FF33",
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 3,
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={item.img}
                      alt="benefitsToYourInstitutionCardImage"
                      width={50}
                      height={50}
                      style={{ marginBottom: 12 }}
                    />
                    <Typography variant="body2" fontWeight={600} p={2}>
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    );
  };

  const whyEdumaatContent = (id: string) => {
    return (
      <React.Fragment key={`${id}-apps`}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="img"
              src={getSectionDataById(id).whyChooseEdumaat?.img}
              alt="admissionSystemImage"
              sx={{
                borderRadius: 2,
                boxShadow: "0px 6px 12px #5580FF33",
                height: { xs: 200, sm: 300, md: "100%", lg: "90%" },
                width: { xs: "100%", md: "90%" },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, mt: 4 }}>
              {getSectionDataById(id).whyChooseEdumaat?.title}
            </Typography>
            <Typography sx={{ my: 4 }}>
              {getSectionDataById(id).whyChooseEdumaat?.content}
            </Typography>
            <ReuGradientButton
              key={"amplify success"}
              variant="contained"
              sx={{ px: { xs: 2, lg: 12 }, py: { sm: 2, xs: 0.3 } }}
              onClick={() => navigate("/enquiry")}
            >
              {getSectionDataById(id).whyChooseEdumaat?.buttonText ||
                "Book Now"}
            </ReuGradientButton>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };

  const AI_Powered_Content = (id: string) => {
    return (
      <Box sx={{ px: { lg: 14, xs: 0 } }}>
        <Grid container spacing={4} justifyContent={"center"}>
          {getSectionDataById(id).AIPoweredContent?.renderContent.map(
            (item) => {
              return (
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      p: 2,
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      boxShadow: "0px 2px 8px #00000040",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ pt: 2, pb: 3 }}>
                      {item.content}
                    </Typography>
                  </Box>
                </Grid>
              );
            }
          )}
        </Grid>
      </Box>
    );
  };
  return (
    <>
      <title>Edumaat Student App | Empowering Students Digitally</title>
      <meta
        name="description"
        content="Enable students to manage attendance, timetable, fees, assignments, and academic records — all from the Edumaat mobile app."
      />
      <meta
        name="keywords"
        content="student app, school app for students, Edumaat mobile app, student portal, online education,teacher app, classroom management app, digital teaching tools, Edumaat for teachers,parent app, school app for parents, student progress tracker, Edumaat mobile,admin app, ERP for school admin, Edumaat mobile, educational institution management"
      />
      <link rel="canonical" href="https://edumaat.com/mobile-apps#student" />

      <Box
        sx={{
          px: { xs: 2 },
          mt: { xs: 3 },
        }}
      >
        <Box key={"student"}>
          <Box sx={{ px: { xs: 0, lg: 12 } }}>
            <Box sx={{ textAlign: "center" }}>{HeaderContent("student")}</Box>
            <Box sx={{ mt: 8, px: { xs: 2, sm: 0 } }}>
              <SptLightCard
                items={getSectionDataById("student").keyFeaturesItems ?? []}
                key={"sptlightcard"}
              />
            </Box>
          </Box>

          <Box sx={{ px: { lg: 12, xs: 3, sm: 8 }, mb: 3, mt: 8 }}>
            {benefitsContent("student")}
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: "bold",
                mb: 3,
                textAlign: "center",
              }}
            >
              AI-Powered Features
            </Typography>
            {AI_Powered_Content("student")}
          </Box>

          <Box sx={{ px: { lg: 18, xs: 4 }, my: 10 }}>
            <Grid container spacing={4}>
              {whyEdumaatContent("student")}
            </Grid>
          </Box>
        </Box>

        <Box key={"teacher"}>
          <Box sx={{ px: { xs: 0, lg: 12 } }}>
            <Box sx={{ textAlign: "center" }}>{HeaderContent("teacher")}</Box>
            <Box sx={{ mt: 8, px: { xs: 2, sm: 0 } }}>
              <SptLightCard
                items={getSectionDataById("teacher").keyFeaturesItems ?? []}
                key={"sptlightcard"}
              />
            </Box>
          </Box>

          <Box sx={{ px: { lg: 14, xs: 3, sm: 8 }, mb: 3, mt: 8 }}>
            {benefitsContent("teacher")}
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: "bold",
                mb: 3,
                textAlign: "center",
              }}
            >
              AI-Powered Features
            </Typography>
            {AI_Powered_Content("teacher")}
          </Box>

          <Box sx={{ px: { lg: 12, xs: 4 }, my: 10 }}>
            <Box sx={{ px: { lg: 6, xs: 4 }, my: 10 }}>
              <Grid container spacing={4}>
                {whyEdumaatContent("teacher")}
              </Grid>
            </Box>
            {/* <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component="img"
                src={admissionSystemImage}
                alt="admissionSystemImage"
                sx={{
                  borderRadius: 2,
                  boxShadow: "0px 6px 12px #5580FF33",
                  height: { xs: 200, sm: 300, md: "100%", lg: "90%" },
                  width: { xs: "100%", md: "90%" },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>{whyEdumaatContent("teacher")}</Grid>
          </Grid> */}
          </Box>
        </Box>

        <Box key={"parent"}>
          <Box sx={{ px: { xs: 0, lg: 12 } }}>
            <Box sx={{ textAlign: "center" }}>{HeaderContent("parent")}</Box>
            <Box sx={{ mt: 8, px: { xs: 2, sm: 0 } }}>
              <SptLightCard
                items={getSectionDataById("parent").keyFeaturesItems ?? []}
                key={"sptlightcard"}
              />
            </Box>
          </Box>

          <Box sx={{ px: { lg: 14, xs: 3, sm: 8 }, mb: 3, mt: 8 }}>
            {benefitsContent("parent")}
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: "bold",
                mb: 3,
                textAlign: "center",
              }}
            >
              AI-Powered Features
            </Typography>
            {AI_Powered_Content("parent")}
          </Box>

          <Box sx={{ px: { lg: 12, xs: 4 }, my: 10 }}>
            <Box sx={{ px: { lg: 8, xs: 4 }, my: 10 }}>
              <Grid container spacing={4}>
                {whyEdumaatContent("parent")}
              </Grid>
            </Box>
            {/* <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component="img"
                src={admissionSystemImage}
                alt="admissionSystemImage"
                sx={{
                  borderRadius: 2,
                  boxShadow: "0px 6px 12px #5580FF33",
                  height: { xs: 200, sm: 300, md: "100%", lg: "90%" },
                  width: { xs: "100%", md: "90%" },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>{whyEdumaatContent("parent")}</Grid>
          </Grid> */}
          </Box>
        </Box>

        <Box key={"admin"}>
          <Box sx={{ px: { xs: 0, lg: 12 } }}>
            <Box sx={{ textAlign: "center" }}>{HeaderContent("admin")}</Box>
            <Box sx={{ mt: 8, px: { xs: 2, sm: 0 } }}>
              <SptLightCard
                items={getSectionDataById("admin").keyFeaturesItems ?? []}
                key={"sptlightcard"}
              />
            </Box>
          </Box>

          <Box sx={{ px: { lg: 14, xs: 3, sm: 8 }, mb: 3, mt: 8 }}>
            {benefitsContent("admin")}
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: "bold",
                mb: 3,
                textAlign: "center",
              }}
            >
              AI-Powered Features
            </Typography>
            {AI_Powered_Content("admin")}
          </Box>

          <Box sx={{ px: { lg: 10, xs: 4 }, my: 10 }}>
            <Box sx={{ px: { lg: 8, xs: 4 }, my: 10 }}>
              <Grid container spacing={4}>
                {whyEdumaatContent("admin")}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MobileApps;
