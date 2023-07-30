export interface ThemeInterface {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    default: string;
    text_focus: string;
    text_dropdown: string;
  };
  border_colors: {
    grey: string;
    grey_light: string;
    grey_hover: string;
    arrow: string;
  };
  backgrounds: {
    primary: string;
    secondary: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const theme: ThemeInterface = {
  colors: {
    primary: "#1AAEB7",
    secondary: "#004B44",
    tertiary: "#6E6E6E",
    default: "#292929",
    text_focus: "#2C2C2C",
    text_dropdown: "#8E8E8E",
  },
  border_colors: {
    grey: "#C3C3C3",
    grey_light: "#EAEAEA",
    grey_hover: "#838383",
    arrow: "#272727",
  },
  backgrounds: {
    primary: "#f5f5f5 0% 0% no-repeat padding-box",
    secondary: "#F2FEFF",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "996px",
  },
};
