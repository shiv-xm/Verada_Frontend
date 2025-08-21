"use client";
import { Box, Typography, Button, Container, Grid, Link } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import RequestCall from "../components/RequestCall";

// Animated Image Grid Component
function ShuffleGrid() {
  const [images, setImages] = useState([
    "/hero/img1.jpg", "/hero/img2.jpg", "/hero/img3.jpg", "/hero/img4.jpg", "/hero/img5.jpg",
    "/hero/img6.jpg", "/hero/img7.jpg", "/hero/img8.jpg", "/hero/img9.jpg", "/hero/img10.jpg",
    "/hero/img11.jpg", "/hero/img12.jpg", "/hero/img13.jpg", "/hero/img14.jpg", "/hero/img15.jpg",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => {
        const shuffled = [...prev];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
        gap: { xs: 1, sm: 2 },
        width: { xs: 280, sm: 360, md: 420 },
        height: { xs: 280, sm: 360, md: 420 },
      }}
    >
      {images.slice(0, 9).map((src, index) => (
        <Box
          key={index}
          component={motion.div}
          layout
          transition={{ duration: 1.3, type: "spring" }}
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <img
            src={src}
            alt={`Grid Image ${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}

// Hero Section Component
export default function HeroSection() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 4, md: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column", md: "row" }}
        >
          {/* Left Content */}
          <Grid item xs={12} md={5}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography
                variant="overline"
                color="primary"
                sx={{
                  letterSpacing: 1.5,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  mb: 2,
                  display: "block",
                }}
              >
                ONLINE EDUCATION
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Up Your Skills <br />
                To Advance Your <br />
                <span style={{ color: "#268fdaff" }}>Career Path</span>
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Digital Training Program By India's Leading Experts. <br />
                Join thousands of learners today and acquire a high-demand tech skill.
              </Typography>

              <Box display="flex" gap={2} justifyContent={{ xs: "center", md: "flex-start" }}>
                <Link href="/auth/register" passHref>
                  <Button variant="contained" color="primary" size="large">
                    Get Started
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => setOpenForm(true)}
                >
                  Request Call Back
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Grid */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, md: 0 },
            }}
          >
            <ShuffleGrid />
          </Grid>
        </Grid>
      </Container>
      {openForm && <RequestCall open={openForm} onClose={() => setOpenForm(false)} />}
    </Box>
  );
}
