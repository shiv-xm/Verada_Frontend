import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const logos = [
  { name: "Amazon", src: "/Amazon.jpg" },
  { name: "Apple", src: "/Apple.webp" },
  { name: "Oyo", src: "/Oyo.png" },
  { name: "Iffco", src: "/Iffco.png" },
  { name: "Mindfire", src: "/mindfire.png" },
  { name: "PayPal", src: "/Paypal.svg" },
  { name: "Samsung", src: "/Samsung.avif" },
  { name: "Uber", src: "/Uber.png" },
  { name: "Ola", src: "/ola.png" },
  { name: "Adobe", src: "/Adobe.png" },
  { name: "Hotstar", src: "/hotsar.png" },
  { name: "Intel", src: "/Intel.svg" },
  { name: "Nvidia", src: "/Nvidia.png" },
  { name: "Oracle", src: "/Oracle.jpg" },
];

export default function MentorsSection() {
  const row1 = logos.slice(0, 5);
  const row2 = logos.slice(5, 9);
  const row3 = logos.slice(9, 14);

  const renderRow = (row, mdWidth) => (
    <Grid container spacing={4} justifyContent="center" mb={2}>
      {row.map((logo, idx) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={mdWidth || 2.4}
          key={idx}
          sx={{
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#e3f2fd", 
              borderRadius: 2, 
            },
            p: 1, 
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={40}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ py: 10, backgroundColor: "#ffffff" }}>
      <Container>
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
          Our Mentor Associates
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          mb={5}
        >
          Mentor Community At The Forefront
        </Typography>

        {/* Render 3 rows */}
        {renderRow(row1)}
        {renderRow(row2, 3)}
        {renderRow(row3)}
      </Container>
    </Box>
  );
}
