import { useContext } from "react";
import { useDevice } from "hooks";

import { FindStudiesContext } from "./FindStudiesContext";

import { Message } from "components/atoms";
import { Box, SimpleGrid } from "@chakra-ui/react";

import StudyCardSmall from "./StudyCard";

interface Props {
  scrollToTop: () => void;
}

function StudyGrid({ scrollToTop }: Props) {
  const { responsive } = useDevice();
  const { filteredStudies } = useContext(FindStudiesContext);

  return filteredStudies.length ? (
    <>
      <SimpleGrid spacing="25px" align="flex-start" columns={responsive([1, 2, 2])}>
        {filteredStudies.map((study) => (
          <StudyCardSmall key={study.id} study={study} />
        ))}
      </SimpleGrid>
    </>
  ) : (
    <Box h="500px">
      <Message
        status="neutral"
        title="Find Studies"
        description="No studies to display. Try changing your search filters for better results!"
        showBackground
      />
    </Box>
  );
}

export default StudyGrid;
