import { gotham_bold } from "../../fonts/gotham_bold";
import { theme } from "../../theme/theme";
import { Spacer } from "../Basic/Spacer";
import { StyledHeadline1 } from "../Basic/StyledHeadline1";
import { StyledJobCount } from "./jobs.styles";

interface JobSearchHeadProps {
  jobCount: number;
}

export const JobSearchHead = ({ jobCount }: JobSearchHeadProps) => {
  return (
    <>
      <StyledJobCount textAlign="center" color={theme.colors.primary}>
        {jobCount} offene Stellen bei Creditplus
      </StyledJobCount>
      <Spacer space="1" />
      <StyledHeadline1
        color={theme.colors.secondary}
        textAlign="center"
        style={gotham_bold.style}
      >
        Hier beginnt deine Zukunft
      </StyledHeadline1>
    </>
  );
};
