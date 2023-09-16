import React from "react";

import { useAppSelector, useAppDispatch } from "../../state/hooks";

import useStylesNavigation from "./style";

import navigationData from "./navigationData";

import { ListItem, Typography } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";

export default function Navigation(): JSX.Element {
  const pageLoaded = useAppSelector((state) => state.navigation.pageLoaded);
  const activeMember = useAppSelector((state) => state.navigation.activeMember);
  const activeTheme = useAppSelector((state) => state.navigation.activeTheme);

  const width = useAppSelector((state) => state.app.width);

  const classesNavigation = useStylesNavigation();

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
      <div className={classesNavigation.navigation}>
        <div style={{ marginRight: "auto" }}>
          <a
            className={classesNavigation.invisibleLink}
            href="https://www.anthonyhein.com"
            target="_blank"
          >
            <ListItem
              button
              style={{
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
              }}
            >
              <Typography className={classesNavigation.navigationText}>
                {activeMember}
              </Typography>
            </ListItem>
          </a>
        </div>
        {width > 960 ? (
          <div className={classesNavigation.navigationItems}>
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
                            <Typography
                              className={classesNavigation.navigationText}
                            >
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
