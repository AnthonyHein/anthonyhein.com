import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "3.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.customPalette.primary,
  },
  footerItem: {
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: theme.customPalette.light,
    fontSize: "0.75rem",
  },
}));

export default useStyles;
