import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import aboutimage from "@/banner/about_banner.jpg";
import { rocket } from "@/utils/fonts";
import { COLORS } from "@/utils/color";
import ved1 from "@/icons/ved1.svg";
import ved2 from "@/icons/ved2.svg";
import Aos from "aos";

const AboutusSection = () => {
  useEffect(() => {
    Aos.init({ mirror: true, once: false });
  }, []);

  const vedas = [
    {
      img: ved1,
      heading: "Yajur-Veda",
      description:
        "The Yajur-Veda is a foundational scripture of Hinduism that serves as a ritual manual for the performance of sacrifices and ceremonies.",
    },
    {
      img: ved2,
      heading: "Atharva-Veda",
      description:
        "The Atharva-Veda represents the more diverse, evolving, and practical aspects of the Hindu religious mainstream.",
    },
  ];

  const phone = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ py: 8, background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={6}>
          
          {/* Image Side with Enhanced Styling */}
          <Grid size={{ lg: 6, xs: 12}} data-aos="fade-right">
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  background: "linear-gradient(45deg, #667eea, #764ba2)",
                  borderRadius: 4,
                  zIndex: -1,
                },
                "&:hover": {
                  transform: "scale(1.02)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <Image
                src={aboutimage}
                alt="About Hinduism"
                width={phone ? 400 : 500}
                height={500}
                style={{ 
                  objectFit: "cover", 
                  borderRadius: "20px",
                  width: "100%",
                }}
              />
              
              {/* Overlay Text */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  p: 3,
                  borderRadius: "0 0 20px 20px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: rocket.style,
                    fontSize: 18,
                    fontWeight: 600,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Ancient Wisdom, Modern Understanding
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Content Side with Enhanced Typography */}
          <Grid size={{ lg: 6, xs: 12 }} data-aos="fade-left">
            <Box sx={{ pl: { lg: 4, xs: 0 } }}>
              
              {/* Main Heading with Gradient */}
              <Typography
                sx={{
                  fontSize: { lg: 36, xs: 28 },
                  fontFamily: rocket.style,
                  fontWeight: 700,
                  background: "linear-gradient(45deg, #667eea, #764ba2)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Hinduism: A Diverse and Evolving Religious Mainstream
              </Typography>

              {/* Description with Better Styling */}
              <Typography
                sx={{
                  fontSize: 17,
                  fontWeight: 400,
                  fontFamily: rocket.style,
                  color: "#495057",
                  lineHeight: 1.7,
                  mb: 4,
                  textAlign: "justify",
                  "&::first-letter": {
                    fontSize: "200%",
                    fontWeight: 700,
                    color: COLORS.PRIMARY,
                    lineHeight: 1,
                  },
                }}
              >
                Hinduism refers to a religious mainstream which evolved organically and 
                spread over a large territory marked by significant ethnic and cultural 
                diversity. This mainstream evolved both by innovation from within, and by 
                assimilation of external traditions or cults into the Hindu fold. The result 
                is an enormous variety of religious traditions, ranging from innumerable small, 
                unsophisticated cults to major religious movements with millions of adherents 
                spread over the entire subcontinent.
              </Typography>

              {/* Vedas Section with Cards */}
              <Grid container spacing={6} >
                {vedas.map((val, i) => (
                  <Grid
                    size={{ lg: 6, xs: 12 }}
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 150}
                  >
                    <Card
                      sx={{
                        p: 2.5,
                        height: "100%",
                        borderRadius: 3,
                        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                        border: "1px solid rgba(255,255,255,0.8)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                          "& .veda-icon": {
                            transform: "scale(1.1)",
                          },
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <Avatar
                          className="veda-icon"
                          sx={{
                            width: 40,
                            height: 40,
                            background: `linear-gradient(45deg, ${i === 0 ? '#FF6B35, #F7931E' : '#4ECDC4, #44A08D'})`,
                            transition: "all 0.3s ease",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                          }}
                        >
                          <Image src={val.img} alt={val.heading} width={35} height={35} />
                        </Avatar>
                        
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            sx={{
                              fontFamily: rocket.style,
                              fontWeight: 700,
                              fontSize: 18,
                              color: "#2c3e50",
                              mb: 1,
                            }}
                          >
                            {val.heading}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: rocket.style,
                              fontSize: 14,
                              color: "#6c757d",
                              lineHeight: 1.6,
                            }}
                          >
                            {val.description}
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Optional Learn More Button */}
              <Box sx={{ mt: 10, textAlign: { lg: "center", xs: "center" } }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(45deg, #FF6B35, #764ba2)",
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: 16,
                    fontFamily: rocket.style,
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 8px 25px #FF6B35",
                    "&:hover": {
                      background: "linear-gradient(45deg, #FF6B35, #FF6B35)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 30px #FF6B35",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Learn More About Our Heritage
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutusSection;