import type { Metadata } from "next";

import design from "../../../components/redesign/design.module.css";
import { ActionLink } from "../../../components/redesign/ui";
import styles from "../contacts.module.css";

export const metadata: Metadata = {
  title: "Budcor | Dziękujemy za wiadomość",
  robots: { index: false, follow: false },
};
export default function ConfirmationPage() {
  return (
    <section className={`${design.container} ${styles.confirmation}`}>
      <p className={design.eyebrow}>Wiadomość wysłana</p>
      <h1 className={design.pageTitle}>
        Dziękujemy
        <br />
        za wiadomość.
      </h1>
      <p className={design.copy}>
        Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się z Tobą, aby porozmawiać o Twoim wnętrzu i
        kolejnych krokach.
      </p>
      <div className={design.actions}>
        <ActionLink href="/portfolio">Zobacz nasze projekty</ActionLink>
        <ActionLink href="/" variant="text">
          Wróć na stronę główną
        </ActionLink>
      </div>
    </section>
  );
}
