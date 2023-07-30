import { gotham_bold } from "../../fonts/gotham_bold";
import { StyledText } from "../Basic/StyledText";
import {
  StyledShowMoreButtonWrapper,
  StyledShowMoreButton,
} from "./jobs.styles";

interface JobShowMoreButtonProps {
  handleClick: () => void;
  maxDisplayCount: number;
  displayCount: number;
}

export default function JobShowMoreButton({
  handleClick,
  maxDisplayCount,
  displayCount,
}: JobShowMoreButtonProps) {
  // Hide button if all available entries are displayed
  if (displayCount >= maxDisplayCount) {
    return null;
  }
  return (
    <StyledShowMoreButtonWrapper>
      <StyledShowMoreButton onClick={() => handleClick()}>
        <StyledText
          textAlign="center"
          color={"#ffffff"}
          style={gotham_bold.style}
        >
          Mehr Anzeigen
        </StyledText>
      </StyledShowMoreButton>
    </StyledShowMoreButtonWrapper>
  );
}
