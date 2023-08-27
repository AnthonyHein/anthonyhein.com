import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appReducer from "../appSlice";
import navigationReducer from "../components/navigation/navigationSlice";
import anthonyHeinReducer from "../pages/anthony-hein/anthonyHeinSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    navigation: navigationReducer,
    anthonyHein: anthonyHeinReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
