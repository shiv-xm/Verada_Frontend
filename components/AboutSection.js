"use client";

import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Box
      sx={{
        bgcolor: "#e3f2fd",
        py: { xs: 4, md: 8 }, 
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Left - Text Content */}
          <Box sx={{ flex: 1, mt: -2 }}> 
            <Typography
              variant="h4"
              fontWeight={600}
              gutterBottom
              sx={{
                transition: "color 0.3s ease",
                "&:hover": { color: "#1976d2" },
              }}
            >
              About Vereda
            </Typography>
            <Typography variant="h6" fontWeight={500} gutterBottom>
              Learn With Experts, Build Your Future
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Vereda Digital Technologies offers practical and result-oriented bootcamps 
              that equip learners with in-demand tech skills. Our goal is to ensure every 
              student becomes job-ready with hands-on experience. We focus on real-world 
              projects and expert mentorship instead of just certificates.
            </Typography>

            <List>
              <ListItem disableGutters>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Skilled Instructors"
                  primaryTypographyProps={{
                    sx: {
                      transition: "color 0.3s ease",
                      "&:hover": { color: "#1976d2" },
                      cursor: "pointer",
                    },
                  }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <WorkspacePremiumIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Get Certificate"
                  primaryTypographyProps={{
                    sx: {
                      transition: "color 0.3s ease",
                      "&:hover": { color: "#1976d2" },
                      cursor: "pointer",
                    },
                  }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <AccessTimeIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Online Classes"
                  primaryTypographyProps={{
                    sx: {
                      transition: "color 0.3s ease",
                      "&:hover": { color: "#1976d2" },
                      cursor: "pointer",
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>

          {/* Right - Balanced Image */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: 400,
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Image
              src="/teacher.png"
              alt="Instructor"
              width={300}
              height={200}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              priority
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
