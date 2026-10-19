import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import design from "./design.module.css";
import { serviceScopes } from "./service-scopes";
import styles from "./services.module.css";
import { ActionLink, Consultation, Process, Values } from "./ui";

function inquiry(service: string, packageName?: string) {
  return `/contacts?${new URLSearchParams({ service, ...(packageName ? { package: packageName } : {}) })}`;
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={serviceScopes[item] ? styles.disclosureItem : undefined}>
          {serviceScopes[item] ? (
            <details>
              <summary>{item}</summary>
              <p>{serviceScopes[item]}</p>
            </details>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
}

type Card = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: string[];
  href: string;
  cta: string;
  highlighted?: boolean;
};
function Cards({ cards, headingLevel = 2 }: { cards: Card[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  return (
    <div className={`${styles.cards} ${cards.length === 2 ? styles.twoCards : ""}`}>
      {cards.map((card) => (
        <article
          key={card.title}
          className={`${styles.card} ${card.highlighted ? styles.highlighted : ""}`}
        >
          {card.eyebrow && <p className={styles.cardEyebrow}>{card.eyebrow}</p>}
          <Heading className={styles.cardTitle}>{card.title}</Heading>
          {card.description && <p className={styles.cardDescription}>{card.description}</p>}
          <BulletList items={card.items} />
          <ActionLink href={card.href}>{card.cta}</ActionLink>
        </article>
      ))}
    </div>
  );
}

function ServiceIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className={`${design.container} ${styles.serviceIntro}`}>
      <Link href="/uslugi" className={styles.back}>
        ← Wszystkie usługi
      </Link>
      <p className={design.eyebrow}>{eyebrow}</p>
      <h1 className={design.pageTitle}>{title}</h1>
      <p className={design.copy}>{description}</p>
      {children}
    </section>
  );
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={`${design.container} ${styles.heroImage}`}>
      <Image src={src} alt={alt} fill priority sizes="90vw" />
    </div>
  );
}

