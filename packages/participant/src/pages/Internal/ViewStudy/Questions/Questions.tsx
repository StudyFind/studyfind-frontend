import { StudyDocumentExtended } from "types/extended";

import TabHeader from "../TabHeader";

import QuestionsEmpty from "./QuestionsEmpty";
import QuestionsList from "./QuestionsList";

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
      <QuestionsList questions={study.questions} />
    </>
  );
}

export default Locations;
