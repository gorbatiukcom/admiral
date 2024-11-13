export type UnitOfMeasure = {
  id: string;
  name: string;
};

export const UnitsOfMeasure = [
  {
    id: "szt",
    name: "szt",
  },
  {
    id: "m2",
    name: "m2",
  },
  {
    id: "mb",
    name: "mb",
  },
  {
    id: "pkt",
    name: "pkt",
  },
  {
    id: "godz",
    name: "godz",
  },
  {
    id: "cm",
    name: "cm",
  },
  {
    id: "cm",
    name: "Rolka",
  },
  {
    id: "rolka",
    name: "Rolka",
  },
  {
    id: "zebro",
    name: "Żebro",
  },
];

export type ServiceVariant = {
  id: string;
  name: string;
  price: number;
};
export type ServiceType = {
  id: string;
  name: string;
};
export type Service = {
  id: string;
  serviceTypeId: string;
  name: string;
  unitOfMeasureId: string;
  variants: ServiceVariant[];
};

export const ServicesTypes: ServiceType[] = [
  {
    id: "drzwi",
    name: "Drzwi",
  },
];
export const Services: Service[] = [
  {
    id: "test",
    serviceTypeId: "drzwi",
    name: "Montaż drzwi pojedynczych (zewnętrz)",
    unitOfMeasureId: "szt",
    variants: [
      {
        id: "0",
        name: "Железо-бетон",
        price: 440,
      },
      {
        id: "1",
        name: "Кирпич обычный",
        price: 720,
      },
    ],
  },
];
