export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "PhD Thesis",
    title: "Meta-Learning Loss Functions for Deep Neural Networks",
    authors: "Christian Raymond",
    paperUrl: "https://arxiv.org/abs/2406.09713",
    codeUrl: "https://github.com/Decadz",
    bibtex: "raymond2024thesis.txt",
    award: "🏆 Doctoral Deans List",
    tldr: "In my thesis, I challenged the conventional approach of manually designing and selecting loss functions. Instead, I showed how meta-learning could be leveraged to automatically infer the loss function directly from the data, yielding fundamental improvements in the generalization and training efficiency across a range of deep learning models.",
    // if you have an image in public/images, you can use it like this:
    imageUrl: "/banner-thesis.JPG"
  },
  {
    year: "2024",
    conference: "Preprint",
    title: "Meta-Learning Neural Procedural Biases",
    authors: "Christian Raymond, Qi Chen, Bing Xue, Mengjie Zhang",
    paperUrl: "https://arxiv.org/abs/2406.07983",
    codeUrl: "https://github.com/Decadz/Neural-Procedural-Bias-Meta-Learning",
    bibtex:"/raymond2024meta.txt",
    tldr: "In this paper, we develop Neural Procedural Bias Meta-Learning (NPBML) a task adaptive method for simultaneously meta-learning the parameter initialization, optimizer, and loss function. The results show that by meta-learning the procedural biases of neural networks we can induce robust inductive biases into our learning algorithm, thereby tailoring it towards a specific distribution of learning tasks.",
    imageUrl: "/banner-npbml.JPG"
  },
  {
    year: "2023",
    conference: "Preprint",
    title: "Online Loss Function Learning",
    authors: "Christian Raymond, Qi Chen, Bing Xue, Mengjie Zhang",
    paperUrl: "https://arxiv.org/abs/2301.13247",
    codeUrl: "https://github.com/Decadz/Online-Loss-Function-Learning",
    bibtex:"/raymond2023online.txt",
    tldr: "In this paper, we develop a method called Adaptive Loss Function Learning (AdaLFL) for meta-learning adaptive loss functions that evolve throughout the learning process. In contrast to prior loss function learning techniques that meta-learn static loss functions, our method instead meta-learns an adaptive loss function that updates the parameters of the loss function in lockstep with the parameters of the base model.",
    imageUrl: "/banner-adalfl.jpg"
  },
  {
    year: "2023",
    conference: "TPAMI",
    title: "Learning Symbolic Model-Agnostic Loss Functions via Meta-Learning",
    authors: "Christian Raymond, Qi Chen, Bing Xue, Mengjie Zhang",
    paperUrl: "https://arxiv.org/abs/2209.08907",
    codeUrl: "https://github.com/Decadz/Evolved-Model-Agnostic-Loss",
    bibtex:"/raymond2023learning.txt",
    tldr: "In this paper, we propose Evolved Model-Agnostic Loss (EvoMAL), a novel meta-learning method for discovering symbolic, interpretable loss functions. EvoMAL combines evolution-based search with gradient-based optimization, enabling efficient training on commodity hardware. We also present a theoretical analysis of meta-learned loss functions, which motivates a new label smoothing technique called Sparse Label Smoothing Regularization (SparseLSR).",
    imageUrl: "/banner-sparse-lsr.jpg"
  },
  {
    year: "2023",
    conference: "GECCO",
    title: "Local-Search for Symbolic Loss Function Learning",
    authors: "Christian Raymond, Qi Chen, Bing Xue, Mengjie Zhang",
    paperUrl: "https://arxiv.org/abs/2403.00865",
    codeUrl: "https://github.com/Decadz/Evolved-Model-Agnostic-Loss",
    bibtex:"/raymond2023fast.txt",
    award: "🏆 Nominated for Best Paper",
    tldr: "In this paper, we propose a meta-learning framework for loss function learning that combines evolutionary symbolic search with gradient-based local optimization. The framework first discovers symbolic loss functions using genetic programming, then refines them by solving a bilevel optimization problem via unrolled differentiation.",
    imageUrl: "/banner-evomal.jpg"
  }
];
