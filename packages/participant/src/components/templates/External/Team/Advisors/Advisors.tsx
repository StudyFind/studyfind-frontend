import { useColor, useDevice } from "hooks";
import { SimpleGrid } from "@chakra-ui/react";

import TeamMember from "components/templates/External/Home/Team/TeamMember";
import TeamSectionWrapper from "../TeamSectionWrapper";

interface Advisor {
  image: string;
  name: string;
  position: string;
  linkedinURL: string;
}

interface Props {
  advisors: Advisor[];
}

function Board({ advisors }: Props) {
  const { responsive } = useDevice();
  const background = useColor("white", "gray.900");

  return (
    <TeamSectionWrapper id="board" heading="National Advisory Board" background={background}>
      <SimpleGrid columns={responsive([1, 2, 4])} spacingY="40px" marginTop="60px">
        {advisors.map((advisor, i) => (
          <TeamMember key={i} {...advisor} />
        ))}
      </SimpleGrid>
    </TeamSectionWrapper>
  );
}

export default Board;
