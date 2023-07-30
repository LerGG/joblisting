import { FilterParams, JobEntry } from "../interfaces/interfaces";

export const filterJobs = (filterParams: FilterParams, jobs: JobEntry[]) => {
  // no filter active
  if (
    !filterParams.level &&
    !filterParams.location &&
    !filterParams.department
  ) {
    return jobs;
  }

  const temp_level = filterByArr("levels", filterParams.level, jobs);
  const temp_lvlLoc = filterByArr(
    "locations",
    filterParams.location,
    temp_level
  );
  const temp_lvlLocDep = filterBy(
    "department",
    filterParams.department,
    temp_lvlLoc
  );
  return temp_lvlLocDep;
};

const filterBy = (
  category: string,
  filterBy: string,
  jobs: JobEntry[]
): JobEntry[] => {
  if (!filterBy) {
    return jobs;
  }
  const filteredByParam = jobs.filter((job) => {
    return job[category]?.includes(filterBy);
  });
  return filteredByParam;
};

const filterByArr = (
  category: "locations" | "levels",
  filterBy: string | null,
  jobs: JobEntry[]
) => {
  if (!filterBy) {
    return jobs;
  }
  const filteredJobs: JobEntry[] = [];
  for (const job of jobs) {
    const temp = job[category].findIndex((element: string) =>
      element.includes(filterBy)
    );
    if (temp !== -1) {
      filteredJobs.push(job);
    }
  }
  return filteredJobs;
};
