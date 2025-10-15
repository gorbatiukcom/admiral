export enum Projects {
  "remont-pod-klucz" = "remont-pod-klucz",
  "projektowanie-wnetrz-koncepcja" = "projektowanie-wnetrz-koncepcja",
  "projektowanie-wnetrz-harmonia" = "projektowanie-wnetrz-harmonia",
  "projektowanie-wnetrz-perfekcja" = "projektowanie-wnetrz-perfekcja",
  "uslugi-budowlane" = "uslugi-budowlane",
}

export type Project = keyof typeof Projects;

export const ProjectsDetalis: {
  [index in Project]: { name: string; price?: string; description?: string };
} = {
  [Projects["remont-pod-klucz"]]: {
    name: "Remont pod klucz",
  },
  [Projects["projektowanie-wnetrz-koncepcja"]]: {
    name: "Projektowanie wnętrz | Koncepcja",
  },
  [Projects["projektowanie-wnetrz-harmonia"]]: {
    name: "Projektowanie wnętrz | Harmonia",
  },
  [Projects["projektowanie-wnetrz-perfekcja"]]: {
    name: "Projektowanie wnętrz | Perfekcja",
  },
  [Projects["uslugi-budowlane"]]: {
    name: "Usługi budowlane",
  },
};
