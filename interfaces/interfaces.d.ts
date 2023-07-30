/**
 * Job data based on content model
 */
export interface JobEntry {
  department: string;
  locations: string[];
  workload: string;
  levels: string[];
  title: string;
}

/**
 * CSS Text alignment options
 */
export interface TextAlign {
  textAlign: "left" | "right" | "center" | undefined;
}

/**
 * Contentful CDN api
 */
export interface ContentfulApi {
  data: Entry[];
}

export interface DropDownProps {
  visibility: Visbility;
  handleClick: () => void;
}

export interface FilterParams {
  department: string;
  location: string;
  level: string;
}

export interface Children {
  children: React.ReactNode;
}

export interface Visbility {
  department: boolean;
  location: boolean;
  level: boolean;
}
