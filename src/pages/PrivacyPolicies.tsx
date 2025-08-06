import { Box, Link, Typography } from "@mui/material";

const Title = ({ children }: any) => (
  <Typography sx={{ fontSize: 18, fontWeight: 600, mt: 2, color: "#1d70bc" }}>
    {children}
  </Typography>
);

const PrivacyPolicies = () => {
  return (
    <Box sx={{ mt: { xs: 1, md: 3 }, mb: 10, px: { xs: 6, md: 18 } }}>
      <Box>
        <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
          Privacy Policy
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          <b>Last Updated:</b> 04.07.2025
        </Typography>
        <Typography sx={{ mt: 3 }}>
          Thank you for choosing Edumaat. We are committed to protecting your
          privacy and ensuring that your personal information is handled with
          the highest standards of security and compliance.
          <br />
          This Privacy Policy outlines how we collect, use, and protect your
          personal data when you use our software and services.
        </Typography>
      </Box>

      <Box>
        <Title>Compliance</Title>
        <Typography>
          This policy is published in accordance with the applicable data
          protection laws in India, including:
        </Typography>
        <ul>
          <li>Section 43A of the Information Technology Act, 2000</li>
          <li>
            Rule 4 of the Information Technology (Reasonable Security Practices
            and Procedures and Sensitive Personal Information) Rules, 2011
          </li>
          <li>The Digital Personal Data Protection Act, 2023</li>
        </ul>
      </Box>

      <Box>
        <Title>Information We Collect</Title>
        <Typography>
          We collect personal information and sensitive personal data or
          information (SPDI) to deliver and improve our services.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          We may collect your name to personalize communication and support.
          Your contact details such as email address, phone number, and mailing
          address help us send updates and provide assistance. School or
          institution name and country are used to track and manage
          institutional data efficiently.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          We also collect device and server information, including IP address,
          browser type, operating system, language preferences, and geolocation
          data. Cookies are used to improve your browsing experience and collect
          analytics data.
        </Typography>
      </Box>

      <Box>
        <Title>How We Use Your Information</Title>
        <Typography>
          {" "}
          We use your information to manage user accounts, permissions, and
          preferences. This includes maintaining academic records, processing
          fee payments, and storing transaction history.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Your contact information is used to send service-related
          communications such as account alerts, fee reminders, and
          institutional updates. You may also receive promotional messages,
          which you can opt out of at any time.
        </Typography>
      </Box>

      <Box>
        <Title>Information Sharing</Title>
        <Typography>
          We may use third-party platforms for data collection, especially
          during campaigns or when forms are submitted on social media
          platforms. These third parties help us understand our users and
          improve our services.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          We may also disclose information if legally required to comply with
          court orders, government requests, or to enforce our terms of service
          and security measures.
        </Typography>
      </Box>

      <Box>
        <Title>Eligibility Criteria</Title>
        <Typography>
          Edumaat’s services are available only to users aged 18 and above. We
          do not knowingly collect information from individuals below 18 years
          of age. If such data is detected, it will be removed from our systems.
        </Typography>
      </Box>

      <Box>
        <Title>Security Measures</Title>
        <Typography>
          {" "}
          We implement industry-standard security tools and practices such as
          firewalls, antivirus software, and role-based access control to
          protect your personal data.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Data transmitted between your device and our servers is encrypted
          using Secure Sockets Layer (SSL) or Transport Layer Security (TLS)
          protocols to prevent unauthorized access during transmission.
        </Typography>
      </Box>

      <Box>
        <Title>Legal Framework and Data Protection</Title>
        <Typography>
          Edumaat is fully compliant with the Digital Personal Data Protection
          Act, 2023.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          We ensure that data is collected and processed only for lawful and
          specified purposes. Consent is obtained before collecting sensitive
          personal data. We follow the principle of data minimization and notify
          relevant authorities in the event of a data breach.
        </Typography>
      </Box>

      <Box>
        <Title>Your Rights and Choices</Title>
        <Typography>
          You can access and update your personal information through your
          Edumaat account settings. If you find any information to be inaccurate
          or outdated, you may request corrections.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          You can opt out of promotional emails and messages by following the
          unsubscribe instructions or contacting us directly. Please note,
          service-related updates cannot be opted out of, as they are necessary
          for maintaining your account and services.
        </Typography>
      </Box>

      <Box>
        <Title>Changes to This Policy</Title>
        <Typography>
          This Privacy Policy may be updated periodically. Changes will be
          posted on our website along with the revised update date. We encourage
          you to review the policy from time to time to stay informed.
        </Typography>
      </Box>

      <Box>
        <Title>Your Consent</Title>
        <Typography>
          By using Edumaat’s services, you agree to the terms of this Privacy
          Policy, including the collection, use, and sharing of your personal
          information as described above. Declining to provide certain data may
          limit your access to our platform and services.
        </Typography>
      </Box>

      <Box>
        <Title>Dispute Resolution</Title>
        <Typography>
          Any disputes related to this Privacy Policy will be governed by the
          Arbitration and Conciliation Act, 1996.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          All arbitration will be conducted in Chennai, India, with one
          arbitrator appointed by mutual consent. Both parties will bear their
          own legal costs, and share the arbitrator's fees equally. Either party
          may approach a court for urgent injunctive relief if necessary.
        </Typography>
      </Box>

      <Box>
        <Title>Contact Us</Title>
        <Typography>
          {" "}
          If you have questions or concerns regarding this Privacy Policy or our
          data handling practices, please contact:
        </Typography>
      </Box>

      <Box>
        <Title>Edumaat</Title>
        <Typography>
          Email: <Link href="mailto:info@edumaat.com">info@edumaat.com</Link>
        </Typography>
        <Typography>Phone: +91 93602 93602</Typography>
        <Typography>
          Website:{" "}
          <Link href="https://edumaat.com/" target="_blank" rel="noopener">
            edumaat.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicies;
