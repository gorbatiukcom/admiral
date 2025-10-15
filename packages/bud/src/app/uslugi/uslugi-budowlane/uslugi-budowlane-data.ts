"use client";

import { Project, Projects } from "../../../constants/projects";

export type UslugiBudowlaneDataType = {
  id: Project;
  title: string;
  description: string;
  description2?: string;
  services: { id: string; title?: string; points: string[]; description?: string }[];
};

export const UslugiBudowlaneData: UslugiBudowlaneDataType = {
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
};
