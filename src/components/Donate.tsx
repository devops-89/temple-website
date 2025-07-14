import { Box, Container, Grid } from "@mui/material";
import React from "react";
import donation from "@/banner/donate.png";
import Image from "next/image";
const Donate = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={6}></Grid>
          <Grid size={6}>
            <Image src={donation} alt="" width={500} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Donate;
