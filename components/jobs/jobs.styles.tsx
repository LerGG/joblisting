import styled from "styled-components";
import { theme } from "../../theme/theme";
import { StyledText } from "../Basic/StyledText";
import { FullWidthWrapper } from "../Basic/FullWidthWrapper";
import { ContentContainer } from "../Basic/ContentContainer";
import { StyledFlexBox } from "../Basic/StyledFlexBox";
import Link from "next/link";

/**
 * JobCard Components
 */

export const StyledMobileHidden = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.sm}) {
    display: block;
  }
`;

export const StyledShowPositionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: end;
  justify-content: center;
  align-content: center;
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  transform: rotate(-45deg);
  transition: 0.15s ease-in;
`;

export const StyledIconWrapper = styled(StyledFlexBox)`
  display: flex;
  column-gap: 0.25rem;
  flex-direction: row;
  width: auto;
  padding-right: 1.5rem;
`;

export const StyledJobTitle = styled(StyledFlexBox)`
  align-items: start;
`;

export const StyledArrowUp = styled.div`
  margin-right: 1rem;
  background-color: "orange";
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg) translateY(-150%);
  color: ${theme.colors.primary};
  transition: 0.1s ease-in;
  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 4px;
  }
  ::after {
    width: 8px;
    height: 8px;
    border-top: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    left: 7px;
  }
  ::before {
    width: 2px;
    height: 11px;
    left: 10px;
    background: currentColor;
  }
`;

export const StyledArrowUpDownContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding-right: 1rem;
  width: 10px;
`;

export const StyledArrowUpDown = styled.div<{ isArrowDown: boolean }>`
  display: block;
  width: 7px;
  height: 7px;
  border-top: 2px solid ${theme.border_colors.arrow};
  border-left: 2px solid ${theme.border_colors.arrow};
  transition: 0.1s ease-in;
  transform: ${(props) =>
    props.isArrowDown ? "rotate(-135deg)" : "rotate(45deg)"};
`;

export const StyledJobCardWrapper = styled(StyledFlexBox)`
  padding-top: 0rem;
  padding-bottom: 0rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: ${theme.breakpoints.sm}) {
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
`;

export const StyledJobCategory = styled(StyledFlexBox)`
  align-items: end;
  justify-content: space-between;
`;

export const StyledJobCards = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  align-items: center;
  row-gap: 1.5rem;
`;

export const StyledShowMoreButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledShowMoreButton = styled.button`
  border-radius: 20px;
  border: 1px solid ${theme.colors.primary};
  width: 50%;
  height: 50px;
  background-color: ${theme.colors.primary};
  transition: 0.15s ease-in;
  cursor: pointer;
  @media (min-width: ${theme.breakpoints.sm}) {
    margin-bottom: 4rem;
    width: 20%;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledJobCardContainer = styled(Link)`
  text-decoration: none;
  height: 145px;
  min-width: 98%;
  border: 1px solid ${theme.border_colors.grey_light};
  border-radius: 16px;
  display: flex;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 2px ${theme.colors.primary};
    border: 1px solid rgba(0, 0, 0, 0);
    ${StyledArrowUp} {
      transform: rotate(45deg) translateY(-200%);
    }
  }
  @media (min-width: ${theme.breakpoints.sm}) {
    min-width: 85%;
  }
`;

/**
 * JobList Components
 */
export const StyledJobListWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  @media (min-width: ${theme.breakpoints.sm}) {
    margin-bottom: 5rem;
  }
`;

/**
 * Jobsearch Components
 */
export const StyledJobSearchButtonWrapper = styled(ContentContainer)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledJobSearchContainer = styled(ContentContainer)`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const StyledJobCount = styled(StyledText)`
  font-size: 14px;
  padding-top: 5rem;
  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 16px;
    padding-top: 6rem;
  }
`;

export const StyledJobSearchWrapper = styled(FullWidthWrapper)`
  height: 50vh;
  background: ${({ theme }) => theme.backgrounds.primary};
  @media (min-width: ${theme.breakpoints.sm}) {
    height: 318px;
  }
`;

export const StyledSearchWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  column-gap: 1.5rem;
  row-gap: 1rem;
  flex-direction: column;
  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    width: 100%;
  }
`;

// Needed for hover effect on parent
export const HoverText = styled(StyledText)<{ selected: null | string }>`
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  font-weight: bold;
  color: ${(props) =>
    props.selected ? theme.colors.text_focus : theme.colors.tertiary};
`;

export const StyledSearchButton = styled.button`
  padding: 0;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  border: 1px solid ${theme.border_colors.grey};
  border-radius: 8px;
  transition: all 0.25s;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border-color: ${theme.border_colors.grey_hover};
    ${HoverText} {
      color: ${theme.colors.text_focus};
    }
  }
  &:focus {
    border-color: ${theme.colors.primary};
    ${HoverText} {
      color: ${theme.colors.text_focus};
    }
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 100%;
  }
`;

/**
 * Location components
 */

// Needed for hover effect on parent
export const StyledLocationWrapper = styled(StyledFlexBox)``;
