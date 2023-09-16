import { Zoom } from "@material-ui/core";

export interface Skill {
  name: string;
}

export interface SkillSection {
  name: string;
  skills: Skill[];
}

const defaultSkillData: SkillSection[] = [
  {
    name: "Programming",
    skills: [
      { name: "C++" },
      { name: "Python" },
      { name: "Java" },
      { name: "OCaml" },
      { name: "Node.js" },
      { name: "R" },
      { name: "Go" },
    ],
  },
  {
    name: "Database Management",
    skills: [
      { name: "MySQL" },
      { name: "Google Firestore" },
      { name: "MongoDB" },
      { name: "AWS RDS" },
      { name: "PostgreSQL" },
    ],
  },
  {
    name: "Design / Markup",
    skills: [
      { name: "HTML" },
      { name: "LaTeX" },
      { name: "Markdown" },
      { name: "CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    name: "Web Application",
    skills: [
      { name: "AWS Amplify" },
      { name: "Flask" },
      { name: "Heroku" },
      { name: "React" },
      { name: "Express" },
    ],
  },
  {
    name: "Miscellaneous",
    skills: [
      { name: "Vim" },
      { name: "SVN" },
      { name: "Linux" },
      { name: "Tmux" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Git" },
      { name: "Microsoft Office" },
      { name: "Google Firebase" },
    ],
  },
];

export default defaultSkillData;
