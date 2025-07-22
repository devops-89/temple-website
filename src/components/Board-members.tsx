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
} from "@mui/material";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BoardMembers = () => {
  const tableHeader = [
    {
      label: "Name",
    },
    {
      label: "Position",
    },
  ];
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 40,
            fontWeight: 600,
            fontFamily: rocket.style,
          }}
        >
          Our Board Members
        </Typography>
        <Typography
          sx={{
            mt: 2,
            width: {lg:"50%",xs:"100%"},
            margin: "auto",
            textAlign: "center",
            fontFamily: rocket.style,
            color: COLORS.GRAY,
          }}
        >
          Meet the dedicated individuals who form our Board, providing strategic
          vision and unwavering support for our temple's mission.
        </Typography>
      </Container>
      <Box sx={{ mt: 5 }}>
        {/* <Swiper
          slidesPerView={5}
          spaceBetween={20}
          style={{ padding: 20 }}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
          loop
        >
          {board_members.map((val, i) => (
            <SwiperSlide key={i}>
              <Card sx={{ p: 2, height: 180 }}>
                <Avatar sx={{ margin: "auto", width: 60, height: 60 }}></Avatar>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontFamily: rocket.style,
                    textAlign: "center",
                    mt: 2,
                  }}
                >
                  {val.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: rocket.style,
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: COLORS.PRIMARY,
                    mt: 0.8,
                  }}
                >
                  {val.designation}
                </Typography>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid size={{ lg: 6, xs: 12 }}>
              <Card sx={{ p: 2, width: "100%" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {tableHeader.map((val, i) => (
                        <TableCell>
                          <Typography
                            sx={{
                              fontSize: 16,
                              fontFamily: rocket.style,
                              fontWeight: 600,
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
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{ fontSize: 14, fontFamily: rocket.style }}
                          >
                            {val.name}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            sx={{ fontSize: 14, fontFamily: rocket.style }}
                          >
                            {val.designation}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </Grid>
            <Grid size={{ lg: 6, xs: 12 }}>
              <Card sx={{ p: 2, width: "100%" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {tableHeader.map((val, i) => (
                        <TableCell>
                          <Typography
                            sx={{
                              fontSize: 16,
                              fontFamily: rocket.style,
                              fontWeight: 600,
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
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{ fontSize: 14, fontFamily: rocket.style }}
                          >
                            {val.name}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            sx={{ fontSize: 14, fontFamily: rocket.style }}
                          >
                            {val.designation}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default BoardMembers;
