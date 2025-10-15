"use client";

import { Projects } from "../../../constants/projects";

export enum DesignProjects {
  "projektowanie-wnetrz-harmonia" = Projects["projektowanie-wnetrz-harmonia"],
  "projektowanie-wnetrz-perfekcja" = Projects["projektowanie-wnetrz-perfekcja"],
  "projektowanie-wnetrz-koncepcja" = "projektowanie-wnetrz-koncepcja",
}

export type DesignProject = keyof typeof DesignProjects;

export const ProjectsDetalis: {
  [index in DesignProjects]: { name: string; price: string; description?: string };
} = {
  [DesignProjects["projektowanie-wnetrz-koncepcja"]]: {
    name: "Koncepcja",
    price: "150zł / m2",
  },
  [DesignProjects["projektowanie-wnetrz-harmonia"]]: {
    name: "Harmonia",
    price: "250zł / m2",
  },
  [DesignProjects["projektowanie-wnetrz-perfekcja"]]: {
    name: "Perfekcja",
    price: "od 350zł / m2",
  },
};

export type Service = {
  name: string;
  projects: DesignProject[];
};

export const Services: Service[] = [
  {
    name: "Zestawienie projektu",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "Plan pomiarowy",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "Plan rozmieszczenia ścian",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "3D Wizualizacja",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "Dobór materiałów",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "Plan rozmieszczenia mebli",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "Plan demontażu",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "Plan montażu",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "Plan podłogi z określeniem rodzaju pokrycia, listwy przypodłogowej i ogrzewania podłogowego",
    projects: ["projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Plan sufitu",
    projects: ["projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Plan rozmieszczenia gniazdek i przełączników",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "Plan przyłączenia oświetlenia z schematem włączania",
    projects: ["projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Plan wykończenia ścian",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "Wykaz wykończenia z określeniem rodzaju, ilości i nazwy pokryć",
    projects: ["projektowanie-wnetrz-harmonia", "projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Plan przyłączenia urządzeń sanitarnych",
    projects: ["projektowanie-wnetrz-harmonia", "projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Plan ściany łazienki i kuchni z układem płytek",
    projects: ["projektowanie-wnetrz-harmonia", "projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Specyfikacja gniazdek i przełączników",
    projects: ["projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Specyfikacja oświetlenia",
    projects: ["projektowanie-wnetrz-harmonia", "projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Specyfikacja urządzeń sanitarnych",
    projects: [
      "projektowanie-wnetrz-koncepcja",
      "projektowanie-wnetrz-harmonia",
      "projektowanie-wnetrz-perfekcja",
    ],
  },
  {
    name: "Rozwijane ściany wszystkich pomieszczeń",
    projects: ["projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Rysunki mebli",
    projects: ["projektowanie-wnetrz-harmonia", "projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Specyfikacja mebli",
    projects: ["projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Nadzór autorski",
    projects: ["projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Zarządzanie budową",
    projects: ["projektowanie-wnetrz-perfekcja"],
  },
  {
    name: "Organizacja dostaw mebli i materiałów",
    projects: ["projektowanie-wnetrz-perfekcja"],
  },
];

export const Steps = [
  {
    description: `Podpisanie umowy.
Płatność w wysokości 30%.`,
  },
  {
    description: "Projektowanie układów mieszkania. Maksymalna ilość.",
  },
  {
    description: `Opracowanie wizualizacji 3D
Płatność w wysokości 40%.`,
  },
  {
    description: "Przygotowanie dokumentacji roboczej.",
  },
  {
    description: `Wydawanie klientowi dokumentacji roboczej.
Płatność w wysokości 30%.`,
  },
];

export const ProjectsLinks: {
  [index in DesignProjects]: { prev: DesignProject; next: DesignProject };
} = {
  [DesignProjects["projektowanie-wnetrz-koncepcja"]]: {
    prev: "projektowanie-wnetrz-perfekcja",
    next: "projektowanie-wnetrz-harmonia",
  },
  [DesignProjects["projektowanie-wnetrz-harmonia"]]: {
    prev: "projektowanie-wnetrz-koncepcja",
    next: "projektowanie-wnetrz-perfekcja",
  },
  [DesignProjects["projektowanie-wnetrz-perfekcja"]]: {
    prev: "projektowanie-wnetrz-harmonia",
    next: "projektowanie-wnetrz-koncepcja",
  },
};
