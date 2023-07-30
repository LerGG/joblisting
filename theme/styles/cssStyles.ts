import { css } from "styled-components";
import { theme } from "../theme";

export const GlobalBody = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ffffff;
    color: #292929;
    font-size: 16px;
    overflow-x: hidden;
  }
`;

export const GlobalHeadline1 = css`
  h1 {
    margin: 0;
    font-size: 30px;
    letter-spacing: -0.6px;
  }
  @media (min-width: ${theme.breakpoints.sm}) {
    h1 {
      font-size: 48px;
    }
  }
`;

export const GlobalHeadline2 = css`
  h2 {
    margin: 0;
    font-size: 30px;
    letter-spacing: -0.6px;
  }
  @media (min-width: ${theme.breakpoints.sm}) {
    h2 {
      font-size: 36px;
    }
  }
`;
