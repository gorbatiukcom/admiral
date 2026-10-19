import type { Metadata } from "next";
import Image from "next/image";

import design from "../../components/redesign/design.module.css";
import { ActionLink, Values } from "../../components/redesign/ui";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Budcor | O nas",
  description:
    "Poznaj Budcor Design. Łączymy projektowanie wnętrz z realizacją, dbając o potrzeby, zakres prac i każdy detal.",
};
const values = [
  {
    title: "Projekt i potrzeby",
    copy: "Dobór rozwiązań do funkcji, charakteru wnętrza i oczekiwań klienta.",
  },
  {
    title: "Zakres i rozliczenia",
    copy: "Kosztorys oraz uzgadnianie wydatków odpowiednio do wybranej usługi.",
  },
  {
    title: "Kontakt i postęp",
    copy: "Dokumentowanie prac i informacje o kolejnych etapach realizacji.",
  },
  {
    title: "Odbiór i dokumentacja",
    copy: "Sprawdzenie wykonania oraz przekazanie uzgodnionych materiałów.",
  },
];
export default function AboutPage() {
  return (
    <>
      <section className={`${design.container} ${design.pageIntro}`}>
        <p className={design.eyebrow}>Budcor Design</p>
        <h1 className={design.pageTitle}>
          Myślimy o całości.
          <br />
          Dbamy o szczegóły.
        </h1>
        <p className={design.copy}>
          Łączymy projektowanie wnętrz z usługami remontowymi. Możesz powierzyć nam wybrany etap
          albo porozmawiać o kompleksowej realizacji.
        </p>
      </section>
      <section
        className={`${design.container} ${design.split} ${styles.approach}`}
        aria-labelledby="about-approach"
      >
        <div className={`${design.splitImage} ${styles.image}`}>
          <Image
            src="/images/redesign/about-detail.webp"
            alt="Zielony przedpokój z drewnianą zabudową i wzorzystą podłogą — detal projektu Budcor Design"
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
        <div className={design.splitContent}>
          <p className={design.eyebrow}>Nasze podejście</p>
          <h2 id="about-approach" className={design.heading}>
            Wnętrze dopasowane
            <br />
            do sposobu życia.
          </h2>
          <p className={design.copy}>
            Zaczynamy od potrzeb: codziennych rytuałów, funkcji pomieszczeń i oczekiwań wobec
            przestrzeni. Projekt ma uporządkować te elementy w jedną całość.
          </p>
          <p className={design.copy}>
            Współpraca obejmuje nie tylko wygląd, ale też materiały, zakres wykonania i kolejne
            decyzje. Ich jasne ustalenie pomaga przejść od pomysłu do realizacji.
          </p>
          <div className={design.actions}>
            <ActionLink href="/portfolio" variant="text">
              Poznaj portfolio
            </ActionLink>
          </div>
        </div>
      </section>
      <section className={`${design.dark} ${design.section}`} aria-labelledby="about-values">
        <div className={design.container}>
          <p className={design.eyebrow}>Podstawy współpracy</p>
          <h2 className={`${design.heading} ${styles.valuesTitle}`} id="about-values">
            Mniej niewiadomych.
            <br />
            Więcej jasnych ustaleń.
          </h2>
          <Values items={values} />
        </div>
      </section>
      <section
        className={`${design.container} ${design.section} ${styles.company}`}
        aria-labelledby="company-heading"
      >
        <div>
          <p className={design.eyebrow}>Dane firmy</p>
          <h2 className={`${design.heading} ${styles.valuesTitle}`} id="company-heading">
            Pozostańmy
            <br />w kontakcie.
          </h2>
        </div>
        <div>
          <h3 className={styles.companyName}>Volantes Sp. z o.o.</h3>
          <address className={design.copy}>
            NIP: 725 230 67 13
            <br />
            Al. Tadeusza Kościuszki 80/82, lok. 301
            <br />
            90-437 Łódź
          </address>
          <p className={design.copy}>
            Dane podmiotu wskazanego w kontaktach Budcor Design. Lokalizację obiektu i możliwość
            współpracy uzgodnimy podczas pierwszej rozmowy.
          </p>
          <div className={design.actions}>
            <ActionLink>Przejdź do kontaktu</ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
