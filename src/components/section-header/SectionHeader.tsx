import React from "react";
import { Theme, Typography } from "@material-ui/core";
import themes, { Color } from "../../config/themes";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import useStyles from "./style";

export default function SectionHeader(props: {color: Color, id: string, content: JSX.Element}): JSX.Element {
  const pageLoaded = useAppSelector((state) => state.navigation.pageLoaded);
  const activeTheme = useAppSelector((state) => state.navigation.activeTheme);

  const theme: Theme = themes[activeTheme];
  const classes = useStyles();

  if (!pageLoaded) {
    return <></>;
  }
  return (
    <div id={props.id}>
        <Typography className={`${classes.sectionHeader} ${classes[props.color]}`}>
            {props.content}
        </Typography>
    </div>
  );
}
