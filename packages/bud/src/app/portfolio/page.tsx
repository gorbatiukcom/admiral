import type { Metadata } from "next";

import design from "../../components/redesign/design.module.css";
import { Consultation } from "../../components/redesign/ui";
import { projectPreviews } from "../../constants/redesign-projects";
import { Portfolio } from "./portfolio";

export const metadata: Metadata = {
  title: "Budcor | Portfolio",
  description:
    "Poznaj projekty i realizacje Budcor Design — wnętrza, architektura i remonty mieszkań oraz domów.",
};
export default function PortfolioPage() {
  return (
    <>
      <section className={`${design.container} ${design.pageIntro}`}>
        <p className={design.eyebrow}>Portfolio Budcor Design</p>
        <h1 className={design.pageTitle}>{"Przestrzenie\nz charakterem."}</h1>
        <p className={design.copy}>
          Wnętrza, architektura i realizacje. Wybierz projekt, aby przyjrzeć się jego założeniom i
          detalom.
        </p>
      </section>
      <Portfolio projects={projectPreviews} />
      <Consultation />
    </>
  );
}
