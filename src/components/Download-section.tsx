import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import { Download } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const DownlaodSection = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { lg: 50, xs: 30 },
            fontFamily: rocket.style,
            fontWeight: 550,
            color: COLORS.PRIMARY,
          }}
        >
          Download Event Calendar
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 16,
            fontFamily: rocket.style,
            color: COLORS.BLACK,
            margin: "auto",
            width: { lg: "50%", xs: "100%" },
          }}
        >
          Never miss a sacred moment! Download our comprehensive event calendar
          and sync all temple events with your devices
        </Typography>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            startIcon={<Download />}
            sx={{
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.WHITE,
              p: 1,
              fontSize: 16,
              fontFamily: rocket.style,
              textTransform: "capitalize",
            }}
            LinkComponent={"a"}
            href="https://drive.google.com/file/d/1Idzrq0CmrpszGiY6R5ZA1SqB6v1LDwcf/view?pli=1"
            target="_blank"
          >
            Download Event Calendar
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DownlaodSection;
