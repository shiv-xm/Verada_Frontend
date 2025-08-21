"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RequestCall from "../components/RequestCall";

const courseData = [
   {
    title: "Mastering HTML",
    category: "html",
    price: "₹1499",
    availableSeats: 15,
    status: "Available",
    image: "/courses/HTML5.jpg",
  },
  {
    title: "CSS for Beginners",
    category: "css",
    price: "₹1599",
    availableSeats: 10,
    status: "Available",
    image: "/courses/css.jpg",
  },
  {
    title: "JavaScript Essentials",
    category: "javascript",
    price: "₹2999",
    availableSeats: 8,
    status: "Available",
    image: "/courses/javascript.webp",
  },
  {
    title: "React.js Crash Course",
    category: "react",
    price: "₹1499",
    availableSeats: 5,
    status: "Available",
    image: "/courses/react.png",
  },
  {
    title: "Angular Development Course",
    category: "react",
    price: "₹1199",
    availableSeats: 5,
    status: "Available",
    image: "/courses/anguler.webp",
  },
  {
    title: "Frontend Course",
    category: "react",
    price: "Coming Soon",
    availableSeats: 5,
    status: "Coming Soon",
    image: "/courses/Frontend.webp",
  },
  {
    title: "Flutter App Devlopment",
    category: "react",
    price: "₹1199",
    availableSeats: 5,
    status: "Available",
    image: "/courses/flutter.png",
  },
  {
    title: "SQL Crash Course",
    category: "react",
    price: "1149",
    availableSeats: 5,
    status: "Available",
    image: "/courses/Sql.png",
  },
  {
    title: "Vue.js for Beginners",
    category: "vue",
    price: "Coming Soon",
    availableSeats: 0,
    status: "Coming Soon",
    image: "/courses/vue.jpg",
  },
  {
    title: "PHP Bootcamp",
    category: "php",
    price: "₹4799",
    availableSeats: 12,
    status: "Available",
    image: "/courses/php.jpg",
  },
  {
    title: "WordPress Mastery",
    category: "wordpress",
    price: "₹499",
    availableSeats: 18,
    status: "Available",
    image: "/courses/wordpress.png",
  },
  {
    title: "Advanced Java",
    category: "java",
    price: "Coming Soon",
    availableSeats: 0,
    status: "Coming Soon",
    image: "/courses/java.jpg",
  },
];

const categories = [
  "all", "html", "css", "javascript", "php", "wordpress", "vue", "react", "java"
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [formOpen, setFormOpen] = useState(false);

  const filteredCourses =
    selectedCategory === "all"
      ? courseData
      : courseData.filter((course) => course.category === selectedCategory);

  return (
    <>
      <Navbar />
      <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
        <Container>
          {/* Header */}
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{
                transition: "color 0.3s",
                "&:hover": { color: "blue" },
              }}
            >
              Featured Courses
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Pick A Course To Get Started
            </Typography>
          </Box>

          {/* Skill Chips */}
          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat.toUpperCase()}
                onClick={() => setSelectedCategory(cat)}
                clickable
                sx={{
                  backgroundColor: selectedCategory === cat ? "#2078a1ff" : "lightgray",
                  color: selectedCategory === cat ? "white" : "black",
                  "&:hover": {
                    backgroundColor: "#56aed6ff",
                    color: "white",
                  },
                }}
              />
            ))}
          </Box>

          {/* Result Counter */}
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 4, fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Showing {filteredCourses.length} of {courseData.length} results
          </Typography>

          {/* Course Grid */}
          <Grid container spacing={4} justifyContent="center">
            {filteredCourses.map((course, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                 <Card
  sx={{
    width: 260,
    height: 260,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: 4,
    },
  }}
>
  <CardMedia
    component="img"
    image={course.image}
    alt={course.title}
    sx={{
      width: "100%",
      height: 130,
      objectFit: "cover",
    }}
  />
  <CardContent sx={{ p: 1 }}>
    <Typography variant="h6" gutterBottom sx={{ fontSize: "1rem" }}>
      {course.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {course.status === "Coming Soon"
        ? "🚧 Coming Soon"
        : `💰 Price: ${course.price}`}
    </Typography>
    {course.status !== "Coming Soon" && (
      <Typography variant="body2" color="text.secondary">
        Seats Available: {course.availableSeats}
      </Typography>
    )}
  </CardContent>
</Card>

              </Grid>
            ))}
          </Grid>

          {/* Talk to Expert Button */}
          <Box textAlign="center" mt={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setFormOpen(true)}
            >
              Request Call Back
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Slide-In Form */}
      <RequestCall open={formOpen} onClose={() => setFormOpen(false)} />

      <Footer />
    </>
  );
}
