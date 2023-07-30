/**
 * Displays default caption until user selects category. Shortens
 * captions longer than 27 characters to prevent layoutshifts.
 *
 * @param caption default caption to display
 * @param filterParam caption to display after category was selected
 * @returns caption to display
 */
export const caption = (caption: string, filterParam: string): string => {
  const str = filterParam === null ? caption : filterParam;
  if (str.length > 27) {
    const strShortened = str.slice(0, 27) + "...";
    return strShortened;
  }
  return str;
};
