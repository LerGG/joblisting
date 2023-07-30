import { useState } from "react";
import { FilterParams } from "../interfaces/interfaces";
import { useVisibility } from "../context/VisibilityProvider";
import { HandleFilterSig, SearchButtonCategories } from "../types/types";

export const useFilterParameters = (): [FilterParams, HandleFilterSig] => {
  const { setIsVisible } = useVisibility();
  const [filterParams, setFilterParams] = useState<FilterParams>({
    department: null,
    location: null,
    level: null,
  });

  const handleFilter = (
    searchParam: string,
    component: SearchButtonCategories
  ) => {
    if (searchParam === filterParams[component]) {
      setFilterParams({ ...filterParams, [component]: null });
    } else {
      setFilterParams({ ...filterParams, [component]: searchParam });
    }
    // Close dropdown
    setIsVisible({
      department: false,
      location: false,
      level: false,
    });
  };
  return [filterParams, handleFilter];
};
