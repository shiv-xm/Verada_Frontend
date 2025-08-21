// ✅ UPDATED LoginPage.js — Email OTP + Email/Password Login
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Link,
} from "@mui/material";

export default function LoginPage() {
  const [tabValue, setTabValue] = useState(0);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleTabChange = (event, newValue) => setTabValue(newValue);

  const handleSendOtp = async () => {
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setOtpSent(true);
        alert("OTP sent to your email.");
      } else {
        alert("Failed to send OTP");
      }
    } catch (err) {
      alert("Server error: " + err.message);
    }
  };

  const handleOtpLogin = async () => {
    try {
      const response = await fetch("/api/login-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Logged in successfully via OTP");
        // redirect to dashboard
      } else alert("Invalid OTP");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const handlePasswordLogin = async () => {
    try {
      const response = await fetch("/api/login-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Login successful");
        // redirect
      } else alert("Incorrect email or password");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box sx={{ flex: 1, backgroundColor: "#f5f7fa", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", px: 4 }}>
        <Box sx={{ maxWidth: 500, width: "100%" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>Get Started</Typography>
          <Typography variant="body1" mb={2}>Don't Have An Account? <Link href="/auth/register" underline="hover">Click Here</Link></Typography>

          <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth" sx={{ backgroundColor: "white", borderRadius: 2, mb: 3, boxShadow: 1, minHeight: 50, "& .MuiTabs-indicator": { height: 0 }, "& .MuiTab-root": { textTransform: "none", fontWeight: "bold", minHeight: 50, borderRadius: 2, transition: "all 0.4s ease", color: "#333", backgroundColor: "#f0f0f0", "&:hover": { backgroundColor: "#e0e0e0", transform: "scale(1.02)" } }, "& .Mui-selected": { backgroundColor: "#0e3350ff", color: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", transform: "scale(1.03)" } }}>
            <Tab label="OTP Login" />
            <Tab label="Email Login" />
          </Tabs>

          <Box sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: 2, p: 3, mb: 3 }}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {tabValue === 0 && (
              <Box display="flex" gap={2} alignItems="center">
                <TextField
                  fullWidth
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  sx={{ height: "56px", borderRadius: "25px", px: 3, textTransform: "none" }}
                  onClick={handleSendOtp}
                >
                  Get OTP
                </Button>
              </Box>
            )}
            {tabValue === 1 && (
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
          </Box>

          <Button
            fullWidth
            variant="contained"
            onClick={tabValue === 0 ? handleOtpLogin : handlePasswordLogin}
            sx={{ py: 1.5, borderRadius: "30px", fontWeight: "bold", fontSize: "16px", textTransform: "none", transition: "all 0.3s ease", "&:hover": { backgroundColor: "#0c2944", transform: "scale(1.02)" } }}
          >
            {tabValue === 0 ? "Verify OTP" : "Login"}
          </Button>
        </Box>
      </Box>

      <Box sx={{ flex: 1, backgroundColor: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", px: 2 }}>
        <img src="/logo.png" alt="Vereda Logo" style={{ width: 180, marginBottom: 40 }} />
        <img src="/6.png" alt="Illustration" style={{ width: "100%", maxWidth: 500 }} />
      </Box>
    </Box>
  );
}
