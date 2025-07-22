import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "./service-card";
import { SERVICE_DATA } from "@/assets/service";

const Services = () => {
  return (
    <Box sx={{ backgroundColor: "#eeeeee", p: 3 }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{
              fontSize: { lg: 35, xs: 25 },
              fontFamily: rocket.style,
              fontWeight: 600,
            }}
          >
            Our Services
          </Typography>
          <Button
            sx={{
              fontFamily: rocket.style,
              color: COLORS.PRIMARY,
              fontSize: { lg: 16, xs: 14 },
              textTransform: "capitalize",
            }}
          >
            View All Services
          </Button>
        </Stack>
        <Grid container mt={3} spacing={3} alignItems="stretch">
          {SERVICE_DATA.slice(0, 3).map((val, i) => (
            <Grid size={{ lg: 4, xs: 12 }} key={i} sx={{ display: "flex" }}>
              <ServiceCard
                img={val.img}
                description={val.description}
                price={val.price}
                title={val.title}
                free={val.free}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
