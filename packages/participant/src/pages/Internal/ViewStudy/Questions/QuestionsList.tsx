import { OrderedList } from "@chakra-ui/react";
import { StudyQuestion } from "@studyfind/types";

import QuestionItem from "./QuestionsItem";

interface Props {
  questions: StudyQuestion[];
}

function QuestionsList({ questions }: Props) {
  return (
    <OrderedList paddingLeft="10px">
      {questions.map((question, i) => (
        <QuestionItem key={i} question={question} />
      ))}
    </OrderedList>
  );
}

export default QuestionsList;
