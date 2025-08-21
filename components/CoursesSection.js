"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from "@mui/material";

export default function CoursesSection() {
  const courses = [
    {
      title: "Fullstack Web Development Program",
      category: "Web Development",
      categoryColor: "primary",
      price: "INR 29,000",
      originalPrice: "35,000",
      discount: "17%",
      batchStatus: "Coming Soon",
      seatsLabel: "Limited Seats",
      seatsCount: "7 Available",
      trainer: "Kingsley Orji",
      image: "/Fullstack.png",
    },
    {
      title: "Flutter Development Program",
      category: "Mobile Development",
      categoryColor: "success",
      price: "INR 10,000",
      originalPrice: "45,000",
      discount: "77%",
      batchStatus: "Coming Soon",
      seatsLabel: "Limited Seats",
      seatsCount: "9 Available",
      trainer: "Himanshu Kumar",
      image: "/Flutter.webp",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="subtitle2"
          color="primary"
          sx={{ letterSpacing: 2, mb: 1 }}
        >
          Featured Courses
        </Typography>

        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            mb: { xs: 4, md: 6 },
            color: "#000",
          }}
        >
          Pick A Course To Get Started
        </Typography>

        {/* Responsive Grid */}
        <Grid container spacing={4} justifyContent="center">
          {courses.map((course, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  minHeight: { xs: 400, sm: 450, md: 500 },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    overflow: "hidden",
                    height: { xs: 180, sm: 220, md: 250 },
                    width: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={course.image}
                    alt={course.title}
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Box>

                {/* Content */}
                <CardContent sx={{ flex: 1 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Chip label={course.category} color={course.categoryColor} />
                    <Typography variant="h6" fontWeight={600} color="primary">
                      {course.price}
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 1 }}
                      >
                        <del>{course.originalPrice}</del>
                      </Typography>
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                    >
                      {course.title}
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "red",
                        color: "#fff",
                        borderRadius: "50%",
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        fontWeight: "bold",
                        fontSize: { xs: "0.85rem", md: "1rem" },
                        textAlign: "center",
                        lineHeight: 1,
                      }}
                    >
                      {course.discount}
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "0.65rem", color: "#fff" }}
                      >
                        OFF
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={4} mt={2}>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        fontWeight={600}
                        color="primary"
                      >
                        BATCH
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {course.batchStatus}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="subtitle2"
                        fontWeight={600}
                        color="primary"
                      >
                        {course.seatsLabel}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {course.seatsCount}
                      </Typography>
                    </Box>
                  </Stack>

                  <Box mt={2}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                    >
                      {course.trainer}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
