import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Box,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

export default function RefundPolicy() {
  const isMobile = useMediaQuery("(max-width:600px)");

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
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 4,
            color: "#333",
          }}
        >
          Refund Policy
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: "#444" }}>
          We value your trust in Vereda Digital Learning. Please read our refund
          policy carefully before making any purchases on our platform. By accessing
          or using our services, you agree to be bound by this policy.
        </Typography>

        {/* Section 1 */}
        <Box
          sx={{
            backgroundColor: "#fffde7",
            p: 3,
            borderLeft: "5px solid #fbc02d",
            borderRadius: 2,
            mb: 3,
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.03) translateY(-6px)",
              boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
            },
          }}
        >
          <ReportProblemIcon sx={{ color: "#fbc02d", mt: 0.5 }} />
          <Box>
            <Typography variant="h6" fontWeight={600}>
              1. All Sales Are Final
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Once a purchase is completed, it is considered final. We do not issue
              refunds under any circumstances, including but not limited to accidental
              purchases, dissatisfaction with the content, or change of mind.
            </Typography>
          </Box>
        </Box>

        {/* Section 2 */}
        <Box
          sx={{
            backgroundColor: "#fce4ec",
            p: 3,
            borderLeft: "5px solid #ec407a",
            borderRadius: 2,
            mb: 3,
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.03) translateY(-6px)",
              boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
            },
          }}
        >
          <DoNotDisturbAltIcon sx={{ color: "#ec407a", mt: 0.5 }} />
          <Box>
            <Typography variant="h6" fontWeight={600}>
              2. No Returns or Exchanges
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              As we provide digital services and instant access to course content,
              returns and exchanges are not applicable. Once the content is delivered
              or accessed, no request for exchange or return will be entertained.
            </Typography>
          </Box>
        </Box>

        {/* Section 3 */}
        <Box
          sx={{
            backgroundColor: "#e8f5e9",
            p: 3,
            borderLeft: "5px solid #66bb6a",
            borderRadius: 2,
            mb: 3,
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.03) translateY(-6px)",
              boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
            },
          }}
        >
          <CancelPresentationIcon sx={{ color: "#66bb6a", mt: 0.5 }} />
          <Box>
            <Typography variant="h6" fontWeight={600}>
              3. Cancellations
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              We do not allow cancellations once the payment is processed. Please
              ensure that you review your order thoroughly before proceeding with the
              transaction.
            </Typography>
          </Box>
        </Box>

        {/* Contact Us */}
        <Typography variant="h6" fontWeight={600} sx={{ mt: 4, mb: 1 }}>
          Contact Us
        </Typography>
        <Typography variant="body2">
          For any questions regarding this policy, feel free to contact our support
          team at{" "}
          <Link
            href="mailto:support@vereda-learning.com"
            color="primary"
            underline="hover"
          >
             support@vereda.co.in
          </Link>
          . We’re here to help.
        </Typography>
      </Box>
      <Footer />
    </>
  );
}
