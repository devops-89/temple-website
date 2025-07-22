import { Box, Button, Card, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import events1 from "@/events/nagpanchmi.png";
import { rocket } from "@/utils/fonts";
import { COLORS } from "@/utils/color";
import { AccessTime, LocationOn, Visibility } from "@mui/icons-material";
import { EVENTS_CARD_PROPS } from "@/utils/types";
const EventCard = ({
  img,
  eventDetails,
  date,
  title,
  description,
}: EVENTS_CARD_PROPS) => {
  // const eventDetails = [
  //   {
  //     icon: AccessTime,
  //     label: "10:00 AM : 2:00 PM",
  //   },
  //   {
  //     icon: LocationOn,
  //     label: "Main Temple Hall",
  //   },
  // ];

  const phone=useMediaQuery("(max-width:600px)")
  return (
    <Card
      sx={{
        ":hover": {
          ".title": {
            color: COLORS.PRIMARY,
          },
        },
        height: { lg: 380, xS: "100%" },
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ lg: 6, xs: 12 }}>
          <Image src={img} alt="events" width={phone ? 400 :290} height={380} />
        </Grid>
        <Grid size={{ lg: 6, xs: 12 }}>
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                backgroundColor: "#00800040",
                color: "#008000",
                width: 100,
                textAlign: "center",
                borderRadius: "20px",
                p: 0.5,
                marginLeft: "auto",
                fontFamily: rocket.style,
                fontSize: 14,
              }}
            >
              Upcoming
            </Box>
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: rocket.style,
                color: COLORS.PRIMARY,
              }}
            >
              {date}
            </Typography>
            <Typography
              sx={{
                fontSize: 30,
                fontfamily: rocket.style,
                fontWeight: 550,
                mt: 1,
              }}
              className="title"
            >
              {/* Nag Panchami */}
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                fontFamily: rocket.style,
                color: COLORS.GRAY,
              }}
            >
              {description.slice(0, 100) + "..."}
            </Typography>
            {eventDetails.map((val, i) => (
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                sx={{ mt: 1 }}
              >
                <val.icon sx={{ color: COLORS.PRIMARY, fontSize: 14 }} />
                <Typography
                  sx={{
                    color: COLORS.PRIMARY,
                    fontFamily: rocket.style,
                    fontSize: 12,
                  }}
                >
                  {val.label}
                </Typography>
              </Stack>
            ))}
            <Button
              startIcon={<Visibility />}
              sx={{
                color: COLORS.WHITE,
                backgroundColor: COLORS.PRIMARY,
                mt: 2,
                fontFamily: rocket.style,
                textTransform: "capitalize",
                fontSize: 14,
                border: `1px solid ${COLORS.PRIMARY}`,
                ":hover": {
                  color: COLORS.PRIMARY,
                  backgroundColor: COLORS.TRANSPARENT,
                },
              }}
            >
              View Details
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EventCard;
