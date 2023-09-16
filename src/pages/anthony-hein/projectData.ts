export interface Project {
  name: string;
  link: string;
  date: string;
  tools: string[];
  descriptions: string[];
}

const defaultProjectData: Project[] = [
  {
    name: "Searching for Optimal Strategies in Proof-of-Stake Mining Games with Access to External Randomness",
    link: "https://thesis.anthonyhein.com",
    date: "9/2021 - 5/2022",
    tools: [
      "Game Theory",
      "Research",
      "Cryptocurrency",
      "Proof-of-Stake",
      "Python",
      "Markov Decision Process",
    ],
    descriptions: [
      "Narrowed theoretical range over which strategic manipulation is possible for a model of a proof-of-stake mining protocol by ~72%.",
      "Programmatically searched strategy space in a simulation environment.",
    ],
  },
  {
    name: "Using Meteorological Data Towards Horse Racing Prediction",
    link: "https://horseracing.anthonyhein.com",
    date: "9/2021 - 12/2021",
    tools: [
      "Python",
      "Pandas",
      "Data Science",
      "Machine Learning",
      "Neural Networks",
    ],
    descriptions: [
      "Researched predictive power of pressure and temperature in horse racing.",
    ],
  },
  {
    name: "Gin Rummy EAAI Research Challenge",
    link: "https://ojs.aaai.org/index.php/AAAI/article/view/17830",
    date: "6/2020 - 2/2021",
    tools: [
      "Python",
      "Java",
      "Reinforcement Learning",
      "Research",
      "Game Theory",
    ],
    descriptions: [
      "Wrote RL agent to play Gin Rummy and published accompanying write-up.",
    ],
  },
];

export default defaultProjectData;
