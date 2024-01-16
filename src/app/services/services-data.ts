"use client";

import { Project } from "@/constants/portfolio";
import { Projects } from "@/constants/projects";

export type Service = {
  name: string;
  projects: Project[];
};

export const Services: Service[] = [
  {
    name: "Zestawienie projektu",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Plan pomiarowy",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Plan rozmieszczenia ścian",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "3D Wizualizacja",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Dobór materiałów",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Plan rozmieszczenia mebli",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Plan demontażu",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Plan montażu",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Plan podłogi z określeniem rodzaju pokrycia, listwy przypodłogowej i ogrzewania podłogowego",
    projects: ["authorSupervision", "comprehensive"],
  },
  {
    name: "Plan sufitu",
    projects: ["authorSupervision", "comprehensive"],
  },
  {
    name: "Plan rozmieszczenia gniazdek i przełączników",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Plan przyłączenia oświetlenia z schematem włączania",
    projects: ["authorSupervision", "comprehensive"],
  },
  {
    name: "Plan wykończenia ścian",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Wykaz wykończenia z określeniem rodzaju, ilości i nazwy pokryć",
    projects: ["advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Plan przyłączenia urządzeń sanitarnych",
    projects: ["advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Plan ściany łazienki i kuchni z układem płytek",
    projects: ["advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Specyfikacja gniazdek i przełączników",
    projects: ["authorSupervision", "comprehensive"],
  },
  {
    name: "Specyfikacja oświetlenia",
    projects: ["advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Specyfikacja urządzeń sanitarnych",
    projects: ["basic", "advanced", "authorSupervision", "comprehensive"],
  },
  {
    name: "Rozwijane ściany wszystkich pomieszczeń",
    projects: ["authorSupervision", "comprehensive"],
  },
  {
    name: "Rysunki mebli",
    projects: ["authorSupervision", "comprehensive"],
  },
  {
    name: "Specyfikacja mebli",
    projects: ["authorSupervision", "comprehensive"],
  },
  {
    name: "Nadzór autorski",
    projects: ["authorSupervision", "comprehensive"],
  },
  {
    name: "Zarządzanie budową",
    projects: ["comprehensive"],
  },
  {
    name: "Organizacja dostaw mebli i materiałów",
    projects: ["comprehensive"],
  },
  {
    name: "Dekoracja końcowa",
    projects: ["comprehensive"],
  },
  {
    name: "Ekipa budowlana",
    projects: ["comprehensive"],
  },
  {
    name: "Meble do zabudowy (cena może się różnić w zależności od materiałów)",
    projects: ["comprehensive"],
  },
];

export const Steps = [
  {
    description: "Podpisanie umowy. Płatność w wysokości 30%.",
  },
  {
    description: "Projektowanie układów mieszkania. Maksymalna ilość.",
  },
  {
    description: "Opracowanie wizualizacji 3D Płatność w wysokości 40%.",
  },
  {
    description: "Przygotowanie dokumentacji roboczej.",
  },
  {
    description: "Wydawanie klientowi dokumentacji roboczej. Płatność w wysokości 30%.",
  },
];

export const ProjectsLinks: {
  [index in Project]: { prev: Project; next: Project };
} = {
  [Projects.basic]: {
    prev: "comprehensive",
    next: "advanced",
  },
  [Projects.advanced]: {
    prev: "basic",
    next: "authorSupervision",
  },
  [Projects.authorSupervision]: {
    prev: "advanced",
    next: "comprehensive",
  },
  [Projects.comprehensive]: {
    prev: "authorSupervision",
    next: "basic",
  },
};
