import { ContentContainer } from "../components/Basic/ContentContainer";
import Jobs from "../components/jobs/Jobs";
import { Entry } from "contentful";
import resolveResponse from "contentful-resolve-response";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getEntries } from "../contentful/contentful";
import { cleanContentfulData } from "../utils/cleanContentfulData";

export default function Home({
  jobs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentContainer>
      <Jobs jobs={jobs} />
    </ContentContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const jobs: Entry[] = resolveResponse((await getEntries()).data);
  if (!jobs) {
    return {
      notFound: true,
    };
  }
  const jobsClean = cleanContentfulData(jobs);
  return {
    props: {
      jobs: jobsClean,
    },
    revalidate: 30,
  };
};
