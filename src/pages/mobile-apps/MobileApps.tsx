import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Slide, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import whyChooseEdumaat_1 from "../../assets/mobile-apps/studentBanner.png";
import whyChooseEdumaat_2 from "../../assets/mobile-apps/teacherBanner.png";
import whyChooseEdumaat_3 from "../../assets/mobile-apps/parentBanner.png";
import whyChooseEdumaat_4 from "../../assets/mobile-apps/adminBanner.png";
import HorizontalTabs from "./HorizontalTabs";
import VerticalTabs, { VerticalTabItem } from "./VerticalTabs";
import LazyBoxImage from "../../components/LazyBoxImage";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";
import mobile_apps_header_img from "../../assets/mobile-apps/mobile_apps_header_img.png";
import {
  mobileAppsBenefitsIcons,
  mobileAppsFeaturesImages,
  mobileAppsHeaderTabImages,
  mobileAppsPurposeImages,
  mobileAppsVerticalTabImages,
} from "../../utils/ImageContainer";
import { useCurrentDetectedSection } from "../../components/DetectCurrectSection";

interface FeaturesItem {
  id: string;
  title: string;
  content: { id: string; subTitle: string; point: string }[];
  img: string;
}

interface whyChooseEdumaatContent {
  id: string | number;
  title: string;
  content: string;
  buttonText: string;
  img?: string;
}

interface BenefitsToInstitution {
  id: string;
  label: string;
  icon: string;
}

const benefitsToYourInstitutionCardItems: Record<
  string,
  BenefitsToInstitution[]
> = {
  student: [
    {
      id: "Convenience & Accessibility",
      label: "Convenience & Accessibility",
      icon: mobileAppsBenefitsIcons.studentsbenefitsIcon1,
    },
    {
      id: "Real-Time Updates & Alerts",
      label: "Real-Time Updates & Alerts",
      icon: mobileAppsBenefitsIcons.studentsbenefitsIcon2,
    },
    {
      id: "Seamless Communication",
      label: "Seamless Communication",
      icon: mobileAppsBenefitsIcons.studentsbenefitsIcon3,
    },
    {
      id: "Efficient Time Management",
      label: "Efficient Time Management",
      icon: mobileAppsBenefitsIcons.studentsbenefitsIcon4,
    },
    {
      id: "Secure Transactions",
      label: "Secure Transactions",
      icon: mobileAppsBenefitsIcons.studentsbenefitsIcon5,
    },
  ],
  teacher: [
    {
      id: "Efficient Classroom Management",
      label: "Efficient Classroom Management",
      icon: mobileAppsBenefitsIcons.teacherbenefitsIcon1,
    },
    {
      id: "Stay Organized & On Track",
      label: "Stay Organized & On Track",
      icon: mobileAppsBenefitsIcons.teacherbenefitsIcon2,
    },
    {
      id: "Foster Student Growth",
      label: "Foster Student Growth",
      icon: mobileAppsBenefitsIcons.teacherbenefitsIcon3,
    },
    {
      id: "Enhanced Communication",
      label: "Enhanced Communication",
      icon: mobileAppsBenefitsIcons.teacherbenefitsIcon4,
    },
    {
      id: "Save Time with Automation",
      label: "Save Time with Automation",
      icon: mobileAppsBenefitsIcons.teacherbenefitsIcon5,
    },
    {
      id: "Access Everything on the Go",
      label: "Access Everything on the Go",
      icon: mobileAppsBenefitsIcons.teacherbenefitsIcon6,
    },
  ],
  parent: [
    {
      id: "Stay Connected Anytime, Anywhere",
      label: "Stay Connected Anytime, Anywhere",
      icon: mobileAppsBenefitsIcons.parentbenefitsIcon1,
    },
    {
      id: "Proactive Involvement in Their Education",
      label: "Proactive Involvement in Their Education",
      icon: mobileAppsBenefitsIcons.parentbenefitsIcon2,
    },
    {
      id: "Seamless Communication with the School",
      label: "Seamless Communication with the School",
      icon: mobileAppsBenefitsIcons.parentbenefitsIcon3,
    },
    {
      id: "Effortless Fee Management",
      label: "Effortless Fee Management",
      icon: mobileAppsBenefitsIcons.parentbenefitsIcon4,
    },
    {
      id: "Peace of Mind",
      label: "Peace of Mind",
      icon: mobileAppsBenefitsIcons.parentbenefitsIcon5,
    },
  ],
  admin: [
    {
      id: "Complete Control at Your Fingertips ",
      label: "Complete Control at Your Fingertips ",
      icon: mobileAppsBenefitsIcons.adminbenefitsIcon1,
    },
    {
      id: "Streamlined Operations",
      label: "Streamlined Operations",
      icon: mobileAppsBenefitsIcons.adminbenefitsIcon2,
    },
    {
      id: "Data-Driven Decision Making",
      label: "Data-Driven Decision Making",
      icon: mobileAppsBenefitsIcons.adminbenefitsIcon3,
    },
    {
      id: "Improved Communication",
      label: "Improved Communication",
      icon: mobileAppsBenefitsIcons.adminbenefitsIcon4,
    },
    {
      id: "Efficient Event Management",
      label: "Efficient Event Management",
      icon: mobileAppsBenefitsIcons.adminbenefitsIcon5,
    },
    {
      id: "Reduced Paperwork",
      label: "Reduced Paperwork",
      icon: mobileAppsBenefitsIcons.adminbenefitsIcon6,
    },
  ],
};

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

const tabItems = [
  {
    id: "student",
    label: "Students",
    icon: mobileAppsHeaderTabImages.headerTabIcon1,
    activeIcon: mobileAppsHeaderTabImages.headerTabBlueIcon1,
  },
  {
    id: "teacher",
    label: "Teachers",
    icon: mobileAppsHeaderTabImages.headerTabIcon2,
    activeIcon: mobileAppsHeaderTabImages.headerTabBlueIcon2,
  },
  {
    id: "parent",
    label: "Parents",
    icon: mobileAppsHeaderTabImages.headerTabIcon3,
    activeIcon: mobileAppsHeaderTabImages.headerTabBlueIcon3,
  },
  {
    id: "admin",
    label: "Admin",
    icon: mobileAppsHeaderTabImages.headerTabIcon4,
    activeIcon: mobileAppsHeaderTabImages.headerTabBlueIcon4,
  },
];

