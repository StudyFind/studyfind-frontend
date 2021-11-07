import { useColor } from "hooks";

import { VStack } from "@chakra-ui/react";

import TeamSectionWrapper from "../TeamSectionWrapper";
import InternsSection from "./InternsSection";

interface Member {
  image: string;
  name: string;
  position: string;
  linkedinURL?: string;
}

interface Props {
  interns: Member[];
  alumni: Member[];
}

function Interns({ interns, alumni }: Props) {
  const background = useColor("gray.100", "gray.800");

  return (
    <TeamSectionWrapper id="interns" heading="Our Team" background={background}>
      <VStack align="stretch" spacing="60px">
        <InternsSection heading="Current" members={interns} />
        <InternsSection heading="Alumni" members={alumni} />
      </VStack>
    </TeamSectionWrapper>
  );
}

export default Interns;
