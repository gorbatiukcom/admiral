"use client";

import { Project, Projects } from "../../constants/projects";

export type ServiceBud = {
  id: Project;
  title: string;
  description: string;
  description2?: string;
  services: { id: string; title: string; points: string[] }[];
};

export const ServicesBud: ServiceBud[] = [
  {
    id: Projects.remont,
    title: "Remont mieszkań",
    description:
      "Prace remontowe mieszkań mogą obejmować różne rodzaje prac, w zależności od zakresu i charakteru koniecznego remontu. Oto główne rodzaje prac remontowych:",
    services: [
      {
        id: "service0",
        title: "Remont kosmetyczny",
        points: [
          "• Malowanie ścian i sufitów.",
          "• Wymiana tapet.",
          "• Układanie podłóg (linoleum, wykładzina, panele).",
          "• Wymiana drzwi i okien.",
          "• Odświeżenie listew przypodłogowych i ościeżnic.",
        ],
      },
      {
        id: "service1",
        title: "Remont częściowy",
        points: [
          "• Wymiana lub odnowienie pojedynczych elementów (na przykład tylko kuchnia lub łazienka).",
          "• Lokalne naprawy (na przykład usuwanie pęknięć w ścianach).",
        ],
      },
      {
        id: "service2",
        title: "Remont designerski",
        points: [
          "• Całkowita przebudowa i zmiana stylu wnętrza według indywidualnego projektu.",
          "• Praca z projektantem nad stworzeniem unikalnej i funkcjonalnej przestrzeni.",
          "• Włączenie niestandardowych rozwiązań i materiałów.",
        ],
      },
      {
        id: "service3",
        title: "Remont kapitalny",
        points: [
          "• Wymiana instalacji elektrycznej.",
          "• Odnowienie instalacji sanitarnych.",
          "• Wyrównywanie ścian i sufitów (tynkowanie, szpachlowanie).",
          "• Całkowita wymiana podłóg.",
          "• Instalacja nowych okien i drzwi.",
          "• Przebudowa pomieszczeń (wyburzanie lub stawianie ścian).",
        ],
      },
      {
        id: "service4",
        title: "Euroremont",
        points: [
          "• Użycie materiałów wysokiej jakości.",
          "• Nowoczesne technologie wykończeniowe i dekoracyjne.",
          "• Designerskie podejście do aranżacji wnętrz.",
          "• Montaż skomplikowanych konstrukcji sufitowych i oświetleniowych.",
          '• Instalacja systemów "inteligentny dom".',
        ],
      },
      {
        id: "service5",
        title: "Prace inżynierskie",
        points: [
          "• Instalacja i wymiana systemów grzewczych, wodociągowych i kanalizacyjnych.",
          "• Montaż systemów klimatyzacyjnych i wentylacyjnych.",
          "• Instalacja ogrzewania podłogowego.",
        ],
      },
    ],
  },
  {
    id: Projects.keyRemont,
    title: 'Remont mieszkania "pod klucz"',
    description:
      'Remont mieszkania "pod klucz" obejmuje pełen zakres prac, niezbędnych do doprowadzenia mieszkania do stanu całkowicie gotowego do zamieszkania. Może to obejmować następujące etapy i rodzaje prac:',
    description2:
      'W ten sposób, remont "pod klucz" obejmuje wszystkie etapy od planowania po pełną gotowość mieszkania do zamieszkania, zapewniając klientowi maksymalną wygodę i minimalizując jego udział w procesie remontu.',
    services: [
      {
        id: "service0",
        title: "Projektowanie i przygotowanie",
        points: [
          "• Tworzenie projektu wnętrza, uzgodnienie z klientem.",
          "• Sporządzenie kosztorysu i harmonogramu prac.",
          "• Zakup niezbędnych materiałów i sprzętu.",
        ],
      },
      {
        id: "service1",
        title: "Prace hydrauliczne",
        points: [
          "• Montaż nowej armatury sanitarnej (wanny, toalety, umywalki).",
          "• Montaż systemów wodociągowych i kanalizacyjnych.",
          "• Instalacja podgrzewaczy wody i systemów filtracji wody.",
        ],
      },
      {
        id: "service2",
        title: "Prace demontażowe",
        points: [
          "• Rozbiórka starych ścianek działowych, drzwi i okien.",
          "• Demontaż starych pokryć podłogowych i ściennych.",
          "• Usunięcie starej armatury i instalacji elektrycznych.",
        ],
      },
      {
        id: "service3",
        title: "Prace elektryczne",
        points: [
          "• Układanie nowej instalacji elektrycznej.",
          "• Montaż gniazdek, włączników, lamp i innych urządzeń elektrycznych.",
        ],
      },
      {
        id: "service4",
        title: "Prace budowlane i montażowe",
        points: [
          "• Wznoszenie nowych ścianek działowych i ścian.",
          "• Montaż nowych okien i drzwi.",
          "• Montaż nowych konstrukcji sufitowych (sufity podwieszane lub napinane).",
          "• Wykonanie nowych instalacji inżynieryjnych (instalacja elektryczna, wodociągowa, kanalizacyjna grzewcza).",
        ],
      },
      {
        id: "service5",
        title: "Wykończenie i dekoracja",
        points: [
          "• Montaż elementów dekoracyjnych (listwy, sztukateria itp.).",
          "• Montaż mebli kuchennych i zabudowanych urządzeń.",
          "• Montaż szaf przesuwnych, półek w zabudowie i innych konstrukcji meblowych.",
        ],
      },
      {
        id: "service6",
        title: "Prace wykończeniowe",
        points: [
          "• Wyrównywanie ścian i sufitów (tynkowanie, szpachlowanie).",
          "• Układanie pokryć podłogowych (panele, parkiet, płytki itp.).",
          "• Malowanie ścian i sufitów lub tapetowanie.",
          "• Montaż listew przypodłogowych i opasek drzwiowych.",
        ],
      },
      {
        id: "service7",
        title: "Prace końcowe",
        points: [
          "• Sprzątanie pomieszczeń po remoncie.",
          "• Przeprowadzenie ostatecznej kontroli wszystkich systemów i urządzeń.",
          "• Przekazanie obiektu klientowi, w tym przekazanie wszystkich dokumentów i instrukcji obsługi.",
        ],
      },
    ],
  },
];

export const ProjectsLinks: {
  [index in Project]: { prev: Project; next: Project };
} = {
  [Projects.remont]: {
    prev: "keyRemont",
    next: "keyRemont",
  },
  [Projects.keyRemont]: {
    prev: "remont",
    next: "remont",
  },
};
