export interface LinkableText {
  text: string;
  link?: string;
}

export type Minors = LinkableText[];
export type Honors = LinkableText[];

export interface School {
  name: string;
  cumulativeGPA: string;
  attended: string;
  degree?: LinkableText;
  minors?: Minors;
  honors: Honors;
}
