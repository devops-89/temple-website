import {
  Box,
  Button,
  Card,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { rocket } from "@/utils/fonts";
import { COLORS } from "@/utils/color";
import { SERVICE_CARD_PROPS } from "@/utils/types";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({
  img,
  title,
  description,
  price,
  free,
}: SERVICE_CARD_PROPS) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Card
      data-aos="fade-up"
      sx={{
        borderRadius: "20px",
        p: 3,
        width: "95%",
        minHeight: 230,
        position: "relative",
        background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)", // 🌈 Vibrant gradient
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        transition: "all 0.35s ease",
        "&:hover": {
          transform: "translateY(-10px) scale(1.03)",
          background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", // hover pe aur colourful
          boxShadow: "0 20px 45px rgba(0,0,0,0.2)",
        },
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          fontFamily: rocket.style,
          color: "#2c3e50",
          mb: 2,
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: 15,
          fontFamily: rocket.style,
          color: "#333",
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>

      {/* Price + Button */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          mt: "auto",
          position: "absolute",
          bottom: 15,
          left: 20,
          right: 20,
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 700,
            fontFamily: rocket.style,
            color: "#FF6B35",
          }}
        >
          {price}
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: 14,
            fontFamily: rocket.style,
            px: 3,
            py: 1,
            borderRadius: "12px",
            background: "linear-gradient(45deg, #FF6B35, #FFD93D)",
            color: "white",
            fontWeight: 600,
            textTransform: "none",
            boxShadow: "0 6px 18px rgba(255,107,53,0.4)",
            "&:hover": {
              background: "linear-gradient(45deg, #FFD93D, #FF6B35)",
              transform: "translateY(-2px)",
              boxShadow: "0 12px 28px rgba(255,107,53,0.6)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Make a Request
        </Button>
      </Stack>
    </Card>
  );
};

export default ServiceCard;
