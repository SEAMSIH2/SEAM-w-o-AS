import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  Box,
  Grid,
  Paper,
  Container,
  Select,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [language, setLanguage] = useState("English");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // Logic for dynamically changing language across the UI
    alert(`Language changed to ${event.target.value}`);
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  // Image Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Development Process Images
  const developmentImages = [
    { src: "/images/seam-concept.jpg", title: "Seam Concept" },
    {
      src: "/images/Brainstroming sessions.jpeg",
      title: "Brainstorming Sessions",
    },
    { src: "/images/Industrial Mentoring.jpeg", title: "Industrial Mentoring" },
    { src: "/images/Deepak is Kanguva.jpeg", title: "Planning" },
    { src: "/images/seam-prototype.jpg", title: "Prototype Development" },
    { src: "/images/seam-testing.jpg", title: "Security Testing" },
    { src: "/images/seam-final.jpg", title: "Final Product" },
  ];

  const indianColors = {
    primary: "#004080",
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Box
      sx={{
        width: "100%", // Ensure full viewport width
        minHeight: "100vh", // Ensure full viewport height
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        overflow: "hidden", // Prevent overflow
      }}
    >
      {/* Top Bar */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(135deg, #001f4d, #004080)",
          width: "100%", // Ensure AppBar spans full width
        }}
      ></AppBar>

      <Box
        sx={{
          backgroundImage: `
      linear-gradient(rgba(0, 64, 128, 0.7), rgba(26, 117, 255, 0.7)), 
      url('/src/assets/bg.png')
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
          color: "white",
          textAlign: "center",
          width: "100%",
          height: "65vh", // Full width of the container
          marginTop: "0vh",
        }}
      >
        <Slider {...sliderSettings}>
          {/* Slide 1 */}
          <Box>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Welcome to SEAM
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Secure Encryption and Authentication Model
            </Typography>
          </Box>

          {/* Slide 2 */}
          <Box>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Update your Aadhaar through SEAM!
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Ensure accuracy and security in your updates.
            </Typography>
          </Box>

          {/* Slide 3 */}
          <Box>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Your Privacy, Our Responsibility
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              We use state-of-the-art encryption to protect your data.
            </Typography>
          </Box>

          {/* Slide 4 */}
          <Box>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Seamless and Secure
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Simplifying your authentication needs with cutting-edge solutions.
            </Typography>
          </Box>
        </Slider>

        {/* Get Started Button */}
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/authenticate"
          sx={{
            mt: 4,
            px: 4,
            py: 2,
            backgroundColor: "white",
            color: "#2962FF",
            fontWeight: "bold",
            borderRadius: "25px",
            ":hover": {
              backgroundColor: "#FFA500",
            },
          }}
        >
          Get Started
        </Button>
      </Box>

      {/* Interactive Features Section */}
      <Container sx={{ my: 8 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            color: "#004080",
          }}
        >
          Why Choose SEAM?
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Secure Authentication",
              description:
                "Liveness detection ensures only authorized users access services.",
            },
            {
              title: "Tamper-Proof Models",
              description:
                "Encryption and obfuscation protect models from reverse engineering.",
            },
            {
              title: "Optimized for Networks",
              description:
                "Lightweight models ensure smooth transactions even on 3G networks.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#004080", mb: 2 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* How It Works Section */}
      <Container sx={{ my: 8 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            color: "#004080",
          }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              step: "1",
              title: "Register",
              description: "Create your account and start your secure journey.",
              icon: <PersonAddIcon sx={{ fontSize: 50, color: "#004080" }} />,
            },
            {
              step: "2",
              title: "Authenticate",
              description: "Use our secure model to validate your identity.",
              icon: <FingerprintIcon sx={{ fontSize: 50, color: "#004080" }} />,
            },
            {
              step: "3",
              title: "Access",
              description:
                "Enjoy seamless and secure access to all your resources.",
              icon: <LockOpenIcon sx={{ fontSize: 50, color: "#004080" }} />,
            },
          ].map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Box
                  sx={{
                    p: 4,
                    textAlign: "center",
                    border: "1px solid #ccc",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <Box sx={{ mb: 2 }}>{step.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#004080", mb: 1 }}
                  >
                    Step {step.step}: {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    {step.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Interactive Features Section */}
      <Container sx={{ my: 8 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            color: "#004080",
          }}
        >
          Why Choose SEAM?
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Secure Authentication",
              description:
                "Liveness detection ensures only authorized users access services.",
              image: "https://via.placeholder.com/300?text=Authentication",
            },
            {
              title: "Tamper-Proof Models",
              description:
                "Encryption and obfuscation protect models from reverse engineering.",
              image: "https://via.placeholder.com/300?text=Tamper+Proof",
            },
            {
              title: "Optimized for Networks",
              description:
                "Lightweight models ensure smooth transactions even on 3G networks.",
              image: "https://via.placeholder.com/300?text=Optimized",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: "12px",
                    textAlign: "center",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={feature.image}
                    alt={feature.title}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      mb: 2,
                      borderRadius: "8px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#004080", mb: 2 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Development Process Slider */}
      <Container sx={{ my: 6, position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 1,
            color: indianColors.primary,
            borderRadius: "12px",
          }}
        >
          Development Journey
        </Typography>
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            width: "100%",
            maxWidth: "100%", // Maximize the width
            margin: "auto",
            borderRadius: "12px",
          }}
        >
          <Slider {...sliderSettings}>
            {developmentImages.map((image, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 8,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0.7,
                    scale: index === currentSlide ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    style={{
                      maxWidth: "150%",
                      maxHeight: 400,
                      borderRadius: "15px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "start",
                      mt: 0,
                      color: indianColors.primary,
                      fontWeight: "bold",
                    }}
                  >
                    {image.title}
                  </Typography>
                </motion.div>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          py: 4,
          backgroundColor: "#001f4d",
          textAlign: "center",
          color: "white",
          width: "100%", // Ensure footer is full width
        }}
      >
        <Typography variant="body2">
          © 2024 SEAM. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
