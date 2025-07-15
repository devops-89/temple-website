import React from "react";
import eventBanner from "@/banner/events.jpg";
import { Box, Container, Grid } from "@mui/material";
import CustomBanner from "@/components/Custom-Banner";
import { Events_CARD_DATA } from "@/assets/events";
import EventCard from "@/components/Events/Event-Card";
const Events = () => {
  return (
    <Box>
      <CustomBanner img={eventBanner.src} label="Events" />
      <Container maxWidth="lg">
        <Grid container sx={{ mt: 10 }} spacing={4}>
          {Events_CARD_DATA.map((val, i) => (
            <Grid size={6}>
              <EventCard
                img={val.img}
                date={val.date}
                title={val.title}
                description={val.description}
                eventDetails={val.eventDetails}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Events;
