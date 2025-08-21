"use client";

import React, { useRef } from "react";
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Button,
  IconButton,
  Slide,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const languages = ["English","Hindi"];

const RequestCallbackForm = ({ open, onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6r9yf79",
        "template_311nhvh",
        form.current,
        "Yi75Q_hpgtX6VcvV_"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          onClose();
        },
        () => {
          alert("Message failed to send.");
        }
      );
  };

  return (
    <Slide direction="right" in={open} mountOnEnter unmountOnExit>
      <Paper
        elevation={4}
        sx={{
          width: 320,
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1300,
          p: 2,
          overflowY: "auto",
          bgcolor: "#fff",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {/* Close Button */}
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            "&:hover": {
              color: "red",
              transform: "scale(1.2)",
              transition: "0.3s",
            },
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

        {/* Logo */}
        <Box display="flex" justifyContent="flex-start" mt={1} ml={1}>
          <Image src="/Logo.png" alt="Vereda Logo" width={100} height={70} />
        </Box>

        {/* Heading */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            fontSize: "1.2rem",
            mt: 1.5,
            mb: 2,
          }}
        >
          Talk to Our Expert
        </Typography>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail}>
          {[
            { name: "user_name", label: "Name" },
            { name: "user_email", label: "abcd@example.com", type: "email" },
            { name: "user_phone", label: "+9 9123 567 98" },
            { name: "user_country", label: "Country" },
            { name: "user_occupation", label: "Occupation" },
            { name: "user_state", label: "State" },
          ].map(({ name, label, type = "text" }) => (
            <TextField
              key={name}
              fullWidth
              required
              name={name}
              type={type}
              placeholder={label}
              variant="outlined"
              margin="dense"
              InputProps={{
                sx: {
                  borderRadius: "10px",
                  backgroundColor: "#fafafa",
                  fontSize: "0.9rem",
                  height: 45,
                },
              }}
              sx={{ mb: 1 }}
            />
          ))}

          <TextField
            select
            fullWidth
            required
            name="user_language"
            defaultValue=""
            placeholder="select Language"
            margin="dense"
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: "10px",
                backgroundColor: "#fafafa",
                fontSize: "0.9rem",
                height: 45,
              },
            }}
            sx={{ mb: 2 }}
          >
            {languages.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              textTransform: "lowercase",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "30px",
              py: 1.2,
              backgroundColor: "#2196f3",
              "&:hover": {
                backgroundColor: "#1976d2",
              },
            }}
          >
            submit
          </Button>
        </form>
      </Paper>
    </Slide>
  );
};

export default RequestCallbackForm;
