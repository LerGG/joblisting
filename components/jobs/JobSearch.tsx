import { departments, levels, locations } from "../../const";
import { theme } from "../../theme/theme";
import { Spacer } from "../Basic/Spacer";
import {
  HoverText,
  StyledArrowUpDown,
  StyledArrowUpDownContainer,
  StyledJobSearchButtonWrapper,
  StyledJobSearchContainer,
  StyledJobSearchWrapper,
  StyledSearchButton,
  StyledSearchWrapper,
} from "./jobs.styles";
import { DropDown } from "../dropdown/DropDown";
import { DropDownProps, FilterParams } from "../../interfaces/interfaces";
import { JobSearchHead } from "./JobSearchHead";
import { caption } from "../../utils/caption";
import { HandleFilterSig } from "../../types/types";

interface JobSearchProps {
  jobCount: number;
  locationDropDown: DropDownProps;
  departmentDropDown: DropDownProps;
  levelDropDown: DropDownProps;
  filterParameters: [FilterParams, HandleFilterSig];
}

export default function JobSearch({
  jobCount,
  locationDropDown,
  departmentDropDown,
  levelDropDown,
  filterParameters,
}: JobSearchProps) {
  const [filterParams, handleFilter] = filterParameters;

  return (
    <StyledJobSearchWrapper>
      <StyledJobSearchContainer>
        <JobSearchHead jobCount={jobCount} />
        <Spacer space="1.5" />
        <StyledSearchWrapper>
          <StyledJobSearchButtonWrapper>
            <StyledSearchButton
              onClick={() => departmentDropDown.handleClick()}
            >
              <HoverText
                data-search-button="department"
                color={theme.colors.text_dropdown}
                selected={filterParams.department}
              >
                {caption("Bereich", filterParams.department)}
              </HoverText>
              <StyledArrowUpDownContainer data-search-button="department">
                <StyledArrowUpDown
                  isArrowDown={departmentDropDown.visibility.department}
                  data-search-button="department"
                />
              </StyledArrowUpDownContainer>
            </StyledSearchButton>
            <DropDown
              entries={departments}
              isVisible={departmentDropDown.visibility.department}
              handleFilter={handleFilter}
              category={"department"}
              filterParams={filterParams}
            />
          </StyledJobSearchButtonWrapper>

          <StyledJobSearchButtonWrapper>
            <StyledSearchButton onClick={() => locationDropDown.handleClick()}>
              <HoverText
                data-search-button="location"
                color={theme.colors.text_dropdown}
                selected={filterParams.location}
              >
                {caption("Stadt", filterParams.location)}
              </HoverText>
              <StyledArrowUpDownContainer data-search-button="location">
                <StyledArrowUpDown
                  data-search-button="location"
                  isArrowDown={locationDropDown.visibility.location}
                />
              </StyledArrowUpDownContainer>
            </StyledSearchButton>
            <DropDown
              entries={locations}
              isVisible={locationDropDown.visibility.location}
              handleFilter={handleFilter}
              category={"location"}
              filterParams={filterParams}
            />
          </StyledJobSearchButtonWrapper>

          <StyledJobSearchButtonWrapper>
            <StyledSearchButton onClick={() => levelDropDown.handleClick()}>
              <HoverText
                data-search-button="level"
                color={theme.colors.text_dropdown}
                selected={filterParams.level}
              >
                {caption("Erfahrungslevel", filterParams.level)}
              </HoverText>
              <StyledArrowUpDownContainer data-search-button="level">
                <StyledArrowUpDown
                  data-search-button="level"
                  isArrowDown={levelDropDown.visibility.level}
                />
              </StyledArrowUpDownContainer>
            </StyledSearchButton>
            <DropDown
              entries={levels}
              isVisible={levelDropDown.visibility.level}
              handleFilter={handleFilter}
              category={"level"}
              filterParams={filterParams}
            />
          </StyledJobSearchButtonWrapper>
        </StyledSearchWrapper>
      </StyledJobSearchContainer>
    </StyledJobSearchWrapper>
  );
}
