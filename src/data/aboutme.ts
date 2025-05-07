export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  resumeUrl?: string;
  twitterUsername?: string;
  linkedinUsername?: string;
  githubUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Christian Raymond",
  title: "Applied Research Scientist",
  description:"I'm a senior applied scientist at Oracle, where I work on applying large language models to challenging problems in healthcare. Previously, I was at Amazon, developing a foundation model for 3D computer vision. I completed my PhD at Victoria University of Wellington in New Zealand, where I focused on meta-learning loss functions for deep neural networks. My research interests include meta-learning, meta-optimization, hyperparameter optimization, few-shot learning, and continual learning.",
  email: "christianfraymond@gmail.com",
  imageUrl: "/profile-picture.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=nK9RlDgAAAAJ",
  linkedinUsername: "christianfraymond",
  githubUsername: "Decadz",
  resumeUrl: "/christian-raymond-cv.pdf",
};
