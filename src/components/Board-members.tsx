import { board_members } from "@/assets/pandits";
import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import { Avatar, Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BoardMembers = () => {
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
            width: "50%",
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
        <Swiper
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
        </Swiper>
      </Box>
    </Box>
  );
};

export default BoardMembers;
