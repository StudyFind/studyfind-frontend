import { ListItem, Text } from "@chakra-ui/react";
import { StudyQuestion } from "@studyfind/types";

interface Props {
  question: StudyQuestion;
}

function QuestionsItem({ question }: Props) {
  return (
    <ListItem marginY="4px">
      <Text paddingLeft="10px">{question.prompt}</Text>
    </ListItem>
  );
}

export default QuestionsItem;
