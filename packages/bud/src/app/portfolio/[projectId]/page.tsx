import type { Metadata } from "next";

import { redesignProjects } from "../../../constants/redesign-projects";
import Project, { type Props } from "./project";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const project = redesignProjects.find((item) => item.projectId === projectId);
  return { title: project ? `Budcor | ${project.title}` : "Budcor | Nie znaleziono projektu" };
}
export async function generateStaticParams() {
  return redesignProjects.map((project) => ({ projectId: project.projectId }));
}
export default Project;
