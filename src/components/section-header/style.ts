import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  sectionHeader: {
    fontSize: "2.25rem",
    textTransform: "uppercase",
    letterSpacing: 1.1,
    marginBottom: "3.75rem",
    textDecoration: "underline",
    textDecorationThickness: "0.125rem",
    textUnderlineOffset: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },
  },
  light: {
    color: theme.customPalette.light,
    textDecorationColor: theme.customPalette.light,
  },
  gray: {
    color: theme.customPalette.gray,
    textDecorationColor: theme.customPalette.gray,
  },
  primary: {
    color: theme.customPalette.primary,
    textDecorationColor: theme.customPalette.secondary,
  },
  secondary: {
    color: theme.customPalette.primary,
    textDecorationColor: theme.customPalette.secondary,
  },
}));

export default useStyles;