const verticalTabItems: Record<string, VerticalTabItem[]> = {
  student: [
    {
      id: 0,
      label: "Personalized Dashboard",
      value: "Personalized Dashboard",
      img: mobileAppsVerticalTabImages.student_vt_image1,
      title: "Personalized Dashboard",
      content: [
        {
          id: "personalised-dashboard-content-1",
          label:
            "Centralized Information: Get a personalized overview of your academic journey, including upcoming assignments, exam schedules, grades, attendance, and notifications. Your academic world is streamlined in a single, easy-to-navigate dashboard. ",
        },
        {
          id: "personalised-dashboard-content-2",
          label:
            "Real-Time Updates: Stay in the loop with real-time notifications for class changes, new assignments, exam results, and campus events, all directly on your mobile device.",
        },
      ],
    },
    {
      id: 1,
      label: "Course & Class Management",
      value: "Course & Class Management",
      img: mobileAppsVerticalTabImages.student_vt_image2,
      title: "Course & Class Management",
      content: [
        {
          id: "course-class-content-1",
          label:
            "View & Manage Timetables: Access your course schedules, classroom locations, and instructors with ease. Receive automatic notifications of any schedule changes or class cancellations, ensuring you’re always on top of your academic commitments.",
        },
        {
          id: "course-class-content-2",
          label:
            "Assignment Tracking: Track your assignments, see due dates, and receive reminders. You can even submit assignments directly through the app and track the status of your submissions, ensuring a smooth academic experience.",
        },
      ],
    },
    {
      id: 2,
      label: "Instant Communication",
      value: "Instant Communication",
      img: mobileAppsVerticalTabImages.student_vt_image3,
      title: "Instant Communication",
      content: [
        {
          id: "instant-communication-content-1",
          label:
            "Message Faculty & Peers: Communicate instantly with your instructors and classmates via direct messaging. Whether it’s for clarification on a lecture or collaboration on a group project, the mobile app makes it easy to stay in touch. ",
        },
        {
          id: "instant-communication-content-2",

          label:
            "Group Chats & Discussions: Participate in class discussions, group study sessions, or campus events. Stay connected to your academic community with in-app group messaging.",
        },
      ],
    },
    {
      id: 3,
      label: "Exam & Result Notifications",
      value: "Exam & Result Notifications",
      img: mobileAppsVerticalTabImages.student_vt_image4,
      title: "Exam & Result Notifications",
      content: [
        {
          id: "exam-results-content-1",
          label:
            "Exam Schedules: Never miss an exam! The app provides you with access to your exam dates and times. Get timely reminders and updates about upcoming exams to help you prepare effectively.",
        },
        {
          id: "exam-results-content-2",
          label:
            "Instant Result Updates: Get notified as soon as exam results are published, view your scores, and receive detailed feedback, all directly through the mobile app.",
        },
      ],
    },
    {
      id: 4,
      label: "Document Access & Sharing",
      value: "Document Access & Sharing",
      img: mobileAppsVerticalTabImages.student_vt_image5,
      title: "Document Access & Sharing",
      content: [
        {
          id: "document-access-content-1",
          label:
            "Access Study Materials: Download lecture notes, syllabi, reading materials, and other important documents from your courses, all through the app. No need to carry heavy notebooks around—everything you need is accessible at all times.",
        },
        {
          id: "document-access-content-2",
          label:
            "Upload & Share Files: Upload assignments, project files, or documents to share with faculty and peers. The app simplifies sharing and collaborating on academic materials.",
        },
      ],
    },
    {
      id: 5,
      label: "Campus Event Notifications",
      value: "Campus Event Notifications",
      img: mobileAppsVerticalTabImages.student_vt_image6,
      title: "Campus Event Notifications",
      content: [
        {
          id: "campus-event-content-1",
          label:
            "Stay Updated on Campus Activities: Receive notifications about upcoming campus events like seminars, workshops, cultural programs, and more. You can register for events directly from the app and add them to your calendar for easy tracking.",
        },
        {
          id: "campus-event-content-2",
          label:
            "Event Reminders: Get reminders for registered events, ensuring you don’t miss out on any important campus activities.",
        },
      ],
    },
    {
      id: 6,
      label: "Fee Management",
      value: "Fee Management",
      img: mobileAppsVerticalTabImages.student_vt_image7,
      title: "Fee Management",
      content: [
        {
          id: "fee-mgmt-content-1",
          label:
            "Track Fee Payments: View your fee details, track pending payments, and get automated reminders for upcoming fee deadlines. You can even make payments directly from the app via integrated payment gateways. ",
        },
        {
          id: "fee-mgmt-content-2",
          label:
            "Receipts & History: Access receipts for previous payments and maintain a record of your financial transactions, making fee management straightforward and transparent.",
        },
      ],
    },
    {
      id: 7,
      label: "Notification Preferences",
      value: "Notification Preferences",
      img: mobileAppsVerticalTabImages.student_vt_image8,
      title: "Notification Preferences",
      content: [
        {
          id: "notification-prefrences-content-1",
          label:
            "Personalized Alerts: Customize your notification preferences. Choose what you want to be alerted about—whether it’s assignments, exam schedules, campus news, or fee payments. Tailor the app experience to suit your needs. ",
        },
      ],
    },
  ],
  teacher: [
    {
      id: 0,
      label: "Class & Student Management",
      value: "Class & Student Management",
      img: mobileAppsVerticalTabImages.teacher_vt_image1,
      title: "Class & Student Management",
      content: [
        {
          id: "class-student-content-1",
          label:
            "View Class Rosters: Access your class schedules and rosters, with detailed information on each student. Quickly view student profiles, including performance history, attendance, and behavior reports. ",
        },
        {
          id: "class-student-content-2",
          label:
            "  Student Performance Tracking: Keep track of student progress in real time. Easily monitor grades, assignments, and exam results. View overall academic performance, making it easier to identify areas that may need additional attention. ",
        },
        {
          id: "class-student-content-3",
          label:
            " Assignments & Grading: Create, assign, and grade assignments directly from the app. You can review, grade, and provide feedback on assignments in a few simple clicks, allowing for a streamlined grading process.",
        },
      ],
    },
    {
      id: 1,
      label: "Attendance & Behavior Tracking",
      value: "Attendance & Behavior Tracking",
      img: mobileAppsVerticalTabImages.teacher_vt_image2,
      title: "Attendance & Behavior Tracking",
      content: [
        {
          id: "attendance-behavior-tracking-content-1",
          label:
            "Record Attendance: Take attendance quickly and easily with just a few taps. The app allows you to mark attendance directly from your mobile device, even for large classes, ensuring accuracy and efficiency.",
        },
        {
          id: "attendance-behavior-tracking-content-2",
          label:
            "Monitor Student Behavior: Track student behavior in and outside the classroom. Leave detailed notes about student behavior, performance, and participation, helping you provide valuable insights to parents and administrators.",
        },
      ],
    },
    {
      id: 2,
      label: "Communication with Students and Parents",
      value: "Communication with Students and Parents",
      img: mobileAppsVerticalTabImages.teacher_vt_image3,
      title: "Communication with Students and Parents",
      content: [
        {
          id: "communication-students-parents-content-1",
          label:
            "Instant Messaging: Send direct messages to students and parents, ensuring fast and efficient communication. Share important updates, answer queries, or discuss academic progress—all within the app.",
        },
        {
          id: "communication-students-parents-content-2",
          label:
            "Parent-Teacher Interaction: Initiate conversations with parents regarding their child’s performance, behavior, or attendance. The app ensures that communication with parents is seamless and private, facilitating strong partnerships in supporting student success.",
        },
        {
          id: "communication-students-parents-content-2",
          label:
            "Notifications & Alerts: Send instant notifications for assignments, tests, project deadlines, and school events. You can also set reminders for upcoming tasks to keep students on track.",
        },
      ],
    },
    {
      id: 3,
      label: "Course & Content Management",
      value: "Course & Content Management",
      img: mobileAppsVerticalTabImages.teacher_vt_image4,
      title: "Course & Content Management",
      content: [
        {
          id: "course-content-management-content-1",
          label:
            "Upload Learning Materials: Share course content, study materials, notes, and resources with your students.Students can download materials directly from the app, ensuring they have access to all necessary resources.",
        },
        {
          id: "course-content-management-content-2",
          label:
            "Create & Share Assignments: Create assignments, quizzes, and tests, and assign them to your students directly through the app. Set deadlines, manage submissions, and track completion rates all in one place.",
        },
      ],
    },
    {
      id: 4,
      label: "Calendar & Scheduling",
      value: "Calendar & Scheduling",
      img: mobileAppsVerticalTabImages.teacher_vt_image5,
      title: "Calendar & Scheduling",
      content: [
        {
          id: "calendar-scheduling-content-1",
          label:
            "Manage Class Schedules: View your class timetable, upcoming lessons, and school events with ease. The app’s calendar integrates with your class schedule, making it easy to stay organized.",
        },
        {
          id: "calendar-scheduling-content-2",
          label:
            "Track Deadlines & Events: Keep track of assignment deadlines, exam schedules, and school events. Set up reminders for important dates to ensure nothing slips through the cracks.",
        },
      ],
    },
    {
      id: 5,
      label: "Reporting & Insights",
      value: "Reporting & Insights",
      img: mobileAppsVerticalTabImages.teacher_vt_image6,
      title: "Reporting & Insights",
      content: [
        {
          id: "reporting-insights-content-1",
          label:
            "Generate Reports: Create and view detailed reports on student performance, attendance, and behavior. These reports provide valuable insights into trends, helping you better support your students’ learning.",
        },
        {
          id: "reporting-insights-content-2",
          label:
            "AI-Driven Performance Insights: The app leverages AI to provide performance trends and predictive analytics based on students’ academic data. Use these insights to tailor teaching strategies and enhance student engagement.",
        },
      ],
    },
    {
      id: 6,
      label: "Exam & Assessment Management",
      value: "Exam & Assessment Management",
      img: mobileAppsVerticalTabImages.teacher_vt_image7,
      title: "Exam & Assessment Management",
      content: [
        {
          id: "exam-assessment-content-1",
          label:
            "Create & Grade Exams: Create online exams and quizzes, set time limits, and automatically grade them. The app allows you to grade assessments, provide feedback, and track student performance in real-time.",
        },
        {
          id: "exam-assessment-content-2",
          label:
            "View Exam Results: Easily access and review student exam results. The app provides instant insights into student performance, highlighting strengths and areas for improvement.",
        },
      ],
    },
  ],
  parent: [
    {
      id: 0,
      label: "Real-Time Academic Monitoring",
      value: "Real-Time Academic Monitoring",
      img: mobileAppsVerticalTabImages.parent_vt_image1,
      title: "Real-Time Academic Monitoring",
      content: [
        {
          id: "real-time-academic-monitoring-content-1",
          label:
            "Track Academic Progress: Stay updated on your child’s performance with access to grades, exam results, attendance, and assignment submissions. You can easily monitor how they are doing in various subjects, ensuring they remain on track.",
        },
        {
          id: "real-time-academic-monitoring-content-2",
          label:
            "View Report Cards:Access your child’s report cards in real-time, whenever they’re published. Review their grades, comments, and academic performance to support their growth and learning.",
        },
        {
          id: "real-time-academic-monitoring-content-3",
          label:
            "Assignment and Exam Updates: Receive notifications about your child’s assignments, exam schedules, and deadlines. You can ensure they stay prepared and never miss important deadlines.",
        },
      ],
    },
    {
      id: 1,
      label: "Attendance and Behavior Monitoring",
      value: "Attendance and Behavior Monitoring",
      img: mobileAppsVerticalTabImages.parent_vt_image2,
      title: "Attendance and Behavior Monitoring",
      content: [
        {
          id: "attendance-behavior-monitoring-content-1",
          label:
            "Track Attendance: View your child’s daily attendance record and receive alerts if they miss school or are marked absent. Stay informed about any school-related absences and communicate directly with school staff when necessary.",
        },
        {
          id: "attendance-behavior-monitoring-content-2",
          label:
            "Behavioral Insights: Monitor behavioral reports from teachers, including comments about class participation, behavior, and overall attitude toward learning. Stay informed about your child’s classroom interactions and help them improve where needed.",
        },
      ],
    },
    {
      id: 2,
      label: "Fee Management",
      value: "Fee Management",
      img: mobileAppsVerticalTabImages.parent_vt_image3,
      title: "Fee Management",
      content: [
        {
          id: "Fee-management-content-1",
          label:
            "Track Fee Status: Stay on top of your child’s school fees with the app’s fee tracking feature. View pending payments, make payments securely through integrated gateways, and access receipts and transaction history all within the app.",
        },
        {
          id: "Fee-management-content-2",
          label:
            "Payment Reminders: Receive reminders about fee deadlines, helping you ensure that payments are made on time, and avoid late charges.",
        },
      ],
    },
    {
      id: 3,
      label: "School Events & Notifications",
      value: "School Events & Notifications",
      img: mobileAppsVerticalTabImages.parent_vt_image4,

      title: "School Events & Notifications",
      content: [
        {
          id: "school-events-notifications-content-1",
          label:
            "Receive Event Updates: Stay informed about school events, extracurricular activities, parent-teacher meetings, and workshops. Receive notifications of upcoming events and register for them directly through the app.",
        },
        {
          id: "school-events-notifications-content-2",
          label:
            "Important Announcements: Receive timely updates from the school about changes in schedules, holidays, special notices, or other important announcements. This ensures you’re always in the loop regarding school activities.",
        },
      ],
    },
    {
      id: 4,
      label: "Health and Well-Being Monitoring",
      value: "Health and Well-Being Monitoring",
      img: mobileAppsVerticalTabImages.parent_vt_image5,

      title: "Health and Well-Being Monitoring",
      content: [
        {
          id: "health-well-being-monitoring-content-1",
          label:
            "Track Health-Related Notifications: Get notified if your child reports illness or requires medical attention during school hours. In case of emergencies, the app ensures you are immediately informed about your child's health status.",
        },
        {
          id: "health-well-being-monitoring-content-2",
          label:
            "Wellness Updates: Receive updates about your child’s overall well-being, including participation in physical education, mental health support, and wellness programs offered by the school.",
        },
      ],
    },
    {
      id: 5,
      label: "Calendar & Schedule Access",
      value: "Calendar & Schedule Access",
      img: mobileAppsVerticalTabImages.parent_vt_image6,

      title: "Calendar & Schedule Access",
      content: [
        {
          id: "calendar-schedule-access-content-1",
          label:
            "Access School Calendar: View the school’s academic calendar with key dates such as holidays, exams, parent-teacher meetings, and school breaks. Stay organized and plan ahead with important dates right at your fingertips.",
        },
        {
          id: "calendar-schedule-access-content-2",
          label:
            "Personalized Event Calendar: Your child’s events, exam schedules, and school activities are automatically added to your calendar, allowing you to stay on top of important milestones and commitments.",
        },
      ],
    },
    {
      id: 6,
      label: "Communication with Teachers and School Staff",
      value: "Communication with Teachers and School Staff",
      img: mobileAppsVerticalTabImages.parent_vt_image7,

      title: "Communication with Teachers and School Staff",
      content: [
        {
          id: "communication-teachers-school-staff-content-1",
          label:
            "Direct Messaging: Communicate directly with your child’s teachers and school staff through secure in-app messaging. You can discuss your child’s progress, raise concerns, or simply stay informed about their academic journey.",
        },
        {
          id: "communication-teachers-school-staff-content-2",
          label:
            "Parent-Teacher Interaction: Schedule appointments or participate in parent-teacher meetings directly via the app. ",
        },
      ],
    },
  ],
  admin: [
    {
      id: 0,
      label: "Real-Time Student Management",
      value: "Real-Time Student Management",
      img: mobileAppsVerticalTabImages.admin_vt_image1,
      title: "Real-Time Student Management",
      content: [
        {
          id: "real-time-student-management-content-1",
          label:
            "Track Student Data: Access comprehensive student profiles, including academic history, attendance records, exam results, and behavior reports. Easily monitor and update student information on the go.",
        },
        {
          id: "real-time-student-management-content-2",
          label:
            "Admissions & Enrollment Management: Manage student applications, admissions, and enrollments seamlessly. Review documents, approve applications, and track the enrollment status of new students directly from the mobile app.",
        },
        {
          id: "real-time-student-management-content-3",
          label:
            "Student Communication: Instantly communicate with students, parents, and staff regarding academic updates, events, or administrative matters. The app supports secure messaging, ensuring smooth communication between all stakeholders.",
        },
      ],
    },
    {
      id: 1,
      label: "Attendance & Behavior Tracking",
      value: "Attendance & Behavior Tracking",
      img: mobileAppsVerticalTabImages.admin_vt_image2,

      title: "Attendance & Behavior Tracking",
      content: [
        {
          id: "admin-attendance-behavior-tracking-content-1",
          label:
            "Monitor Attendance: Keep track of student attendance in real time. Review daily attendance reports and receive alerts about student absences, tardiness, or frequent leave, ensuring timely follow-up actions.",
        },
        {
          id: "admin-attendance-behavior-tracking-content-2",
          label:
            "Behavior Reports: Access detailed reports on student behavior, including discipline records, class participation, and teacher comments. Ensure proactive management of student well-being and development.",
        },
      ],
    },
    {
      id: 2,
      label: "Staff & Faculty Management",
      value: "Staff & Faculty Management",
      img: mobileAppsVerticalTabImages.admin_vt_image3,

      title: "Staff & Faculty Management",
      content: [
        {
          id: "staff-faculty-management-content-1",
          label:
            "Staff Profiles & Schedules: View faculty and staff profiles, including their teaching schedules, contact information, and performance data. Admins can easily update staff details and schedules as required.",
        },
        {
          id: "staff-faculty-management-content-2",
          label:
            "Staff Attendance: Track attendance and leave records of all staff members. Approve or reject leave requests, and manage staff working hours, ensuring operational efficiency.",
        },
        {
          id: "staff-faculty-management-content-3",
          label:
            "Performance Evaluation: Access faculty performance evaluations and feedback from students and peers. Use these insights to improve teaching quality and faculty development initiatives.",
        },
      ],
    },
    {
      id: 3,
      label: "Fee Management",
      value: "Fee Management",
      img: mobileAppsVerticalTabImages.admin_vt_image4,

      title: "Fee Management",
      content: [
        {
          id: "admin-fee-management-content-1",
          label:
            "Track Fee Payments: Monitor student fee payments, track overdue payments, and send reminders to parents. The app allows you to review fee history, generate invoices, and manage fee collection seamlessly.",
        },
        {
          id: "admin-fee-management-content-2",
          label:
            "Fee Collection & Reports: Admins can view and manage payment transactions, generate financial reports, and access payment history directly from the mobile app.",
        },
      ],
    },
    {
      id: 4,
      label: "School Event Management",
      value: "School Event Management",
      img: mobileAppsVerticalTabImages.admin_vt_image5,

      title: "School Event Management",
      content: [
        {
          id: "school-event-management-content-1",
          label:
            "Create & Manage Events: Plan and organize school events such as parent-teacher meetings, extracurricular activities, seminars, and workshops. Manage event registrations and track participation.",
        },
        {
          id: "school-event-management-content-2",
          label:
            "Event Notifications: Send event notifications to students, parents, and staff via the app. Ensure that everyone stays informed about important school events, activities, and deadlines.",
        },
      ],
    },
    {
      id: 5,
      label: "Communication with Parents and Students",
      value: "Communication with Parents and Students",
      img: mobileAppsVerticalTabImages.admin_vt_image6,

      title: "Communication with Parents and Students",
      content: [
        {
          id: "admin-communication-parents-students-content-1",
          label:
            "Send Alerts & Notifications: Instantly communicate with parents and students regarding academic progress, attendance issues, fee reminders, upcoming events, or any important announcements.",
        },
        {
          id: "admin-communication-parents-students-content-2",
          label:
            "Personalized Messages: Send personalized notifications to parents or students based on their academic performance, attendance, or any other specific school-related matter.",
        },
      ],
    },
    {
      id: 6,
      label: "Real-Time Reports & Analytics",
      value: "Real-Time Reports & Analytics",
      img: mobileAppsVerticalTabImages.admin_vt_image7,

      title: "Real-Time Reports & Analytics",
      content: [
        {
          id: "admin-realtime-reports-analytics-content-1",
          label:
            "Instant Data Access: View real-time reports on student performance, attendance, fee status, staff evaluations, and more. Generate custom reports for deeper insights into school performance and trends.",
        },
        {
          id: "admin-realtime-reports-analytics-content-2",
          label:
            "Data-Driven Insights: Utilize data analytics to track key metrics, such as student performance, staff effectiveness, and fee collection efficiency. ",
        },
      ],
    },
    {
      id: 7,
      label: "Document Management",
      value: "Document Management",
      img: mobileAppsVerticalTabImages.admin_vt_image8,

      title: "Document Management",
      content: [
        {
          id: "admin-realtime-reports-analytics-content-1",
          label:
            "Access & Share Documents: Upload and manage important school documents such as reports, notices, circulars, and student records. Share these documents securely with teachers, students, and parents.",
        },
        {
          id: "admin-realtime-reports-analytics-content-2",
          label:
            "Document Signing: Admins can request signatures for official documents, such as permission slips, school policies, and more, directly within the app, reducing the need for physical paperwork.",
        },
      ],
    },
  ],
};

