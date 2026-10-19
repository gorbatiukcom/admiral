import { PortfolioProjects } from "./portfolio";

export type ProjectCategory = "wnetrza" | "realizacje" | "architektura";
const presentation: {
  projectId: string;
  title: string;
  location: string;
  area: string;
  tag: string;
  category: ProjectCategory;
  image: string;
}[] = [
  {
    projectId: "lodz-gdanska-24",
    title: "Mieszkanie przy Gdańskiej",
    location: "Łódź",
    area: "102 m²",
    tag: "Realizacja",
    category: "realizacje",
    image: "gdanska",
  },
  {
    projectId: "budynek-w-lublinie",
    title: "Dom w Lublinie",
    location: "Lublin",
    area: "140 m²",
    tag: "Projekt wnętrza",
    category: "wnetrza",
    image: "lublin",
  },
  {
    projectId: "budynek-w-warszawie",
    title: "Dom w Warszawie",
    location: "Warszawa",
    area: "298 m²",
    tag: "Projekt wnętrza",
    category: "wnetrza",
    image: "warszawa",
  },
  {
    projectId: "apartament-w-katalonii-hiszpania",
    title: "Apartament w Katalonii",
    location: "Katalonia, Hiszpania",
    area: "80 m²",
    tag: "Projekt wnętrza",
    category: "wnetrza",
    image: "katalonia",
  },
  {
    projectId: "kompleks-wypoczynkowy-pod-warszawa",
    title: "Filozofia slow life",
    location: "Okolice Warszawy",
    area: "Kompleks wypoczynkowy",
    tag: "Koncepcja",
    category: "architektura",
    image: "slow-life",
  },
  {
    projectId: "budynek-w-katarze-2",
    title: "Rezydencja w Katarze",
    location: "Katar",
    area: "600 m²",
    tag: "Projekt architektoniczny",
    category: "architektura",
    image: "qatar-residence",
  },
  {
    projectId: "silownia-w-katarze",
    title: "Prywatna siłownia",
    location: "Katar",
    area: "Strefa aktywności",
    tag: "Projekt wnętrza",
    category: "wnetrza",
    image: "qatar-gym",
  },
  {
    projectId: "mieszkanie-w-katarze",
    title: "Apartament w Katarze",
    location: "Katar",
    area: "117 m²",
    tag: "Projekt wnętrza",
    category: "wnetrza",
    image: "qatar-apartment",
  },
  {
    projectId: "budynek-w-katarze-1",
    title: "Dom w Katarze",
    location: "Katar",
    area: "350 m²",
    tag: "Projekt architektoniczny",
    category: "architektura",
    image: "qatar-house",
  },
];

export const redesignProjects = presentation.map((item) => {
  const original = PortfolioProjects.find((project) => project.projectId === item.projectId)!;
  return {
    ...original,
    ...item,
    image: `/images/redesign/${item.image}.webp`,
    meta: `${item.location} · ${item.area}`,
  };
});

export const projectPreviews = redesignProjects.map(
  ({ projectId, title, meta, tag, image, category }) => ({
    projectId,
    title,
    meta,
    tag,
    image,
    category,
  }),
);
