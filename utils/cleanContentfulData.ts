import { Entry } from "contentful";
import { JobEntry } from "../interfaces/interfaces";

/**
 * Maps contentful API Entry objects to internal representation
 *
 * @param data contentful cdn Entry object
 * @returns Mapped contentful job object
 */
export const cleanContentfulData = (data: Entry[]): JobEntry[] => {
  let jobs: JobEntry[] = [];
  // any to access all contentful fields. Nested Entry not possible!
  // eslint-disable-next-line
  jobs = data.map((entry: any) => {
    return {
      department: entry.fields.department.fields.title,
      locations: resolveNestedLocations(entry.fields.locations),
      workload: entry.fields.type.fields.title,
      levels: resolveNestedLevels(entry.fields.levels),
      title: entry.fields.name,
    };
  });

  return jobs;
};

/**
 * Resolves nested levels Entry fields from contentful
 *
 * @param entries contentful Entry
 * @returns resvoled job levels
 */
export const resolveNestedLevels = (entries: Entry[]): string[] => {
  const resolvedLevels: string[] = entries.map((entry: Entry) => {
    return typeof entry.fields.title === "string"
      ? entry.fields.title
      : undefined;
  });
  return resolvedLevels;
};

/**
 * Resolves nested location Entry fields from contentful
 *
 * @param entries contentful Entry
 * @returns resvoled job locations
 */
export const resolveNestedLocations = (entries: Entry[]): string[] => {
  const resolvedLevels: string[] = entries.map((entry: Entry) => {
    return typeof entry.fields.city === "string"
      ? entry.fields.city
      : undefined;
  });
  return resolvedLevels;
};
