import CustomBanner from "@/components/Custom-Banner";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import bannerImage from "@/banner/services.jpg";
import ServiceCard from "@/components/services/service-card";
import { SERVICE_DATA } from "@/assets/service";
const Services = () => {
  return (
    <Box>
      <CustomBanner img={bannerImage.src} label="Services" />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={6}>
          {SERVICE_DATA.map((val, i) => (
            <Grid size={{lg:4,xs:12}}>
              <ServiceCard
                img={val.img}
                title={val.title}
                price={val.price}
                description={val.description}
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
