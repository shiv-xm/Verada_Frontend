"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link"; // For Next.js routing

export default function Footer() {
  //  Define path for each link
  const internalRoutes = {
    Home: "/",
    Dashboard: "/dashboard",
    Login: "/auth/login",
    Register: "/auth/register",
    "About Us": "/about",
    "Contact Us": "/contact",
    "Refund Policy": "/RefundPolicy",
    "Terms & Conditions": "/term",
    "Privacy Policy": "/Privacy",
    "Help Center": "/help",
    "Contact Support": "/support",
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #8bc5f2ff, #546af5ff)",
        color: "white",
        pt: 8,
        pb: 0,
      }}
    >
      <Container maxWidth="lg">
        {/* Subscribe Section */}
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 6 }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={600}>
              Want Us To Email You About Special Offers And Updates?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Enter Your Email"
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#3e3e47ff",
                  color: "white",
                  borderRadius: 2,
                  px: 3,
                  "&:hover": {
                    bgcolor: "#16161bff",
                  },
                }}
              >
                Subscribe Now
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />

        {/* Footer Links Section */}
        <Grid container spacing={0} justifyContent="space-between">
          {[
            {
              title: "Site Map",
              links: ["Home", "Dashboard", "Login", "Register"],
            },
            {
              title: "Useful Links",
              links: [
                "About Us",
                "Contact Us",
                "Refund Policy",
                "Terms & Conditions",
                "Privacy Policy",
              ],
            },
            {
              title: "Social Contact",
              links: [
                { name: "Facebook", url: "https://www.facebook.com/veredaindia?mibextid=LQQJ4d" },
                { name: "Instagram", url: "https://www.instagram.com/veredaindia" },
                { name: "LinkedIn", url: "https://www.linkedin.com/company/vereda-management-india/" },
              ],
              isExternal: true,
            },
            {
              title: "Our Support",
              links: ["Help Center", "Contact Support"],
            },
          ].map((section, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ mb: { xs: 4, md: 0 } }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    pb: 1,
                    fontWeight: 600,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "25px",
                      height: "2px",
                      bgcolor: "#4FC3F7",
                    },
                  }}
                >
                  {section.title}
                </Typography>
              </Box>

              <Box>
                {section.isExternal
                  ? section.links.map((link, idx) => (
                      <MuiLink
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                        sx={{
                          display: "block",
                          my: 1,
                          color: "white",
                          fontWeight: 500,
                          "&:hover": { color: "#d1d1ff" },
                        }}
                      >
                        {link.name}
                      </MuiLink>
                    ))
                  : section.links.map((text, idx) => (
                      <MuiLink
                        key={idx}
                        component={Link}
                        href={internalRoutes[text] || "#"}
                        underline="none"
                        sx={{
                          display: "block",
                          my: 1,
                          color: "white",
                          fontWeight: 500,
                          "&:hover": { color: "#d1d1ff" },
                        }}
                      >
                        {text}
                      </MuiLink>
                    ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ⬇️ Full-width bottom footer bar (OUTSIDE container) */}
      <Box bgcolor="#e3f2fd" py={1} mt={4}>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "rgba(0, 0, 0, 0.7)" }}
          >
            <Box
              component="a"
              href="/"
              sx={{
                color: "black",
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": {
                  color: "#1976d2",
                },
              }}
            >
              Vereda Digital Learning
            </Box>{" "}
            ©2025
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
