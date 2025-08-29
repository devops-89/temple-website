import { board_members } from "@/assets/pandits";
import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import React, { useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

const BoardMembers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const tableHeader = [
    {
      label: "Name",
    },
    {
      label: "Position",
    },
  ];

  return (
    <Box 
      sx={{ 
        py: 8,
        background: `linear-gradient(135deg, ${COLORS.PRIMARY}08 0%, ${COLORS.PRIMARY}15 100%)`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 50%, ${COLORS.PRIMARY}10 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${COLORS.PRIMARY}08 0%, transparent 50%)`,
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }} data-aos="fade-up">
          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 700,
              fontFamily: rocket.style,
              background: `linear-gradient(135deg, ${COLORS.PRIMARY} 0%, #d32f2f 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Our Board Members
          </Typography>
          <Typography
            sx={{
              mt: 2,
              width: { lg: "60%", xs: "100%" },
              margin: "auto",
              textAlign: "center",
              fontFamily: rocket.style,
              color: COLORS.GRAY,
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.6,
            }}
          >
            Meet the dedicated individuals who form our Board, providing strategic
            vision and unwavering support for our temple's mission.
          </Typography>
        </Box>

        {/* Tables Section */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Grid container spacing={4} sx={{ maxWidth: "1000px" }}>
            <Grid item xs={12} lg={6} data-aos="fade-right">
            <Paper
              elevation={0}
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                background: `linear-gradient(135deg, ${COLORS.WHITE} 0%, #fafafa 100%)`,
                border: `2px solid ${COLORS.PRIMARY}20`,
                transition: "all 0.3s ease",
                height: "100%", // Equal height
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: `0 20px 40px ${COLORS.PRIMARY}20`,
                  border: `2px solid ${COLORS.PRIMARY}40`,
                },
              }}
            >
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${COLORS.PRIMARY} 0%, #d32f2f 100%)`,
                  p: 2,
                  color: COLORS.WHITE,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: rocket.style,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Leadership Team
                </Typography>
              </Box>
              <Table sx={{ flex: 1 }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
                    {tableHeader.map((val, i) => (
                      <TableCell key={i} sx={{ border: "none", py: 2 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontFamily: rocket.style,
                            fontWeight: 600,
                            color: COLORS.PRIMARY,
                          }}
                        >
                          {val.label}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {board_members.slice(0, 8).map((val, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "&:nth-of-type(odd)": {
                          backgroundColor: "#fafbfc",
                        },
                        "&:hover": {
                          backgroundColor: `${COLORS.PRIMARY}08`,
                          transform: "scale(1.02)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <TableCell sx={{ border: "none", py: 1.5 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontFamily: rocket.style,
                            fontWeight: 500,
                          }}
                        >
                          {val.name}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ border: "none", py: 1.5 }}>
                        <Typography
                          sx={{
                            fontSize: 13,
                            fontFamily: rocket.style,
                            color: COLORS.PRIMARY,
                            fontWeight: 500,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {val.designation}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>

          <Grid item xs={12} lg={6} data-aos="fade-left">
            <Paper
              elevation={0}
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                background: `linear-gradient(135deg, ${COLORS.WHITE} 0%, #fafafa 100%)`,
                border: `2px solid ${COLORS.PRIMARY}20`,
                transition: "all 0.3s ease",
                height: "100%", // Equal height
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: `0 20px 40px ${COLORS.PRIMARY}20`,
                  border: `2px solid ${COLORS.PRIMARY}40`,
                },
              }}
            >
              <Box
                sx={{
                  background: `linear-gradient(135deg, #d32f2f 0%, ${COLORS.PRIMARY} 100%)`,
                  p: 2,
                  color: COLORS.WHITE,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: rocket.style,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Advisory Board
                </Typography>
              </Box>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
                    {tableHeader.map((val, i) => (
                      <TableCell key={i} sx={{ border: "none", py: 2 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontFamily: rocket.style,
                            fontWeight: 600,
                            color: COLORS.PRIMARY,
                          }}
                        >
                          {val.label}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {board_members.slice(8, 16).map((val, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "&:nth-of-type(odd)": {
                          backgroundColor: "#fafbfc",
                        },
                        "&:hover": {
                          backgroundColor: `${COLORS.PRIMARY}08`,
                          transform: "scale(1.02)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <TableCell sx={{ border: "none", py: 1.5 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontFamily: rocket.style,
                            fontWeight: 500,
                          }}
                        >
                          {val.name}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ border: "none", py: 1.5 }}>
                        <Typography
                          sx={{
                            fontSize: 13,
                            fontFamily: rocket.style,
                            color: COLORS.PRIMARY,
                            fontWeight: 500,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {val.designation}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
                      </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BoardMembers;