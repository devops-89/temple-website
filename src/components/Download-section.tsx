import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const DownlaodSection = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 50,
            fontFamily: rocket.style,
            fontWeight: 550,
            color: COLORS.PRIMARY,
          }}
        >
          Download Event Calendar
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 16,
            fontFamily: rocket.style,
            color: COLORS.BLACK,
            margin: "auto",
            width:"50%"
          }}
        >
          Never miss a sacred moment! Download our comprehensive event calendar
          and sync all temple events with your devices
        </Typography>
      </Container>
    </Box>
  );
};

export default DownlaodSection;