const AIFeatures: Record<string, FeaturesItem> = {
  student: {
    id: "AI-Powered Features",
    title: "AI-Powered Features",
    content: [
      {
        id: "Smart Assignment Reminders",
        subTitle: "Smart Assignment Reminders",
        point:
          "The app uses AI to analyze your academic workload and sends personalized reminders based on your assignment due dates and exam schedules, ensuring you never miss a deadline.",
      },
      {
        id: "Instant Academic Support",
        subTitle: "Instant Academic Support",
        point:
          "Have a question? EDUMAAT's AI assistant can answer common academic queries and guide you through the app's features, helping you get the most out of the platform.",
      },
      {
        id: "Performance Analysis",
        subTitle: "Performance Analysis",
        point:
          "Track your performance with AI-driven insights. The app provides personalized suggestions and resources based on your academic progress to help you improve and succeed.",
      },
    ],
    img: mobileAppsFeaturesImages.student_ai_powered_feature_img,
  },
  teacher: {
    id: "AI-Powered Features",
    title: "AI-Powered Features",
    content: [
      {
        id: "Smart Grading Assistance",
        subTitle: "Smart Grading Assistance",
        point:
          "The app’s AI assistant can help with grading assignments by offering automated suggestions based on grading criteria, reducing your workload and ensuring consistency in evaluations.",
      },
      {
        id: "Performance Recommendations",
        subTitle: "Performance Recommendations",
        point:
          "Based on student data, the AI assistant suggests personalized teaching strategies, resources, and tools to help struggling students and push high performers to excel further.",
      },
      {
        id: "Automated Feedback Generation",
        subTitle: "Automated Feedback Generation",
        point:
          "The app’s AI helps generate feedback on student assignments and exams, offering constructive criticism or praise based on pre-defined rubrics, saving you time while providing personalized feedback.",
      },
    ],
    img: mobileAppsFeaturesImages.teacher_ai_powered_feature_img,
  },
  parent: {
    id: "AI-Powered Features",
    title: "AI-Powered Features",
    content: [
      {
        id: "Performance Insights",
        subTitle: "Performance Insights",
        point:
          "EDUMAAT’s AI analyzes your child’s academic data to provide personalized insights and recommendations, helping you identify areas for improvement or additional support.",
      },
      {
        id: "Instant Alerts",
        subTitle: "Instant Alerts",
        point:
          "The app uses AI to send smart alerts based on your child’s behavior, academic progress, and attendance. Whether it’s an upcoming exam or a behavioral concern, the AI assistant keeps you informed and helps you respond proactively.",
      },
      {
        id: "Predictive Analysis for Success",
        subTitle: "Predictive Analysis for Success",
        point:
          "Based on your child’s academic performance, EDUMAAT’s AI assistant provides predictions on future performance, highlighting strengths and areas where additional focus may be needed.",
      },
    ],
    img: mobileAppsFeaturesImages.parent_ai_powered_feature_img,
  },
  admin: {
    id: "AI-Powered Features",
    title: "AI-Powered Features",
    content: [
      {
        id: "Predictive Insights",
        subTitle: "Predictive Insights",
        point:
          "The app’s AI-driven analytics provide predictive insights into student performance, attendance patterns, and fee payments. Use these insights to proactively address issues and support student success.",
      },
      {
        id: "Automated Reminders & Alerts",
        subTitle: "Automated Reminders & Alerts",
        point:
          "The AI Assistant automatically sends reminders for pending tasks, such as fee payments, attendance follow-ups, and upcoming events, ensuring timely actions.",
      },
      {
        id: "Performance Recommendations",
        subTitle: "Performance Recommendations",
        point:
          "Based on institutional data, the AI Assistant provides recommendations for improving student engagement, faculty development, and operational efficiency.",
      },
    ],
    img: mobileAppsFeaturesImages.admin_ai_powered_feature_img,
  },
};

