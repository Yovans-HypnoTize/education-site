import { createWriteStream } from "node:fs";
import { SitemapStream, streamToPromise } from "sitemap";

const hostname = "https://edumaat.com";

const staticRoutes = [
  "/",
  "/reset-password",
  "/about-us",
  "/contact-us",
  "/plans-pricing",
  "/academic",
  "/human-resource-administration",
  "/finance",
  "/ai-automation",
  "/communication",
  "/parents-students",
  "/education",
  "/resources/blogs",
  "/resources/latest-updates",
  "/resources/features",
  "/resources/faqs",
  "/blogs",
  "/latest-updates",
  "/features",
  "/faqs",
  "/why-edumaat",
  "/who-we-are",
  "/awards-recognitions",
  "/partners-group",
  "/testimonials",
  "/grow-with-us",
  "/enquiry",
  "/mobile-apps",
];

const dynamicRoutes = [
  "/blogs/best-ERP-software-for-schools",
  "/blogs/Education-ERP-Software",
  "/blogs/Top-10-Benefits-of-ERP-Software-for-Educational-Institute-Growth-in-2025",
  "/blogs/why-your-school-needs-a-student-performance-tracking-system",
  "/blogs/the-role-of-fee-and-financial-management-in-school-success",
  "/blogs/the-impact-of-multilingual-erp-software-on-international-schools",
  "/blogs/student-information-system-what-it-is-how-it-helps-schools",
  "/education/schools-k12",
  "/education/college",
  "/education/university",
  "/education/education-boards",
  "/education/coaching",
  "/academic/student-management",
  "/academic/admission-management",
  "/academic/attendance-management",
  "/academic/timetable-management",
  "/academic/examination-or-assessment-management",
  "/academic/assignment-management",
  "/academic/academic-calendar",
  "/academic/pta-parent-teacher-association",
  "/academic/placement",
  "/academic/alumni-management",
  "/academic/lms-quiz-course-interactive-meeting",
  "/academic/research-and-publication-management",
  "/academic/student-and-staff-appraisal-management",
  "/academic/student-and-staff-behaviour-management",
  "/human-resource-administration/staff-management",
  "/human-resource-administration/payroll-management",
  "/human-resource-administration/job-recruitment-management",
  "/human-resource-administration/requisition-and-approval-management",
  "/human-resource-administration/role-and-privilege-management",
  "/human-resource-administration/role-wise-dashboard",
  "/human-resource-administration/custom-letter-and-id-card-generation",
  "/human-resource-administration/backup-restore-management",
  "/finance/fees-management",
  "/finance/accounting-management",
  "/finance/hostel-management",
  "/finance/transport-management",
  "/finance/inventory-and-asset-management",
  "/finance/canteen-management",
  "/finance/utility-management",
  "/finance/booking-management",
  "/communication/communication-management",
  "/communication/notification-and-reminder-management",
  "/communication/event-management",
  "/communication/complaint-and-feedback-management",
  "/communication/visitor-gate-pass-sickroom-management",
  "/ai-automation/document-management",
  "/ai-automation/library-management",
  "/ai-automation/task-and-to-do-management",
  "/ai-automation/custom-report-builder",
  "/ai-automation/form-builder",
  "/ai-automation/integration-payment-gateway-whatsapp-email",
  "/ai-automation/edumaat-ai",
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const sitemapStream = new SitemapStream({ hostname });
const writeStream = createWriteStream("./public/sitemap.xml");

// Pipe sitemap stream to gzip → file stream
sitemapStream.pipe(writeStream);

// Write routes
allRoutes.forEach((url) => {
  sitemapStream.write({ url, changefreq: "weekly", priority: 0.8 });
});

// End the stream
sitemapStream.end();

// ✅ Use sitemapStream (not writeStream) for streamToPromise
streamToPromise(sitemapStream)
  .then(() => {
    console.log("✅ Sitemap successfully generated at /public/sitemap.xml.gz");
  })
  .catch((err) => {
    console.error("❌ Error generating sitemap:", err);
  });
