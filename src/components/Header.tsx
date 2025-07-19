import { COLORS } from "@/utils/color";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "@/logo/logo-dark.png";
import Image from "next/image";
import { Header_Data, Social_Icons } from "@/assets/header";
import { rocket } from "@/utils/fonts";
import Link from "next/link";
import { useRouter } from "next/router";
import preetiBhoj from "@/banner/PREETI_BHOJ_SPONSORSHIP.png";
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
  return (
    <Box
      sx={{
        boxShadow: "0px 0px 3px 3px #00000020",
        p: 1.5,
        position: isScrolling ? "fixed" : "relative",
        width: isScrolling ? "100%":"98%",
        backgroundColor: isScrolling ? "#ffffff" : COLORS.WHITE,
        transition: "all 0.5s ease",
        backdropFilter: isScrolling ? "blur(5px)" : "none",
        zIndex: 9999,
        top: 0,
        left: 0,
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
            <Image src={logo} alt="" width={250} />
          </Box>
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
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
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            {/* {Social_Icons.map((val, i) => (
              <IconButton
                sx={{
                  svg: {
                    fontSize: 20,
                    color: COLORS.BLACK,
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
            ))} */}
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
  );
};

export default Header;
