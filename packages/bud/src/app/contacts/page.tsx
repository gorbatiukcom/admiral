import type { Metadata } from "next";

import design from "../../components/redesign/design.module.css";
import { serviceOptions } from "../../constants/contact";
import { ContactForm } from "./contact-form";
import styles from "./contacts.module.css";

export const metadata: Metadata = {
  title: "Budcor | Kontakt",
  description:
    "Porozmawiajmy o Twoim wnętrzu. Skontaktuj się z Budcor Design w sprawie projektu, remontu lub realizacji pod klucz.",
};

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; package?: string }>;
}) {
  const query = await searchParams;
  const initialService = serviceOptions.some((item) => item.value === query.service)
    ? query.service
    : "";
  const packageAliases: Record<string, string> = {
    Koncepcja: "Smart",
    Harmonia: "Comfort",
    Perfekcja: "Prestige",
  };
  const requestedPackage = packageAliases[query.package || ""] || query.package || "";
  const initialPackage =
    initialService === "projektowanie" &&
    ["Smart", "Comfort", "Prestige"].includes(requestedPackage)
      ? requestedPackage
      : "";
  return (
    <div className={`${design.container} ${styles.layout}`}>
      <section className={styles.intro} aria-labelledby="contact-heading">
        <p className={`${design.eyebrow} ${styles.eyebrow}`}>Pierwszy krok</p>
        <h1 className={styles.title} id="contact-heading">
          Porozmawiajmy
          <br />o Twoim wnętrzu.
        </h1>
        <p className={styles.description}>
          Opisz przestrzeń i to, czego potrzebujesz. Nie musisz jeszcze znać wszystkich odpowiedzi
          ani wybierać pakietu.
        </p>
        <div className={styles.contactDetails}>
          <a href="tel:+48794510151">+48 794 510 151</a>
          <a href="mailto:budcordesign@gmail.com">budcordesign@gmail.com</a>
          <address>
            Volantes Sp. z o.o.
            <br />
            Al. Tadeusza Kościuszki 80/82, lok. 301
            <br />
            90-437 Łódź · NIP 7252306713
          </address>
        </div>
      </section>
      <ContactForm initialService={initialService} initialPackage={initialPackage} />
    </div>
  );
}
