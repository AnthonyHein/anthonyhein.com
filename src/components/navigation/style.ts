import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navigation: {
    height: "3.25rem",
    display: "flex",
    alignItems: "center",
  },
  navigationText: {
    color: theme.customPalette.primary,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
    lineHeight: 1,
  },
  navigationItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: "auto",
  },
  navigationItemsMobile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginLeft: "auto",
  },
}));

export default useStyles;
