import { SET, ADD, DELETE } from "./constants";
import { ThemeCt } from "../ThemeContext";
import { useState, useEffect, useRef, useReducer, useContext } from "react";

export const setJob = (payload) => {
  return {
    type: SET,
    payload: payload
  };
};
export const addJob = (payload) => {
  return {
    type: ADD,
    payload: payload
  };
};
export const deleteJob = (payload) => {
  return {
    type: DELETE,
    payload: payload
  };
};

export function Content() {
  const theme = useContext(ThemeCt);

  return (
    <>
      <button onClick={theme.toggleTheme}>Toggle Theme</button>
      <h1 className={theme.theme}>
        This is CONTENT This is CONTENT This is CONTENT
      </h1>
    </>
  );
}
