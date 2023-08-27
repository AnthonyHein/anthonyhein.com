import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AnthonyNHeinState {}

const initialState: AnthonyNHeinState = {};

export const anthonyNHeinSlice = createSlice({
  name: "anthony-n-hein",
  initialState,
  reducers: {},
});

export const {} = anthonyNHeinSlice.actions;
export default anthonyNHeinSlice.reducer;
