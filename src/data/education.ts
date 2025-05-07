export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021 — 2024",
    institution: "Victoria University of Wellington",
    degree: "Doctor of Philosophy (PhD) in Artificial Intelligence",
    thesis: "Meta-Learning Loss Functions for Deep Neural Networks",
    thesisUrl: "https://arxiv.org/abs/2406.09713",
    advisor: "Dr Qi Chen, Prof Bing Xue, and Prof Mengjie Zhang",
  },
  {
    year: "2020 — 2020",
    institution: "Victoria University of Wellington",
    degree: "Bachelor of Science Honours (BSc Hons); First Class; Majoring in Computer Science specialising in Artificial Intelligence",
  },
  {
    year: "2016 — 2019",
    institution: "Victoria University of Wellington",
    degree: "Bachelor of Science (BSc); Triple majoring in: Computer Science, Information Systems, and Philosophy",
  },
];
