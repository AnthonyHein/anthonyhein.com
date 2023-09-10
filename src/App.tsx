import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { Theme, ThemeProvider } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Section from "./components/section/Section";

import { useAppDispatch, useAppSelector } from "./state/hooks";
import { setWidth } from "./appSlice";

import routes from "./config/routes";

import "./App.css";
import themes, { Color } from "./config/themes";

function App(): JSX.Element {
  const activeTheme = useAppSelector((state) => state.navigation.activeTheme);
  const theme: Theme = themes[activeTheme];

  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(setWidth(window.innerWidth));
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          position: "fixed",
          width: "100%",
          borderBottom: `0.0625rem solid ${theme.customPalette.primary}`,
          zIndex: 999,
        }}
      >
        <Section color={Color.light} content={<Navigation />} skinny={true} />
      </div>
      <Switch>
        <Route
          path="/home"
          component={() => {
            window.location.href = "https://www.anthonyhein.com";
            return null;
          }}
        />
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
      <Section color={Color.primary} content={<Footer />} skinny={true} />
    </ThemeProvider>
  );
}

export default App;
