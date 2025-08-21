import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
} from "@mui/material";

const teamMembers = [
  {
    name: "Himanshu Kumar",
    role: "Founder & Instructor",
    image: "/himanshu.jpg",
  },
  {
    name: "Hemant Kumar",
    role: "Co-Founder & Developer",
    image: "/hemant.jpg",
  },
];

export default function TeamSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f5faff" }}>
      <Container>
        {/* Animated headline with hover color change */}
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          gutterBottom
          sx={{
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#1976d2", 
            },
          }}
        >
          Our Management Team
        </Typography>

        <Grid container spacing={4} justifyContent="center" mt={3}>
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <Avatar
                  alt={member.name}
                  src={member.image}
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "0 auto",
                    mb: 2,
                    border: "2px solid #1976d2",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
