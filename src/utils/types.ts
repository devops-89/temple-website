import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface LAYOUTPROPS {
  children: ReactNode;
}

export interface SERVICE_CARD_PROPS {
  img: StaticImageData;
  title: string;
  description: string;
  price: string;
}
