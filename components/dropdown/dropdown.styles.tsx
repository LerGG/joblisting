import styled from "styled-components";
import { theme } from "../../theme/theme";
import { StyledText } from "../Basic/StyledText";

export const StyledAbsoluteDropDown = styled.div<{ isVisible: boolean }>`
  margin-top: 0.5rem;
  position: absolute;
  top: 48.5px;
  left: 0;
  min-width: 100%;
  z-index: 10;
  box-shadow: 0px 3px 9px #00000029;
  border-radius: 8px;
  border-width: 2px;
  background-color: white;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  max-height: 50vh;
  overflow-y: auto;
`;

export const StyledDropDownButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDropDownButtonWrapper = styled.div`
  height: 100%;
  &:hover {
    background-color: ${theme.backgrounds.secondary};
    border-radius: 8px;
  }
  display: flex;
`;
export const StyledDropDownButtonWrapperSelected = styled.div`
  height: 100%;
  background-color: ${theme.backgrounds.secondary};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDropDownButton = styled.button`
  height: 100%;
  width: 100%;
  cursor: pointer;
  background: none;
  border: none;
  font: inherit;
  outline: inherit;
  padding: 0;
`;

export const StyledButtonCaption = styled(StyledText)`
  padding: 1rem;
`;

export const StyledCheckmark = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  height: 12px;
  width: 6px;
  border-bottom: 2px solid ${theme.colors.primary};
  border-right: 2px solid ${theme.colors.primary};
  margin-right: 1.5rem;
`;
