import { EVENTS_CARD_PROPS } from "@/utils/types";
import event1 from "@/events/nagpanchmi.png";
import { AccessTimeOutlined, LocationOnOutlined } from "@mui/icons-material";
import event2 from "@/events/janmashtmi.png";
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
];
