import { createTheme as createMuiTheme, Theme } from "@material-ui/core/styles";
import "./Lato.css";

export enum Color {
    light = "light",
    gray = "gray",
    primary = "primary",
    secondary = "secondary",
}

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    customPalette: {
        light: string;
        gray: string;
        primary: string;
        secondary: string;
    };
  }
  interface ThemeOptions {
    customPalette?: {
        light?: string;
        gray?: string;
        primary?: string;
        secondary?: string;
    };
  }
}

const themes: { [key: string]: Theme } = {
  "anthony-hein": createMuiTheme({
    customPalette: {
        light: "#FFF",
        gray: "#F8F8F8",
        primary: "#1E2A45",
        secondary: "#0099FF",
    },
    typography: {
        fontFamily: "'Lato', 'Roboto', 'Arial', sans-serif",
        fontWeightLight: 200,
        fontWeightRegular: 300,
        fontWeightMedium: 400,
    },
  }),
};

export default themes;
