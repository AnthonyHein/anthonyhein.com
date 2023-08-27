import React from "react";
import { ListItem, Theme, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import footerData from "./footerData";
import themes from "../../config/themes";
import useStyles from "./style";

import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer(): JSX.Element {
  const pageLoaded = useAppSelector((state) => state.navigation.pageLoaded);
  const activeTheme = useAppSelector((state) => state.navigation.activeTheme);

  const theme: Theme = themes[activeTheme];
  const classes = useStyles();

  if (!pageLoaded) {
    return <></>;
  }
  return (
    <>
      <div className={classes.footer}>
        <Typography className={classes.footerText}>
          Created by Anthony N. Hein. Last updated {footerData.lastUpdated}
        </Typography>
      </div>
    </>
  );
}
