import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./design.module.css";

export function Arrow() {
  return (
    <span className={styles.arrow} aria-hidden="true">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" focusable="false">
        <path d="M1.04896 7.76066L-4.43459e-05 6.71165L5.26487 1.44177H1.26771L1.27765 5.24521e-06H7.75564V6.48296H6.30393L6.31388 2.49077L1.04896 7.76066Z" />
      </svg>
    </span>
  );
}

export function ActionLink({
  href = "/contacts",
  children = "Omów swój projekt",
  variant = "button",
  className = "",
}: {
  href?: string;
  children?: ReactNode;
  variant?: "button" | "text";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${variant === "button" ? styles.button : styles.textLink} ${className}`}
    >
      {children}
      <Arrow />
    </Link>
  );
}

export type ProjectPreview = {
  projectId: string;
  title: string;
  meta: string;
  tag: string;
  image: string;
};

export function ProjectCard({ project }: { project: ProjectPreview }) {
  return (
    <Link href={`/portfolio/${project.projectId}`} className={styles.projectCard}>
      <div className={styles.projectImage}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
        />
        <span className={styles.tag}>{project.tag}</span>
      </div>
      <div className={styles.projectInfo}>
        <div>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectMeta}>{project.meta}</p>
        </div>
        <Arrow />
      </div>
    </Link>
  );
}

export const processSteps = [
  {
    title: "Rozmowa i potrzeby",
    copy: "Ustalamy, jak chcesz korzystać z wnętrza, jaki jest zakres prac i założenia budżetu.",
  },
  {
    title: "Projekt i ustalenia",
    copy: "Porządkujemy rozwiązania, materiały, kosztorys i harmonogram odpowiednio do wybranej usługi.",
  },
  {
    title: "Realizacja i kontakt",
    copy: "Prace, uzgodnienia i informacje o postępie łączymy w jeden przejrzysty proces.",
  },
  {
    title: "Odbiór i przekazanie",
    copy: "Sprawdzamy wykonany zakres i przekazujemy uzgodnioną dokumentację.",
  },
];

export function Process({
  eyebrow = "Współpraca krok po kroku",
  title = "Wiesz, co dalej.",
  description,
  steps = processSteps,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: typeof processSteps;
  className?: string;
}) {
  return (
    <section
      className={`${styles.container} ${styles.section} ${className}`}
      aria-labelledby="process-heading"
    >
      <div className={styles.sectionHead}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.heading} id="process-heading">
            {title}
          </h2>
        </div>
        {description && <p className={styles.copy}>{description}</p>}
      </div>
      <ol className={styles.steps} style={{ "--step-count": steps.length } as React.CSSProperties}>
        {steps.map((step, index) => (
          <li className={styles.step} key={step.title}>
            <span className={styles.stepNumber}>0{index + 1}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.copy}>{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Consultation({
  title = "Twoje wnętrze zaczyna się od rozmowy.",
  description = "Opowiedz nam o przestrzeni, planach i zakresie, którego potrzebujesz.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className={`${styles.container} ${styles.consultation}`}>
      <div>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.copy}>{description}</p>
      </div>
      <ActionLink />
    </section>
  );
}

export function Values({ items }: { items: { title: string; copy: string }[] }) {
  return (
    <div className={styles.values}>
      {items.map((item) => (
        <div key={item.title}>
          <h3 className={styles.valueTitle}>{item.title}</h3>
          <p className={styles.copy}>{item.copy}</p>
        </div>
      ))}
    </div>
  );
}
