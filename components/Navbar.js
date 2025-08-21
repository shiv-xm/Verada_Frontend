import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Container,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Image from "next/image";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "Home", href: "/", icon: <HomeOutlinedIcon fontSize="small" /> },
    {
      label: "Courses",
      href: "/courses",
      icon: <MenuBookOutlinedIcon fontSize="small" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <ContactMailIcon fontSize="small" />,
    },
  ];

  return (
    <>
      {/* Info Bar */}
      <Box bgcolor="#e3f2fd" py={1}>
        <Container
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
              <Box display="flex" alignItems="center" gap={1}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+91-9 570 994 444</Typography>
              </Box>

              <Typography variant="body2" color="text.secondary">
                |
              </Typography>

              <Box display="flex" alignItems="center" gap={1}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">
                  Sinha Library road, Venture park Patna
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Find us on:
              </Typography>

              <IconButton
                size="small"
                component="a"
                href="https://www.facebook.com/veredaindia?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": { transform: "scale(1.2)", color: "#1877f2" },
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                size="small"
                component="a"
                href="https://www.linkedin.com/company/vereda-management-india/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": { transform: "scale(1.2)", color: "#0a66c2" },
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                size="small"
                component="a"
                href="https://www.instagram.com/veredaindia"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": { transform: "scale(1.2)", color: "#e1306c" },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navbar */}
      <AppBar
        position="sticky"
        color="inherit"
        elevation={3}
        sx={{ zIndex: 999 }}
      >
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <Box display="flex" alignItems="center" gap={1}>
              <Image src="/Logo.png" alt="Vereda Logo" width={120} height={80} />
            </Box>

            {/* Desktop Links */}
            {!isMobile ? (
              <Box display="flex" alignItems="center" gap={4} ml="auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontWeight: 500,
                      color: "black", 
                      transition: "0.3s",
                      "&:hover": { color: "primary.dark" },
                    }}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}

                <Button
                  startIcon={<PersonIcon />}
                  onClick={handleLoginClick}
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    backgroundColor: "#e3f2fd",
                    color: "#1976d2",
                    px: 2,
                    borderRadius: "20px",
                    "&:hover": { backgroundColor: "#6ea9d9ff", color: "#0d47a1" },
                  }}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <IconButton edge="end" color="primary" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={400}
        PaperProps={{
          sx: { width: 250, backgroundColor: "#8bc5f2ff", color: "white" },
        }}
      >
        {/* Drawer Header with Close */}
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{ p: 1, backgroundColor: "#59a6e0ff" }}
        >
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navLinks.map((item) => (
            <ListItem
              button
              key={item.label}
              component="a"
              href={item.href}
              sx={{
                color: "white", 
                "&:hover": { backgroundColor: "#5e5853ff" },
              }}
            >
              {item.icon}
              <ListItemText primary={item.label} sx={{ ml: 1 }} />
            </ListItem>
          ))}
          <ListItem
            button
            component="a"
            onClick={handleLoginClick}
            sx={{ color: "#2b7fe7ff", "&:hover": { backgroundColor: "#e5eff6ff" } }}
          >
            <PersonIcon sx={{ mr: 1 }} />
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
