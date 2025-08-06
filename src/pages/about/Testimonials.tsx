import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import testimonial_Al_Raneem_Logo from "../../assets/testimonial/Al-Raneem-Logo.png";
import testimonial_Indian_Institute from "../../assets/testimonial/Indian-Institute-of-Food-Processing-Technology.png";
import testimonial_Islamic_Welfare_Society from "../../assets/testimonial/Islamic-Welfare-Society.jpg";
import testimonial_Jaya_Vasavi_Mstriculation from "../../assets/testimonial/Jaya-Vasavi-Mstriculation-School.png";
import testimonial_Modern_High_School from "../../assets/testimonial/Modern-High-School.jpeg";
import testimonial_Mount_Litera_zee from "../../assets/testimonial/Mount-Litera-zee school.png";
import testimonial_Reserve_Bank_School from "../../assets/testimonial/Reserve-Bank-Schoo,..png";
import testimonial_carmel_high_school from "../../assets/testimonial/carmel-high-school-thane-logo.png";
import testimonial_tirukkoilur_college from "../../assets/testimonial/tirukkoilur-college-of-arts-science-villupuram.jpg";
import green_valley_public_school_dindigul_logo from "../../assets/home/green_valley_public_school_dindigul_logo.jpg";

export interface SmartCampusCards {
  id: string | number;
  title: string;
  content: string;
  img: string | React.ReactNode;
}

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
      "Our institution was struggling with manual data entry and inconsistent reporting before we adopted EDUMAAT. The platform provided a comprehensive solution for managing student information, fees, and academic records. The support team is responsive, and the training provided was top-notch. We’ve seen a significant improvement in our administrative processes.",
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
  {
    id: 6,
    title: "Indian Institute of Food Processing Technology",
    content:
      "Before EDUMAAT, we spent hours every week compiling attendance and preparing reports manually. Now, it's all automated. The time we've saved is now spent on improving education quality. It's a smart investment for any institution.",
    img: testimonial_Indian_Institute,
  },
  {
    id: 7,
    title: "Carmel High School",
    content:
      "As an IT coordinator, I’ve worked with multiple ERP systems, and EDUMAAT stands out in terms of simplicity and stability. The cloud access is secure and reliable, and system updates are smooth. Integration with our existing infrastructure was easy.",
    img: testimonial_carmel_high_school,
  },
  {
    id: 8,
    title: "Modern High School",
    content:
      "We’ve received great feedback from parents since implementing EDUMAAT. The parent portal and mobile app give them real-time access to their child’s attendance, marks, and fees. It’s improved transparency and trust in our institution.",
    img: testimonial_Modern_High_School,
  },
  {
    id: 9,
    title: "Mount Litera Zee School",
    content:
      "We recently started using EDUMAAT, and the onboarding process was seamless. The support team guided us through every step. Even our less tech-savvy staff were comfortable using the system within a week.",
    img: testimonial_Mount_Litera_zee,
  },
  {
    id: 10,
    title: "Alraneem Private School",
    content:
      "We’ve been using EDUMAAT for over seven years now, and it continues to evolve with our needs. From academic planning to library management, the platform handles it all efficiently. Their commitment to continuous improvement is commendable.",
    img: testimonial_Al_Raneem_Logo,
  },
];

const Testimonials = () => {
  return (
    <Box>
      <title>Testimonials | Edumaat</title>
      <meta
        name="description"
        content="Read real testimonials from schools, colleges, and institutions that have transformed operations with Edumaat’s ERP solutions."
      />
      <meta
        name="keywords"
        content="Edumaat testimonials, ERP feedback, client reviews, school ERP success, education software feedback"
      />
      <meta name="author" content="Edumaat Team" />
      <link rel="canonical" href="https://edumaat.com/testimonials" />

      <Box sx={{ px: { xs: 4, sm: 6, lg: 10 }, mt: 3, mb: 10 }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 30, mb: 0.6 }}>
            Real results. Real institutions.
          </Typography>
          <Typography>
            See how schools, colleges, and training centers have transformed
            their academic and administrative efficiency with Edumaat.
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 3, lg: 6 }} justifyContent={"center"}>
          {smartCampusCards.map(({ id, title, img, content }, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
              <Card
                key={`${index}_${id}`}
                elevation={0}
                className="testimonial"
                sx={{
                  backgroundColor: "#F2F3F5",
                  borderRadius: 5,
                  textAlign: "left",
                  padding: 2,
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={`${img}`}
                    alt={`${title}_${index}`}
                    sx={{
                      height: 60,
                      width: 60,
                      border: 1,
                      borderColor: "#d0d0d0",
                    }}
                  />
                  <Box sx={{ ml: 2, mt: 1 }}>
                    <Typography
                      sx={{ fontSize: 20, color: "gray", fontWeight: "bold" }}
                    >
                      {title}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ py: 3, px: 1 }}>“{content}”</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;
