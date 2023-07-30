import { FilterParams } from "../../interfaces/interfaces";
import { SearchButtonCategories } from "../../types/types";
import { DropDownButton } from "./DropDownButton";
import { DropDownButtonSelected } from "./DropDownButtonSelected";
import {
  StyledAbsoluteDropDown,
  StyledDropDownButtonsContainer,
} from "./dropdown.styles";

interface DropDownProps {
  entries: string[];
  isVisible: boolean;
  handleFilter: (searchParam: string, component: string) => void;
  category: SearchButtonCategories;
  filterParams: FilterParams;
}

export const DropDown = ({
  entries,
  isVisible,
  handleFilter,
  category,
  filterParams,
}: DropDownProps) => {
  return (
    <StyledAbsoluteDropDown isVisible={isVisible}>
      <StyledDropDownButtonsContainer>
        {entries.map((entry) => {
          return isSubstring(entry, category, filterParams) ? (
            <DropDownButtonSelected
              entry={entry}
              handleFilter={handleFilter}
              category={category}
              key={entry}
            />
          ) : (
            <DropDownButton
              entry={entry}
              handleFilter={handleFilter}
              category={category}
              key={entry}
            />
          );
        })}
      </StyledDropDownButtonsContainer>
    </StyledAbsoluteDropDown>
  );
};

const isSubstring = (
  entry: string,
  category: "department" | "location" | "level",
  filterParams: FilterParams
) => {
  const value = filterParams[category];
  if (value === null) {
    return false;
  }
  return value.includes(entry);
};
