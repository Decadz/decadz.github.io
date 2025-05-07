export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jun. 2025 — Present",
    title: "Senior Applied Scientist",
    company: "Oracle",
    description: "Scientist at Oracle Health and AI (OHAI) utilizing large language models and generative AI techniques to develop applications that support and streamline healthcare. ",
    // manager: "Dr Peter Zhong"
  },
  {
    date: "Sep. 2024 — Mar. 2025",
    title: "Applied Scientist",
    company: "Amazon",
    description:"Internship in the AU computer vision team, automating the labor-intensive process of creating 3D assets for Amazon’s storefront by designing and implementing a foundation model for 3D geometry and material generation.",
    // advisor: "Dr Violetta Shevchenko"
  },
];
