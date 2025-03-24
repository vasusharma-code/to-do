import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import authReducer from "./authSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch (e) {
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
    auth: store.getState().auth,
  });
});