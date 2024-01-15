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
    image: "/images/house/pc09-7.jpg",
    images: [
      "/images/house/pc09-7.jpg",
      "/images/house/cc15-3.jpg",
      "/images/house/cc18-2.jpg",
      "/images/house/cc19-4.jpg",
      "/images/house/cc28-3.jpg",
      "/images/house/cc29-2.jpg",
      "/images/house/cc14-1.jpg",
      "/images/house/cc30-2.jpg",
      "/images/house/cc32-2.jpg",
      "/images/house/cc34-1.jpg",
      "/images/house/8FGZxxDJxUMp.jpg",
      "/images/house/pc03-8.jpg",
      "/images/house/pc18-5.jpg",
      "/images/house/pc04-9.jpg",
      "/images/house/pc05-1.jpg",
      "/images/house/pc06-4.jpg",
      "/images/house/pc07-5.jpg",
      "/images/house/pc08-6.jpg",
      "/images/house/pc10-2.jpg",
      "/images/house/pc11-3.jpg",
      "/images/house/pc12-4.jpg",
      "/images/house/pc13-5.jpg",
      "/images/house/pc14-1-1.jpg",
      "/images/house/pc14-10.jpg",
      "/images/house/pc15-1.jpg",
      "/images/house/pc16-3.jpg",
      "/images/house/pc17-4.jpg",
      "/images/house/pc19-6.jpg",
    ],
    description: "Powierzchnia domu 298 m2",
  },
  {
    projectId: "jufairi",
    name: "A. Jufairi",
    image: "/images/qatar1/A. Jufairi - master updated-3.jpg",
    images: [
      "/images/qatar1/A. Jufairi - master updated-3.jpg",
      "/images/qatar1/A. Jufairi - master updated-4.jpg",
      "/images/qatar1/A. Jufairi - master updated-5.jpg",
      "/images/qatar1/A. Jufairi - master updated-6.jpg",
      "/images/qatar1/A. Jufairi - master updated-7.jpg",
      "/images/qatar1/A. Jufairi - master updated-8.jpg",
      "/images/qatar1/A. Jufairi - master updated-13.jpg",
      "/images/qatar1/A. Jufairi - master updated-15.jpg",
      "/images/qatar1/A. Jufairi - master updated-16.jpg",
      "/images/qatar1/A. Jufairi - master updated-17.jpg",
      "/images/qatar1/A. Jufairi - master updated-18.jpg",
      "/images/qatar1/A. Jufairi - master updated-19.jpg",
      "/images/qatar1/A. Jufairi - master updated-21.jpg",
      "/images/qatar1/A. Jufairi - master updated-22.jpg",
      "/images/qatar1/A. Jufairi - master updated-23.jpg",
      "/images/qatar1/A. Jufairi - master updated-24.jpg",
    ],
    description: "Powierzchnia domu 350 m2",
  },
  {
    projectId: "kuwari-villa",
    name: "A. Kuwari Villa & Majlis Design",
    image: "/images/qatar2/A. Kuwari Villa & Majlis Design updated-2.jpg",
    images: [
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-2.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-3.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-4.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-5.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-6.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-7.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-8.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-9.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-10.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-11.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-12.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-13.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-14.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-15.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-16.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-17.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-18.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-19.jpg",
      "/images/qatar2/A. Kuwari Villa & Majlis Design updated-20.jpg",
    ],
    description: "Powierzchnia domu 600 m2",
  },
];
