import { theme } from "../../theme/theme";
import {
  StyledDropDownButtonWrapper,
  StyledDropDownButton,
  StyledButtonCaption,
} from "./dropdown.styles";

interface DropDownButtonProps {
  entry: string;
  handleFilter: (entry: string, category: string) => void;
  category: string;
}

export const DropDownButton = ({
  entry,
  handleFilter,
  category,
}: DropDownButtonProps) => {
  return (
    <StyledDropDownButtonWrapper key={entry}>
      <StyledDropDownButton onClick={() => handleFilter(entry, category)}>
        <StyledButtonCaption
          data-dropdown-category={category}
          color={theme.colors.text_focus}
        >
          {entry}
        </StyledButtonCaption>
      </StyledDropDownButton>
    </StyledDropDownButtonWrapper>
  );
};
