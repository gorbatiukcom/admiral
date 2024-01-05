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
  description?: string;
};

export const PortfolioProjects: PortfolioProject[] = [
  {
    projectId: "budynek-w-warszawie",
    name: "Budynek w Warszawie",
    image: "/images/house/portfolio_1.png",
    images: [
      "/images/house/cc13-1.jpg",
      "/images/house/cc14-1.jpg",
      "/images/house/cc15-3.jpg",
      "/images/house/cc18-2.jpg",
      "/images/house/cc19-4.jpg",
      "/images/house/cc28-3.jpg",
      "/images/house/cc29-2.jpg",
      "/images/house/cc30-2.jpg",
      "/images/house/cc32-2.jpg",
      "/images/house/cc34-1.jpg",
      "/images/house/8FGZxxDJxUMp.jpg",
      "/images/house/NW4VNCnJUO5IcQZP.jpg",
      "/images/house/pc03-8.jpg",
      "/images/house/pc04-9.jpg",
      "/images/house/pc05-1.jpg",
      "/images/house/pc06-4.jpg",
      "/images/house/pc07-5.jpg",
      "/images/house/pc08-6.jpg",
      "/images/house/pc09-7.jpg",
      "/images/house/pc10-2.jpg",
      "/images/house/pc11-3.jpg",
      "/images/house/pc12-4.jpg",
      "/images/house/pc13-5.jpg",
      "/images/house/pc14-1-1.jpg",
      "/images/house/pc14-10.jpg",
      "/images/house/pc15-1.jpg",
      "/images/house/pc16-3.jpg",
      "/images/house/pc17-4.jpg",
      "/images/house/pc18-5.jpg",
      "/images/house/pc19-6.jpg",
    ],
    description: "Powierzchnia domu 102 m2",
  },
];
