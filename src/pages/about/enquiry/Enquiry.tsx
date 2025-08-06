import { Email, Phone } from "@mui/icons-material";
import girlImage from "../../../assets/contactus/enquiry_form_girl_image.jpg";
import { Box, Typography } from "@mui/material";
// import enquiryFormImage from "../../../assets/enquiryFormImage.jpg";
// import EnquiryForm from "./EnquiryForm";
import EnquiryFormStepper from "./EnquiryFormStepper";

const Enquiry = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <img src={girlImage} alt="Contact" className="contact-image" />
        </div>
        <div className="contact-right">
          <h2 className="contact-title">Every queries have to be answered</h2>
          <div className="contact-grid">
            <div className="contact-box">
              <h4>Free Demo</h4>
              <div className="contact-item">
                <Email />
                <span>info@edumaat.com</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>+91 93602 93602</span>
              </div>
            </div>
            <div className="contact-box">
              <h4>For Sales</h4>
              <div className="contact-item">
                <Email />
                <span>sales@edumaat.com</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>+91 98409 02655</span>
              </div>
            </div>
            <div className="contact-box">
              <h4>For Support</h4>
              <div className="contact-item">
                <Email />
                <span>support@edumaat.com</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>+91 73051 75755</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Box
        sx={{
          px: { xs: 3, sm: 6, md: 4, lg: 12 },
          my: 3,
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
            Post your enquiry here :
          </Typography>
        </Box>
        <Box sx={{ px: { sm: 8 } }}>
          <EnquiryFormStepper />
        </Box>

        {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
            
              boxShadow: "1px 6px 14px #00000029",
              borderTop: 1,
              borderColor: "#00000029",
              p: 4,
              borderRadius: 3,
            }}
          >
            <Grid container spacing={4}>
              <Grid size={{ md: 7 }}>
                <EnquiryForm />
              </Grid>
              <Grid size={5} sx={{ display: { xs: "none", md: "block" } }}>
                <Box
                  component={"img"}
                  src={enquiryFormImage}
                  alt="enquiry form image"
                  sx={{ width: "100%", height: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box> */}
      </Box>
    </>
  );
};

export default Enquiry;
