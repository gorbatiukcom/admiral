enum Projects {
  basic = "basic",
  advanced = "advanced",
  authorSupervision = "authorSupervision",
  comprehensive = "comprehensive",
}

export type Project = keyof typeof Projects;

type PortfolioProject = {
  projectId: string;
  name: string;
  image: string;
  pdf?: string;
  description?: string;
};

export const PortfolioProjects: PortfolioProject[] = [
  {
    projectId: "budynek-w-lodzi",
    name: "Budynek w Łodżi",
    image: "/images/portfolio_1.png",
    pdf: "/pdfs/part1.pdf",
  },
  {
    name: "Budynek w Łodżi2",
    image: "/images/portfolio_1.png",
    projectId: "budynek-w-lodzi2",
    pdf: "/pdfs/part2.pdf",
  },
  {
    name: "Budynek w Łodżi3",
    image: "/images/portfolio_1.png",
    projectId: "budynek-w-lodzi3",
  },
  {
    name: "Budynek w Łodżi3",
    image: "/images/portfolio_1.png",
    projectId: "budynek-w-lodzi3",
  },
  {
    name: "Budynek w Łodżi3",
    image: "/images/portfolio_1.png",
    projectId: "budynek-w-lodzi3",
  },
  {
    name: "Budynek w Łodżi3",
    image: "/images/portfolio_1.png",
    projectId: "budynek-w-lodzi3",
  },
];
