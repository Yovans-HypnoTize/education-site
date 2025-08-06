import { useLocation, useNavigate } from "react-router-dom";
import facebook_icon from "../assets/footerIcons/facebook.png";
import linkedin_icon from "../assets/footerIcons/linkedin.png";
import youtube_icon from "../assets/footerIcons/youtube.png";
import instagram_icon from "../assets/footerIcons/social.png";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import edumaatLogo from "../assets/logo/edumaatLogo.png";
import EmailIcon from "@mui/icons-material/Email";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

type LinkDataType = {
  parentID?: string;
  id: string | number;
  title: string;
  path: string;
};

interface FooterDataTypes {
  title: string;
  links: LinkDataType[];
}

const footerData: FooterDataTypes[] = [
  {
    title: "Features",
    links: [
      {
        id: "admission-management",
        title: "Smart Student Enrollment ",
        path: "/academic/admission-management",
        parentID: "academic",
      },
      {
        id: "staff-management",
        title: "Streamline HR",
        path: "/human-resource-administration/staff-management",
        parentID: "human-resource-administration",
      },
      {
        id: "fees-management",
        title: "Payment Processing",
        path: "/finance/fees-management",
        parentID: "finance",
      },
      {
        id: "payroll-management",
        title: "Salary Processing",
        path: "/human-resource-administration/payroll-management",
        parentID: "human-resource-administration",
      },
      {
        id: "inventory-and-asset-management",
        title: "Invoice & Asset Management",
        path: "/finance/inventory-and-asset-management",
        parentID: "finance",
      },
      {
        id: "placement",
        title: "Career Success Empowerment",
        path: "/academic/placement",
        parentID: "academic",
      },
      {
        id: "edumaat-ai",
        title: "Smart Management",
        path: "/ai-automation/edumaat-ai",
        parentID: "ai-automation",
      },
      {
        id: "timetable-management",
        title: "Smart Timetable Management",
        path: "/academic/timetable-management",
        parentID: "academic",
      },
      {
        id: 7,
        title: "Exam & Evaluation Automation",
        path: "/academic/examination-or-assessment-management",
        parentID: "academic",
      },
      {
        id: 8,
        title: "Online Payment Gateway",
        path: "/ai-automation/integration-payment-gateway-whatsapp-email",
        parentID: "ai-automation",
      },
      {
        id: 9,
        title: "Custom Workflow Builder",
        path: "/ai-automation/custom-report-builder",
        parentID: "ai-automation",
      },
      { id: "features", title: "See More Features", path: "/features" },
    ],
  },
  {
    title: "Explore",
    links: [
      {
        id: 1,
        title: "Student Lifecycle Management",
        path: "/education/schools-k12",
      },
      { id: 2, title: "Alumni Engagement", path: "/education/college" },
      {
        id: 3,
        title: "Instituition management",
        path: "/education/education-boards",
      },
      {
        id: 4,
        title: "Research & PhD Program Oversight",
        path: "/education/university",
      },
      {
        id: 5,
        title: "Curriculum Standardization",
        path: "/education/education-boards",
      },
      { id: 6, title: "Lead Management", path: "/education/coaching" },
      { id: 7, title: "App Experience", path: "/mobile-apps" },
    ],
  },
  {
    title: "Community",
    links: [
      { id: "blogs", title: "Blogs", path: "/blogs" },
      { id: "testimonials", title: "Success Stories", path: "/testimonials" },
      {
        id: "latest-updates",
        title: "Edumaat Events & Meetups",
        path: "/latest-updates",
      },
      { id: "faqs", title: "Help Center", path: "/faqs" },
    ],
  },
  {
    title: "Company",
    links: [
      { id: "who-we-are", title: "Who We Are", path: "/who-we-are" },
      { id: 2, title: "Why Edumaat", path: "/why-edumaat" },
      { id: 3, title: "Awards & Recognitions", path: "/awards-recognitions" },
      { id: 4, title: "Our Clients", path: "/partners-group" },
      { id: 5, title: "Testimonials", path: "/testimonials" },
      { id: 6, title: "Grow with us", path: "/grow-with-us" },
      { id: 7, title: "Contact us", path: "/contact-us" },
      { id: 8, title: "Enquiry", path: "/enquiry" },
      { id: 9, title: "Terms & Conditions", path: "/terms-and-conditions" },
      { id: 10, title: "Privacy Plolicy", path: "/privacy-policy" },
    ],
  },
];

const footerIcons = [
  {
    id: "facebook_icon",
    img: facebook_icon,
    href: "https://www.facebook.com/edumaat.jdsoft",
  },
  {
    id: "linkedin_icon",
    img: linkedin_icon,
    href: "https://www.linkedin.com/company/edumaat-imagine-greatness/",
  },
  {
    id: "instagram_icon",
    img: instagram_icon,
    href: "https://www.instagram.com/edumaat_jdsoft/?igsh=MTExYjRzbndrbnRneg%3D%3D#",
  },
  {
    id: "youtube_icon",
    img: youtube_icon,
    href: "https://www.youtube.com/@edumaatjdsoft",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container maxWidth={"xl"}>
      <footer className="footer" style={{}}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4, lg: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component={"img"}
                src={edumaatLogo}
                alt="edumaat_icon"
                sx={{
                  height: 55,
                  width: 70,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  if (location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    navigate("/");
                  }
                }}
              />
            </Box>
            <Box sx={{ my: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon sx={{ color: "gray" }} />
                <Box
                  component={"a"}
                  href="mailto:info@edumaat.com"
                  sx={{ ml: 1.5, textDecoration: "none", color: "#000" }}
                >
                  info@edumaat.com
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <WifiCalling3Icon sx={{ color: "gray" }} />
                <Typography sx={{ ml: 1 }}>+91 93602 93602</Typography>
              </Box>
            </Box>
            <Box>
              {footerIcons.map((item, idx) => {
                return (
                  <Box
                    key={`${idx}_${item.img}`}
                    component={"img"}
                    src={item.img || ""}
                    alt={`${idx}_${item.img}`}
                    sx={{
                      width: 30,
                      height: 30,
                      mr: 1.5,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      window.open(item.href, "_blank");
                    }}
                  />
                );
              })}
            </Box>
          </Grid>
          {footerData.map((section, idx) => (
            <Grid
              size={{ xs: 12, sm: 4, lg: 2 }}
              sx={{ ml: { lg: 6 } }}
              key={`${idx}_${section.title}`}
            >
              <Box className="" key={idx}>
                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
                  {section.title}
                </Typography>
                <List>
                  {section.links.map((link, linkIdx) => (
                    <ListItem
                      key={`${link.title}_${linkIdx}`}
                      sx={{ p: 0 }}
                      className={
                        link.id === "features"
                          ? "dark-on-hover see-more-text"
                          : "dark-on-hover"
                      }
                    >
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            sx={{
                              fontSize: 14,
                              lineHeight: 1.6,
                              "&:hover": {
                                cursor: "pointer",
                              },
                            }}
                          >
                            {link.title}
                          </Typography>
                        }
                        onClick={() => {
                          if (location.pathname.endsWith(link.path)) {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          } else {
                            navigate(link.path, {
                              state: link?.parentID || "",
                            });
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          ))}
        </Grid>

        <hr />

        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "center",
            color: "#555",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                ml: { xs: 5, md: 7 },
                mt: 1.5,
                fontSize: { xs: 12, md: 16 },
              }}
            >
              Copyrights © 2025 EDUMAAT. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </footer>
    </Container>
  );
};

export default Footer;
