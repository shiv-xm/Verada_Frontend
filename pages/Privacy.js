import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </Typography>

        {[
          {
            title: "1. What Information do we collect and what do we do with it?",
            content:
              "When you enrol as a student or subscriber (\"learner\") on our site or related courses, as part of the enrolling process, we collect the personal information you give us such as your name and email address.\n\nEmail marketing: we may send you emails about our site and related course(s), registration, course content, your course progress or other updates. We may also use your email to inform you about changes to the course, survey you about your usage, or collect your opinion.",
          },
          {
            title: "2. How do you get my consent?",
            content:
              "When you provide us with personal information to become a learner on our site, make a purchase, or participate in the course, you imply that you consent to our collecting it and using it for that specific reason only.\n\nIf we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent or provide you with an opportunity to say no.\n\nHow do I withdraw my consent? If after you opt-in, you change your mind, you may withdraw your consent at any time by contacting us at support@vereda.co.in",
          },
          {
            title: "3. Disclosure",
            content:
              "We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.",
          },
          {
            title: "4. Payment",
            content:
              "If you make a purchase on our site, we use a third-party payment processor such as RAZORPAY or PayU. Payments are encrypted through the Payment Card Industry Data Security Standard (PCI-DSS).\n\nYour purchase transaction data is stored only as long as is necessary to complete your transaction.\n\nAll direct payment gateways adhere to the PCI-DSS standards which help ensure the secure handling of credit card information.",
          },
          {
            title: "5. Third-Party Services",
            content:
              "Third-party providers used by us will only collect, use and disclose your information to the extent necessary to perform their services.\n\nCertain providers such as payment gateways have their own privacy policies. We recommend reading their policies to understand how your information will be handled.\n\nOnce you leave our course website or are redirected to a third-party site, you are no longer governed by our Privacy Policy.",
          },
          {
            title: "6. Security",
            content:
              "We take reasonable precautions and follow industry best practices to protect your personal information.\n\nIf you provide credit card information, it is encrypted using SSL and stored with AES-256 encryption. We follow PCI-DSS requirements.",
          },
          {
            title: "Cookies",
            content:
              "We use cookies to enhance your experience, track sessions, and serve targeted ads.\n\nYou can opt out of targeted ads via the Digital Advertising Alliance’s Opt-Out page.\n\nWe may use automated tracking methods to measure performance and engagement.",
          },
          {
            title: "7. Age of Consent",
            content:
              "By using this site, you confirm you are at least the age of majority in your jurisdiction.",
          },
          {
            title: "8. Changes to this Privacy Policy",
            content:
              "We may update this policy at any time. Please review it regularly. If we make material changes, we will notify you here.\n\nIf our site is acquired or merged with another company, your information may be transferred to the new owners.",
          },
        ].map((section, index) => (
          <Box key={index} sx={sectionStyle}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {section.title}
            </Typography>
            <Typography variant="body2" whiteSpace="pre-line">
              {section.content}
            </Typography>
          </Box>
        ))}

        <Typography variant="h6" fontWeight={600} sx={{ mt: 4, mb: 1 }}>
          Questions and Contact Information
        </Typography>
        <Typography variant="body2">
          If you would like to access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at {" "}
          <Link href="mailto:support@vereda.co.in" color="primary" underline="hover">
            support@vereda.co.in
          </Link>
          .
        </Typography>
      </Box>
      <Footer />
    </>
  );
}
