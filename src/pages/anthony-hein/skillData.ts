import { Zoom } from "@material-ui/core";

export interface Skill {
  name: string;
}

export interface SkillSection {
  name: string;
  skills: Skill[];
}