interface PurposeItem {
  id: string | number;
  title: string;
  content: string;
  img: string;
}

const PurposeItems: Record<string, PurposeItem> = {
  student: {
    id: "EDUMAAT for Students",
    title: "EDUMAAT for Students",
    content:
      "EDUMAAT Student Mobile App is designed to simplify your academic life, making it easier to manage your studies, stay connected with your community, and achieve success. Whether you're at home or on the go, EDUMAAT puts the power of education in your hands.",
    img: mobileAppsPurposeImages.studentImage,
  },
  teacher: {
    id: "EDUMAAT for Teachers",
    title: "EDUMAAT for Teachers",
    content:
      "EDUMAAT Teacher Mobile Application simplifies the way you manage your classroom, interact with students and parents, and track student progress. With its easy-to-use interface and powerful features, the app empowers you to be more organized, efficient, and effective in your teaching role.",
    img: mobileAppsPurposeImages.teacherImage,
  },
  parent: {
    id: "EDUMAAT for Parents",
    title: "EDUMAAT for Parents",
    content:
      "EDUMAAT Parent Mobile Application empowers you to be a key partner in your child’s educational journey. Stay informed, get involved, and support their growth—all from the convenience of your mobile device.",
    img: mobileAppsPurposeImages.parentImage,
  },
  admin: {
    id: "EDUMAAT for Admins",
    title: "EDUMAAT for Admins",
    content:
      "EDUMAAT Admin Mobile Application is a powerful tool that brings all the administrative functions of your institution into one convenient mobile platform. From managing student records to tracking fee payments and overseeing staff performance, this app ensures that all aspects of your institution run smoothly, efficiently, and in real time.",
    img: mobileAppsPurposeImages.adminImage,
  },
};

