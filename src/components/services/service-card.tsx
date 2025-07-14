import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import serviceImage from "@/services/marriage-ceremony.png";
import Image from "next/image";
import { rocket } from "@/utils/fonts";
import { COLORS } from "@/utils/color";
import { SERVICE_CARD_PROPS } from "@/utils/types";
const ServiceCard = ({
  img,
  title,
  description,
  price,
}: SERVICE_CARD_PROPS) => {
  return (
    <Card
      sx={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        position: "relative",
        overflow: "hidden",
        height: 550,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image
        src={img}
        alt=""
        width={400}
        height={200}
        style={{
          objectFit: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          transition: "0.5s ease all",
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontFamily: rocket.style,
            fontSize: 25,
            fontWeight: 550,
            textTransform: "capitalize",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 15,
            fontFamily: rocket.style,
            fontWeight: 400,
            color: COLORS.GRAY,
            mt: 1,
          }}
        >
          {description}
        </Typography>
        <Typography
          sx={{
            fontSize: 25,
            fontFamily: rocket.style,
            fontWeight: 600,
            color: COLORS.PRIMARY,
            mt: 2,
          }}
        >
          Price : {price}
        </Typography>
      </CardContent>
      <Box sx={{ px: 2,mt:"auto" }}>
        <Button
          sx={{
            fontFamily: rocket.style,
            fontSize: 15,
            color: COLORS.WHITE,
            backgroundColor: COLORS.PRIMARY,
            border: `1px solid ${COLORS.PRIMARY}`,
            ":hover": {
              backgroundColor: COLORS.TRANSPARENT,
              color: COLORS.PRIMARY,
            },
            mb:2
          }}
          fullWidth
        >
          Book Now
        </Button>
      </Box>
    </Card>
  );
};

export default ServiceCard;
