import { StudyParticipantReponse, StudyQuestion } from "@studyfind/types";

import { Grid } from "@chakra-ui/react";

import QuestionsCard from "./QuestionsCard";
import QuestionsEmpty from "./QuestionsEmpty";

interface Props {
  questions: StudyQuestion[];
  responses: StudyParticipantReponse[];
}

function Questions({ questions, responses }: Props) {
  if (!questions || questions.length === 0) {
    return <QuestionsEmpty />;
  }

  if (!responses || responses.length === 0) {
    return null;
  }

  return (
    <Grid gap="15px" padding="15px">
      {questions.map((question, i) => (
        <QuestionsCard key={i} question={question} response={responses[i]} />
      ))}
    </Grid>
  );
}

export default Questions;