export function FAQ({
  title,
  items,
}: {
  title?: string;
  items: { question: string; answer: string }[];
}) {
  return (
    <section className={`${design.container} ${design.section}`} aria-label="Najczęstsze pytania">
      <div className={styles.faq}>
        {title && <h2 className={design.heading}>{title}</h2>}
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p className={design.copy}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ServicesPage() {
  const cards: Card[] = [
    {
      eyebrow: "01 / Usługa",
      title: "Projektowanie wnętrz",
      description: "Chcesz najpierw dobrze zaplanować przestrzeń.",
      items: [
        "Układ funkcjonalny i koncepcja",
        "Wizualizacje i dobór materiałów",
        "Dokumentacja w wybranym pakiecie",
      ],
      href: "/uslugi/projektowanie-wnetrz",
      cta: "Poznaj pakiety",
    },
    {
      eyebrow: "02 / Pełny proces",
      title: "Realizacja pod klucz",
      description: "Chcesz połączyć projekt i realizację.",
      items: [
        "Projekt i przygotowanie kosztorysu",
        "Organizacja materiałów i wykonania",
        "Koordynacja, odbiór i przekazanie",
      ],
      href: "/uslugi/remont-pod-klucz",
      cta: "Poznaj współpracę",
    },
  ];
  return (
    <>
      <section className={`${design.container} ${design.pageIntro}`}>
        <p className={design.eyebrow}>Usługi</p>
        <h1 className={design.pageTitle}>{"Wnętrze.\nOd koncepcji po realizację."}</h1>
        <p className={design.copy}>
          Projektujemy, remontujemy i kompleksowo realizujemy wnętrza. Zakres współpracy
          dopasowujemy do Twoich potrzeb.
        </p>
      </section>
      <section className={design.container} aria-label="Dostępne usługi">
        <Cards cards={cards} />
      </section>
      <Consultation
        title="Nie wiesz jeszcze, od czego zacząć?"
        description="Opisz, co chcesz zmienić. Wybór pakietu nie jest potrzebny do pierwszej rozmowy."
      />
    </>
  );
}

export function InteriorServicePage() {
  const cards: Card[] = [
    {
      eyebrow: "Na dobry początek",
      title: "Smart",
      description:
        "Wizualizacje 3D, dobór materiałów i układ mebli — wraz z podstawowymi planami oraz specyfikacją urządzeń sanitarnych.",
      items: [
        "Zakres pakietu Smart",
        "Pomiary i układ ścian",
        "Gniazdka i wykończenie ścian",
        "Specyfikacja urządzeń sanitarnych",
      ],
      href: inquiry("projektowanie", "Smart"),
      cta: "Zapytaj o Smart",
    },
    {
      eyebrow: "Projekt z dokumentacją",
      title: "Comfort",
      description:
        "Wizualizacje 3D, dobór materiałów i układ mebli. Cały zakres Smart rozszerzony o szczegółowe plany, zestawienia i rysunki mebli.",
      items: [
        "Zakres pakietu Comfort",
        "Rozszerzone plany podłóg, sufitów i instalacji",
        "Zestawienia materiałów i wyposażenia",
        "Rysunki oraz specyfikacje mebli",
      ],
      href: inquiry("projektowanie", "Comfort"),
      cta: "Zapytaj o Comfort",
      highlighted: true,
    },
    {
      eyebrow: "Projekt ze wsparciem realizacji",
      title: "Prestige",
      description:
        "Wizualizacje 3D, dobór materiałów, układ mebli i pełna dokumentacja Comfort. Dodatkowo opieka nad realizacją i organizacja dostaw.",
      items: [
        "Zakres pakietu Prestige",
        "Nadzór autorski",
        "Zarządzanie budową",
        "Organizacja dostaw mebli i materiałów",
      ],
      href: inquiry("projektowanie", "Prestige"),
      cta: "Zapytaj o Prestige",
    },
  ];
  return (
    <>
      <ServiceIntro
        eyebrow="01 / Projektowanie wnętrz"
        title={"Najpierw Twoje życie.\nPotem układ wnętrza."}
        description="Dobry projekt zaczyna się od tego, jak mieszkasz. Porządkujemy potrzeby, funkcje, materiały i detale, aby stworzyć spójną przestrzeń."
      >
        <div className={design.actions}>
          <ActionLink href={inquiry("projektowanie")}>Porozmawiaj o projekcie</ActionLink>
          <ActionLink href="/portfolio" variant="text">
            Zobacz portfolio
          </ActionLink>
        </div>
      </ServiceIntro>
      <HeroImage src="/images/redesign/lublin.webp" alt="Projekt strefy dziennej domu w Lublinie" />
      <section
        className={`${design.container} ${styles.packagesSection}`}
        aria-labelledby="packages-heading"
      >
        <div className={design.sectionHead}>
          <div>
            <p className={design.eyebrow}>Trzy zakresy projektowania</p>
            <h2 className={design.heading} id="packages-heading">
              Wybierz poziom wsparcia.
            </h2>
          </div>
          <p className={design.copy}>
            Porównaj główne różnice. Szczegółowy zakres, liczbę uzgodnień i termin ustalamy przed
            rozpoczęciem pracy.
          </p>
        </div>
        <Cards cards={cards} headingLevel={3} />
        <p className={styles.note}>
          Wycena indywidualna. Powyższe zestawienie pokazuje główne różnice; dokładną listę
          opracowań potwierdzamy w ofercie.
        </p>
      </section>
      <section
        className={`${design.dark} ${design.section}`}
        aria-labelledby="before-start-heading"
      >
        <div className={`${design.container} ${styles.twoColumn}`}>
          <div>
            <p className={design.eyebrow}>Przed rozpoczęciem</p>
            <h2 className={design.heading} id="before-start-heading">
              Jasne ustalenia.
              <br />
              Lepsze decyzje.
            </h2>
          </div>
          <div>
            <p className={design.copy}>
              W pierwszej rozmowie zbieramy informacje o metrażu, lokalizacji, potrzebach oraz
              planowanym zakresie. Następnie dopasowujemy sposób współpracy.
            </p>
            <Values
              items={[
                {
                  title: "Zakres i rezultat",
                  copy: "Uzgadniamy, jakie rysunki, zestawienia i materiały otrzymasz.",
                },
                {
                  title: "Termin i konsultacje",
                  copy: "Harmonogram i sposób wprowadzania zmian ustalamy dla konkretnego projektu.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <FAQ
        title="Przed pierwszą rozmową."
        items={[
          {
            question: "Czy mogę zamówić tylko projekt?",
            answer:
              "Tak, oferujemy również sam projekt wnętrza. Zakres dokumentacji zależy od wybranego pakietu: Smart, Comfort lub Prestige. W ramach pakietu Prestige zapewniamy również nadzór autorski, koordynację prac i organizację dostaw mebli oraz materiałów.\nDo realizacji możemy polecić sprawdzoną ekipę. Możesz też przekazać otrzymaną od nas dokumentację własnym wykonawcom.",
          },
          {
            question: "Co przygotować do konsultacji?",
            answer:
              "Na pierwszą rozmowę warto przygotować metraż, lokalizację oraz rzut wnętrza, jeśli jest dostępny. Pomocne będą też aktualne zdjęcia oraz inspiracje. Chętnie poznamy potrzeby domowników, budżet i planowany termin realizacji. Gotowa wizja nie jest konieczna — wspólnie omówimy potrzeby i ustalimy kolejne kroki.",
          },
          {
            question: "Ile kosztuje projekt i ile trwa?",
            answer:
              "Cena projektu zależy od metrażu, wybranego pakietu i zakresu opracowania. Czas przygotowania zależy również od złożoności wnętrza oraz tempa uzgodnień. Po poznaniu Twoich potrzeb przedstawimy indywidualną wycenę i proponowany harmonogram. Koszt, zakres i termin ustalimy przed rozpoczęciem współpracy.",
          },
        ]}
      />
      <Consultation />
    </>
  );
}

export function RenovationsServicePage() {
  const cards: Card[] = [
    {
      title: "Przygotowanie",
      description: "Ustalamy pełny zakres, kolejność prac i harmonogram realizacji.",
      items: ["Uzgodnienie rozwiązań", "Kosztorys i harmonogram", "Organizacja całej realizacji"],
      href: inquiry("remont"),
      cta: "Zapytaj o remont",
    },
    {
      title: "Realizacja",
      description: "Prowadzimy wszystkie etapy remontu w całym mieszkaniu lub domu.",
      items: [
        "Przygotowanie i instalacje",
        "Kompleksowe wykończenie",
        "Koordynacja kolejnych prac",
      ],
      href: inquiry("remont"),
      cta: "Zapytaj o remont",
    },
    {
      title: "Gotowe wnętrze",
      description: "Dopracowujemy całość i przygotowujemy wnętrze do odbioru.",
      items: [
        "Montaż i dopracowanie detali",
        "Kontrola jakości wykonania",
        "Odbiór i przekazanie wnętrza",
      ],
      href: inquiry("remont"),
      cta: "Zapytaj o remont",
    },
  ];
  return (
    <>
      <ServiceIntro
        eyebrow="02 / Kompleksowe remonty"
        title={"Pełny remont.\nDopracowany efekt."}
        description="Kompleksowo remontujemy mieszkania i domy. Łączymy uzgodnione rozwiązania, sprawną organizację i precyzyjne wykonanie."
      >
        <div className={design.actions}>
          <ActionLink href={inquiry("remont")}>Omów zakres remontu</ActionLink>
        </div>
      </ServiceIntro>
      <section className={design.container} aria-label="Etapy kompleksowego remontu">
        <Cards cards={cards} />
      </section>
      <section className={`${design.dark} ${design.section}`} aria-labelledby="renovation-approach">
        <div className={`${design.container} ${styles.twoColumn}`}>
          <div>
            <p className={design.eyebrow}>Od ustaleń do realizacji</p>
            <h2 className={design.heading} id="renovation-approach">
              Spójne założenia.
              <br />
              Pewne wykonanie.
            </h2>
          </div>
          <div>
            <p className={design.copy}>
              Przekładamy uzgodnione rozwiązania na gotowe wnętrze. Przed rozpoczęciem prac dopinamy
              zakres, materiały i harmonogram.
            </p>
            <p className={design.copy}>
              Każdy etap podporządkowujemy jednej całości — od przygotowania obiektu po wykończenie
              i odbiór.
            </p>
            <ActionLink href="/uslugi/remont-pod-klucz" variant="text">
              Poznaj realizację pod klucz
            </ActionLink>
          </div>
        </div>
      </section>
      <section className={`${design.container} ${design.section}`} aria-labelledby="quote-heading">
        <div className={design.sectionHead}>
          <h2 className={design.heading} id="quote-heading">
            Co wpływa na wycenę?
          </h2>
          <p className={design.copy}>
            Wyceniamy cały remont, uwzględniając stan obiektu i docelowy standard wnętrza.
          </p>
        </div>
        <div className={styles.quoteCards}>
          <article className={styles.quoteCard}>
            <h3>Obiekt i stan wyjściowy</h3>
            <p className={design.copy}>
              Lokalizacja, powierzchnia, stan instalacji, zakres demontażu i przygotowania podłoża.
            </p>
          </article>
          <article className={styles.quoteCard}>
            <h3>Rozwiązania i standard</h3>
            <p className={design.copy}>
              Uzgodnione rozwiązania, materiały, instalacje oraz detale wykończenia całego wnętrza.
            </p>
          </article>
        </div>
      </section>
      <Consultation
        title="Porozmawiajmy o całym remoncie."
        description="Opowiedz o obiekcie i planowanym efekcie. Ustalimy kolejne kroki."
      />
    </>
  );
}

export function TurnkeyServicePage() {
  return (
    <>
      <ServiceIntro
        eyebrow="03 / Realizacja pod klucz"
        title={"Od pomysłu\ndo gotowego wnętrza."}
        description="Projekt, przygotowanie prac i wykonanie w jednym procesie. Dopasowujemy zakres do obiektu, budżetu i tego, ile chcesz powierzyć naszej opiece."
      >
        <div className={design.actions}>
          <ActionLink href={inquiry("pod-klucz")}>Omów realizację</ActionLink>
        </div>
      </ServiceIntro>
      <HeroImage
        src="/images/redesign/gdanska.webp"
        alt="Zrealizowane mieszkanie przy Gdańskiej w Łodzi"
      />
      <section className={`${design.container} ${design.section}`} aria-labelledby="scope-heading">
        <div className={design.sectionHead}>
          <div>
            <p className={design.eyebrow}>Zakres i budżet</p>
            <h2 className={design.heading} id="scope-heading">
              Najpierw ustalenia.
              <br />
              Potem realizacja.
            </h2>
          </div>
          <p className={design.copy}>
            „Pod klucz” powinno oznaczać konkretną listę prac i dostaw. Dlatego zakres zapisujemy w
            ofercie dla Twojego obiektu.
          </p>
        </div>
        <div className={styles.quoteCards}>
          <article className={styles.quoteCard}>
            <h3>Elementy pełnego procesu</h3>
            <BulletList
              items={[
                "Projekt i planowanie prac",
                "Kosztorys oraz harmonogram",
                "Dobór i organizacja materiałów",
                "Prace wykończeniowe i montażowe",
                "Sprzątanie, kontrola i przekazanie",
              ]}
            />
          </article>
          <article className={styles.quoteCard}>
            <h3>Co doprecyzujemy w wycenie</h3>
            <p className={design.copy}>
              Każda z poniższych pozycji powinna mieć określony zakres i cenę.
            </p>
            <BulletList
              items={[
                "Stan obiektu i potrzebne prace przygotowawcze",
                "Standard oraz koszt materiałów",
                "Meble na wymiar, kuchnia i wyposażenie",
                "Dostawy, montaż i prace dodatkowe",
              ]}
            />
          </article>
        </div>
        <aside className={styles.budgetNote}>
          <h3>Wycena dla Twojego mieszkania.</h3>
          <p className={design.copy}>
            Metraż to początek. Ostateczny budżet zależy również od stanu obiektu, materiałów i
            uzgodnionego zakresu. Przed pracami potrzebny jest szczegółowy kosztorys.
          </p>
        </aside>
      </section>
      <section className={`${design.dark} ${design.section}`} aria-labelledby="turnkey-project">
        <div className={`${design.container} ${design.split}`}>
          <div className={design.splitContent}>
            <p className={design.eyebrow}>Realizacja / Łódź / 102 m²</p>
            <h2 className={design.heading} id="turnkey-project">
              Przestrzeń przygotowana
              <br />
              na nowy rozdział.
            </h2>
            <p className={design.copy}>
              Mieszkanie w kamienicy przystosowane do wynajmu krótkoterminowego. Zobacz odnowione
              wnętrze i sposób wykorzystania przestrzeni.
            </p>
            <div className={design.actions}>
              <ActionLink href="/portfolio/lodz-gdanska-24" variant="text">
                Zobacz realizację
              </ActionLink>
            </div>
          </div>
          <div className={`${design.splitImage} ${styles.projectFeatureImage}`}>
            <Image
              src="/images/redesign/gdanska-detail.webp"
              alt="Detal zrealizowanego mieszkania w Łodzi"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>
      </section>
      <Process eyebrow="Przejrzysty proces" title="Krok po kroku do odbioru." />
      <FAQ
        items={[
          {
            question: "Czy materiały i meble są w cenie?",
            answer:
              "Ich udział zależy od uzgodnionego zakresu. W ofercie trzeba osobno określić prace, materiały, meble i wyposażenie, aby wiadomo było, co obejmuje łączny budżet.",
          },
          {
            question: "Jak śledzić postęp remontu?",
            answer:
              "Przebieg całej realizacji będzie można śledzić w naszej firmowej aplikacji. Znajdziesz w niej informacje o postępach prac, kolejnych etapach i kwestiach wymagających Twojej decyzji. Na początku współpracy ustalimy również sposób kontaktu i częstotliwość aktualizacji.",
          },
          {
            question: "Jak wygląda gwarancja?",
            answer:
              "Warunki gwarancji na prace oraz sposób zgłaszania usterek określamy w umowie. Gwarancje na materiały i wyposażenie wynikają z warunków ich producentów. Szczegóły omawiamy przed rozpoczęciem współpracy.",
          },
          {
            question: "Co, jeśli zmieni się zakres prac?",
            answer:
              "Najpierw omawiamy zmianę oraz jej wpływ na koszt i harmonogram. Dodatkowe prace wprowadzamy po uzgodnieniu z Tobą zakresu, ceny i terminu.",
          },
        ]}
      />
      <Consultation />
    </>
  );
}
