import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const StatsSection = () => {
  const statsData = [
    { label: "Years of Language Education Experience", value: 15 },
    { label: "Learners Enrolled in Vereda Programs", value: 3084 },
    { label: "Qualified Teachers And Language Experts", value: 100 },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounts();
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    statsData.forEach((stat, index) => {
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, interval);
    });
  };

  return (
    <Box ref={sectionRef} sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Achieve Your Goals With Vereda
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {statsData.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box sx={{ textAlign: "center", px: 2 }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: "bold", color: "#1976d2", mb: 1 }}
                >
                  {counts[index]}+
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
