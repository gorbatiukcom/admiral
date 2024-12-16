enum Projects {
  basic = "basic",
  advanced = "advanced",
  authorSupervision = "authorSupervision",
  comprehensive = "comprehensive",
}

export type Project = keyof typeof Projects;

type PortfolioProject = {
  projectId: string;
  name: string;
  image: string;
  images?: string[];
  shortDescription?: string;
  description?: string;
};

export const PortfolioProjects: PortfolioProject[] = [
  {
    projectId: "lodz-gdanska-24",
    name: "Łódż. Gdańska 24",
    image: "/images/lodz-gdanska-24/4.jpg",
    images: [
      "/images/lodz-gdanska-24/4.jpg",
      "/images/lodz-gdanska-24/1.jpg",
      "/images/lodz-gdanska-24/2.jpg",
      "/images/lodz-gdanska-24/3.jpg",
      "/images/lodz-gdanska-24/5.jpg",
      "/images/lodz-gdanska-24/6.jpg",
      "/images/lodz-gdanska-24/7.jpg",
      "/images/lodz-gdanska-24/8.jpg",
      "/images/lodz-gdanska-24/9.jpg",
      "/images/lodz-gdanska-24/10.jpg",
    ],
    shortDescription: "Powierzchnia mieszkania 102 m2",
    description: `Przekształcone mieszkanie w centrum Łodzi na wynajem krótkoterminowy!
Mieszkanie w kamienicy, całkowicie odnowione i przystosowane do komfortowego wynajmu krótkoterminowego. Idealny wybór dla turystów. Mieszkanie z nowoczesnym wnętrzem zapewnia wygodny pobyt. Projekt został zrealizowany dla klienta, który specjalizuje się w wynajmie mieszkań na doby.`,
  },
  {
    projectId: "lodz-al-tadeusza-kosciuszki-32",
    name: "Łódź. Al. Tadeusza Kościuszki 32",
    image: "/images/lodz-al-tadeusza-kosciuszki-32/23.jpg",
    images: [
      "/images/lodz-al-tadeusza-kosciuszki-32/23.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/1.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/2.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/3.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/4.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/5.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/6.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/7.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/8.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/9.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/10.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/11.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/12.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/13.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/14.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/15.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/16.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/17.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/18.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/19.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/20.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/21.jpg",
      "/images/lodz-al-tadeusza-kosciuszki-32/22.jpg",
    ],
    shortDescription: "Powierzchnia mieszkania 128 m2",
    description: `Kolejna realizacja w Łódzkiej kamienicy! Tym razem zaprojektowaliśmy i wykonaliśmy mieszkanie od A do Z dla firmy zajmującej się wynajmem krótkoterminowym i długoterminowym.
Z jednego dużego mieszkania stworzyliśmy 5 nowoczesnych apartamentów, które łączą funkcjonalność z wyjątkowym stylem.`,
  },
  {
    projectId: "warszawa-herbu-oksza-9",
    name: "Warszawa. Herbu Oksza 9",
    image: "/images/warszawa-herbu-oksza-9/1.jpg",
    images: [
      "/images/warszawa-herbu-oksza-9/1.jpg",
      "/images/warszawa-herbu-oksza-9/2.jpg",
      "/images/warszawa-herbu-oksza-9/3.jpg",
      "/images/warszawa-herbu-oksza-9/4.jpg",
    ],
    shortDescription: "Dwie nowe łazienki",
    description: `Dwie nowe łazienki — praca zakończona!
Nasz zespół ukończył projekt remontu dwóch łazienek. Wszystko zgodnie z planem, na czas i z uwzględnieniem oczekiwań klienta.
Co zrobiliśmy:
Pełna wymiana instalacji.
Układanie płytek i montaż armatury.
Instalacja oświetlenia i akcesoriów.
Czysto, starannie i solidnie. Jeśli potrzebujecie remontu, który spełni Wasze oczekiwania, skontaktujcie się z nami — wykonamy wszystko rzetelnie!`,
  },
];
