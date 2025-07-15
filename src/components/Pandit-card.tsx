import { Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import pandit1 from "@/pandits/pandit1.png";
import Image from "next/image";
import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import { PANDIT_CARD_PROPS } from "@/utils/types";
const PanditCard = ({ img, name, description }: PANDIT_CARD_PROPS) => {
  return (
    <Card
      sx={{
        textAlign: "center",
        p: 2,
        boxShadow: "none",
        position: "relative",
        overflow: "hidden",
        ":hover": {
          ".btn": {
            transform: "translateY(0)",
          },
          transform: "translateY(-10px)",
          borderBottom: `5px solid ${COLORS.PRIMARY}`,
        },
        ".btn": {
          transform: "translateY(1000px)",
          transition: "0.5s ease all",
        },
        transition: "0.5s ease all",
        height: 350,
      }}
    >
      <Image
        src={img}
        alt=""
        width={150}
        height={150}
        style={{
          margin: "auto",
          border: `2px dashed ${COLORS.PRIMARY}`,
          borderRadius: "50%",
        }}
      />
      <Typography sx={{ fontSize: 20, fontFamily: rocket.style, mt: 1 }}>
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          fontFmaily: rocket.style,
          color: COLORS.GRAY,
          mt: 1,
        }}
      >
        {description}
      </Typography>
      <Button
        sx={{
          marginTop: "auto",
          backgroundColor: COLORS.PRIMARY,
          mt: 2,
          color: COLORS.WHITE,
          textTransform: "capitalize",
          fontFamily: rocket.style,
        }}
        className="btn"
      >
        Learn More
      </Button>
    </Card>
  );
};

export default PanditCard;
