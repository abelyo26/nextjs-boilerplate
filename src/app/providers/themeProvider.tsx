"use client";
import React, { useEffect } from "react";
// import { ThemeProvider as Provider } from "styled-components";
import { ThemeProvider as Provider } from "styled-components";

import theme from "app/styles/theme";
import {
  useAppDispatch,
  useAppSelector,
  selectTheme,
  themeSliceActions,
} from "appState";

function ThemeProvider(props: React.PropsWithChildren) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkModeQuery.matches) {
      dispatch(themeSliceActions.changeTheme("darkTheme"));
    } else {
      dispatch(themeSliceActions.changeTheme("lightTheme"));
    }
  }, []);
  const themeType = useAppSelector(selectTheme);
  console.log("---->", themeType);
  return <Provider theme={theme}>{props.children}</Provider>;
}

export default ThemeProvider;
