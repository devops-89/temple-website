import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "@/banner/banner1.jpg";
import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import { bannerData } from "@/assets/banner";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
const Banner = () => {
  return (
    <Box>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        effect="fade"
        modules={[EffectFade, Autoplay]}
      >
        {bannerData.map((val, i) => (
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: `url(${val.img})`,
                height: "90vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#00000080",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Container maxWidth="lg">
                  <Grid container>
                    <Grid size={5.5}>
                      <Typography
                        sx={{
                          color: COLORS.WHITE,
                          fontFamily: rocket.style,
                          fontWeight: 600,
                          fontSize: 50,
                          lineHeight: "60px",
                        }}
                        className="animate__animated animate__backInLeft  "
                      >
                        {val.heading}
                      </Typography>
                      <Typography
                        sx={{
                          color: COLORS.WHITE,
                          fontFamily: rocket.style,
                          fontWeight: 600,
                          fontSize: 18,
                          mt: 2,
                          lineHeight: "24px",
                        }}
                        className="animate__animated animate__backInLeft  "
                      >
                        {val.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
