import design from "../../../components/redesign/design.module.css";
import { ActionLink } from "../../../components/redesign/ui";

export default function ProjectNotFound() {
  return (
    <section className={`${design.container} ${design.section}`}>
      <p className={design.eyebrow}>Nie znaleziono projektu</p>
      <h1 className={design.pageTitle}>Wróćmy do inspiracji.</h1>
      <p className={design.copy}>
        Ten projekt jest niedostępny. Zobacz pozostałe projekty i realizacje Budcor Design.
      </p>
      <div className={design.actions}>
        <ActionLink href="/portfolio">Zobacz portfolio</ActionLink>
      </div>
    </section>
  );
}
