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

const schoolData: School[] = [
  {
    name: "Princeton University",
    cumulativeGPA: "4.00 / 4.00",
    attended: "2018 - 2022",
    degree: {
      text: "Computer Science B.S.E.",
      link: "https://www.cs.princeton.edu/",
    },
    minors: [
      {
        text: "Statistics and Machine Learning",
        link: "https://csml.princeton.edu/about",
      },
      {
        text: "Optimization and Quantitative Decision Science",
        link: "https://orfe.princeton.edu/undergraduate/oqds-certificate",
      },
      {
        text: "Applied and Computational Mathematics",
        link: "https://www.pacm.princeton.edu/about",
      },
    ],
    honors: [
      {
        text: "Class of 1939 Princeton Scholar Award",
        link: "https://www.princeton.edu/news/2021/08/30/undergraduate-prizes-awarded-seven-students-academic-achievement",
      },
      {
        text: "Philip Goldman '86 Computer Science Prize",
        link: "https://www.linkedin.com/in/anthein57/details/honors/",
      },
      {
        text: "George B. Wood Legacy Sophomore Prize",
        link: "https://www.princeton.edu/news/2020/09/29/undergraduate-prizes-awarded-seven-students-academic-achievement",
      },
      {
        text: "Accenture Prize in Computer Science",
        link: "https://www.linkedin.com/in/anthein57/details/honors/",
      },
      {
        text: "Phi Beta Kappa Society Early Inductee",
        link: "https://ua.princeton.edu/contents/academic-regulations/graduation-and-honors",
      },
      {
        text: "Society of Sigma Xi Member",
        link: "https://ua.princeton.edu/contents/academic-regulations/graduation-and-honors",
      },
      {
        text: "Shapiro Prize for Academic Excellence (x2)",
        link: "https://odoc.princeton.edu/faculty-staff/shapiro-prize-academic-excellence",
      },
      {
        text: "Tau Beta Pi National Engineering Society",
        link: "https://tbp.princeton.edu/",
      },
      {
        text: "Outstanding Computer Science Thesis Prize",
        link: "https://thesis.anthonyhein.com/",
      },
      {
        text: "Outstanding Student Teaching Award",
        link: "",
      },
    ],
  },
  {
    name: "JFK Memorial High School",
    cumulativeGPA: "4.33 / 4.33",
    attended: "2014 - 2018",
    honors: [
      {
        text: "Valedictorian",
        link: "https://youtu.be/tye-XioSlWg?t=595",
      },
      {
        text: "Mr. JFK",
        link: "https://youtu.be/DSCRt7CWLWE?t=3996",
      },
      {
        text: "National AP Scholar",
        link: "https://apcentral.collegeboard.org/exam-administration-ordering-scores/scores/awards/scholar-awards",
      },
      {
        text: "NJSIAA Scholar Athlete",
        link: "https://twitter.com/jfkmhs/status/998549134444507138?lang=en",
      },
      {
        text: "American Legion Jersey Boys State Representative",
        link: "https://aljbs.org/about/",
      },
      {
        text: "Student Government President",
      },
    ],
  },
];

export default schoolData;
