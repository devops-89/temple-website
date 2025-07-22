import { Header_Data, Social_Icons } from "@/assets/header";
import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "@/logo/logo-light.png";
import Image from "next/image";
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.PRIMARY, p: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: { lg: "flex", xs: "none" } }}>
          <Grid container>
            <Grid size={{ lg: 3, xs: 12 }}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                }}
              >
                Quick Links
              </Typography>
              <List>
                {Header_Data.map((val, i) => (
                  <ListItemButton key={i}>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontFamily: rocket.style,
                            color: COLORS.WHITE,
                          }}
                        >
                          {val.label}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                ))}
              </List>
            </Grid>
            <Grid size={{ lg: 6, xs: 12 }} textAlign={"center"}>
              <Image src={logo} alt="" width={250} />
              <Typography
                sx={{
                  fontSize: 15,
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                  mt: 2,
                }}
              >
                Hinduism conceives the whole world as a single family that
                deifies the one truth, and therefore it accepts all forms of
                beliefs and dismisses labels of distinct religions which would
                imply a division of identity. Hence, Hinduism is devoid of the
                concepts of apostasy, heresy and blasphemy.
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={2}
                justifyContent={"center"}
                mt={2}
              >
                {Social_Icons.map((val, i) => (
                  <IconButton
                    sx={{
                      svg: {
                        fontSize: 20,
                        color: COLORS.WHITE,
                      },
                      ":hover": {
                        backgroundColor: val.bgColor,
                        svg: {
                          color: COLORS.WHITE,
                        },
                        scale: 1.1,
                      },
                    }}
                    key={i}
                  >
                    <val.icon />
                  </IconButton>
                ))}
              </Stack>
            </Grid>
            <Grid
              size={{ lg: 3, xs: 12 }}
              sx={{ textAlign: { lg: "end", xs: "start" } }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                }}
              >
                Address :
              </Typography>

              <Typography
                sx={{
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                  fontWeight: 400,
                  mt: 2,
                }}
              >
                9507 39 Ave, Edmonton,
                <br />
                AB T6E 5T3
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                  mt: 2,
                }}
              >
                Contact :
              </Typography>

              <Typography
                sx={{
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                  fontWeight: 400,
                }}
              >
                +1 (780) 468-2106
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: { lg: "none", xs: "block" } }}>
          <Grid container>
            <Grid size={{ lg: 6, xs: 12 }} textAlign={"center"}>
              <Image src={logo} alt="" width={250} />
              <Typography
                sx={{
                  fontSize: 15,
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                  mt: 2,
                }}
              >
                Hinduism conceives the whole world as a single family that
                deifies the one truth, and therefore it accepts all forms of
                beliefs and dismisses labels of distinct religions which would
                imply a division of identity. Hence, Hinduism is devoid of the
                concepts of apostasy, heresy and blasphemy.
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={2}
                justifyContent={"center"}
                mt={2}
              >
                {Social_Icons.map((val, i) => (
                  <IconButton
                    sx={{
                      svg: {
                        fontSize: 20,
                        color: COLORS.WHITE,
                      },
                      ":hover": {
                        backgroundColor: val.bgColor,
                        svg: {
                          color: COLORS.WHITE,
                        },
                        scale: 1.1,
                      },
                    }}
                    key={i}
                  >
                    <val.icon />
                  </IconButton>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ lg: 6, xs: 6 }}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                }}
              >
                Quick Links
              </Typography>
              <List>
                {Header_Data.map((val, i) => (
                  <ListItemButton key={i}>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontFamily: rocket.style,
                            color: COLORS.WHITE,
                          }}
                        >
                          {val.label}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                ))}
              </List>
            </Grid>

            <Grid
              size={{ lg: 6, xs: 6 }}
              sx={{ textAlign: { lg: "end", xs: "start" } }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                }}
              >
                Address :
              </Typography>

              <Typography
                sx={{
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                  fontWeight: 400,
                  mt: 2,
                }}
              >
                9507 39 Ave, Edmonton,
                <br />
                AB T6E 5T3
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                  mt: 2,
                }}
              >
                Contact :
              </Typography>

              <Typography
                sx={{
                  fontFamily: rocket.style,
                  color: COLORS.WHITE,
                  fontWeight: 400,
                }}
              >
                +1 (780) 468-2106
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: COLORS.WHITE, mt: 4 }} />
        <Stack
          direction={{ lg: "row", xs: "column" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ mt: 2 }}
        >
          <Typography
            sx={{
              fontSize: { lg: 14, xs: 12 },
              fontFamily: rocket.style,
              color: COLORS.WHITE,
            }}
          >
            © Copyright - Edmonton Mandir Designed by{" "}
            <Typography
              component="a"
              sx={{
                fontSize: { lg: 14, xs: 12 },
                fontFamily: rocket.style,
                color: COLORS.WHITE,
              }}
              href="https://bookmyad.ca/"
              target="_blank"
            >
              BookMyAd
            </Typography>
          </Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography
              sx={{
                fontSize: { lg: 14, xs: 12 },
                fontFamily: rocket.style,
                color: COLORS.WHITE,
              }}
            >
              Privacy Policy
            </Typography>
            <Divider
              flexItem
              orientation="vertical"
              sx={{ borderColor: COLORS.WHITE }}
            />
            <Typography
              sx={{
                fontSize: { lg: 14, xs: 12 },
                fontFamily: rocket.style,
                color: COLORS.WHITE,
              }}
            >
              Terms and Conditions
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
