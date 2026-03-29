import type { RoutesNavBar } from "../interfaces/RoutesNavBar";

export const routesLanding: RoutesNavBar[] = [
  { url: "inicio", text: "Inicio" },
  { url: "intro-1", text: "Introducción" },
  { url: "intro-2", text: "Informes" },
  { url: "intro-3", text: "Riesgos Crediticios" },
  { url: "intro-4", text: "Conclusión" },
];

export const routesDashboard: RoutesNavBar[] = [
  { url: "", text: "Inicio" },
  { url: "afectaciones", text: "Afectaciones" },
  { url: "desafectaciones", text: "Desafectaciones" },
  { url: "gestion-personas", text: "Gestión de Personas" },
  { url: "comentarios", text: "Comentarios y Sugerencias" },
  { url: "informe", text: "Informe" },
];
