import { rocket } from "@/utils/fonts";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import EventCard from "./Event-Card";
import { Events_CARD_DATA } from "@/assets/events";
import { COLORS } from "@/utils/color";
import { useRouter } from "next/router";
import  AOS from "aos";
const Events = () => {
  const router = useRouter();
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{
              fontFamily: rocket.style,
              fontSize: { lg: 40, xs: 25 },
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Upcoming Events
          </Typography>
          <Button
            sx={{
              fontFamily: rocket.style,
              color: COLORS.PRIMARY,
              fontSize: { lg: 16, xs: 14 },
              textTransform: "capitalize",
            }}
            onClick={() => router.push("/events")}
          >
            View All Events
          </Button>
        </Stack>
        <Grid container spacing={3} mt={3}>
          {Events_CARD_DATA.slice(0, 2).map((val, i) => (
            <Grid size={{ lg: 6, xs: 12 }} data-aos="fade-right">
              <EventCard
                title={val.title}
                description={val.description}
                eventDetails={val.eventDetails}
                date={val.date}
                img={val.img}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Events;