interface TitleItem {
  id: string | number;
  title: string;
  content: string;
}

const TitleItems: Record<string, TitleItem> = {
  teacher: {
    id: "Empower Your Teaching Experience. Stay Connected Manage Your Classroom Effortlessly",
    title:
      "Empower Your Teaching Experience. Stay Connected Manage Your Classroom Effortlessly",
    content:
      "The EDUMAAT Teacher Mobile Application is designed to streamline classroom management, improve communication, and help you stay organized in your teaching duties. Whether you're tracking assignments, managing student performance, or communicating with parents, the app puts all the tools you need right in the palm of your hand—ensuring that you can focus more on teaching and less on administrative tasks.",
  },
  parent: {
    id: "Stay Informed. Stay Connected. Empower Your Child’s Education.",
    title: "Stay Informed. Stay Connected. Empower Your Child’s Education.",
    content:
      "The EDUMAAT Parent Mobile Application puts the power of communication and academic monitoring in your hands. As a parent, you can stay connected to your child’s academic journey, track their performance, and communicate with school staff—all through a simple, intuitive mobile app. With EDUMAAT’s Parent Mobile App, you can actively support your child’s educational progress, keep track of school events, and ensure their well-being, no matter where you are.",
  },
  admin: {
    id: "Streamline Administration. Enhance Efficiency. Empower Your Institution.",
    title:
      "Streamline Administration. Enhance Efficiency. Empower Your Institution.",
    content:
      "The EDUMAAT Admin Mobile Application is designed to provide school administrators with complete control and seamless management of all institutional operations, right at their fingertips. Whether you're managing student data, monitoring staff performance, tracking attendance, or communicating with parents and faculty, the EDUMAAT Admin Mobile App simplifies administrative tasks, enhances productivity, and improves institutional efficiency.",
  },
};

