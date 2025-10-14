"use client";

import { Project, Projects } from "../../../constants/projects";

export type ServiceBud = {
  id: Project;
  title: string;
  description: string;
  description2?: string;
  services: { id: string; title?: string; points: string[]; description?: string }[];
};

export const ServicesBud: { [index in Project]: ServiceBud } = {
  [Projects.remont]: {
    id: Projects.remont,
    title: `Remont mieszkań \nczęściowe i kosmetyczne prace remontowe`,
    description:
      "Nie zawsze potrzebny jest pełny remont mieszkania „od A do Z”. Czasem wystarczy odświeżenie wnętrz, drobne naprawy lub wymiana pojedynczych elementów, aby przywrócić komfort i estetykę. W naszej ofercie znajdziesz różne formy remontu częściowego — od prostych prac kosmetycznych aż po bardziej zaawansowane naprawy inżynierskie.",
    services: [
      {
        id: "service0",
        title: "Remont kosmetyczny",
        points: [
          "• Malowanie i tapetowanie ścian oraz sufitów, aby szybko odświeżyć wygląd wnętrza.",
          "• Wymiana podłóg (np. panele, wykładzina), jeśli stare pokrycia są zużyte.",
          "• Odświeżenie stolarki — renowacja lub wymiana drzwi, okien, listew przypodłogowych.",
          "• Drobne naprawy (usunięcie rys, pęknięć, niewielkie poprawki dekoratorskie).",
        ],
        description:
          "Idealny wybór, gdy chcesz w krótkim czasie poprawić estetykę mieszkania bez generalnego remontu.",
      },
      {
        id: "service1",
        title: "Remont wybranych pomieszczeń",
        points: [
          "• Kuchnia: wymiana blatów, frontów szafek, płytek ściennych i podłogowych.",
          "• Łazienka: montaż nowych sanitariatów, kafelkowanie, odświeżenie fug, wymiana armatury.",
          "• Pokój dzienny lub sypialnia: zmiana podłogi, odświeżenie ścian, instalacja nowych punktów oświetleniowych.",
        ],
        description:
          "Dzięki remontowi częściowemu możesz skupić się tylko na tych pomieszczeniach, które najbardziej tego potrzebują.",
      },
      {
        id: "service2",
        title: "Drobne prace inżynierskie",
        points: [
          "• Lokalna wymiana instalacji wodno-kanalizacyjnej (np. tylko w łazience lub kuchni).",
          "• Modernizacja elektryki — dodanie gniazdek, wymiana bezpieczników czy montaż nowych punktów świetlnych.",
          "• Montaż ogrzewania podłogowego w wybranym pomieszczeniu (np. kuchnia, łazienka).",
        ],
        description:
          "Pozwala to poprawić funkcjonalność mieszkania bez przeprowadzania prac na całej powierzchni.",
      },
    ],
  },
  [Projects.keyRemont]: {
    id: Projects.keyRemont,
    title: 'Remont mieszkania - "pod klucz"',
    description:
      "Remont mieszkania „pod klucz” to kompleksowe podejście do modernizacji domu lub mieszkania — od wstępnego projektu aż po ostateczne wykończenie i przekazanie w pełni gotowego wnętrza. W praktyce oznacza to przeprowadzenie wszystkich niezbędnych robót — od rozbiórki starych elementów i postawienia nowych ścian aż po montaż mebli i końcowe sprzątanie. Naszym celem jest przejęcie całego procesu na siebie, byś mógł zaoszczędzić czas i uniknąć stresu. Poniżej przedstawiamy kluczowe etapy prac w kolejności, w jakiej najczęściej przebiegają.",
    services: [
      {
        id: "service0",
        points: [
          "• Koncepcja wnętrza i ustalenie budżetu: omówienie z klientem zakresu, stylu i kosztów.",
          "• Harmonogram i kosztorys: stworzenie planu działań oraz listy materiałów.",
          "• Zakup materiałów i sprzętu: zabezpieczenie wszystkiego, co potrzebne na kolejnych etapach.",
        ],
      },
      {
        id: "service1",
        points: [
          "• Rozbiórka niepotrzebnych elementów: stare ściany działowe, okna, drzwi, podłogi.",
          "• Usunięcie starej armatury i instalacji: jeśli wymaga tego projekt.",
          "• Zabezpieczenie pomieszczeń: ochrona mebli (jeśli zostają), podłoża i innych powierzchni, które nie będą remontowane.",
        ],
      },
      {
        id: "service2",
        points: [
          "• Budowa nowych ścianek działowych i konstrukcji sufitowych (np. podwieszanych).",
          "• Instalacje elektryczne: układanie kabli, montaż gniazdek, wyłączników i oświetlenia.",
          "• Instalacje hydrauliczne: montaż rur, grzejników, przyłączy wodno-kanalizacyjnych.",
          "• Inne systemy inżynierskie (ogrzewanie podłogowe, wentylacja mechaniczna itp.), jeśli przewidziano w projekcie.",
        ],
      },
      {
        id: "service3",
        points: [
          "• Wyrównywanie ścian i sufitów (tynkowanie, szpachlowanie).",
          "• Układanie podłóg (panele, parkiet, płytki).",
          "• Malowanie lub tapetowanie ścian i sufitów.",
          "• Montaż okien i drzwi, listew przypodłogowych, opasek drzwiowych.",
          "• Elementy dekoracyjne: sztukateria, listwy ozdobne, oświetlenie dekoracyjne.",
          "• Montaż mebli kuchennych, zabudowanych urządzeń oraz innych konstrukcji meblowych (szafy, półki itp.).",
        ],
      },
      {
        id: "service4",
        points: [
          "• Sprzątanie: pozbycie się odpadów poremontowych, mycie podłóg i okien.",
          "• Kontrola jakości: test działania instalacji, przegląd wykończenia pod kątem ewentualnych usterek.",
          "• Przekazanie mieszkania: omówienie z klientem finalnego efektu i przekazanie dokumentacji (gwarancje, instrukcje).",
        ],
      },
    ],
  },
};

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
