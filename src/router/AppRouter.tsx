import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PublicLayout from "../layout/PublicLayout";
import ErrorPage from "../components/ErrorPage";
import About from "../pages/about/About";
import AuthenticateLayout from "../layout/AuthenticateLayout";
import SupportTicket from "../pages/supportTicket/SupportTicket";
import ProtectedRoute from "./ProtectedRoute";
import ChangePassword from "../pages/ChangePassword";
import SolutionsSpotlight from "../pages/solutions-spotlight/SolutionsSpotlight";
import SolutionsSpotlightMarket from "../pages/solutions-spotlight/SolutionsSpotlightMarket";
import Profile from "../pages/Profile";
import ScrollToTopLayout from "../theme/ScrollToTopLayout";
import Education from "../pages/education/Education";
import EducationMarket from "../pages/education/EducationMarket";
import AwardsRecognition from "../pages/about/AwardsRecognition";
import PartnersGroup from "../pages/about/PartnersGroup";
import Testimonials from "../pages/about/Testimonials";
import GrowWithUs from "../pages/about/GrowWithUs";
import WhoWeAre from "../pages/about/WhoWeAre";
import ResetPassword from "../components/auth/ResetPassword";
import Blogs from "../pages/resources/blogs/Blogs";
import LatestUpdates from "../pages/resources/LatestUpdates";
import Features from "../pages/resources/Features";
import Faqs from "../pages/resources/Faqs";
import SpecificBlog from "../pages/resources/blogs/SpecificBlog";
import Enquiry from "../pages/about/enquiry/Enquiry";
import ContactUs from "../pages/about/ContactUs";
import Plan from "../pages/plans-pricing/Plan";
import MobileApps from "../pages/mobile-apps/MobileApps";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicies from "../pages/PrivacyPolicies";
import LaunchLayout from "../layout/LaunchLayout";
import Launch from "../pages/resources/Launch";

const router = createBrowserRouter([
  {
    element: <ScrollToTopLayout LayoutComponent={<PublicLayout />} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "plans-pricing",
        element: <Plan />,
      },
      {
        path: "academic",
        element: <SolutionsSpotlight />,
        children: [
          {
            path: ":solutionId",
            element: <SolutionsSpotlightMarket />,
          },
        ],
      },
      {
        path: "human-resource-administration",
        element: <SolutionsSpotlight />,
        children: [
          {
            path: ":solutionId",
            element: <SolutionsSpotlightMarket />,
          },
        ],
      },
      {
        path: "finance",
        element: <SolutionsSpotlight />,
        children: [
          {
            path: ":solutionId",
            element: <SolutionsSpotlightMarket />,
          },
        ],
      },
      {
        path: "ai-automation",
        element: <SolutionsSpotlight />,
        children: [
          {
            path: ":solutionId",
            element: <SolutionsSpotlightMarket />,
          },
        ],
      },
      {
        path: "communication",
        element: <SolutionsSpotlight />,
        children: [
          {
            path: ":solutionId",
            element: <SolutionsSpotlightMarket />,
          },
        ],
      },
      {
        path: "parents-students",
        element: <SolutionsSpotlight />,
        children: [
          {
            path: ":solutionId",
            element: <SolutionsSpotlightMarket />,
          },
        ],
      },
      {
        path: "education",
        element: <Education />,
        children: [
          {
            path: ":educationId",
            element: <EducationMarket />,
          },
        ],
      },
      {
        path: "resources",
        children: [
          {
            path: "blogs",
            element: <Blogs />,
          },
          {
            path: "latest-updates",
            element: <LatestUpdates />,
          },
          {
            path: "features",
            element: <Features />,
          },
          {
            path: "faqs",
            element: <Faqs />,
          },
        ],
      },
      {
        path: "",
        children: [
          {
            path: "blogs",
            children: [
              {
                index: true,
                element: <Blogs />,
              },
              {
                path: ":blogId",
                element: <SpecificBlog />,
              },
            ],
          },
          {
            path: "latest-updates",
            element: <LatestUpdates />,
          },
          {
            path: "features",
            element: <Features />,
          },
          {
            path: "faqs",
            element: <Faqs />,
          },
          {
            path: "why-edumaat",
            element: <About />,
          },
          {
            path: "who-we-are",
            element: <WhoWeAre />,
          },
          {
            path: "awards-recognitions",
            element: <AwardsRecognition />,
          },
          {
            path: "partners-group",
            element: <PartnersGroup />,
          },
          {
            path: "testimonials",
            element: <Testimonials />,
          },
          {
            path: "grow-with-us",
            element: <GrowWithUs />,
          },
          {
            path: "enquiry",
            element: <Enquiry />,
          },
          {
            path: "mobile-apps",
            element: <MobileApps />,
          },
          {
            path: "terms-and-conditions",
            element: <TermsAndConditions />,
          },
          {
            path: "privacy-policy",
            element: <PrivacyPolicies />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    element: <ScrollToTopLayout LayoutComponent={<LaunchLayout />} />,
    children: [
      {
        path: "launch",
        element: <Launch />,
      },
    ],
  },
  {
    element: <ScrollToTopLayout LayoutComponent={<AuthenticateLayout />} />,
    children: [
      {
        path: "support-ticket",
        element: <ProtectedRoute element={<SupportTicket />} />,
      },
      {
        path: "change-password",
        element: <ProtectedRoute element={<ChangePassword />} />,
      },
      {
        path: "profile",
        element: <ProtectedRoute element={<Profile />} />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
