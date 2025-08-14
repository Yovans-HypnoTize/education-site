import { Phone, LocationOn } from "@mui/icons-material";
import GoogleGlobMap from "../../components/GoogleGlobMap";
import { Box } from "@mui/material";

const countries = [{ name: "India", code: "IN", lat: 12.87124, lng: 80.10422 }];

const ContactUs = () => {
  return (
    <>
      <title>Contact Us | Edumaat</title>
      <meta
        name="description"
        content="Get in touch with Edumaat. Find our address, contact number, and office location on the map."
      />
      <meta
        name="keywords"
        content="Edumaat contact, Edumaat address, Edumaat phone, Chennai office, get in touch"
      />
      <meta name="author" content="Edumaat Team" />
      <link rel="canonical" href="https://edumaat.com/contact-us" />
      <Box
        sx={{
          px: { xs: 2, md: 12 },
          mb: 5,
          mt: 3,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" }, pr: { md: 10 } }}>
          <h2 className="contact-heading">Contact us</h2>
          <div className="contact-item-down-card">
            <LocationOn sx={{ mt: 1 }} />
            <div className="contact-text">
              157/4, Vandalur-Kelambakkam Main Road, Kolapakkam, Chennai,
              <br />
              Tamil Nadu 600127, India.
            </div>
          </div>
          <div className="contact-item-down-card">
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Phone sx={{ mr: 1 }} />

              <div className="contact-text">+91 44 7181 2300</div>
            </Box>
          </div>
          <div style={{ marginTop: "50px" }}>
            <GoogleGlobMap countries={countries} />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
