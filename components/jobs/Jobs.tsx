import { ContentWrapper } from "../Basic/ContentWrapper";
import JobList from "./JobList";
import JobSearch from "./JobSearch";
import { JobEntry } from "../../interfaces/interfaces";
import { useShowMore } from "../../hooks/useShowMore";
import { useOpenDropDown } from "../../hooks/useOpenDropDowns";
import { useFilterParameters } from "../../hooks/useFilterParameter";
import { useMemo } from "react";
import { filterJobs } from "../../utils/filterJobs";

interface JobsProps {
  jobs: JobEntry[];
}

export default function Jobs({ jobs }: JobsProps) {
  const [displayCount, handleClickShowMore] = useShowMore(3, 5);
  const departmentDropDown = useOpenDropDown("department");
  const locationDropDown = useOpenDropDown("location");
  const levelDropDown = useOpenDropDown("level");
  const filterParameters = useFilterParameters();
  const [filterParams] = filterParameters;

  const filteredJobs = useMemo(() => {
    return filterJobs(filterParams, jobs);
  }, [filterParams.department, filterParams.level, filterParams.location]);
  return (
    <ContentWrapper>
      <JobSearch
        jobCount={jobs.length}
        locationDropDown={locationDropDown}
        departmentDropDown={departmentDropDown}
        levelDropDown={levelDropDown}
        filterParameters={filterParameters}
      />
      <JobList
        jobs={filteredJobs}
        handleClick={handleClickShowMore}
        maxDisplayCount={filteredJobs.length}
        displayCount={displayCount}
      />
    </ContentWrapper>
  );
}
