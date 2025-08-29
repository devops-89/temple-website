import React from "react";
import eventBanner from "@/banner/events.jpg";
import { Box, Container, Grid } from "@mui/material";
import CustomBanner from "@/components/Custom-Banner";
import { Events_CARD_DATA } from "@/assets/events";
import EventCard from "@/components/Events/Event-Card";
import AOS from "aos";
const Events = () => {
  return (
    <Box>
      <CustomBanner img={eventBanner.src} label="Events" />
      <Container maxWidth="lg">
        <Grid container sx={{ mt: 10 }}  spacing={4}>
          {Events_CARD_DATA.map((val, i) => (
            <Grid size={{lg:6,xs:12}} data-aos="fade-right">
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
