"use client";

import { Provider as ReduxProvider } from "react-redux";
import StyledComponentsRegistry from "./registry";
import ThemeProvider from "./themeProvider";
import { store } from "appState";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <ReduxProvider store={store}>
      <StyledComponentsRegistry>
        <ThemeProvider>{props.children}</ThemeProvider>
      </StyledComponentsRegistry>
    </ReduxProvider>
  );
};

export default Providers;
