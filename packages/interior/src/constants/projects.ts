export enum Projects {
  basic = "basic",
  advanced = "advanced",
  authorSupervision = "authorSupervision",
  comprehensive = "comprehensive",
}

export type Project = keyof typeof Projects;

export const ProjectsDetalis: {
  [index in Project]: { name: string; price: string; description?: string };
} = {
  [Projects.basic]: {
    name: "PODSTAWOWY",
    price: "150zł / m2",
  },
  [Projects.advanced]: {
    name: "ZAAWANSOWANY",
    price: "275zł / m2",
  },
  [Projects.authorSupervision]: {
    name: "NADZÓR AUTORSKI",
    price: "450zł / m2",
  },
  [Projects.comprehensive]: {
    name: "KOMPLEKSOWY",
    price: "2100zł / m2",
    description:
      "Cena może się różnić w zależności od materiałów wykońcenia oraz mebli do zabudowy",
  },
};
