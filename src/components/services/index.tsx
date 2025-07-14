import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "./service-card";
import { SERVICE_DATA } from "@/assets/service";

const Services = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{ fontSize: 35, fontFamily: rocket.style, fontWeight: 600 }}
          >
            Our Services
          </Typography>
          <Button
            sx={{
              fontFamily: rocket.style,
              color: COLORS.PRIMARY,
              fontSize: 16,
              textTransform: "capitalize",
            }}
          >
            View All
          </Button>
        </Stack>
        <Grid container mt={3} spacing={3} alignItems="stretch">
          {SERVICE_DATA.slice(0, 3).map((val, i) => (
            <Grid size={4} key={i} sx={{ display: "flex" }}>
              <ServiceCard
                img={val.img}
                description={val.description}
                price={val.price}
                title={val.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
