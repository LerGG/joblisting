import { createGlobalStyle } from "styled-components";
import {
  GlobalBody,
  GlobalHeadline1,
  GlobalHeadline2,
} from "./styles/cssStyles";

export const GlobalStyle = createGlobalStyle`
  ${GlobalBody}
  ${GlobalHeadline1}
  ${GlobalHeadline2}
`;
