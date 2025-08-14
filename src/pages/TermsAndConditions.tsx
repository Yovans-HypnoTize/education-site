import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Title = ({ children }: any) => (
  <Typography sx={{ fontSize: 18, fontWeight: 600, mt: 2, color: "#1d70bc" }}>
    {children}
  </Typography>
);

const TermsAndConditions = () => {
  return (
    <Box sx={{  mt: { xs: 1, md: 3 }, mb: 10, px: { xs:2,sm: 6, md: 18 } }}>
      <Box>
        <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
          Terms and Conditions
        </Typography>

        <Typography>
          These Terms and Conditions govern the use of Edumaat’s ERP software
          and services. By accessing or using our platform, you agree to comply
          with and be bound by these terms. Please read them carefully.
        </Typography>
      </Box>

      <Box>
        <Title>Introduction</Title>
        <Typography>
          These terms are between{" "}
          <Link
            href="https://edumaat.com"
            target="_blank"
            rel="noopener"
            underline="none"
            color="inherit"
          >
            <b>Edumaat</b>
          </Link>{" "}
          (referred to as "Edumaat", "We", "Us", or "Our") and you, the user,
          client, or institution (referred to as "You" or "Client"). By using
          any part of Edumaat’s ERP platform, you agree to these Terms and
          Conditions.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Edumaat provides a robust, cloud-based ERP system tailored for
          educational institutions. Our software simplifies school and college
          management with features such as e-learning, admissions, payroll,
          attendance, academic records, and more.
          <br />
          We reserve the right to modify or update these Terms and Conditions at
          any time without prior notice. It is your responsibility to review the
          terms regularly.
        </Typography>
      </Box>

      <Box>
        <Title>Use of Services</Title>
        <Typography>
          By accessing Edumaat’s services, you agree to maintain the
          confidentiality of your account credentials and other sensitive data
          associated with your account.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          You are responsible for ensuring that our services are used only for
          lawful and ethical purposes. You must not engage in any activities
          that could damage, disable, or compromise the system, or harm other
          users, institutions, or Edumaat’s reputation.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Only authorized users with registered login credentials are permitted
          to access Edumaat's ERP. Sharing, stealing, or misusing login details
          is strictly prohibited and may result in immediate suspension or
          termination of access.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Edumaat is committed to protecting client privacy and maintaining the
          security of all personal and institutional data. We utilize advanced
          technologies and secure networks including encryption, secure
          passwords, SSL certificates, and trusted cloud infrastructure to
          safeguard your data.
        </Typography>
      </Box>

      <Box>
        <Title>Payments</Title>
        <Typography>
          Clients are required to pay all applicable fees for the implementation
          and continued use of Edumaat’s ERP solutions. This may include
          one-time setup and training fees, as well as recurring charges based
          on the agreed billing cycle (monthly, quarterly, half-yearly, or
          yearly).
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Subscriptions will auto-renew at the end of each billing cycle unless
          the client notifies Edumaat in advance of their decision to cancel.
          Failure to make payments on time may lead to account suspension or
          access restrictions.
        </Typography>
      </Box>

      <Box>
        <Title>Protection of Your Personal Information</Title>
        <Typography>
          Edumaat takes strong measures to protect your data from external
          threats and unauthorized access. Our system is built with secure
          infrastructure, data encryption, firewall protections, and is hosted
          on trusted cloud servers.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          We are dedicated to compliance with applicable data protection laws,
          including the Digital Personal Data Protection Act, 2023, to ensure
          lawful processing, consent-based collection, and secure handling of
          all sensitive information.
        </Typography>
      </Box>

      <Box>
        <Title>Termination</Title>
        <Typography>
          Edumaat reserves the right to suspend or terminate any client’s ERP
          access without prior notice for reasons including, but not limited to,
          breach of these terms, unlawful activity, or misuse of services.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Termination can also occur by mutual written agreement between the
          client and Edumaat.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          If a client chooses to discontinue the service, they may request a
          backup of their data for the current academic year. Edumaat will
          provide the data in Microsoft Excel format.
        </Typography>
      </Box>

      <Box>
        <Title>Indemnity</Title>
        <Typography>
          Each party agrees to indemnify the other from any damages, losses, or
          legal claims arising out of breach, misuse, or violation of these
          Terms. If Edumaat faces any legal claim due to the client’s actions,
          the client agrees to hold Edumaat harmless from all resulting
          liabilities.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Likewise, if the client faces legal challenges due to Edumaat’s
          software or services (e.g., alleged IP infringement), Edumaat will
          assume responsibility and defend the claim, provided Edumaat is
          informed and involved in the legal process.
        </Typography>
      </Box>

      <Box>
        <Title>Contact Us</Title>
        <Typography>
          For any questions or concerns regarding these Terms and Conditions,
          feel free to contact us:
        </Typography>
      </Box>

      <Box>
        <Title>Edumaat</Title>
        <Typography>
          Email:{" "}
          <Link href="mailto:info@edumaat.com" underline="hover">
            info@edumaat.com
          </Link>
        </Typography>
        <Typography>Phone: +91 93602 93602</Typography>
        <Typography>
          Website:{" "}
          <Link
            href="https://edumaat.com/"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            https://edumaat.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
