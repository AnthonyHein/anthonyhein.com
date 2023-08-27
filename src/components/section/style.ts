import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "3rem 18rem",
    [theme.breakpoints.down("lg")]: {
      padding: "3rem 12rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: "3rem 6rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 3rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3rem 1rem",
    },
  },
  skinny: {
    paddingTop: "0rem",
    paddingBottom: "0rem",
  },
  light: {
    backgroundColor: theme.customPalette.light,
  },
  gray: {
    backgroundColor: theme.customPalette.gray,
  },
  primary: {
    backgroundColor: theme.customPalette.primary,
  },
  secondary: {
    backgroundColor: theme.customPalette.secondary,
  },
}));

export default useStyles;
