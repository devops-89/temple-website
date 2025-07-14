import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import aboutimage from "@/banner/about-us.png";
import { rocket } from "@/utils/fonts";
import { COLORS } from "@/utils/color";
import ved1 from "@/icons/ved1.svg";
import ved2 from "@/icons/ved2.svg";
const AboutusSection = () => {
  const vedas = [
    {
      img: ved1,
      heading: "Yajur-Veda",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure",
    },
    {
      img: ved2,
      heading: "Atharva-Veda",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure",
    },
  ];
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container alignItems={"center"}>
          <Grid size={6}>
            <Image src={aboutimage} alt="" width={450} />
          </Grid>
          <Grid size={6}>
            <Typography
              sx={{ fontSize: 30, fontFamily: rocket.style, fontWeight: 600 }}
            >
              Hinduism: A Diverse and Evolving Religious Mainstream
            </Typography>
            <Typography
              sx={{
                fontSize: 17,
                fontWeight: 400,
                fontFamily: rocket.style,
                mt: 2,
                color: COLORS.GRAY,
              }}
            >
              Hinduism refers to a religious mainstream which evolved
              organically and spread over a large territory marked by
              significant ethnic and cultural diversity. This mainstream evolved
              both by innovation from within, and by assimilation of external
              traditions or cults into the Hindu fold. The result is an enormous
              variety of religious traditions, ranging from innumerable small,
              unsophisticated cults to major religious movements with millions
              of adherents spread over the entire subcontinent. The
              identification of Hinduism as an independent religion separate
              from Buddhism or Jainism consequently hinges on the affirmation of
              its adherents that it is such.
            </Typography>
            <Grid container sx={{ mt: 3 }}>
              {vedas.map((val, i) => (
                <Grid size={6}>
                  <Stack
                    direction={"row"}
                    alignItems={"flex-start"}
                    spacing={2}
                  >
                    <Image src={val.img} alt="" width={60} />
                    <Box>
                      <Typography
                        sx={{ fontFamily: rocket.style, fontWeight: 550 }}
                      >
                        {val.heading}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: rocket.style,
                          fontSize: 12,
                          mt: 1,
                          color: COLORS.GRAY,
                        }}
                      >
                        {val.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
            {/* <Button
              sx={{
                backgroundColor: COLORS.TRANSPARENT,
                border: `1px solid ${COLORS.PRIMARY}`,
                borderRadius: 0,
                mt: 3,
                color: COLORS.PRIMARY,
                width: 150,
                ":hover": {
                  color: COLORS.WHITE,
                  backgroundColor: COLORS.PRIMARY,
                },
                p: 1.5,
                fontFamily: rocket.style,
                fontWeight: 550,
              }}
            >
              Learn More
            </Button> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutusSection;
