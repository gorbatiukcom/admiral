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
  pdf?: string;
  description?: string;
};

export const PortfolioProjects: PortfolioProject[] = [
  {
    projectId: "budynek-w-lodzi",
    name: "Budynek w Łodżi",
    image: "/images/portfolio_1.png",
    pdf: "/pdfs/part1.pdf",
    images: [
      "/images/cc13-1.jpg",
      "/images/cc14-1.jpg",
      "/images/cc15-3.jpg",
      "/images/cc18-2.jpg",
      "/images/cc19-4.jpg",
      "/images/cc28-3.jpg",
      "/images/cc29-2.jpg",
      "/images/cc30-2.jpg",
      "/images/cc32-2.jpg",
      "/images/cc34-1.jpg",
      "/images/imgonline-com-ua-BigPicture-8FGZxxDJxUMp.jpg",
      "/images/imgonline-com-ua-BigPicture-NW4VNCnJUO5IcQZP.jpg",
      "/images/pc03-8.jpg",
      "/images/pc04-9.jpg",
      "/images/pc05-1.jpg",
      "/images/pc06-4.jpg",
      "/images/pc07-5.jpg",
      "/images/pc08-6.jpg",
      "/images/pc09-7.jpg",
      "/images/pc10-2.jpg",
      "/images/pc11-3.jpg",
      "/images/pc12-4.jpg",
      "/images/pc13-5.jpg",
      "/images/pc14-1-1.jpg",
      "/images/pc14-10.jpg",
      "/images/pc15-1.jpg",
      "/images/pc16-3.jpg",
      "/images/pc17-4.jpg",
      "/images/pc18-5.jpg",
      "/images/pc19-6.jpg",
    ],
  },
  {
    name: "Budynek w Łodżi2",
    image: "/images/portfolio_1.png",
    projectId: "budynek-w-lodzi2",
    pdf: "/pdfs/part2.pdf",
  },
  {
    name: "Budynek w Łodżi3",
    image: "/images/portfolio_1.png",
    projectId: "budynek-w-lodzi3",
  },
  {
    name: "Budynek w Łodżi3",
    image: "/images/portfolio_1.png",
    projectId: "budynek-w-lodzi3",
  },
  {
    name: "Budynek w Łodżi3",
    image: "/images/portfolio_1.png",
    projectId: "budynek-w-lodzi3",
  },
  {
    name: "Budynek w Łodżi3",
    image: "/images/portfolio_1.png",
    projectId: "budynek-w-lodzi3",
  },
];
