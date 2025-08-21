// ✅ UPDATED RegisterPage.js — Image LEFT, Form RIGHT
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export default function RegisterPage() {
  const [step, setStep] = useState("email"); // "email" or "otp"
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [agree, setAgree] = useState(false);

  const handleSendOtp = async () => {
    if (!email) return alert("Please enter your email");
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setStep("otp");
        setTimer(120);
        alert("OTP sent to your email");
      } else {
        alert("Failed to send OTP");
      }
    } catch (err) {
      alert("Server error: " + err.message);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Please enter OTP");
    if (!agree) return alert("Please agree to Terms & Conditions");
    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Registration successful!");
        // redirect to dashboard
      } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const handleResendOtp = () => {
    if (timer === 0) handleSendOtp();
  };

  // countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* LEFT IMAGE SECTION */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <img
          src="/logo.png"
          alt="Vereda Logo"
          style={{ width: 180, marginBottom: 40 }}
        />
        <img
          src="/5.png"
          alt="Illustration"
          style={{ width: "100%", maxWidth: 500 }}
        />
      </Box>

      {/* RIGHT FORM SECTION */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#f5f7fa",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 4,
        }}
      >
        <Box sx={{ maxWidth: 500, width: "100%" }}>
          {step === "email" ? (
            <>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Create Account
              </Typography>
              <Typography variant="body1" mb={2}>
                Already have an account?{" "}
                <Link href="/auth/login" underline="hover">
                  Sign In
                </Link>
              </Typography>

              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 2,
                  p: 3,
                  mb: 3,
                }}
              >
                <TextField
                  label="Email Address"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>

              <Button
                fullWidth
                variant="contained"
                onClick={handleSendOtp}
                sx={{
                  py: 1.5,
                  borderRadius: "30px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#0c2944",
                    transform: "scale(1.02)",
                  },
                }}
              >
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Verify Email
              </Typography>
              <Typography variant="body2" mb={2}>
                We have sent an OTP to <strong>{email}</strong>.  
                Valid for <strong>2 minutes</strong>.
              </Typography>

              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 2,
                  p: 3,
                  mb: 3,
                }}
              >
                <TextField
                  label="Enter OTP"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                    />
                  }
                  label={
                    <Typography variant="body2">
                      By registering, I agree to Vereda's{" "}
                      <Link href="#" underline="hover">
                        Terms & Conditions
                      </Link>
                    </Typography>
                  }
                />
              </Box>

              <Button
                fullWidth
                variant="contained"
                onClick={handleVerifyOtp}
                sx={{
                  py: 1.5,
                  borderRadius: "30px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#0c2944",
                    transform: "scale(1.02)",
                  },
                }}
              >
                Verify OTP
              </Button>

              <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
                Didn’t get OTP?{" "}
                <span
                  style={{
                    color: timer === 0 ? "#1976d2" : "gray",
                    cursor: timer === 0 ? "pointer" : "default",
                  }}
                  onClick={handleResendOtp}
                >
                  Resend OTP
                </span>{" "}
                {timer > 0 && `(${timer}s)`}
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
