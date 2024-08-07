import { StaticImageData } from "next/image";

export interface CardPtrojectProps {
  icon: StaticImageData;
  url?: string;
  name: string;
}
export interface CardDashboardProps {
  icon: StaticImageData;
  numbers:string,
  name: string;
  unit:string
}

export interface TextBorderProps {
  name: string;
}
