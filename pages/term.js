import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";

export default function TermsAndConditions() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const sectionStyle = {
    backgroundColor: "#ffffff",
    p: 3,
    borderLeft: "5px solid #1976d2",
    borderRadius: 2,
    mb: 3,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0px 6px 24px rgba(0,0,0,0.1)",
    },
  };

  const sections = [
    {
      title: "Usage of this Site",
      content: `Vereda.co.in maintains this website, courses, and related content (the "Site") for the use of its customers, vendors, students, and users ("Users") upon agreement to these terms. Use of this website indicates acceptance of these Terms of Use and forms a binding agreement between you and Vereda.co.in. If you do not agree to these terms, do not use this Site.`,
    },
    {
      title: "1. Use of Site",
      content: `Vereda.co.in provides various materials and resources. Each user is allowed to view/download one copy for personal use. Users may not modify, reproduce, or distribute the materials. Breach of these terms will result in termination of access.`,
    },
    {
      title: "2. Geographic Location",
      content: `Users who purchase materials from outside India may not use or access them inside India.`,
    },
    {
      title: "3. User Warranty",
      content: `You confirm you are not an agent or employee of a competing education platform and will use the site solely for your personal career growth.`,
    },
    {
      title: "4. Trademark and Copyright",
      content: `All content is the property of Vereda.co.in and protected by intellectual property laws. Unauthorized use may result in legal action.`,
    },
    {
      title: "5. Hyperlinks",
      content: `External links are provided for convenience. We do not control or endorse the content of third-party sites and are not responsible for any content or harm caused by visiting them.`,
    },
    {
      title: "6. No Warranty",
      content: `Materials are provided "as is" without warranties of any kind. Vereda.co.in does not guarantee accuracy or completeness and may change content without notice.`,
    },
    {
      title: "7. Limitation of Liability",
      content: `Vereda.co.in is not liable for damages from the use or inability to use the site, including loss of data, business interruptions, or test outcomes.`,
    },
    {
      title: "8. Account Termination",
      content: `We reserve the right to terminate any account at our sole discretion without prior notice.`,
    },
    {
      title: "9. Applicable Law",
      content: `These Terms are governed by Indian law. Any disputes shall be subject to the jurisdiction of Indian courts.`,
    },
    {
      title: "10. Effective Date and Updates",
      content: `These terms are effective as of November 11, 2022, and are subject to change without notice. Continued use constitutes agreement to updated terms.`,
    },
  ];

  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#f4f6f8",
          minHeight: "100vh",
          py: isMobile ? 4 : 8,
          px: isMobile ? 2 : 12,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ textAlign: "center", fontWeight: 700, mb: 4, color: "#333" }}
        >
          Terms and Conditions
        </Typography>

        {sections.map((section, index) => (
          <Box key={index} sx={sectionStyle}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {section.title}
            </Typography>
            <Typography variant="body2" whiteSpace="pre-line">
              {section.content}
            </Typography>
          </Box>
        ))}

      </Box>
      <Footer />
    </>
  );
}
