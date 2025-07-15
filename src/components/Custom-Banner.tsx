import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";
import React from "react";

const CustomBanner = ({ img, label }: { img: string; label: string }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        height: "40vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#00000050",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: COLORS.WHITE,
            fontFamily: rocket.style,
            fontSize: 40,
            letterSpacing: 1.4,
            fontWeight: 550,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomBanner;
