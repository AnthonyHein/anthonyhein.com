import { Zoom } from "@material-ui/core";

export interface Skill {
  name: string;
}

export interface SkillsSection {
  name: string;
  skills: Skill[];
}

const programming: Skill[] = [
  { name: "C++" },
  { name: "Python" },
  { name: "Java" },
  { name: "OCaml" },
  { name: "Node.js" },
  { name: "R" },
  { name: "Go" },
];

const databaseManagement: Skill[] = [
  { name: "MySQL" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "AWS RDS" },
];

const designMarkup: Skill[] = [
  { name: "HTML" },
  { name: "LaTeX" },
  { name: "Markdown" },
  { name: "CSS" },
  { name: "Bootstrap" },
];

const webApplication: Skill[] = [
  { name: "AWS Amplify" },
  { name: "Flask" },
  { name: "Heroku" },
  { name: "React" },
  { name: "Express" },
];

const miscellaneous: Skill[] = [
  { name: "Vim" },
  { name: "SVN" },
  { name: "Linux" },
  { name: "Tmux" },
  { name: "NumPy" },
  { name: "Pandas" },
  { name: "Matplotlib" },
  { name: "Git" },
  { name: "Microsoft Office" },
  { name: "Firebase" },
];

const skillsData: SkillsSection[] = [
  {
    name: "Programming",
    skills: programming,
  },
  {
    name: "Database Management",
    skills: databaseManagement,
  },
  {
    name: "Design / Markup",
    skills: designMarkup,
  },
  {
    name: "Web Application",
    skills: webApplication,
  },
  {
    name: "Miscellaneous",
    skills: miscellaneous,
  },
];

export default skillsData;
