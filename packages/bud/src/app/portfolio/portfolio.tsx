"use client";

import { useState } from "react";

import design from "../../components/redesign/design.module.css";
import { ProjectCard, type ProjectPreview } from "../../components/redesign/ui";
import type { ProjectCategory } from "../../constants/redesign-projects";
import styles from "./portfolio.module.css";

const filters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "Wszystkie" },
  { value: "wnetrza", label: "Wnętrza" },
  { value: "realizacje", label: "Realizacje" },
  { value: "architektura", label: "Architektura" },
];

export function Portfolio({
  projects,
}: {
  projects: (ProjectPreview & { category: ProjectCategory })[];
}) {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const visible = projects
    .filter((project) => category === "all" || category === project.category)
    .sort(
      (a, b) =>
        Number(a.projectId === "lodz-gdanska-24") - Number(b.projectId === "lodz-gdanska-24"),
    );
  const countLabel =
    visible.length === 1
      ? "projekt"
      : visible.length >= 2 && visible.length <= 4
        ? "projekty"
        : "projektów";
  return (
    <section
      className={`${design.container} ${styles.projects}`}
      aria-label="Projekty Budcor Design"
    >
      <div className={styles.filters} role="group" aria-label="Kategorie projektów">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            aria-pressed={filter.value === category}
            onClick={() => setCategory(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <p className={styles.resultCount} role="status">
        {visible.length} {countLabel}
      </p>
      <div className={design.projectGrid}>
        {visible.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))}
      </div>
    </section>
  );
}
