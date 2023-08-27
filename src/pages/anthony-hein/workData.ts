export interface WorkExperience {
  organization: string;
  date: string;
  role: string;
  tools: string[];
  descriptions: string[];
}

const workData: WorkExperience[] = [
  {
    organization: "Five Rings Capital",
    date: "7/2022 - present",
    role: "Software Developer",
    tools: ["C++", "Python", "Linux", "MySQL", "Vim", "Tmux", "SVN"],
    descriptions: [
      "Developing signal measurement apps for quantitative trading algorithms.",
    ],
  },
  {
    organization: "Princeton University Computer Science Department",
    date: "9/2019 - 5/2022",
    role: "Tutor, Lab Teaching Assistant, Undergraduate Course Assistant, Grader",
    tools: ["Java", "OCaml", "C", "ARMv8", "Verilog"],
    descriptions: ["Held roles assisting students across seven courses."],
  },
  {
    organization: "Capital One",
    date: "6/2021 - 8/2021",
    role: "Technology Internship Program: Software Engineering Intern",
    tools: ["Node.js", "Angular 10", "AWS RDS", "AWS Lambda", "AWS S3"],
    descriptions: [
      "Developed data entry solution to track additional fields on bank accounts.",
    ],
  },
  {
    organization: "Five Rings Capital",
    date: "1/2021 - 2/2021",
    role: "Winter Externship: Software Engineering Intern",
    tools: ["C++", "Python", "Linux", "AWS Workspaces", "Vim", "React"],
    descriptions: [
      "Added features to internal-facing market simulator used by traders.",
    ],
  },
  {
    organization: "U.S. Air Force (AF) Kessel Run Lab",
    date: "6/2020 - 8/2020",
    role: "Premier College Intern Program: Software Engineering Intern",
    tools: ["Node.js", "Visual Studio", "PostgreSQL"],
    descriptions: [
      "Configured team's development environment on cloud service.",
    ],
  },
  {
    organization: "Pratt & Whitney",
    date: "6/2019 - 8/2019",
    role: "Digital Technology Leadership Program: Software Engineering Intern",
    tools: [
      "Oracle PL/SQL",
      "Automation",
      "Workflow Software",
      "Microsoft SSRS",
    ],
    descriptions: [
      "Set up real-time reporting on shop floor operations w/ Microsoft SSRS.",
      "Streamlined service requests with United Technologies Corp software.",
      "Wrote SQL scripts to transfer data from Excel to Oracle PL/SQL tables.",
    ],
  },
];

export default workData;
