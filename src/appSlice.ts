import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  width: number;
}

const initialState: AppState = {
  width: window.innerWidth,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setWidth: (state, action: PayloadAction<AppState["width"]>) => {
      state.width = action.payload;
    },
  },
});

export const { setWidth } = appSlice.actions;
export default appSlice.reducer;
