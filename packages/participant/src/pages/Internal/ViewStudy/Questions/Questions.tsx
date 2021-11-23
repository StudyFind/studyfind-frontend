import { StudyDocumentExtended } from "types/extended";

import TabHeader from "../TabHeader";

import QuestionsEmpty from "./QuestionsEmpty";
import QuestionsTable from "./QuestionsTable";

interface Props {
  study: StudyDocumentExtended;
}

function Locations({ study }: Props) {
  if (!study?.locations?.length) {
    return <QuestionsEmpty />;
  }

  return (
    <>
      <TabHeader heading="Questions" />
      <QuestionsTable questions={study.questions} />
    </>
  );
}

export default Locations;
