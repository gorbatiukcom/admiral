export const propertyOptions = [
  { value: "mieszkanie", label: "Mieszkanie" },
  { value: "budynek", label: "Budynek" },
  { value: "restauracja", label: "Restauracja" },
  { value: "biuro", label: "Biuro" },
];

export const serviceOptions = [
  { value: "projektowanie", label: "Projektowanie wnętrz" },
  { value: "remont", label: "Kompleksowy remont" },
  { value: "pod-klucz", label: "Realizacja pod klucz" },
  { value: "konsultacja", label: "Chcę porozmawiać o możliwościach" },
];

// Suggestions are deliberately not an exhaustive directory: any city can be entered.
export const regions = [
  {
    value: "dolnoslaskie",
    label: "Dolnośląskie",
    cities: ["Wrocław", "Wałbrzych", "Legnica", "Jelenia Góra"],
  },
  {
    value: "kujawsko-pomorskie",
    label: "Kujawsko-pomorskie",
    cities: ["Bydgoszcz", "Toruń", "Włocławek", "Grudziądz"],
  },
  {
    value: "lubelskie",
    label: "Lubelskie",
    cities: ["Lublin", "Zamość", "Chełm", "Biała Podlaska"],
  },
  {
    value: "lubuskie",
    label: "Lubuskie",
    cities: ["Gorzów Wielkopolski", "Zielona Góra", "Nowa Sól", "Żary"],
  },
  {
    value: "lodzkie",
    label: "Łódzkie",
    cities: ["Łódź", "Piotrków Trybunalski", "Pabianice", "Zgierz", "Bełchatów", "Skierniewice"],
  },
  {
    value: "malopolskie",
    label: "Małopolskie",
    cities: ["Kraków", "Tarnów", "Nowy Sącz", "Oświęcim"],
  },
  {
    value: "mazowieckie",
    label: "Mazowieckie",
    cities: ["Warszawa", "Radom", "Płock", "Siedlce", "Pruszków", "Piaseczno"],
  },
  { value: "opolskie", label: "Opolskie", cities: ["Opole", "Kędzierzyn-Koźle", "Nysa", "Brzeg"] },
  {
    value: "podkarpackie",
    label: "Podkarpackie",
    cities: ["Rzeszów", "Przemyśl", "Stalowa Wola", "Krosno"],
  },
  { value: "podlaskie", label: "Podlaskie", cities: ["Białystok", "Suwałki", "Łomża", "Augustów"] },
  { value: "pomorskie", label: "Pomorskie", cities: ["Gdańsk", "Gdynia", "Sopot", "Słupsk"] },
  {
    value: "slaskie",
    label: "Śląskie",
    cities: ["Katowice", "Częstochowa", "Gliwice", "Bielsko-Biała", "Sosnowiec"],
  },
  {
    value: "swietokrzyskie",
    label: "Świętokrzyskie",
    cities: ["Kielce", "Ostrowiec Świętokrzyski", "Starachowice", "Sandomierz"],
  },
  {
    value: "warminsko-mazurskie",
    label: "Warmińsko-mazurskie",
    cities: ["Olsztyn", "Elbląg", "Ełk", "Iława"],
  },
  {
    value: "wielkopolskie",
    label: "Wielkopolskie",
    cities: ["Poznań", "Kalisz", "Konin", "Piła", "Leszno"],
  },
  {
    value: "zachodniopomorskie",
    label: "Zachodniopomorskie",
    cities: ["Szczecin", "Koszalin", "Kołobrzeg", "Świnoujście"],
  },
  { value: "inna-lokalizacja", label: "Inna lokalizacja / poza Polską", cities: [] },
];
