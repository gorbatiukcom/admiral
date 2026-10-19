import { Metadata } from "next";

import { PortfolioProjects } from "../../../constants/portfolio";
import Project, { Props } from "./project";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const projectData = PortfolioProjects.find((project) => project.projectId === projectId);

  return {
    title: `Admiral Interior | ${projectData?.name}`,
  };
}

export async function generateStaticParams() {
  return PortfolioProjects.map((project) => ({ projectId: project.projectId }));
}

export default Project;
