import { gotham_medium } from "../../fonts/gotham_medium";
import { theme } from "../../theme/theme";
import { Spacer } from "../Basic/Spacer";
import { StyledHeadline2 } from "../Basic/StyledHeadline2";
import JobCard from "./JobCard";
import { StyledJobCards, StyledJobListWrapper } from "./jobs.styles";
import { JobEntry } from "../../interfaces/interfaces";
import JobShowMoreButton from "./JobShowMoreButton";
import { isEmpty } from "../../utils/isEmpty";

interface JobsListProps {
  jobs: JobEntry[];
  handleClick: () => void;
  maxDisplayCount: number;
  displayCount: number;
}

export default function JobList({
  jobs,
  handleClick,
  maxDisplayCount,
  displayCount,
}: JobsListProps) {
  return (
    <StyledJobListWrapper>
      <Spacer space="4" />
      <StyledHeadline2
        textAlign="center"
        color={theme.colors.secondary}
        style={gotham_medium.style}
      >
        Aktuelle Jobangebote
      </StyledHeadline2>
      <Spacer space="2" />
      <StyledJobCards>
        {isEmpty(jobs)
          ? "Deine Suche ergab leider keine offene Stelle!"
          : jobs
              .slice(0, displayCount)
              .map((job: JobEntry, index) => <JobCard job={job} key={index} />)}
      </StyledJobCards>
      <Spacer space="2" />

      {!isEmpty(jobs) && (
        <JobShowMoreButton
          handleClick={handleClick}
          maxDisplayCount={maxDisplayCount}
          displayCount={displayCount}
        />
      )}
    </StyledJobListWrapper>
  );
}
