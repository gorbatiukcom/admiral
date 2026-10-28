import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import design from "../../../components/redesign/design.module.css";
import { BulletList } from "../../../components/redesign/service-pages";
import { ActionLink, Consultation } from "../../../components/redesign/ui";
import imageSizes from "../../../constants/portfolio-image-sizes.json";
import { redesignProjects } from "../../../constants/redesign-projects";
import { ProjectGallery } from "./gallery";
import styles from "./project.module.css";

export type Props = { params: Promise<{ projectId: string }> };
export default async function Project({ params }: Props) {
  const { projectId } = await params;
  const project = redesignProjects.find((item) => item.projectId === projectId);
  if (!project) notFound();
  const isGdanska = projectId === "lodz-gdanska-24";
  const images = project.images?.length ? project.images : [project.image];
  return (
    <>
      <section className={`${design.container} ${styles.intro}`}>
        <Link href="/portfolio" className={styles.back}>
          ← Wszystkie projekty
        </Link>
        <p className={design.eyebrow}>
          {project.tag} / {project.location}
        </p>
        <h1 className={design.pageTitle}>{project.title}</h1>
      </section>
      <div className={`${design.container} ${styles.hero}`}>
        <Image
          src={project.image}
          alt={`${project.title} — widok projektu`}
          fill
          priority
          sizes="90vw"
        />
      </div>
      <div className={`${design.container} ${styles.mobileInquiry}`}>
        <ActionLink />
      </div>
      <section
        className={`${design.container} ${styles.description}`}
        aria-labelledby="project-about"
      >
        <div>
          <p className={design.eyebrow}>O projekcie</p>
          <h2 className={design.heading} id="project-about">
            {isGdanska ? "Drugie życie mieszkania w kamienicy." : project.title}
          </h2>
        </div>
        <div>
          <p className={design.copy}>
            {isGdanska
              ? "Odnowione mieszkanie w centrum Łodzi, przygotowane dla klienta zajmującego się wynajmem krótkoterminowym. Projekt łączy funkcję zakwaterowania z nowoczesnym charakterem wnętrza."
              : project.description ||
                project.shortDescription ||
                `${project.tag} — ${project.location}.`}
          </p>
          {isGdanska && (
            <BulletList
              items={[
                "Przystosowanie przestrzeni do wynajmu krótkoterminowego",
                "Nowoczesne wnętrze w istniejącej kamienicy",
                "Spójne wykończenie stref mieszkalnych",
              ]}
            />
          )}
        </div>
      </section>
      <ProjectGallery
        title={project.title}
        images={Array.from(new Set(images)).map((src) => ({
          src,
          ...imageSizes[src as keyof typeof imageSizes],
        }))}
      />
      <Consultation
        title="Myślisz o podobnym wnętrzu?"
        description="Porozmawiajmy o Twojej przestrzeni i zakresie współpracy."
      />
    </>
  );
}
