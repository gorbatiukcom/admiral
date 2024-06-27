export enum Projects {
  remont = "remont",
  keyRemont = "keyRemont",
}

export type Project = keyof typeof Projects;

export const ProjectsDetalis: {
  [index in Project]: { name: string; price?: string; description?: string };
} = {
  [Projects.remont]: {
    name: "Remont mieszkań",
  },
  [Projects.keyRemont]: {
    name: 'Remont mieszkania "pod klucz"',
  },
};
