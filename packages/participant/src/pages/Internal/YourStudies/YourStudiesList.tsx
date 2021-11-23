import { Card } from "components/atoms";
import { VStack } from "@chakra-ui/react";

import { Action, StudyFull } from "./types";

import YourStudiesItem from "./YourStudiesItem";

interface Props {
  studies: StudyFull[];
  handleOpen: (studyID: string, action: Action) => void;
}

function YourStudiesList({ studies, handleOpen }: Props) {
  return (
    <VStack spacing="20px">
      <Card width="100%">
        {studies.map((study) => (
          <YourStudiesItem key={study.id} study={study} handleOpen={handleOpen} />
        ))}
      </Card>
    </VStack>
  );
}

export default YourStudiesList;
