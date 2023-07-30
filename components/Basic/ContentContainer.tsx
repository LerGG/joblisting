import styled from "styled-components";
import { theme } from "../../theme/theme";

export const ContentContainer = styled.div`
  max-width: 100%;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  height: 100%;
  @media (min-width: ${theme.breakpoints.sm}) {
    max-width: ${theme.breakpoints.lg};
    margin: auto;
  }
`;
