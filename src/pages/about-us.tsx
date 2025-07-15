import React from "react";
import aboutBanner from "@/banner/about-us-banner.jpg";
import CustomBanner from "@/components/Custom-Banner";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { rocket } from "@/utils/fonts";
import { COLORS } from "@/utils/color";
import { TaskAltOutlined } from "@mui/icons-material";
import aboutUs from "@/banner/about-b-1.png";
import Image from "next/image";
import PanditCard from "@/components/Pandit-card";
import { pandit_data } from "@/assets/pandits";
import BoardMembers from "@/components/Board-members";
const AboutUs = () => {
  const listText = [
    {
      icon: TaskAltOutlined,
      primary: "Praise & Worship",
      secondary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
    },
    {
      icon: TaskAltOutlined,
      primary: "Hindus celebrate",
      secondary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
    },
    {
      icon: TaskAltOutlined,
      primary: "Prayers",
      secondary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
    },
  ];
  return (
    <div>
      <CustomBanner img={aboutBanner.src} label="About Us" />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={4}>
          <Grid size={6}>
            <Typography
              sx={{ fontSize: 30, fontFamily: rocket.style, fontWeight: 550 }}
            >
              About Edmonton Mandir
            </Typography>
            <Typography
              sx={{
                fontFamily: rocket.style,
                fontSize: 16,
                color: COLORS.GRAY,
                mt: 2,
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using.
            </Typography>
            <List>
              {listText.map((val, i) => (
                <ListItem>
                  <ListItemAvatar>
                    <val.icon sx={{ color: COLORS.PRIMARY, fontSize: 30 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ fontSize: 18, fontFamily: rocket.style }}
                      >
                        {val.primary}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontFamily: rocket.style,
                          color: COLORS.GRAY,
                        }}
                      >
                        {val.secondary}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid size={6} sx={{ textAlign: "end" }}>
            <Image src={aboutUs} alt="" width={450} />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: COLORS.Section_color, p: 3, mt: 10 }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 45,
              color: COLORS.PRIMARY,
              fontWeight: 600,
              fontFamily: rocket.style,
            }}
          >
            Our Priests
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              fontFamily: rocket.style,
              textAlign: "center",
              mt: 1,
            }}
          >
            Our dedicated leaders that bring us joy each day
          </Typography>
          <Grid container sx={{ mt: 3 }} spacing={3}>
            {pandit_data.map((val, i) => (
              <Grid size={4} key={i}>
                <PanditCard
                  img={val.img}
                  name={val.name}
                  description={val.description}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ mt: 10 }}>
        <BoardMembers />
      </Box>
    </div>
  );
};

export default AboutUs;
