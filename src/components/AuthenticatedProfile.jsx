import React, { useEffect } from "react";
import { Paper, Box, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthenticatedProfile = ({ name, image, number }) => {
  const navigate = useNavigate();

  // Session timeout settings
  const inactivityPeriod = 0.5 * 60 * 1000; // 15 minutes in milliseconds
  let sessionTimeout;

  // Logout function
  const logoutUser = () => {
    alert("Session expired due to Inactivity. Redirecting to Home Page.");
    // Clear any session data
    localStorage.clear();
    // Redirect to login page
    navigate("/");
  };

  // Reset timer on user interaction
  const resetTimer = () => {
    clearTimeout(sessionTimeout);
    sessionTimeout = setTimeout(logoutUser, inactivityPeriod);
  };

  useEffect(() => {
    // Start the session timeout timer
    resetTimer();

    // Add event listeners for user activity
    const events = ["click", "mousemove", "keydown", "scroll", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Cleanup on component unmount
    return () => {
      clearTimeout(sessionTimeout);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, []); // Empty dependency array ensures this runs only once after component mounts

  if (!name) return null;

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        width: "600px",
        height: "475px",
        mx: "auto",
        mt: 5,
        textAlign: "center",
        borderRadius: "16px",
        background:
          "linear-gradient(180deg, white 18%, rgba(255, 190, 50, 0.8) 65%, rgba(10, 190, 40, 0.7) 100%)",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src="/src/assets/logo-left.png"
        alt="Left Logo"
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          width: 95,
          height: 45,
        }}
      />
      <Box
        component="img"
        src="/src/assets/logo-right.png"
        alt="Right Logo"
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          width: 95,
          height: 55,
        }}
      />
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#4caf50",
        }}
      >
        Authentication Successful!
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        sx={{
          fontWeight: "400",
          color: "#555",
          fontStyle: "bold",
          mt: 1,
        }}
      >
        Secure authentication via SEAM
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "500", color: "#000", mt: 2 }}
      >
        Welcome,{" "}
        <span style={{ color: "#2234a8", fontWeight: "bold" }}>{name}</span>!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
          gap: 3,
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: "#000",
            }}
          >
            Your Aadhaar Number: {number}
          </Typography>
        </Box>
        <Box>
          <Avatar
            src={image}
            alt="Registered face"
            sx={{
              width: 200,
              height: 200,
              border: "2px solid #4caf50",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>
        <Typography
          variant="body6"
          sx={{
            fontSize: "1.5rem",
            color: "#2234a8",
            lineHeight: "1.5",
            fontWeight: "bold",
            textShadow: "1px 1px 4px rgba(5, 5, 9, 0.1)",
          }}
        >
          मेरा <span style={{ color: "red", fontWeight: "bold" }}>आधार</span>,
          मेरी पहचान
        </Typography>
      </Box>
    </Paper>
  );
};

export default AuthenticatedProfile;
