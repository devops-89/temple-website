import { COLORS } from "@/utils/color";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "@/logo/logo-dark.png";
import Image from "next/image";
import { Header_Data, Social_Icons } from "@/assets/header";
import { rocket } from "@/utils/fonts";
import Link from "next/link";
import { useRouter } from "next/router";
import preetiBhoj from "@/banner/PREETI_BHOJ_SPONSORSHIP.png";
import { Menu } from "@mui/icons-material";
const Header = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        setScrollPosition(currentScroll);
        setIsScrolling(currentScroll > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const phone = useMediaQuery("(max-width:600px)");

  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box
        sx={{
          boxShadow: "0px 0px 3px 3px #00000020",
          p: 1.5,
          position: isScrolling ? "fixed" : "relative",
          top: 0,
          left: 0,
          width: isScrolling ? "100%" :{ xs:"94%",lg:"98%"},
          zIndex: 99,
          backgroundColor: isScrolling ? COLORS.WHITE : COLORS.WHITE,
          transition: "all 0.5s ease",
          backdropFilter: isScrolling ? "blur(5px)" : "none",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Image src={logo} alt="" width={phone ? 150 : 250} />
            </Box>

            <IconButton
              sx={{ display: { xs: "block", lg: "none" } }}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </IconButton>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={4}
              sx={{ display: { xs: "none",lg:"flex" } }}
            >
              {Header_Data.map((val, i) => (
                <Link href={val.url} className="link">
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: rocket.style,
                      fontWeight: 500,
                      textDecoration:
                        val.url === router.pathname ? "underline" : "none",
                      color:
                        val.url === router.pathname
                          ? COLORS.PRIMARY
                          : COLORS.BLACK,
                    }}
                    key={i}
                  >
                    {val.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={3}
              sx={{ display: { xs: "none",lg:"flex" } }}
            >
              <Button
                sx={{
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.WHITE,
                  fontSize: 14,
                  fontFamily: rocket.style,
                  textTransform: "capitalize",
                  width: 100,
                }}
              >
                Donate
              </Button>
              <Image src={preetiBhoj} alt="" width={150} />
            </Stack>
          </Box>
        </Container>
      </Box>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          ".MuiDrawer-paper": {
            width: 250,
            // mt: 10,
            // zIndex: 9999,
            // height:"100%"
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"flex-start"}
          spacing={4}
          sx={{ mt: 5 }}
        >
          {Header_Data.map((val, i) => (
            <Link
              href={val.url}
              className="link"
              onClick={() => setOpen(false)}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: rocket.style,
                  fontWeight: 500,
                  textDecoration:
                    val.url === router.pathname ? "underline" : "none",
                  color:
                    val.url === router.pathname ? COLORS.PRIMARY : COLORS.BLACK,
                }}
                key={i}
              >
                {val.label}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Header;
