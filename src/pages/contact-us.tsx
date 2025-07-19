import bannerImage from "@/banner/about-us-banner.jpg";
import CustomBanner from "@/components/Custom-Banner";
import { COLORS } from "@/utils/color";
import { rocket } from "@/utils/fonts";
import {
  LocationOnOutlined,
  MailOutline,
  PhoneOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
const Contact = () => {
  const list = [
    {
      icon: PhoneOutlined,
      primary: "Call us on: +1 (780) 468-2106",
      secondary: "Our office hours are Monday – Friday, 9 am-6 pm",
    },
    {
      icon: MailOutline,
      primary: "Email us directly",
      secondary: "info@example.com",
    },
    {
      icon: LocationOnOutlined,
      primary: "Our Location",
      secondary: "9507 39 Ave, Edmonton, AB T6E 5T3",
    },
  ];

  const madnirHours = [
    {
      day: "Monday - Friday",
      morningTime: "7:00 AM to 1:00 PM",
      eveningTime: "4:00 PM to 8:00 PM",
    },
    {
      day: "Saturday",
      morningTime: "7:00 AM to 2:00 PM",
      eveningTime: "4:00 PM to 8:00 PM",
    },
    {
      day: "Sunday",
      morningTime: "7:00 AM to 7:00 PM",
      eveningTime: "Evening Closed",
    },
  ];

  const tableHeader = [
    {
      label: "Days",
    },
    {
      label: "Morning Time",
    },
    {
      label: "Evening Time",
    },
  ];
  return (
    <Box>
      <CustomBanner img={bannerImage.src} label="Contact Us" />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={4}>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 40,
                fontFamily: rocket.style,
                fontWeight: 600,
                mb: 2,
              }}
            >
              Contact info
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                fontFamily: rocket.style,
                mb: 2,
                color: COLORS.GRAY,
              }}
            >
              We welcome your questions, feedback, and inquiries. Please use the
              information below to reach out to Edmonton Mandir. Our team is
              here to assist you with service timings, event details, community
              support, or any other requests.
            </Typography>
            <List>
              {list.map((val, i) => (
                <ListItem>
                  <ListItemAvatar>
                    <val.icon sx={{ color: COLORS.PRIMARY, fontSize: 30 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ fontSize: 20, fontFamily: rocket.style }}
                      >
                        {val.primary}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        sx={{
                          fontSize: 16,
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
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 40,
                fontFamily: rocket.style,
                fontWeight: 600,
                mb: 2,
              }}
            >
              Contact Us Now
            </Typography>
            <form>
              <Grid container spacing={3}>
                <Grid size={12}>
                  <TextField
                    label="Full Name*"
                    fullWidth
                    sx={{
                      "& label": {
                        fontFamily: rocket.style,
                      },
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Email*"
                    fullWidth
                    sx={{
                      "& label": {
                        fontFamily: rocket.style,
                      },
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Mobile*"
                    fullWidth
                    sx={{
                      "& label": {
                        fontFamily: rocket.style,
                      },
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Message*"
                    fullWidth
                    sx={{
                      fieldset: {
                        height: 110,
                      },
                      "& .MuiOutlinedInput-input": {
                        height: "100px !important",
                        fontFamily: rocket.style,
                      },
                      "& label": {
                        fontFamily: rocket.style,
                      },
                    }}
                    multiline
                  />
                </Grid>
                <Grid size={12}>
                  <Button
                    sx={{
                      fontSize: 16,
                      fontFamily: rocket.style,
                      color: COLORS.WHITE,
                      backgroundColor: COLORS.PRIMARY,
                    }}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ mt: 10 }}>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 600,
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            mandir Hours
          </Typography>
          <Table sx={{ mt: 4 }}>
            <TableHead>
              <TableRow>
                {tableHeader.map((val, i) => (
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontFamily: rocket.style,
                        fontWeight: 550,
                      }}
                    >
                      {val.label}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {madnirHours.map((val, i) => (
                <TableRow>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontFamily: rocket.style,
                        fontWeight: 400,
                      }}
                    >
                      {val.day}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontFamily: rocket.style,
                        fontWeight: 400,
                      }}
                    >
                      {val.morningTime}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontFamily: rocket.style,
                        fontWeight: 400,
                      }}
                    >
                      {val.eveningTime}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Container>
      <Box sx={{ mt: 10 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.697995336286!2d-113.47946352400523!3d53.47385726517602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a018d33945d5ed%3A0xcc4a5f4d3a553c08!2s9507%2039%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6E%205T3%2C%20Canada!5e0!3m2!1sen!2sin!4v1752669375124!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Contact;
