import { rocket } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Events = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: rocket.style,
            fontSize: 40,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Upcoming Events
        </Typography>
      </Container>
    </Box>
  );
};

export default Events;
