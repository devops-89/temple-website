import { COLORS } from "@/utils/color";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import footer_bg from "@/banner/sub-footer-banner.jpg";
import { rocket } from "@/utils/fonts";
const SubFooter = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${footer_bg.src})`,
        height: "40vh",
        mt: 10,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#00000070",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              sx={{
                fontSize: 40,
                fontFamily: rocket.style,
                color: COLORS.WHITE,
                width: "70%",
              }}
            >
              Find Out How,We Worship We Hope to See You Soon!
            </Typography>
            <Button
              sx={{
                fontSize: 15,
                color: COLORS.WHITE,
                backgroundColor: COLORS.PRIMARY,
                fontFamily: rocket.style,
                width: 150,
                p: 1,
                ":hover": {
                  backgroundColor: COLORS.TRANSPARENT,
                },
                border: `2px solid ${COLORS.PRIMARY}`,
              }}
            >
              Contact us
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default SubFooter;