const BenefitsCard = ({ benefitsToInstitutionItems, color }: any) => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 25,
            py: 3,
            textAlign:
              benefitsToInstitutionItems.length > 5 ? "center" : "left",
          }}
        >
          Benefits to Your Institution
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, lg: 4 }}
        sx={{
          pt: 5,
          pb: 8,
          mx: {xs:2,sm:benefitsToInstitutionItems.length > 5 ? 15 : 0},
        }}
        justifyContent={{
          xs: "center",
          md: benefitsToInstitutionItems.length > 5 ? "center" : "flex-start",
        }}
      >
        {benefitsToInstitutionItems.map(
          (item: BenefitsToInstitution, index: number) => (
            <React.Fragment key={`${item.label}_${index}`}>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: benefitsToInstitutionItems.length > 5 ? 4 : 2.4,
                }}
                sx={{
                  background:
                    "transparent radial-gradient(closest-side at 19% 26%, #FFFFFF 0%, #F8F7FC 100%) 0% 0% no-repeat padding-box",
                  boxShadow: " 0px 4px 16px #00000029",
                  border: "0.25px solid rgba(112, 112, 112, 0.3)",
                  borderRadius: 3,
                }}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Box
                  sx={{
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    pl: 3,
                    pt: { xs: 1, lg: 3 },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 60, lg: 80 },
                      width: { xs: 60, lg: 80 },
                      bgcolor: color || "rgba(154, 175, 255, 0.2)",
                      borderRadius: 3,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LazyBoxImage
                      src={item.icon}
                      alt={`${item.label}`}
                      sx={{
                        height: { xs: 35, lg: 50 },
                        width: { xs: 35, lg: 50 },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    minHeight: { xs: 85, lg: 100 },
                    display: "flex",
                    alignItems: "center",
                    pl: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 14,
                      // width: "80%",
                      mx: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            </React.Fragment>
          )
        )}
      </Grid>
    </>
  );
};

