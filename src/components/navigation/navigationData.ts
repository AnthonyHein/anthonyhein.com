export interface NavigationSection {
  name: string;
  slug: string;
}

export interface NavigationMember {
  name: "Anthony Hein";
  slug: "anthony-hein";
  navigation: NavigationSection[];
}

const anthonyHeinLabels: NavigationSection[] = [
  {
    name: "Introduction",
    slug: "introduction",
  },
  {
    name: "Education",
    slug: "education",
  },
  {
    name: "Skills",
    slug: "skills",
  },
  {
    name: "Leadership",
    slug: "leadership",
  },
  {
    name: "Work",
    slug: "work",
  },
  {
    name: "Projects",
    slug: "projects",
  },
  {
    name: "Contact",
    slug: "contact",
  },
];

const navigationData: NavigationMember[] = [
  {
    name: "Anthony Hein",
    slug: "anthony-hein",
    navigation: anthonyHeinLabels,
  },
];

export default navigationData;
