import bannerImage from "@/banner/about-us-banner.jpg";
//import contactImage from "@/images/image.png"; // Add your contact image
import CustomBanner from "@/components/Custom-Banner";
import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import {
  LocationOnOutlined,
  MailOutline,
  PhoneOutlined,
  AccessTime,
  Send,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Card, 
  CardContent,
  Paper,
  Divider,
  Avatar,
} from "@mui/material";

const Contact = () => {
  const contactInfo = [
    {
      icon: PhoneOutlined,
      title: "Call Us",
      primary: "+1 (780) 468-2106",
      secondary: "Monday – Friday, 9 am-6 pm",
      color: "#FF6B35",
    },
    {
      icon: MailOutline,
      title: "Email Us",
      primary: "info@example.com",
      secondary: "We'll respond within 24 hours",
      color: "#4ECDC4",
    },
    {
      icon: LocationOnOutlined,
      title: "Visit Us",
      primary: "9507 39 Ave, Edmonton, AB",
      secondary: "T6E 5T3, Canada",
      color: "#45B7D1",
    },
  ];

  const mandirHours = [
    {
      day: "Monday - Friday",
      morning: "7:00 AM - 1:00 PM",
      evening: "4:00 PM - 8:00 PM",
    },
    {
      day: "Saturday",
      morning: "7:00 AM - 2:00 PM",
      evening: "4:00 PM - 8:00 PM",
    },
    {
      day: "Sunday",
      morning: "7:00 AM - 7:00 PM",
      evening: "Evening Closed",
    },
  ];

  return (
    <Box>
      <CustomBanner img={bannerImage.src} label="Contact Us" />
      
      {/* Contact Section with Image and Form */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Side - Image and Contact Info */}
          <Grid size={{ lg: 6, xs: 12 }} data-aos="fade-right">
            {/* Contact Image */}
            <Box
              sx={{
                position: "relative",
                mb: 4,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                component="img"
                src="/images/image.png"
                alt="Contact Us"
                sx={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                }}
              />
              <Box
                  sx={{
                    position: "absolute",
                   top: 0,
                   left: 0,
                   right: 0,
                    bottom: 0,
                   background: "linear-gradient(45deg, rgba(255,107,53,0.8), rgba(78,205,196,0.8))",
                    display: "flex",
                    alignItems: "center",
                  justifyContent: "center",
                  }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#6B1B1B",
                    fontFamily: rocket.style,
                    fontWeight: 700,
                    textAlign: "center",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  We'd Love to Hear From You
                </Typography>
              </Box>
            </Box>

            {/* Contact Cards */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {contactInfo.map((item, i) => (
                <Card
                  key={i}
                  sx={{
                    p: 2,
                    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                    border: "none",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        backgroundColor: item.color,
                        width: 50,
                        height: 50,
                      }}
                    >
                      <item.icon sx={{ color: "white", fontSize: 24 }} />
                    </Avatar>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: rocket.style,
                          fontWeight: 600,
                          fontSize: 18,
                          color: "#2c3e50",
                        }}
                      >
                        {item.primary}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: rocket.style,
                          fontSize: 14,
                          color: "#7f8c8d",
                        }}
                      >
                        {item.secondary}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid size={{ lg: 6, xs: 12 }} data-aos="fade-left">
            <Card
              sx={{
                p: 4,
                borderRadius: 4,
                background: "linear-gradient(135deg, #fff8E7 0%, #FAEBD7 100% )",
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                color: "white",
              }}
            >
              <CardContent>
                <Box sx={{ textAlign: "center", mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: rocket.style,
                      fontWeight: 700,
                      mb: 2,
                      color: "#6B1B1B",
                    }}
                  >
                    Send Us a Message
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: rocket.style,
                      fontSize: 16,
                      opacity: 0.9,
                      color: "#6B1B1B",
                    }}
                  >
                    Fill out the form below and we'll get back to you soon
                  </Typography>
                </Box>

                <form>
                  <Grid container spacing={3}>
                    <Grid size={12}>
                      <TextField
                        label="Full Name*"
                        fullWidth
                        variant="filled"
                        sx={{
                          "& .MuiFilledInput-root": {
                            backgroundColor: "rgba(255,255,255,0.9)",
                            borderRadius: 2,
                            "&:hover": {
                              backgroundColor: "rgba(255,255,255,1)",
                            },
                          },
                          "& label": {
                            fontFamily: rocket.style,
                            color: "#6B1B1B", // deep maroon
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={6}>
                      <TextField
                        label="Email*"
                        fullWidth
                        variant="filled"
                        sx={{
                          "& .MuiFilledInput-root": {
                            backgroundColor: "rgba(255,255,255,0.9)",
                            borderRadius: 2,
                            "&:hover": {
                              backgroundColor: "rgba(255,255,255,1)",
                            },
                          },
                          "& label": {
                            fontFamily: rocket.style,
                            color: "#6B1B1B",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={6}>
                      <TextField
                        label="Mobile*"
                        fullWidth
                        variant="filled"
                        sx={{
                          "& .MuiFilledInput-root": {
                            backgroundColor: "rgba(255,255,255,0.9)",
                            borderRadius: 2,
                            "&:hover": {
                              backgroundColor: "rgba(255,255,255,1)",
                            },
                          },
                          "& label": {
                            fontFamily: rocket.style,
                            color: "#6B1B1B",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        label="Message*"
                        fullWidth
                        multiline
                        rows={4}
                        variant="filled"
                        sx={{
                          "& .MuiFilledInput-root": {
                            backgroundColor: "rgba(255,255,255,0.9)",
                            borderRadius: 2,
                            "&:hover": {
                              backgroundColor: "rgba(255,255,255,1)",
                            },
                          },
                          "& label": {
                            fontFamily: rocket.style,
                            color: "#6B1B1B",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<Send />}
                        sx={{
                          py: 2,
                          fontSize: 18,
                          fontFamily: rocket.style,
                          fontWeight: 600,
                          background: "linear-gradient(45deg, #FF6B35, #F7931E)",
                          borderRadius: 3,
                          textTransform: "none",
                          boxShadow: "0 8px 20px rgba(255,107,53,0.4)",
                          "&:hover": {
                            background: "linear-gradient(45deg, #E55A2B, #E8851A)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 12px 25px rgba(255,107,53,0.5)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Mandir Hours Section */}
      <Box sx={{ background: "linear-gradient(135deg, #FF9933 0%, #FF6600 100%)", py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <AccessTime sx={{ fontSize: 60, color: COLORS.PRIMARY, mb: 2 }} />
            <Typography
              variant="h3"
              sx={{
                fontFamily: rocket.style,
                fontWeight: 700,
                color: "#FFFF",
                mb: 2,
              }}
            >
              Mandir Hours
            </Typography>
            <Typography
              sx={{
                fontFamily: rocket.style,
                fontSize: 18,
                color: "#FFFF",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Visit us during our regular hours for prayers, community events, and spiritual guidance
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {mandirHours.map((hour, i) => (
              <Grid size={{ lg: 4, md: 6, xs: 12 }} key={i}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 3,
                    background: "white",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: rocket.style,
                      fontWeight: 700,
                      fontSize: 20,
                      color: COLORS.PRIMARY,
                      mb: 2,
                    }}
                  >
                    {hour.day}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ mb: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: rocket.style,
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#34495e",
                        mb: 0.5,
                      }}
                    >
                      Morning
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: rocket.style,
                        fontSize: 16,
                        color: "#2ecc71",
                        fontWeight: 500,
                      }}
                    >
                      {hour.morning}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: rocket.style,
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#34495e",
                        mb: 0.5,
                      }}
                    >
                      Evening
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: rocket.style,
                        fontSize: 16,
                        color: hour.evening === "Evening Closed" ? "#e74c3c" : "#f39c12",
                        fontWeight: 500,
                      }}
                    >
                      {hour.evening}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Map Section with Overlay */}
      <Box sx={{ position: "relative", mt: 10 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.697995336286!2d-113.47946352400523!3d53.47385726517602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a018d33945d5ed%3A0xcc4a5f4d3a553c08!2s9507%2039%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6E%205T3%2C%20Canada!5e0!3m2!1sen!2sin!4v1752669375124!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ 
            border: 0,
            filter: "grayscale(20%)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        
      </Box>
    </Box>
  );
};

export default Contact;