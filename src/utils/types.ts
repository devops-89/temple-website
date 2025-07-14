import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactElement, ReactNode } from "react";

export interface LAYOUTPROPS {
  children: ReactNode;
}

export interface SERVICE_CARD_PROPS {
  img: StaticImageData;
  title: string;
  description: string;
  price: string;
}

export interface EVENTS_CARD_PROPS {
  img: StaticImageData;
  date: string;
  title: string;
  description: string;
  eventDetails: EVENT_DETAILS[];
}

export interface EVENT_DETAILS {
  icon: React.ElementType;
  label: string;
}
