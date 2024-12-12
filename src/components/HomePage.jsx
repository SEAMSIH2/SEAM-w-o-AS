import React, { useState } from "react";
import { TextField } from "@mui/material";
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
      url('/src/assets/WhatsApp Image 2024-12-12 at 07.02.50_ebd374db.jpg')
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
              icon: "🔑", // Key emoji
            },
            {
              title: "Tamper-Proof Models",
              description:
                "Encryption and obfuscation protect models from reverse engineering.",
              icon: "🛡️", // Shield emoji
            },
            {
              title: "Optimized for Networks",
              description:
                "Lightweight models ensure smooth transactions even on 3G networks.",
              icon: "📶", // Signal bars emoji
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
                    variant="h3"
                    sx={{
                      color: "#004080",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Typography>
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
          Our Unique Selling Points
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Advanced Security",
              description:
                "Our cutting-edge encryption ensures maximum protection for your data.",
              icon: "🔒", // Lock emoji
            },
            {
              title: "Seamless Integration",
              description:
                "Easily integrates into existing systems for a hassle-free experience.",
              icon: "🔗", // Link emoji
            },
            {
              title: "Real-Time Performance",
              description:
                "Enjoy lightning-fast operations with our optimized processing algorithms.",
              icon: "⚡", // Lightning bolt emoji
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
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#004080",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Typography>
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
          Our Key Features
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "User-Friendly Design",
              description:
                "Intuitive interfaces that enhance user experience effortlessly.",
              icon: "🖥️", // Monitor emoji
            },
            {
              title: "Fast Verification",
              description:
                "Quick and accurate identity verification within seconds.",
              icon: "⚡", // Lightning emoji
            },
            {
              title: "Cross-Platform Support",
              description:
                "Access our services across mobile, desktop, and web seamlessly.",
              icon: "📱", // Mobile phone emoji
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
                    variant="h3"
                    sx={{
                      color: "#004080",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Typography>
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
      <Container
        sx={{
          my: 8,
          backgroundColor: "#fff",
          py: 6,
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            color: "#004080",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: { xs: "24px", md: "32px" },
          }}
        >
          Our Journey & Roadmap
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              date: "Q1 2024",
              milestone: "Beta Release",
              description:
                "SEAM's beta version will be launched for early feedback and testing.",
            },
            {
              date: "Q3 2024",
              milestone: "Mobile App Integration",
              description:
                "Launch of the SEAM mobile app to enable seamless interaction.",
            },
            {
              date: "Q1 2025",
              milestone: "AI Integration",
              description:
                "Introducing AI-driven analytics for predictive accessibility solutions.",
            },
          ].map((timeline, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: "12px",
                  textAlign: "center",
                  backgroundColor: "#eef6fb",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#004080",
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: { xs: "20px", md: "24px" },
                  }}
                >
                  {timeline.date}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#004080",
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: { xs: "18px", md: "20px" },
                  }}
                >
                  {timeline.milestone}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", fontSize: "14px" }}
                >
                  {timeline.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container
        sx={{
          my: 8,
          backgroundColor: "#f9f9f9",
          py: 6,
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            color: "#004080",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: { xs: "24px", md: "32px" },
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              question: "How can SEAM be personalized for my organization?",
              answer:
                "SEAM offers customizable modules and features tailored to meet the specific needs of your organization, ensuring a solution that perfectly fits your accessibility requirements.",
            },
            {
              question: "What types of devices are compatible with SEAM?",
              answer:
                "SEAM is designed to be highly flexible and can be integrated with a wide range of devices, including mobile phones, smartwatches, IoT-enabled devices, and accessible hardware solutions.",
            },
            {
              question:
                "How does SEAM improve mobility for individuals with disabilities?",
              answer:
                "SEAM utilizes cutting-edge technologies like GPS, AI, and real-time analytics to create intuitive mobility solutions that help users navigate spaces safely and independently, enhancing both access and mobility.",
            },
            {
              question:
                "Can SEAM be used for both physical and digital accessibility?",
              answer:
                "Absolutely! SEAM covers both physical accessibility, through tools like smart mobility aids, and digital accessibility, offering adaptive technologies to improve digital experiences for individuals with disabilities.",
            },
            {
              question: "Is there support for multiple languages in SEAM?",
              answer:
                "Yes, SEAM supports multilingual interfaces to cater to diverse user groups across regions, making it easier for individuals from different linguistic backgrounds to access its features.",
            },
            {
              question:
                "How do I track the usage and effectiveness of SEAM solutions?",
              answer:
                "SEAM includes robust analytics tools that allow administrators and organizations to track usage, analyze data trends, and assess the effectiveness of the solutions in improving accessibility and mobility.",
            },
          ].map((faq, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: "12px",
                  textAlign: "center",
                  backgroundColor: "#eef6fb",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#003366",
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  {faq.question}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", fontSize: "14px" }}
                >
                  {faq.answer}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container
        sx={{ my: 8, backgroundColor: "#f9f9f9", py: 6, borderRadius: "16px" }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            color: "#004080",
          }}
        >
          How SEAM Empowers You
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Customizable Solutions",
              description:
                "Tailor-made options to meet unique organizational requirements.",
              icon: "⚙️", // Gear emoji
            },
            {
              title: "Enhanced Accessibility",
              description:
                "Accessible solutions for individuals of all abilities.",
              icon: "♿", // Wheelchair symbol emoji
            },
            {
              title: "Robust Analytics",
              description:
                "Gain insights through detailed reporting and analytics tools.",
              icon: "📊", // Bar chart emoji
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
                    variant="h3"
                    sx={{
                      color: "#004080",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Typography>
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
      <Container
        sx={{ my: 8, backgroundColor: "#e8f7f2", py: 6, borderRadius: "16px" }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            color: "#006b52",
          }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: "12px",
                textAlign: "center",
                backgroundColor: "#f2f9f5",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#006b52",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Reach Out To Us
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "100%" }}
              >
                Send Message
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: "12px",
                textAlign: "center",
                backgroundColor: "#f2f9f5",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#006b52",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Visit Our Office
              </Typography>
              <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
                1234, xxxxx,yyyyyy
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ width: "100%" }}
              >
                Get Directions
              </Button>
            </Paper>
          </Grid>
        </Grid>
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
