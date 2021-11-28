import { useColorModeValue, useDevice } from "hooks";
import { Stack } from "@chakra-ui/react";

import TeamSectionWrapper from "../TeamSectionWrapper";
import CollaborationItem from "./CollaborationItem";

interface Section {
  title: string;
  description: string;
}

interface Collaboration {
  logo: string;
  sections: Section[];
}

interface Props {
  collaborations: Collaboration[];
}

function Collaborations({ collaborations }: Props) {
  const { isPhone } = useDevice();
  const background = useColorModeValue("gray.100", "gray.800");

  return (
    <TeamSectionWrapper id="collaborations" heading="Collaborations" background={background}>
      <Stack
        direction={isPhone ? "column" : "row"}
        spacing="40px"
        justify="center"
        align="center"
        marginTop="60px"
      >
        {collaborations.map((collaboration, i) => (
          <CollaborationItem key={i} {...collaboration} />
        ))}
      </Stack>
    </TeamSectionWrapper>
  );
}

export default Collaborations;