const AIFeaturesCard = ({ AIFeatures }: any) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{xs:12,sm:5}}>
        <LazyBoxImage
          src={AIFeatures?.img ?? ""}
          alt={`${AIFeatures?.img}`}
          sx={{ height: "100%", width: "100%" }}
        />
      </Grid>
      <Grid size={{xs:12,sm:7}} sx={{ pl: {sm:3}, px: {xs:3, sm:0} }}>
        <Typography
          sx={{ fontSize: { xs: 18, lg: 20 }, fontWeight: 700, mb: 3 }}
        >
          {AIFeatures?.title}
        </Typography>
        {AIFeatures?.content.map((item: any) => (
          <Box key={item.id} sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: { xs: 14, lg: 16 }, fontWeight: 600 }}>
              {item.subTitle}
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, lg: 14 }, mt: 1 }}>
              {item.point}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

const EdumaatPurposeCard = ({
  PurposeItem,
  handleBookFreeDemo,
}: {
  PurposeItem: PurposeItem;
  handleBookFreeDemo: () => void;
}) => {
  return (
    <Grid container>
      <Grid size={{xs:12,sm:8}} sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            borderTop: 1,
            borderLeft: 1,
            borderBottom: 1,
            borderRight:{xs:1, sm:0},
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderTopRightRadius:{xs:10, sm:0},
            borderBottomRightRadius:{xs:10, sm:0},
            borderColor: "rgba(112, 112, 112, 0.5)",
            px: {xs:2,sm:5},
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: {xs:350,sm:250},
            background:
              "transparent linear-gradient(to right, #F8F7FC 0%, #FDFDFE 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <Typography sx={{ fontSize: { xs: 18, lg: 20 }, fontWeight: 700 }}>
            {PurposeItem.title}
          </Typography>
          <Typography sx={{ mt: 2, fontSize: { xs: 12, lg: 14 } }}>
            {PurposeItem.content}
          </Typography>
          <Box sx={{ mt: { xs: 3 } }}>
            <ReuOutlineBorderedButton
              variant="outlined"
              sx={{
                width: 210,
                transition: "transform 0.4s ease,  0.4s ease, 0.4s ease",
                willChange: "transform",
                color: "#ffffff",
                // bgcolor: "#1976d2",
                borderColor: "#1976d2",
                background:
                  "transparent linear-gradient(180deg, #2F5DF5 0%, #9AAFFF 100%) 0% 0% no-repeat padding-box",
              }}
              onClick={handleBookFreeDemo}
            >
              Book Now
            </ReuOutlineBorderedButton>
          </Box>
        </Box>
      </Grid>
      <Grid size={{xs:12,sm:4}}>
        <Box
          sx={{
            border: {xs:0,sm:1},
            borderRadius: 3,
            borderColor: "rgba(112, 112, 112, 0.5)",
            px: {sm:3},
            py: 3,
            // height: 330,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LazyBoxImage
            src={PurposeItem.img}
            alt={`${PurposeItem.title}`}
            sx={{ maxWidth: "100%", maxHeight: {xs:"100%",sm:300}, objectFit: "contain" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

const TitleCard = ({ TitleItem }: { TitleItem: TitleItem }) => (
  <>
    <Typography
      sx={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
      }}
    >
      {TitleItem.title}
    </Typography>
    <Typography
      variant="body2"
      color="initial"
      sx={{ textAlign: "center", mt: 3 }}
    >
      {TitleItem.content}
    </Typography>
  </>
);

const MobileApps = () => {
  const navigate = useNavigate();

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };

  const [currentViewId, setCurrentViewId] = useState<any>("student");

  const studentRef = useRef<HTMLDivElement | null>(null);
  const teacherRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const adminRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = {
    student: studentRef,
    teacher: teacherRef,
    parent: parentRef,
    admin: adminRef,
  };

  const handleCurrentViewId = (id: string) => {
    setCurrentViewId(id);
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const sections = ["topSection", "student", "teacher", "parent", "admin"];
  const currentSection = useCurrentDetectedSection(sections);

  useEffect(() => {
    if (currentSection !== "topSection") {
      setCurrentViewId(currentSection ?? "student");
    }
    console.log(currentSection);
  }, [currentSection]);

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

      <Box mb={10}>
        
        <Slide
          direction="down"
          in={
            sectionRefs[currentSection] !== undefined &&
            sectionRefs[currentSection] !== "topSection"
          }
          mountOnEnter
          unmountOnExit
          timeout={500}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              px: {xs:4,sm:14},
              border: 1,
              borderColor: "rgba(112, 112, 112, 0.2)",
              position: "fixed",
              zIndex: 10,
              width: "100%",
              bgcolor: "#ffffff",
              "@media (min-width: 1996px)": {
                pl: 75,
              },
            }}
          >
            <HorizontalTabs
              tabItems={tabItems}
              handleCurrentViewId={handleCurrentViewId}
              activeTab={currentViewId}
            />
          </Box>
        </Slide>

        <Box sx={{ px: { lg: 8 }, position: "relative" }} id="topSection">
          <Box
            component={"img"}
            src={mobile_apps_header_img}
            alt="Edumaat Mobile App"
            sx={{
              height: {xs:200, sm: 300, md: 500, lg: 550 },
              width: {xs:200, sm: 300, md: 500, lg: 550 },
              mt: { lg: 10 },
              "@media (min-width: 1336px)": {
                ml: 20,
              },
              "@media (min-width: 1996px)": {
                ml: 70,
              },
            }}
          />
          <Box
            sx={{
              position: {xs:"relative",sm:"absolute"},
              top: "5%",
              left: { sm: "20%", md: "35%", xl: "40%" },
              height: {xs:"100%", sm: 350, md: 450, lg: 580 },
              borderRadius: 5,
            }}
            className="mobile_apps_header_card_bgGradient"
          >
            <Box
              sx={{
                mt: { md: 10 },
                px: { xs: 3, lg: 5 },
                py: { xs: 3, lg: 7 },
                ml: { xs: 5, md: 0 },
                border: 20,
                borderRadius: 10,
                borderColor: "rgba(255,255,255, 0.7)",
                background:
                  "transparent linear-gradient(129deg, #F5F7FB 0%, #F8F7FC 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Typography
                sx={{ fontSize: { xs: 18, md: 20, lg: 40 }, fontWeight: 700 }}
              >
                Your Campus in Your Pocket
              </Typography>
              <Typography
                sx={{
                  pt: { xs: 2, md: 4 },
                  fontSize: { xs: 12, md: 14, lg: 16 },
                }}
              >
                The EDUMAAT Student Mobile Application offers a seamless,
                anytime-anywhere <br /> connection to your academic life.
                Whether you're at home, on campus, or commuting, <br /> this app
                puts everything you need at your fingertips — from class
                schedules and <br />
                assignments to direct communication with faculty and instant
                updates.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          id={"student"}
          key={"student"}
          ref={sectionRefs["student"]}
          sx={{ pt: 12 }}
        >
          <Box
            sx={{
              background:
                "transparent linear-gradient(to bottom, #E6EBFF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
              pt: 10,
              px: { xs: 4, lg: 8 },
              "@media (min-width: 1336px)": {
                px: 14,
              },
              "@media (min-width: 1996px)": {
                px: 75,
              },
            }}
          >
            <VerticalTabs tabItems={verticalTabItems["student"]} />
          </Box>

          <Box
            sx={{
              borderRadius: 5,
              my: { xs: 1, sm: 5 },
              mx:{xs:4,sm: 8},
              "@media (min-width: 1336px)": {
                mx: 14,
              },
              overflow: "hidden",
              "@media (min-width: 1996px)": {
                mx: 75,
              },
            }}
          >
            <BenefitsCard
              benefitsToInstitutionItems={
                benefitsToYourInstitutionCardItems["student"]
              }
              color={"rgba(154, 175, 255, 0.2)"}
            />
          </Box>

          <Box
            sx={{
              mt: 4,
              mx: { sm: 4, md: 8 },
              "@media (min-width: 1336px)": {
                mx: 14,
              },
              "@media (min-width: 1996px)": {
                px: 60,
              },
            }}
          >
            <AIFeaturesCard AIFeatures={AIFeatures["student"]} />
          </Box>

          <Box
            sx={{
              mt: 4,
              mx: {xs:4,sm:8},
              "@media (min-width: 1336px)": {
                mx: 14,
              },
              "@media (min-width: 1996px)": {
                px: 60,
              },
            }}
          >
            <EdumaatPurposeCard
              PurposeItem={PurposeItems["student"]}
              handleBookFreeDemo={handleBookFreeDemo}
            />
          </Box>
        </Box>

        {[
          {
            id: "teacher",
            tabItemsbgColor1: "#FF81FF33",
            tabItemsbgColor2: "#FFFFFF38",
            benefitsCardIconBgColor: "rgba(255, 129, 255, 0.2)",
          },
          {
            id: "parent",
            tabItemsbgColor1: "#B2FDAA3D",
            tabItemsbgColor2: "#FFFFFF4D",
            benefitsCardIconBgColor: "rgba(178, 253, 170, 0.2)",
          },
          {
            id: "admin",
            tabItemsbgColor1: "#7D69EE38",
            tabItemsbgColor2: "#FFFFFF38",
            benefitsCardIconBgColor: "rgba(125, 105, 238, 0.2)",
          },
        ].map((item) => (
          <Box key={item.id} ref={sectionRefs[item.id]} id={item.id}>
            <Box
              sx={{
                my: 10,
                mx: { xs: 2, sm: 14 },
                "@media (min-width: 1996px)": {
                  px: 60,
                },
              }}
            >
              <TitleCard TitleItem={TitleItems[item.id]} />
            </Box>

            <Box sx={{ mt: 4 }}>
              <Box
                sx={{
                  background: `transparent linear-gradient(to bottom, ${item.tabItemsbgColor1} 0%, ${item.tabItemsbgColor2} 100%) 0% 0% no-repeat padding-box`,
                  pt: 10,
                  px: {xs:4,sm:8},
                  "@media (min-width: 1336px)": {
                    px: 14,
                  },
                  "@media (min-width: 1996px)": {
                    px: 75,
                  },
                }}
              >
                <VerticalTabs tabItems={verticalTabItems[item.id]} />
              </Box>

              <Box
                sx={{
                  borderRadius: 5,
                  my: { xs: 1, sm: 5 },
                  mx: { xs: 4, md: 8 },
                  "@media (min-width: 1336px)": {
                    mx: 14,
                  },
                  overflow: "hidden",
                  "@media (min-width: 1996px)": {
                    mx: 75,
                  },
                }}
              >
                <BenefitsCard
                  benefitsToInstitutionItems={
                    benefitsToYourInstitutionCardItems[item.id]
                  }
                  color={item.benefitsCardIconBgColor}
                />
              </Box>

              <Box
                sx={{
                  mt: 4,
                  mx: { xs: 4, md: 8 },
                  "@media (min-width: 1336px)": {
                    mx: 14,
                  },
                  "@media (min-width: 1996px)": {
                    px: 60,
                  },
                }}
              >
                <AIFeaturesCard AIFeatures={AIFeatures[item.id]} />
              </Box>

              <Box
                sx={{
                  my: 4,
                  mx: {xs:4,sm:8},
                  "@media (min-width: 1336px)": {
                    mx: 14,
                  },
                  "@media (min-width: 1996px)": {
                    px: 60,
                  },
                }}
              >
                <EdumaatPurposeCard
                  PurposeItem={PurposeItems[item.id]}
                  handleBookFreeDemo={handleBookFreeDemo}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default MobileApps;
