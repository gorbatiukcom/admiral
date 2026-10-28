import Image from "next/image";
import Link from "next/link";

import design from "../components/redesign/design.module.css";
import { ActionLink, Consultation, Process, ProjectCard, Values } from "../components/redesign/ui";
import { projectPreviews } from "../constants/redesign-projects";
import { HeroSlider } from "./hero-slider";
import styles from "./home.module.css";

const featuredProjects = projectPreviews
  .slice(0, 4)
  .map((project) =>
    project.projectId === "lodz-gdanska-24" ? { ...project, title: "Mieszkanie w Łodzi" } : project,
  );

const approachValues = [
  { title: "Zakres od początku", copy: "Wybierasz projekt, wykonanie lub kompleksową współpracę." },
  {
    title: "Świadome decyzje",
    copy: "Materiały i rozwiązania odnosimy do Twoich potrzeb i budżetu.",
  },
  { title: "Kontakt podczas prac", copy: "Informacje o postępie pomagają śledzić realizację." },
  { title: "Przemyślany detal", copy: "Wykończenie ma tworzyć spójne, wygodne wnętrze." },
];
const services = [
  {
    title: "Projektowanie wnętrz",
    copy: "Przemyślany układ, materiały i dokumentacja.",
    href: "/uslugi/projektowanie-wnetrz",
  },
  {
    title: "Realizacja pod klucz",
    copy: "Projekt i wykonanie w jednym procesie.",
    href: "/uslugi/remont-pod-klucz",
  },
];

const homeSteps = [
  {
    title: "Konsultacja i poznanie potrzeb",
    copy: "Poznajemy Twoje potrzeby, styl życia i budżet. Ustalamy zakres i założenia projektu.",
  },
  {
    title: "Koncepcja i układ funkcjonalny",
    copy: "Planujemy funkcjonalny układ i styl przyszłego wnętrza.",
  },
  {
    title: "Wizualizacje i wybór materiałów",
    copy: "Tworzymy realistyczne wizualizacje. Dobieramy materiały, kolory, meble i oświetlenie.",
  },
  {
    title: "Dokumentacja techniczna",
    copy: "Tworzymy dokumentację techniczną do precyzyjnej realizacji projektu.",
  },
  {
    title: "Realizacja i wsparcie",
    copy: "Zapewniamy nadzór autorski lub kompleksową realizację wnętrza.",
  },
];

export function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="home-heading">
        <HeroSlider />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle} id="home-heading">
            <span>
              Dobrze
              <br />
              zaprojektowane.
            </span>
            <span>
              Spokojnie
              <br />
              zrealizowane.
            </span>
          </h1>
          <ActionLink className={styles.heroAction}>Omówmy projekt</ActionLink>
        </div>
      </section>
      <div className={styles.mobileIntroCta}>
        <ActionLink />
      </div>
      <div className={styles.serviceStrip} id="home-services">
        {services.map((service, index) => (
          <Link href={service.href} key={service.href} className={styles.service}>
            <span>0{index + 1}</span>
            <div>
              <h2>{service.title}</h2>
              <p>{service.copy}</p>
            </div>
          </Link>
        ))}
      </div>
      <section className={styles.introductions} aria-label="Nasze podejście do wnętrz">
        <div className={styles.introContent}>
          <h2>
            TWORZYMY PRZESTRZEŃ,
            <br /> DLA CIEBIE
          </h2>
          <p>
            Żadnych szablonów – każde wnętrze tworzymy od podstaw, z myślą o Tobie.
            <br />
            Starannie dobieramy materiały, które idealnie odzwierciedlają Twój styl, charakter i
            wizję idealnego domu.
          </p>
          <ActionLink href="/portfolio" className={styles.outline}>
            Zobacz projekty
          </ActionLink>
        </div>
        <div className={styles.introImage}>
          <Image
            src="/images/redesign/home-studio.webp"
            alt="Projekt przestrzeni mieszkalnej dopasowanej do stylu domowników"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className={`${styles.introContent} ${styles.turnkeyContent}`}>
          <h2>KOMPLEKSOWA REALIZACJA</h2>
          <p>
            Tworzymy wnętrza do życia. Łączymy projektowanie z realizacją, aby od pierwszego pomysłu
            po wykończenie wszystko miało swoje miejsce.
          </p>
          <ActionLink className={styles.outline}>Omówmy projekt</ActionLink>
        </div>
        <div className={`${styles.introImage} ${styles.turnkeyImage}`}>
          <Image
            src="/images/redesign/home-turnkey.webp"
            alt="Kompleksowy projekt eleganckiego wnętrza z zabudową na wymiar"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>
      <section
        className={`${design.container} ${design.section} ${styles.featuredSection}`}
        aria-labelledby="featured-heading"
      >
        <div className={design.sectionHead}>
          <div>
            <p className={design.eyebrow}>Wybrane projekty</p>
            <h2 className={design.heading} id="featured-heading">
              Różne przestrzenie. <br />
              Ten sam namysł.
            </h2>
          </div>
          <ActionLink href="/portfolio" variant="text">
            Całe portfolio
          </ActionLink>
        </div>
        <div className={`${design.projectGrid} ${styles.featuredGrid}`}>
          {featuredProjects.map((project) => (
            <div
              key={project.projectId}
              className={featuredProjects.indexOf(project) < 2 ? styles.desktopProject : undefined}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
      <section
        className={`${design.dark} ${design.section} ${styles.approach}`}
        aria-labelledby="approach-heading"
      >
        <div className={`${design.container} ${design.split}`}>
          <div className={`${design.splitImage} ${styles.approachImage}`}>
            <Image
              src="/images/redesign/gdanska-detail.webp"
              alt="Detal salonu mieszkania przy Gdańskiej w Łodzi"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
          <div className={design.splitContent}>
            <p className={design.eyebrow}>Pomysł, który można zrealizować</p>
            <h2 className={design.heading} id="approach-heading">
              Dobry projekt
              <br />
              nie kończy się
              <br />
              na wizualizacji.
            </h2>
            <p className={design.copy}>
              Wnętrze powinno dobrze wyglądać i sprawdzać się każdego dnia. Dlatego patrzymy na
              układ, materiały oraz wykonanie jako części tej samej całości.
            </p>
            <Values items={approachValues} />
            <div className={design.actions}>
              <ActionLink href="/o-nas" variant="text">
                Poznaj nasze podejście
              </ActionLink>
            </div>
          </div>
        </div>
      </section>
      <Process
        className={styles.homeProcess}
        steps={homeSteps}
        description="Każdy zakres jest inny. Kolejność najważniejszych decyzji pozostaje przejrzysta."
      />
      <Consultation />
      <aside className={styles.discount} aria-label="Rabat zależny od metrażu">
        <p>Rabat w zależności od metrażu projektu:</p>
        <div>
          <span>od 50 m² do 100 m² — 4%</span>
          <span>od 100 m² do 300 m² — 6%</span>
          <span>od 300 m² — 8%</span>
        </div>
      </aside>
    </>
  );
}
