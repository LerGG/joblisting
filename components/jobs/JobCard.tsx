import { gotham_book } from "../../fonts/gotham_book";
import { theme } from "../../theme/theme";
import { StyledText } from "../Basic/StyledText";
import {
  StyledArrowUp,
  StyledIconWrapper,
  StyledJobCardContainer,
  StyledJobCardWrapper,
  StyledJobCategory,
  StyledJobTitle,
  StyledLocationWrapper,
  StyledMobileHidden,
  StyledShowPositionWrapper,
} from "./jobs.styles";
import Image from "next/image";
import { JobEntry } from "../../interfaces/interfaces";
import Link from "next/link";

interface JobCardProps {
  job: JobEntry;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <StyledJobCardContainer>
      <Link href="./"></Link>
      <StyledJobCardWrapper>
        <StyledJobCategory>
          <StyledText color={theme.colors.primary} size="15px">
            {job.department}
          </StyledText>
          <StyledShowPositionWrapper>
            <StyledMobileHidden>
              <StyledText color={theme.colors.primary} size="16px">
                Stelle anzeigen
              </StyledText>
            </StyledMobileHidden>
            <StyledArrowUp />
          </StyledShowPositionWrapper>
        </StyledJobCategory>
        <StyledJobTitle>
          <StyledText color={theme.colors.default} size="18px">
            {job.title.length > 86 ? job.title.slice(0, 82) + "..." : job.title}
          </StyledText>
        </StyledJobTitle>
        <StyledLocationWrapper>
          <StyledIconWrapper>
            <Image
              priority
              src="./img/location_icon.svg"
              alt="location icon"
              width={20}
              height={20}
            />
            <StyledText
              color={theme.colors.tertiary}
              size="16px"
              style={gotham_book.style}
            >
              {job?.locations.join(" | ")}
            </StyledText>
          </StyledIconWrapper>
          <StyledIconWrapper>
            <Image
              priority
              src="./img/clock_icon.svg"
              alt="clock icon"
              width={20}
              height={20}
            />
            <StyledText
              color={theme.colors.tertiary}
              size="16px"
              style={gotham_book.style}
            >
              {job.workload}
            </StyledText>
          </StyledIconWrapper>
        </StyledLocationWrapper>
      </StyledJobCardWrapper>
    </StyledJobCardContainer>
  );
}
