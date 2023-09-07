import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "3rem",
    textTransform: "uppercase",
    letterSpacing: 1.1,
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  subtitle: {
    fontSize: "1.5rem",
    textTransform: "uppercase",
    marginBottom: "0.75rem",
    letterSpacing: 1.1,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem",
    },
  },
  body: {
    fontSize: "1.25rem",
    letterSpacing: 1.1,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  hint: {
    fontSize: "0.875rem",
    letterSpacing: 1.1,
  },
  invisibleLink: {
    color: "inherit",
    "&:hover": {
      color: "inherit",
    },
  },
  btn: {
    "&:hover": {
      padding: "0.5rem 2.75rem",
      transition: "padding 0.3s",
    },
    padding: "0.5rem 2rem",
    margin: "2rem 2rem 0rem 0rem",
    transition: "padding 0.3s",
    [theme.breakpoints.down("md")]: {
      margin: "2rem 1rem 0rem 0rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0.5rem 0rem 0rem",
    },
  },
  btnText: {
    fontSize: "1.25rem",
    textTransform: "uppercase",
  },
  btnTextShrink: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.875rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
  },
  btnNoMargin: {
    margin: "0rem 0rem 0rem 2rem",
  },
  image: {
    borderRadius: "0.5rem",
    border: "0.125rem solid #000",
  },
  list: {
    listStyle: "none",
    lineHeight: 1.8,
    margin: 0,
    padding: 0,
  },
  sectionHeaderIcon: {
    marginLeft: "1rem",
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  helpIcon: {
    marginRight: "0.25rem",
    fontSize: "0.875rem",
  },
  contactIcon: {
    margin: "0.75rem 0.75rem 0 0",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.875rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  emailIcon: {
    "&:hover": {
      color: "#C71610",
    },
  },
  phoneIcon: {
    "&:hover": {
      color: "#3DDC84",
      cursor: "pointer",
    },
  },
  linkedInIcon: {
    "&:hover": {
      color: "#0072B1",
    },
  },
  facebookIcon: {
    "&:hover": {
      color: "#3B5998",
    },
  },
  instagramIcon: {
    "&:hover": {
      color: "#3F729B",
    },
  },
  twitterIcon: {
    "&:hover": {
      color: "#38A1F3",
    },
  },
  gitHubIcon: {
    "&:hover": {
      color: "#AD5C51",
    },
  },
  arrowLight: {
    color: theme.customPalette.light,
  },
  tooltipLight: {
    backgroundColor: theme.customPalette.light,
    color: theme.customPalette.primary,
  },
  one: {
    width: "8.33%",
  },
  two: {
    width: "16.67%",
  },
  three: {
    width: "25%",
  },
  four: {
    width: "33.33%",
  },
  five: {
    width: "41.67%",
  },
  six: {
    width: "50%",
  },
  seven: {
    width: "58.33%",
  },
  eight: {
    width: "66.67%",
  },
  nine: {
    width: "75%",
  },
  ten: {
    width: "83.33%",
  },
  eleven: {
    width: "91.67%",
  },
  twelve: {
    width: "100%",
  },
  princeton: {
    color: "#FF8F00",
  },
  kennedy: {
    color: "#00D632",
  },
  light: {
    color: theme.customPalette.light,
  },
  gray: {
    color: theme.customPalette.gray,
  },
  primary: {
    color: theme.customPalette.primary,
  },
  secondary: {
    color: theme.customPalette.secondary,
  },
  borderLight: {
    borderColor: theme.customPalette.light,
  },
  borderGray: {
    borderColor: theme.customPalette.gray,
  },
  borderPrimary: {
    borderColor: theme.customPalette.primary,
  },
  borderSecondary: {
    borderColor: theme.customPalette.secondary,
  },
  backgroundLight: {
    backgroundColor: `${theme.customPalette.light} !important`,
  },
  backgroundGray: {
    backgroundColor: `${theme.customPalette.gray} !important`,
  },
  backgroundPrimary: {
    backgroundColor: `${theme.customPalette.primary} !important`,
  },
  backgroundSecondary: {
    backgroundColor: `${theme.customPalette.secondary} !important`,
  },
}));

export default useStyles;
