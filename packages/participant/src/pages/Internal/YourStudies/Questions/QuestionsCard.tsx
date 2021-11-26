import { useColorModeValue } from "hooks";

import { StudyParticipantReponse, StudyQuestion } from "@studyfind/types";

import { Text } from "@chakra-ui/react";

import Wrapper from "../Shared/Wrapper";

interface Props {
  question: StudyQuestion;
  response: StudyParticipantReponse;
}

function QuestionCard({ question, response }: Props) {
  const questionColor = useColorModeValue("black", "gray.200");
  const responseColor = useColorModeValue("gray.500", "gray.500");

  return (
    <Wrapper>
      <Text color={questionColor} fontWeight="500">
        {question.prompt}
      </Text>
      <Text color={responseColor} fontStyle={response || "italic"}>
        {response || "no response"}
      </Text>
    </Wrapper>
  );
}

export default QuestionCard;
