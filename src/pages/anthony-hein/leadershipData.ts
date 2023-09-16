export interface Leadership {
  organization: string;
  date: string;
  role: string;
  description: string;
}

const defaultLeadershipData: Leadership[] = [
  {
    organization: "Princeton Puzzles",
    date: "9/2018 - 5/2022",
    role: "Treasurer",
    description:
      "Annually raised $6000 and gathered company swag to hold the Princeton Puzzle Hunt.",
  },
  {
    organization: "Daily Princetonian",
    date: "7/2020 - 9/2021",
    role: "Chief Technology Officer",
    description:
      "As inaugural CTO, built and led newspaper's tech team in development of internal business tools, consumer-facing websites, and editorial projects.",
  },
];

export default defaultLeadershipData;
