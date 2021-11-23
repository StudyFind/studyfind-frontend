import { StudyDocumentExtended } from "types/extended";

import TabHeader from "../TabHeader";

import ResourcesEmpty from "./ResourcesEmpty";
import ResourcesList from "./ResourcesList";

interface Props {
  study: StudyDocumentExtended;
}

function Resources({ study }: Props) {
  if (!study?.resources?.length) {
    return <ResourcesEmpty />;
  }

  return (
    <>
      <TabHeader heading="Resources"></TabHeader>
      <ResourcesList resources={study.resources} />
    </>
  );
}

export default Resources;
