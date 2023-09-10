import React from "react";
import { ListItem, Typography } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import navigationData from "./navigationData";
import useStyles from "./style";

export default function Navigation(): JSX.Element {
  const pageLoaded = useAppSelector((state) => state.navigation.pageLoaded);
  const activeMember = useAppSelector((state) => state.navigation.activeMember);
  const activeTheme = useAppSelector((state) => state.navigation.activeTheme);

  const width = useAppSelector((state) => state.app.width);

  const classes = useStyles();

  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  if (!pageLoaded) {
    return <></>;
  }
  return (
    <>
      <div className={classes.navigation}>
        <div style={{ marginRight: "auto" }}>
          <ListItem
            button
            component={Link}
            to="/home"
            key="home"
            scroll={(el: any) => scrollWithOffset(el)}
            style={{
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            <Typography className={classes.navigationText}>
              {activeMember}
            </Typography>
          </ListItem>
        </div>
        {width > 960 ? (
          <div className={classes.navigationItems}>
            {navigationData.map((member) => {
              return (
                <>
                  {member.slug === activeTheme ? (
                    member.navigation.map((navItem) => {
                      return (
                        <>
                          <ListItem
                            button
                            component={Link}
                            to={`#${navItem.slug}`}
                            key={navItem.slug}
                            scroll={(el: any) => scrollWithOffset(el)}
                            style={{
                              paddingLeft: "0.5rem",
                              paddingRight: "0.5rem",
                            }}
                          >
                            <Typography className={classes.navigationText}>
                              {navItem.name}
                            </Typography>
                          </ListItem>
                        </>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
