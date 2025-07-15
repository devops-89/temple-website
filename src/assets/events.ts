import { EVENTS_CARD_PROPS } from "@/utils/types";
import event1 from "@/events/nagpanchmi.png";
import { AccessTimeOutlined, LocationOnOutlined } from "@mui/icons-material";
import event2 from "@/events/janmashtmi.png";
import event3 from "@/events/Ganesh-Chaturthi.jpg";
import event4 from "@/events/dussehra.jpg";
export const Events_CARD_DATA: EVENTS_CARD_PROPS[] = [
  {
    img: event1,
    title: "Nag panchami",
    description:
      "Nag Panchami is a traditional Hindu festival dedicated to the worship of snakes or serpents, known as Nagas. Observed on the fifth day of the bright half of the lunar month of Shravana ",
    date: "July 29, 2025",
    eventDetails: [
      {
        icon: AccessTimeOutlined,
        label: "10:00 AM - 02:00 PM",
      },
      {
        icon: LocationOnOutlined,
        label: "Main Temple Hall",
      },
    ],
  },
  {
    img: event2,
    title: "Krishna Janmashtami",
    description:
      "Krishna Janmashtami is an annual Hindu festival that celebrates the birth of Lord Krishna, the eighth incarnation of Lord Vishnu. It is observed on the eighth day (Ashtami) of the dark fortnight (Krishna Paksha) in the month of Bhadrapada (August-September) according to the Hindu calendar.",
    date: "Aug 16, 2025",
    eventDetails: [
      {
        icon: AccessTimeOutlined,
        label: "06:00 PM - 12:00 AM",
      },
      {
        icon: LocationOnOutlined,
        label: "Main Temple Hall",
      },
    ],
  },
  {
    img: event3,
    title: "Ganesh Chaturthi",
    description:
      "Ganesh Chaturthi is a vibrant Hindu festival celebrating the birth of Lord Ganesha, the elephant-headed god of wisdom, prosperity, and good fortune. It's marked by the installation of beautifully crafted Ganesha idols in homes and public pandals, elaborate decorations, and daily prayers with offerings of sweets, especially modaks (Ganesha's favorite).",
    date: "Sept 06, 2025",
    eventDetails: [
      {
        icon: AccessTimeOutlined,
        label: "06:00 PM - 12:00 AM",
      },
      {
        icon: LocationOnOutlined,
        label: "Main Temple Hall",
      },
    ],
  },
  {
    img: event4,
    title: "Dussehra",
    description:
      "Dussehra, also known as Vijayadashami, is a vibrant and significant Hindu festival celebrated with immense enthusiasm across India and Nepal. It marks the culmination of the nine-day Navratri festival and occurs on the tenth day of the Hindu month of Ashvin (September/October).",
    date: "Oct 02, 2025",
    eventDetails: [
      {
        icon: AccessTimeOutlined,
        label: "06:00 PM - 12:00 AM",
      },
      {
        icon: LocationOnOutlined,
        label: "Main Temple Hall",
      },
    ],
  },
];
