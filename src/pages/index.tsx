import AboutusSection from "@/components/About-us-section";
import Banner from "@/components/Banner";
import Donate from "@/components/Donate";
import DownlaodSection from "@/components/Download-section";
import Events from "@/components/Events";
import Services from "@/components/services";
import { rocket } from "@/utils/fonts";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import preeti_banner from "@/banner/mandir_banner.webp";
import { COLORS } from "@/utils/color";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Banner />
        <Box sx={{ mt: 10 }}>
          <AboutusSection />
        </Box>
        <Box sx={{ mt: 10 }}>
          <Services />
        </Box>
        {/* <Box sx={{ mt: 10 }}>
          <DownlaodSection />
        </Box> */}
        <Box sx={{ mt: 10 }}>
          <Donate />
        </Box>
        <Box
          sx={{
            mt: 10,
            backgroundImage: `url(${preeti_banner.src})`,
            width: "100%",
            height: "80vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#00000060",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height:"100%"
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <Grid size={6}>
                  <Typography
                    sx={{
                      fontSize: 40,
                      fontFamily: rocket.style,
                      color: COLORS.WHITE,
                      fontWeight: 550,
                    }}
                  >
                    Sign up for news and up coming event information
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontFamily: rocket.style,
                      color: COLORS.WHITE,
                      fontWeight: 500,
                    }}
                  >
                    We will provide you with information on upcoming events,
                    celebrations and news and information on how to sponsor our
                    events.
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Card sx={{ p: 3, borderRadius: "20px" }}>
                    <TextField fullWidth label="Full Name*" />
                    <TextField fullWidth label="Email*" sx={{ mt: 2 }} />
                    <Button
                      sx={{
                        backgroundColor: COLORS.PRIMARY,
                        mt: 2,
                        color: COLORS.WHITE,
                      }}
                      fullWidth
                    >
                      Subscribe
                    </Button>
                  </Card>
                </Grid>
              </Grid>
              {/* <Typography
              sx={{
                fontFamily: rocket.style,
                fontSize: 40,
                textAlign: "center",
                color: COLORS.PRIMARY,
                fontWeight: 600,
              }}
            >
              Preeti Bhoj Sponsorship
            </Typography>
            <Typography
              sx={{
                fontFamily: rocket.style,
                fontSize: 16,
                textAlign: "center",
                color: COLORS.WHITE,
                mt: 1,
                width: 600,
                margin: "auto",
                lineHeight:"30px"
              }}
            >
              Participate in the sacred tradition of Preeti Bhoj and offer meals
              to devotees, earning immense blessings and contributing to our
              community.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
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
                  width: 200,
                  textTransform: "capitalize",
                }}
              >
                Sponsor Now
              </Button>
            </Box> */}
            </Container>
          </Box>
        </Box>
        <Box sx={{ mt: 10 }}>
          <Events />
        </Box>
      </Box>
    </>
  );
}
