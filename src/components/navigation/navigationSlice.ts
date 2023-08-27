import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavigationState {
  isMenuOpen: boolean;
  isNavbarOpen: boolean;
  pageLoaded: boolean;
  activeMember: "Anthony Hein";
  activePage: "anthony-hein";
  activeTheme: "anthony-hein";
  error: string;
}

const initialState: NavigationState = {
  isMenuOpen: false,
  isNavbarOpen: false,
  pageLoaded: false,
  activeMember: "Anthony Hein",
  activePage: "anthony-hein",
  activeTheme: "anthony-hein",
  error: "",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    load: (state) => {
      return { ...state, pageLoaded: true };
    },
    open: (state) => {
      return { ...state, isMenuOpen: true };
    },
    close: (state) => {
      return { ...state, isMenuOpen: false };
    },
    openNavbar: (state) => {
      return { ...state, isNavbarOpen: true };
    },
    closeNavbar: (state) => {
      return { ...state, isNavbarOpen: false };
    },
    setMember: (
      state,
      action: PayloadAction<NavigationState["activeMember"]>
    ) => {
      return { ...state, activeMember: action.payload };
    },
    setPage: (state, action: PayloadAction<NavigationState["activePage"]>) => {
      return { ...state, activePage: action.payload };
    },
    setTheme: (
      state,
      action: PayloadAction<NavigationState["activeTheme"]>
    ) => {
      return { ...state, activeTheme: action.payload };
    },
    setError: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload };
    },
  },
});

export const {
  load,
  open,
  close,
  openNavbar,
  closeNavbar,
  setMember,
  setPage,
  setTheme,
  setError,
} = navigationSlice.actions;
export default navigationSlice.reducer;
