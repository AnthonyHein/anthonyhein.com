import React from "react";
import { Theme } from "@material-ui/core";
import themes, { Color } from "../../config/themes";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import useStyles from "./style";

export default function Section(props: {
  color: Color;
  content: JSX.Element;
  skinny: Boolean;
}): JSX.Element {
  const pageLoaded = useAppSelector((state) => state.navigation.pageLoaded);
  const activeTheme = useAppSelector((state) => state.navigation.activeTheme);

  const theme: Theme = themes[activeTheme];
  const classes = useStyles();

  if (!pageLoaded) {
    return <></>;
  }
  return (
    <div
      className={`${classes.section} ${classes[props.color]} ${
        props.skinny ? classes.skinny : null
      }`}
    >
      <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
        {props.content}
      </div>
    </div>
  );
}
