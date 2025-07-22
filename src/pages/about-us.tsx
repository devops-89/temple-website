import React from "react";
import aboutBanner from "@/banner/temple.jpg";
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
  useMediaQuery,
} from "@mui/material";
import { rocket } from "@/utils/fonts";
import { COLORS } from "@/utils/color";
import { TaskAltOutlined } from "@mui/icons-material";
import aboutUs from "@/banner/about-b-1.png";
import Image from "next/image";
import PanditCard from "@/components/Pandit-card";
import aboutUsReal from "@/banner/about-us-real.jpg";
import { pandit_data } from "@/assets/pandits";
import BoardMembers from "@/components/Board-members";
const AboutUs = () => {
  const listText = [
    {
      icon: TaskAltOutlined,
      primary: "Praise & Worship",
      secondary:
        "Join us for daily aarti and bhajans, offering prayers and devotion to various Hindu deities in a serene and uplifting atmosphere.",
    },
    {
      icon: TaskAltOutlined,
      primary: "Hindus celebrate",
      secondary:
        "We joyfully celebrate important Hindu festivals and special occasions, bringing the community together to preserve and pass on our rich traditions.",
    },
    {
      icon: TaskAltOutlined,
      primary: "Prayers",
      secondary:
        "Participate in daily and special prayers to seek blessings, peace, and spiritual growth for you and your family.",
    },
  ];

  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <CustomBanner img={aboutBanner.src} label="About Us" />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={4}>
          <Grid size={{ lg: 6, xs: 12 }}>
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
              Edmonton Mandir is a vibrant spiritual center, dedicated to
              promoting Hindu culture, traditions, and values. We provide a
              welcoming space for worship, community gatherings, and cultural
              celebrations, uniting people of all backgrounds in devotion and
              harmony.
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
          <Grid size={{ lg: 6, xs: 12 }} sx={{ textAlign: "end" }}>
            <Image
              src={aboutUsReal}
              alt=""
              width={phone ? 400 : 500}
              height={500}
              style={{ objectFit: "cover", borderRadius: 20 }}
            />
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
              <Grid size={{lg:4,xs:12}} key={i}>
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
