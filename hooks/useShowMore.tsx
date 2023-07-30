import { useState } from "react";

/**
 * Counter and function to show more entries
 *
 * @param defaultDisplayCount start value to display
 * @param displayCountIncrement increments shown entries
 * @returns current display count and handleClick function
 */
export const useShowMore = (
  defaultDisplayCount: number,
  displayCountIncrement: number
): [number, () => void] => {
  const [displayCount, setDisplayCount] = useState<number>(defaultDisplayCount);

  const handleClickShowMore = () => {
    setDisplayCount(displayCount + displayCountIncrement);
  };
  return [displayCount, handleClickShowMore];
};
