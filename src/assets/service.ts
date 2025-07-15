import { SERVICE_CARD_PROPS } from "@/utils/types";
import service1 from "@/services/marriage-ceremony.png";
import service2 from "@/services/greh_pravesh.png";
import service3 from "@/services/mundan-ceremony.png";
import service4 from "@/services/pooja-under-one-hour.png";
import service5 from "@/services/pooja-over-one-hour.png";
import service6 from "@/services/funeral-services.png";
import service7 from "@/services/kriya-karam-puja-final-day.png";
import service8 from "@/services/kriya-karam-puja-with-garud-in4days.png";
import service9 from "@/services/garud-puran-pooja-10 days.png";
export const SERVICE_DATA: SERVICE_CARD_PROPS[] = [
  {
    img: service1,
    title: "Marriage Ceremony",
    description:
      "A Hindu marriage is not merely a social contract but a sacred union of  two souls, symbolizing the beginning of the Grihasthashrama (householder stage of life).",
    price: "$501.00",
    free: false,
  },
  {
    img: service2,
    title: "Greh Pravesh Pooja",
    description:
      "This is a Hindu ceremony performed to purify and bless a new home before moving in. It involves various rituals to remove negative energies, invite positive energy, and ensure prosperity. ",
    price: "$251.00",
    free: false,
  },
  {
    img: service3,
    title: "Mundan Ceremony",
    description:
      "The Mundan ceremony is a traditional Hindu ritual involving the first shaving of a child's head, typically performed between the first and third year. It is believed to purify the child by shedding past karma, promote intellectual development, and ensure good health . ",
    price: "$151.00",
    free: false,
  },
  {
    img: service4,
    title: "Pooja Under One Hour",
    description:
      "This refers to a concise and efficient Hindu worship ceremony designed to be completed within a short timeframe, typically under an hour. It focuses on essential prayers, offerings (like a lit diya, incense, and a few flowers), and devotional practices to connect with the divine. ",
    price: "$51.00",
    free: false,
  },
  {
    img: service5,
    title: "Pooja Over One Hour",
    description:
      "A Pooja over one hour refers to more elaborate and extensive Hindu worship ceremonies that typically last longer than an hour, sometimes extending for several hours or even an entire day, depending on their complexity and purpose. ",
    price: "$101.00",
    free: false,
  },
  {
    img: service6,
    title: "funeral service",
    description:
      "A funeral service is a ceremonial event held to honor and remember a deceased person, marking their passing and supporting the bereaved. It typically involves rituals, prayers, readings, eulogies, and music, culminating in the final disposition of the body (burial or cremation). ",
    price: "$0.00",
    free: true,
  },
];
