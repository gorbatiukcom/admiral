// Full package contents from Figma Web 2.0: 3184:8638, 3184:8438, 3184:8231.
const project = {
  title: "Projekt i wizualizacje",
  items: ["Zestawienie projektu", "Wizualizacje 3D", "Dobór materiałów"],
};
const plans = {
  title: "Układ i plany",
  items: [
    "Plan pomiarowy",
    "Plan rozmieszczenia ścian",
    "Plan rozmieszczenia mebli",
    "Plan demontażu",
    "Plan montażu",
  ],
};
const basicDocuments = [
  "Plan rozmieszczenia gniazdek i przełączników",
  "Plan wykończenia ścian",
  "Specyfikacja urządzeń sanitarnych",
];
const documents = [
  ...basicDocuments,
  "Plan podłogi z określeniem rodzaju pokrycia, listew przypodłogowych i ogrzewania podłogowego",
  "Plan sufitu",
  "Plan przyłączenia oświetlenia ze schematem włączania",
  "Wykaz wykończeń z określeniem rodzaju, ilości i nazw pokryć",
  "Plan przyłączenia urządzeń sanitarnych",
  "Plan ścian łazienki i kuchni z układem płytek",
  "Specyfikacja gniazdek i przełączników",
  "Specyfikacja oświetlenia",
  "Rozwinięcia ścian wszystkich pomieszczeń",
  "Rysunki mebli",
  "Specyfikacja mebli",
];
export const packageScopes = {
  Smart: [project, plans, { title: "Dokumentacja i specyfikacje", items: basicDocuments }],
  Comfort: [project, plans, { title: "Dokumentacja i specyfikacje", items: documents }],
  Prestige: [
    project,
    plans,
    { title: "Dokumentacja i specyfikacje", items: documents },
    {
      title: "Opieka nad realizacją",
      items: ["Nadzór autorski", "Zarządzanie budową", "Organizacja dostaw mebli i materiałów"],
    },
  ],
};
