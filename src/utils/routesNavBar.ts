import { IoHome } from "react-icons/io5";
import type { RoutesNavBar } from "../interfaces/RoutesNavBar";
import { GiMeal } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export const routesLanding: RoutesNavBar[] = [
  { url: "inicio", text: "Inicio", icon: IoHome },
  { url: "intro-1", text: "Nuestros Platos", icon: GiMeal },
];

export const routesDashboard: RoutesNavBar[] = [
  { url: "", text: "Inicio", icon: IoHome },
];

export const social: RoutesNavBar[] = [
  {
    url: "https://wa.me/5491122883245?text=Hola,%20Del%20Cesar!",
    text: "WhatsApp",
    icon: IoLogoWhatsapp,
    colorIcon: "text-[#32B16E]",
  },
  {
    url: "https://www.instagram.com/delcesarcomidas/",
    text: "Instagram",
    icon: RiInstagramFill,
    colorIcon: "text-[#E1306C]",
  },
];
