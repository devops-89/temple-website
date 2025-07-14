import { COLORS } from "@/utils/color";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "@/logo/logo-dark.png";
import Image from "next/image";
import { Header_Data, Social_Icons } from "@/assets/header";
import { rocket } from "@/utils/fonts";
const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        boxShadow: "0px 0px 3px 3px #00000020",
        p: 1.5,
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
              <Typography
                sx={{ fontSize: 18, fontFamily: rocket.style, fontWeight: 500 }}
                key={i}
              >
                {val.label}
              </Typography>
            ))}
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            {Social_Icons.map((val, i) => (
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
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
