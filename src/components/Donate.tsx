import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import donation from "@/banner/donate.png";
import Image from "next/image";
import { rocket } from "@/utils/fonts";
import { COLORS } from "@/utils/color";
import icon1 from "@/icons/fund.svg";
import icon2 from "@/icons/general-donation.svg";
import icon3 from "@/icons/renovation.svg";
import icon4 from "@/icons/special-puja.svg";
const Donate = () => {
  const donationData = [
    {
      img: icon1,
      label: "Corpus Fund Donation",
    },
    {
      img: icon2,
      label: "General Donation",
    },
    {
      img: icon3,
      label: "Renovation Of Temple",
    },
    {
      img: icon4,
      label: "Special Puja",
    },
  ];
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems={"center"}>
          <Grid size={6}>
            <Typography
              sx={{ fontFamily: rocket.style, fontWeight: 600, fontSize: 50 }}
            >
              Donate Us To Help
            </Typography>
            <Typography
              sx={{
                fontFamily: rocket.style,
                fontWeight: 400,
                fontSize: 15,
                color: COLORS.GRAY,
                mt: 2,
              }}
            >
              Your support helps us maintain the temple and continue our
              spiritual and community services. Every contribution makes a
              difference.
            </Typography>
            <Grid container>
              {donationData.map((val, i) => (
                <Grid size={6} key={i}>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Image src={val.img} alt="" width={50} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: 18,
                              fontFamily: rocket.style,
                              ml: 2,
                            }}
                          >
                            {val.label}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
              ))}
            </Grid>
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
                mt: 2,
                width: 150,
              }}
            >
              Donate
            </Button>
          </Grid>
          <Grid size={6} textAlign={"center"}>
            <Image src={donation} alt="" width={500} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Donate;
