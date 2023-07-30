import { DropDownProps } from "../interfaces/interfaces";
import { useVisibility } from "../context/VisibilityProvider";
import { useCallback, useEffect } from "react";
import { SearchButtonCategories } from "../types/types";

// Note: Could be done with useRef and forwardRef if more reusability is needed

export const useOpenDropDown = (
  category: SearchButtonCategories
): DropDownProps => {
  const { isVisible, setIsVisible } = useVisibility();

  const handleClickOpenDropDown = useCallback(() => {
    // prevents reopen on mouse up event
    if (isVisible.department || isVisible.level || isVisible.location) {
      setIsVisible({ department: false, location: false, level: false });
      return;
    }
    setIsVisible({ ...isVisible, [category]: true });
  }, [isVisible.department, isVisible.level, isVisible.location]);

  const closeDropDown = useCallback(
    (
      event: Event & {
        target: HTMLButtonElement;
      }
    ) => {
      const { target } = event;
      const isDropDownEntry = target.getAttribute("data-dropdown-category");
      const isSearchButton = target.getAttribute("data-search-button");

      if (isDropDownEntry || isSearchButton) {
        return;
      }
      if (isVisible.department || isVisible.location || isVisible.level) {
        setIsVisible({ department: false, location: false, level: false });
      }
    },
    [isVisible.department, isVisible.level, isVisible.location]
  );

  useEffect(() => {
    // Only add listener if dropdown was opened
    if (isVisible.department || isVisible.location || isVisible.level) {
      window.addEventListener("mousedown", closeDropDown);
    }
    return () => {
      window.removeEventListener("mousedown", closeDropDown);
    };
  }, [isVisible.department, isVisible.level, isVisible.location]);

  return {
    visibility: isVisible,
    handleClick: handleClickOpenDropDown,
  };
};
