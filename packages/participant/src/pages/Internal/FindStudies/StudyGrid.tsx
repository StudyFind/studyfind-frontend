import { useRef, useContext } from "react";
import { useDevice } from "hooks";

import { FindStudiesContext } from "./FindStudiesContext";

import { Message } from "components/atoms";
import { Box, SimpleGrid } from "@chakra-ui/react";

import AutoScroll from "./AutoScroll";
import StudyCardSmall from "./StudyCard";

function StudyGrid() {
  const topRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView();
  };

  const { responsive } = useDevice();
  const { filteredStudies } = useContext(FindStudiesContext);

  return filteredStudies.length ? (
    <SimpleGrid spacing="25px" align="flex-start" columns={responsive([1, 2, 2])}>
      <span ref={topRef} />
      {filteredStudies.map((study) => (
        <StudyCardSmall key={study.id} study={study} />
      ))}
      <AutoScroll onClick={scrollToTop} />
    </SimpleGrid>
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
