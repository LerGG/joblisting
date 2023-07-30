import { theme } from "../../theme/theme";
import {
  StyledButtonCaption,
  StyledCheckmark,
  StyledDropDownButton,
  StyledDropDownButtonWrapperSelected,
} from "./dropdown.styles";

interface DropDownButtonProps {
  entry: string;
  handleFilter: (entry: string, category: string) => void;
  category: string;
}

export const DropDownButtonSelected = ({
  entry,
  handleFilter,
  category,
}: DropDownButtonProps) => {
  return (
    <StyledDropDownButtonWrapperSelected key={entry}>
      <StyledDropDownButton onClick={() => handleFilter(entry, category)}>
        <StyledButtonCaption
          data-dropdown-category={category}
          color={theme.colors.primary}
        >
          {entry}
        </StyledButtonCaption>
      </StyledDropDownButton>
      <StyledCheckmark />
    </StyledDropDownButtonWrapperSelected>
  );
};
