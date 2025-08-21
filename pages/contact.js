"use client";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Grid,
  Paper,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6r9yf79",
        "template_311nhvh",
        form.current,
        "Yi75Q_hpgtX6VcvV_"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Message failed to send.");
        }
      );
  };

  const infoItems = [
    {
      icon: <RoomIcon sx={{ color: "green", fontSize: 35 }} />,
      title: "Office Address",
      subtitle: "Sinha Library road, Venture park Patna",
    },
    {
      icon: <PhoneIcon sx={{ color: "teal", fontSize: 30 }} />,
      title: "Phone Number",
      subtitle: "+91 95709 94444",
    },
    {
      icon: <EmailIcon sx={{ color: "orange", fontSize: 30 }} />,
      title: "Send Email",
      subtitle: "support@vereda.co.in",
    },
    {
      icon: <LanguageIcon sx={{ color: "#f97316", fontSize: 30 }} />,
      title: "Our Website",
      subtitle: "www.vereda.co.in",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Contact Info Section */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 8, backgroundColor: "#f9fafb" }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              "&:hover": {
                color: "blue",
                transition: "0.3s ease",
                cursor: "pointer",
              },
            }}
          >
            Get in touch with us
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            We're Always Eager To Hear From You!
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Google Map */}
          <Grid item xs={12} md={8}>
            <Box display="flex" justifyContent="center">
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: "10000px",
                }}
              >
                <Box sx={{ width: "100%", height: { xs: 300, md: 500 } }}>
                  <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7467402463153!2d85.13313517485106!3d25.613330614721136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59e81e53b22d%3A0x4c9edee41e414d59!2svereda%20digital%20technologies!5e0!3m2!1sen!2sin!4v1754430438608!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Info Boxes */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0.5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      "&:hover .titleText": { color: "blue" },
                      cursor: "pointer",
                    }}
                  >
                    {item.icon}
                    <Box>
                      <Typography className="titleText" fontWeight={600}>
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Form Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          px: 2,
          py: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            gutterBottom
            sx={{
              "&:hover": {
                color: "blue",
                transition: "0.3s ease",
                cursor: "pointer",
              },
            }}
          >
            Get in touch with Contact Us
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Fill The Form Below So We Can Get To Know You And Your Needs Better.
          </Typography>

          {/* Form with emailjs ref and submit */}
          <form ref={form} onSubmit={sendEmail}>
            <Stack spacing={3}>
              <TextField fullWidth label="Your Name" name="user_name" variant="outlined" />
              <TextField fullWidth label="Email Address" name="user_email" variant="outlined" />
              <TextField fullWidth label="Phone Number" name="user_phone" variant="outlined" />
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
              />
              <Box textAlign="center">
                <Button type="submit" variant="contained" size="medium">
                  Send Message
                </Button>
              </Box>
            </Stack>
          </form>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
