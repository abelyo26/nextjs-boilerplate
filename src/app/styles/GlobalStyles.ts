"use client";
import { css, createGlobalStyle } from "styled-components";

import { reset } from "./reset";

const styles = css`
  body {
    height: 100%;
    width: 100%;
    background-color: #fff;
  }
  a {
    text-decoration: none;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${styles}
`;

export default GlobalStyles;
